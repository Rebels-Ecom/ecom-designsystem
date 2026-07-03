/**
 * Live color-token extraction for the Storybook palette gallery.
 *
 * This project uses Tailwind v4's CSS-first config — there is no
 * `tailwind.config.ts`. The single source of truth for colors is the
 * `@theme` (primitives) and `@theme inline` (semantic tokens) blocks in
 * `src/styles/index.css`. We import that file as raw text (Vite `?raw`) and
 * parse the `--color-*` declarations at module load, so the gallery reflects
 * any theme edit automatically — no manual list to keep in sync.
 */
import cssSource from '../styles/index.css?raw'

/** A single resolved color token ready for display. */
export interface ColorToken {
  /** Tailwind token name, e.g. `blue-500` or `action-primary`. */
  name: string
  /** Full CSS custom property, e.g. `--color-blue-500`. */
  cssVar: string
  /** Final resolved value (hex / rgb), e.g. `#003e51`. */
  value: string
  /** When the token aliases another token, its name — e.g. `blue-500`. */
  alias?: string
}

/** A named cluster of related tokens (e.g. `Brand`, `Action`). */
export interface ColorGroup {
  name: string
  tokens: ColorToken[]
}

/** A top-level section of the palette (primitives vs. semantic tokens). */
export interface ColorSection {
  name: string
  description: string
  groups: ColorGroup[]
}

/** Matches `--color-<name>: <value>;` declarations inside a `@theme` block. */
const DECLARATION = /(--color-[\w-]+)\s*:\s*([^;]+);/g
/** Matches a lone `var(--token[, fallback])` reference. */
const VAR_REFERENCE = /^var\(\s*(--[\w-]+)\s*(?:,\s*([^)]+))?\)$/

/** Grab the body of the first `@theme { … }` block (no `inline` keyword). */
const PRIMITIVE_BLOCK = extractBlock(/@theme\s*\{([\s\S]*?)\}/)
/** Grab the body of the `@theme inline { … }` block. */
const SEMANTIC_BLOCK = extractBlock(/@theme\s+inline\s*\{([\s\S]*?)\}/)

function extractBlock(pattern: RegExp): string {
  return cssSource.match(pattern)?.[1] ?? ''
}

/**
 * Flat lookup of every default-theme `--color-*` declaration, used to resolve
 * `var()` aliases to their literal value. Deliberately excludes the `.dark`
 * overrides so the gallery always shows the light-theme values.
 */
const RESOLVE_MAP: ReadonlyMap<string, string> = (() => {
  const map = new Map<string, string>()
  for (const block of [PRIMITIVE_BLOCK, SEMANTIC_BLOCK]) {
    for (const [, cssVar, rawValue] of block.matchAll(DECLARATION)) {
      map.set(cssVar, rawValue.trim())
    }
  }
  return map
})()

/** Recursively resolve a raw declaration value to a literal color. */
function resolve(rawValue: string, seen: Set<string> = new Set()): string {
  const value = rawValue.trim()
  const reference = value.match(VAR_REFERENCE)
  if (!reference) return value

  const [, name, fallback] = reference
  if (RESOLVE_MAP.has(name) && !seen.has(name)) {
    seen.add(name)
    return resolve(RESOLVE_MAP.get(name) as string, seen)
  }
  return fallback ? resolve(fallback, seen) : value
}

function toToken(cssVar: string, rawValue: string): ColorToken {
  const reference = rawValue.trim().match(VAR_REFERENCE)
  return {
    name: cssVar.replace(/^--color-/, ''),
    cssVar,
    value: resolve(rawValue),
    alias: reference ? reference[1].replace(/^--color-/, '') : undefined,
  }
}

/** Classify a primitive by hue family. */
function primitiveGroup(name: string): string {
  if (/^(blue|orange)/.test(name)) return 'Brand'
  if (/^grey/.test(name) || name === 'black' || name === 'white') return 'Neutral'
  if (/^(red|green)/.test(name)) return 'Feedback / State'
  if (/^(purple|yellow)/.test(name)) return 'Accent'
  return 'Other'
}

/** Classify a semantic token by its functional prefix. First match wins. */
const SEMANTIC_RULES: ReadonlyArray<readonly [RegExp, string]> = [
  [/^action/, 'Action'],
  [/^interactive/, 'Interactive'],
  [/^text/, 'Text'],
  [/^surface/, 'Surface'],
  [/^border/, 'Border'],
  [/^background/, 'Background'],
  [/^(top-nav|nav)/, 'Navigation'],
  [/^tag/, 'Tags'],
  [/^bar/, 'Loading Bar'],
  [/^input/, 'Inputs'],
  [/^alert/, 'Alerts'],
  [/^icon/, 'Icons'],
  [/^decorative/, 'Decorative'],
]

function semanticGroup(name: string): string {
  for (const [pattern, label] of SEMANTIC_RULES) {
    if (pattern.test(name)) return label
  }
  return 'Other'
}

/** Preferred display order; unlisted groups fall to the end, source order kept within. */
const PRIMITIVE_ORDER = ['Brand', 'Neutral', 'Accent', 'Feedback / State', 'Other']
const SEMANTIC_ORDER = [
  'Action',
  'Interactive',
  'Text',
  'Surface',
  'Border',
  'Background',
  'Navigation',
  'Tags',
  'Alerts',
  'Loading Bar',
  'Inputs',
  'Icons',
  'Decorative',
  'Other',
]

function orderIndex(order: readonly string[], name: string): number {
  const index = order.indexOf(name)
  return index === -1 ? order.length : index
}

/** Parse one `@theme` block into ordered, classified groups. */
function buildGroups(
  block: string,
  classify: (name: string) => string,
  order: readonly string[],
): ColorGroup[] {
  const grouped = new Map<string, ColorToken[]>()
  for (const [, cssVar, rawValue] of block.matchAll(DECLARATION)) {
    const token = toToken(cssVar, rawValue)
    const group = classify(token.name)
    const bucket = grouped.get(group) ?? []
    bucket.push(token)
    grouped.set(group, bucket)
  }

  return [...grouped.entries()]
    .sort(([a], [b]) => orderIndex(order, a) - orderIndex(order, b))
    .map(([name, tokens]) => ({ name, tokens }))
}

/**
 * The full palette, derived from the live theme at module load. The Storybook
 * story maps over this directly — updating `index.css` updates the gallery.
 */
export const colorSections: ColorSection[] = [
  {
    name: 'Primitives',
    description:
      'The raw palette — ramp steps and base hues that every semantic token is built from.',
    groups: buildGroups(PRIMITIVE_BLOCK, primitiveGroup, PRIMITIVE_ORDER),
  },
  {
    name: 'Semantic Tokens',
    description:
      'Role-based tokens mapping primitives to UI intent. Reference these in components, not the primitives.',
    groups: buildGroups(SEMANTIC_BLOCK, semanticGroup, SEMANTIC_ORDER),
  },
]

/** Total number of tokens across all sections (for the gallery header). */
export const colorTokenCount = colorSections.reduce(
  (total, section) =>
    total + section.groups.reduce((sum, group) => sum + group.tokens.length, 0),
  0,
)
