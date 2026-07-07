import { test } from '@playwright/test'
import type { APIRequestContext, Browser } from '@playwright/test'
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { visualBaselines } from '../tests/visual/baseline-map'

/**
 * Builds a static review gallery so migrated components can be eyeballed against their
 * frozen legacy baseline EVEN ON A GREEN RUN — Playwright's own report only attaches
 * images on failure, so a pass (diff ≤ maxDiffPixelRatio) leaves nothing to inspect.
 *
 * For every story in `tests/visual/baseline-map.ts` it captures the current V2 render at
 * each mapped viewport, pairs it with the legacy PNG, and emits `visual-review/index.html`
 * with Legacy | Current | Compare (onion-skin slider + difference blend) for each pair.
 * Stories tagged `['visual']` that have no baseline entry are rendered current-only so
 * nothing silently escapes review. The page is dependency-free (blend/opacity are pure CSS).
 *
 * Run: `pnpm visual:review` — see scripts/visual-review.config.ts.
 */

const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 375, height: 667 },
} as const
type Viewport = keyof typeof VIEWPORTS
const ALL_VIEWPORTS = Object.keys(VIEWPORTS) as Viewport[]

const BASE = 'http://localhost:6006'
const ROOT = process.cwd()
const OUT = resolve(ROOT, 'visual-review')
const LEGACY_DIR = resolve(ROOT, 'legacy-snapshots')

type RowNote = 'mapped' | 'no-baseline-viewport' | 'unmapped'

interface Row {
  storyId: string
  viewport: Viewport
  currentFile: string
  legacyFile?: string
  currentDims?: Dims
  legacyDims?: Dims
  note: RowNote
  error?: string
  /** True when this story's component belongs to the batch currently in progress. */
  isCurrent?: boolean
}

interface CurrentBatch {
  /** Human label, e.g. "Batch 9" (empty if it couldn't be parsed). */
  label: string
  /** Lowercased component names in the current batch (e.g. `inlineerror`). */
  names: Set<string>
}

/**
 * Read the current batch's component names from the single source of truth that scaffold-component
 * already updates every batch (`MIGRATION-PROGRESS.md`, Step 9): the `Current Micro-Batch` bullet,
 * which bold-lists the batch's components (e.g. `**InlineError**, **LoadingBars**, …`). Parsed here
 * so the gallery can surface "what I just built" without any extra per-entry annotation. Degrades
 * gracefully to an empty set (no grouping) if the file/line/format ever changes.
 */
function readCurrentBatch(): CurrentBatch {
  try {
    const md = readFileSync(resolve(ROOT, '.claude/docs/MIGRATION-PROGRESS.md'), 'utf8')
    const lines = md.split('\n')
    const start = lines.findIndex((l) => /Current Micro-Batch/i.test(l))
    if (start === -1) return { label: '', names: new Set() }
    // The bullet may wrap across several physical lines — gather until the next bullet/heading/blank.
    const block = [lines[start]]
    for (let i = start + 1; i < lines.length; i++) {
      if (/^\s*-\s/.test(lines[i]) || /^#{1,6}\s/.test(lines[i]) || lines[i].trim() === '') break
      block.push(lines[i])
    }
    const text = block.join(' ')
    const label = text.match(/Batch\s+\d+/i)?.[0] ?? 'Latest batch'
    const names = new Set<string>()
    // Single-word **BoldNames** are the component names; `**Current Micro-Batch**` (has spaces) and
    // prose references like FaqList/ArticleList (not bold) are correctly ignored.
    for (const m of text.matchAll(/\*\*([A-Za-z0-9]+)\*\*/g)) names.add(m[1].toLowerCase())
    return { label, names }
  } catch {
    return { label: '', names: new Set() }
  }
}

/** A story id like `design-system-molecules-inlineerror--visual` carries `-<component>--`. */
function isCurrentStory(storyId: string, names: Set<string>): boolean {
  return [...names].some((name) => storyId.includes(`-${name}--`))
}

interface Dims {
  w: number
  h: number
}

interface StorybookIndex {
  entries: Record<string, { id: string; tags?: string[] }>
}

/** Read a PNG's pixel dimensions straight from the IHDR chunk — no pngjs needed. */
function pngSize(file: string): Dims | undefined {
  try {
    const b = readFileSync(file)
    // 8-byte signature, then IHDR: length(4) + type(4), width@16, height@20 (big-endian).
    return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }
  } catch {
    return undefined
  }
}

async function captureCurrent(browser: Browser, storyId: string, viewport: Viewport): Promise<string> {
  const context = await browser.newContext({ viewport: VIEWPORTS[viewport], deviceScaleFactor: 1 })
  try {
    const page = await context.newPage()
    await page.goto(`${BASE}/iframe.html?id=${storyId}&viewMode=story`)
    // Wait for the story's first child (not `#storybook-root` itself — absolutely-positioned
    // stories like Loader leave the root zero-height). Tolerate a story that never paints.
    await page
      .locator('#storybook-root > *')
      .first()
      .waitFor({ state: 'attached', timeout: 10_000 })
      .catch(() => {})
    await page.waitForLoadState('networkidle').catch(() => {})
    const file = `${storyId}-${viewport}.current.png`
    await page.screenshot({ path: resolve(OUT, file) })
    return file
  } finally {
    await context.close()
  }
}

async function findUnmappedVisualIds(request: APIRequestContext, mapped: Set<string>): Promise<string[]> {
  try {
    const res = await request.get(`${BASE}/index.json`)
    if (!res.ok()) return []
    const index = (await res.json()) as StorybookIndex
    return Object.values(index.entries)
      .filter((entry) => entry.tags?.includes('visual') && !mapped.has(entry.id))
      .map((entry) => entry.id)
      .sort()
  } catch {
    return []
  }
}

function esc(value: string): string {
  return value.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] ?? c)
}

function dimsBadge(row: Row): string {
  if (!row.legacyDims || !row.currentDims) return ''
  const mismatch = row.legacyDims.w !== row.currentDims.w || row.legacyDims.h !== row.currentDims.h
  if (!mismatch) return `<span class="badge ok">${row.currentDims.w}×${row.currentDims.h}</span>`
  return `<span class="badge warn">size mismatch — legacy ${row.legacyDims.w}×${row.legacyDims.h} vs current ${row.currentDims.w}×${row.currentDims.h}</span>`
}

function noteBadge(row: Row): string {
  if (row.note === 'unmapped') return `<span class="badge info">no baseline (visual-only)</span>`
  if (row.note === 'no-baseline-viewport') return `<span class="badge info">no legacy baseline for this viewport</span>`
  return `<span class="badge ok">mapped</span>`
}

function renderCard(row: Row, i: number, batchLabel: string): string {
  const header = `
    <div class="card-head">
      <code>${esc(row.storyId)}</code>
      <span class="badge vp">${row.viewport}</span>
      ${row.isCurrent ? `<span class="badge latest">★ ${esc(batchLabel)}</span>` : ''}
      ${noteBadge(row)}
      ${dimsBadge(row)}
      ${row.error ? `<span class="badge err">${esc(row.error)}</span>` : ''}
    </div>`

  const legacyPane = row.legacyFile
    ? `<figure><figcaption>Legacy baseline</figcaption><div class="frame"><img src="${esc(row.legacyFile)}" alt="legacy ${esc(row.storyId)}"></div></figure>`
    : `<figure><figcaption>Legacy baseline</figcaption><div class="frame empty">none</div></figure>`

  const currentPane = `<figure><figcaption>Current V2</figcaption><div class="frame"><img src="${esc(row.currentFile)}" alt="current ${esc(row.storyId)}"></div></figure>`

  const comparePane = row.legacyFile
    ? `
    <figure class="compare">
      <figcaption>Compare — <label>onion <input type="range" min="0" max="100" value="100" data-op="${i}"></label> <label><input type="checkbox" data-diff="${i}"> difference</label></figcaption>
      <div class="frame stack" id="stack-${i}">
        <img src="${esc(row.legacyFile)}" alt="legacy base">
        <img src="${esc(row.currentFile)}" alt="current overlay" class="overlay" id="overlay-${i}">
      </div>
    </figure>`
    : `<figure><figcaption>Compare</figcaption><div class="frame empty">needs a baseline</div></figure>`

  return `<section class="card${row.isCurrent ? ' current' : ''}" data-current="${row.isCurrent ? 'true' : 'false'}" data-story="${esc(row.storyId.toLowerCase())}">${header}<div class="panes">${legacyPane}${currentPane}${comparePane}</div></section>`
}

function renderHtml(rows: Row[], batch: CurrentBatch): string {
  const mapped = rows.filter((r) => r.note !== 'unmapped').length
  const unmapped = rows.filter((r) => r.note === 'unmapped').length
  const mismatches = rows.filter(
    (r) => r.legacyDims && r.currentDims && (r.legacyDims.w !== r.currentDims.w || r.legacyDims.h !== r.currentDims.h),
  ).length

  // Surface the batch you just built first: current-batch frames on top, everything else below.
  const currentRows = rows.filter((r) => r.isCurrent)
  const restRows = rows.filter((r) => !r.isCurrent)
  const ordered = [...currentRows, ...restRows]
  const cardHtml = ordered.map((row, i) => renderCard(row, i, batch.label))

  const groups: string[] = []
  if (currentRows.length) {
    groups.push(
      `<h2 class="group-head">★ Latest — ${esc(batch.label || 'current batch')} <span class="count">${currentRows.length} frame(s)</span></h2>`,
      ...cardHtml.slice(0, currentRows.length),
    )
  }
  if (restRows.length) {
    groups.push(
      `<h2 class="group-head muted">Earlier batches <span class="count">${restRows.length} frame(s)</span></h2>`,
      ...cardHtml.slice(currentRows.length),
    )
  }
  const cards = groups.join('\n')

  const currentControl = currentRows.length
    ? `<label class="ctl"><input type="checkbox" id="current-only"> ${esc(batch.label || 'Current batch')} only</label>`
    : ''

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Visual review gallery</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 14px/1.5 -apple-system, Segoe UI, Roboto, sans-serif; background: #14171a; color: #e6e9ec; }
  header { position: sticky; top: 0; z-index: 5; padding: 16px 24px; background: #0e1113ee; backdrop-filter: blur(6px); border-bottom: 1px solid #2a2f34; }
  header h1 { margin: 0 0 4px; font-size: 16px; }
  header p { margin: 0; color: #9aa4ad; font-size: 13px; }
  main { padding: 24px; display: flex; flex-direction: column; gap: 24px; }
  .card { border: 1px solid #2a2f34; border-radius: 10px; overflow: hidden; background: #1b1f23; }
  .card-head { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 12px 16px; border-bottom: 1px solid #2a2f34; }
  .card-head code { font-size: 13px; color: #cfe3ff; }
  .badge { font-size: 11px; padding: 2px 8px; border-radius: 999px; border: 1px solid transparent; white-space: nowrap; }
  .badge.ok { background: #10331f; color: #7ee2a8; }
  .badge.info { background: #10283b; color: #86c5f0; }
  .badge.warn { background: #3b2c10; color: #f0cf86; }
  .badge.err { background: #3b1414; color: #ff9a9a; }
  .badge.vp { background: #262c31; color: #b7c2cc; }
  .panes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #2a2f34; }
  figure { margin: 0; background: #1b1f23; padding: 12px; display: flex; flex-direction: column; gap: 8px; }
  figcaption { font-size: 12px; color: #9aa4ad; display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  figcaption label { display: inline-flex; gap: 6px; align-items: center; color: #cdd6de; }
  .frame { position: relative; overflow: auto; border-radius: 6px; background-color: #fff;
    background-image: linear-gradient(45deg,#e9e9e9 25%,transparent 25%),linear-gradient(-45deg,#e9e9e9 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#e9e9e9 75%),linear-gradient(-45deg,transparent 75%,#e9e9e9 75%);
    background-size: 16px 16px; background-position: 0 0,0 8px,8px -8px,-8px 0; }
  .frame.empty { display: grid; place-items: center; min-height: 120px; color: #8892a0; background: #14171a; }
  .frame img { display: block; max-width: 100%; height: auto; }
  .frame.stack img { }
  .frame.stack .overlay { position: absolute; inset: 0; }
  .frame.stack .overlay.diff { mix-blend-mode: difference; }
  .badge.latest { background: #123b1c; color: #8ff0b0; border-color: #2c5a38; }
  .controls { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-top: 10px; }
  .controls input[type=search] { min-width: 260px; padding: 6px 10px; border-radius: 8px; font: inherit;
    background: #0e1113; border: 1px solid #2a2f34; color: #e6e9ec; }
  .controls .ctl { display: inline-flex; gap: 6px; align-items: center; color: #cdd6de; font-size: 13px; user-select: none; }
  .group-head { margin: 0; font-size: 13px; font-weight: 600; letter-spacing: .02em; color: #cfe3ff; }
  .group-head.muted { color: #9aa4ad; }
  .group-head .count { font-weight: 400; color: #9aa4ad; }
  .card.current { border-color: #3c5a2f; box-shadow: inset 3px 0 0 #7ee2a8; }
  .card.hidden { display: none; }
  body.current-only .card[data-current="false"], body.current-only .group-head.muted { display: none; }
  @media (max-width: 1000px) { .panes { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<header>
  <h1>Visual review gallery</h1>
  <p>${rows.length} frame(s) — ${mapped} mapped, ${unmapped} visual-only (no baseline)${mismatches ? ` · ${mismatches} size mismatch` : ''}${currentRows.length ? ` · ${currentRows.length} in ${esc(batch.label || 'current batch')}` : ''}. Compare pane: drag <em>onion</em> to crossfade current over legacy; tick <em>difference</em> to highlight changed pixels (matching areas turn black).</p>
  <div class="controls">
    <input type="search" id="filter" placeholder="Filter by component / story id…" autocomplete="off" spellcheck="false">
    ${currentControl}
  </div>
</header>
<main>
${cards}
</main>
<script>
  document.querySelectorAll('input[data-op]').forEach((el) => {
    el.addEventListener('input', () => {
      const overlay = document.getElementById('overlay-' + el.dataset.op)
      if (overlay) overlay.style.opacity = String(Number(el.value) / 100)
    })
  })
  document.querySelectorAll('input[data-diff]').forEach((el) => {
    el.addEventListener('change', () => {
      const overlay = document.getElementById('overlay-' + el.dataset.diff)
      if (overlay) overlay.classList.toggle('diff', el.checked)
    })
  })
  // Live filter by component / story id.
  const filter = document.getElementById('filter')
  if (filter) {
    filter.addEventListener('input', () => {
      const q = filter.value.trim().toLowerCase()
      document.querySelectorAll('.card').forEach((card) => {
        card.classList.toggle('hidden', !!q && !card.dataset.story.includes(q))
      })
    })
  }
  // "Current batch only" toggle.
  const currentOnly = document.getElementById('current-only')
  if (currentOnly) {
    currentOnly.addEventListener('change', () => {
      document.body.classList.toggle('current-only', currentOnly.checked)
    })
  }
</script>
</body>
</html>
`
}

test('generate visual review gallery', async ({ browser, request }) => {
  test.setTimeout(180_000)

  rmSync(OUT, { recursive: true, force: true })
  mkdirSync(OUT, { recursive: true })

  const rows: Row[] = []
  const mappedIds = new Set(visualBaselines.map((b) => b.storyId))
  const batch = readCurrentBatch()

  for (const { storyId, legacyBaseline, viewports } of visualBaselines) {
    const wanted = viewports ?? ALL_VIEWPORTS
    for (const viewport of ALL_VIEWPORTS) {
      const row: Row = { storyId, viewport, currentFile: '', note: 'mapped' }
      try {
        row.currentFile = await captureCurrent(browser, storyId, viewport)
        row.currentDims = pngSize(resolve(OUT, row.currentFile))

        const legacySrc = resolve(LEGACY_DIR, `${legacyBaseline}-${viewport}.png`)
        // A viewport dropped from `viewports` (or simply missing) has no comparable baseline.
        if (wanted.includes(viewport) && existsSync(legacySrc)) {
          const legacyFile = `${storyId}-${viewport}.legacy.png`
          copyFileSync(legacySrc, resolve(OUT, legacyFile))
          row.legacyFile = legacyFile
          row.legacyDims = pngSize(resolve(OUT, legacyFile))
        } else {
          row.note = 'no-baseline-viewport'
        }
      } catch (err) {
        row.error = err instanceof Error ? err.message : String(err)
      }
      rows.push(row)
    }
  }

  // Stories tagged ['visual'] that aren't in the baseline map (e.g. Icon, ExpandableWrapper)
  // — rendered current-only so nothing with a Visual story escapes review.
  const unmappedIds = await findUnmappedVisualIds(request, mappedIds)
  for (const storyId of unmappedIds) {
    for (const viewport of ALL_VIEWPORTS) {
      const row: Row = { storyId, viewport, currentFile: '', note: 'unmapped' }
      try {
        row.currentFile = await captureCurrent(browser, storyId, viewport)
        row.currentDims = pngSize(resolve(OUT, row.currentFile))
      } catch (err) {
        row.error = err instanceof Error ? err.message : String(err)
      }
      rows.push(row)
    }
  }

  for (const row of rows) row.isCurrent = isCurrentStory(row.storyId, batch.names)

  const htmlPath = resolve(OUT, 'index.html')
  writeFileSync(htmlPath, renderHtml(rows, batch))

  const currentCount = rows.filter((r) => r.isCurrent).length
  console.log(
    `\n  Visual review gallery ready${batch.label ? ` (${currentCount} frame(s) in ${batch.label})` : ''}:\n  file://${htmlPath}\n`,
  )
})
