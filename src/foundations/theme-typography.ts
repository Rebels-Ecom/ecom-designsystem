/**
 * Live typography-token extraction for the Storybook type gallery.
 *
 * Like `theme-colors.ts`, this reads the single source of truth —
 * `src/styles/index.css` — as raw text (Vite `?raw`) and parses the `@theme`
 * typography tokens (`--font-*`, `--text-*` with their paired
 * `--*--line-height` modifiers, `--font-weight-*`, `--tracking-*`) at module
 * load, so the gallery reflects any theme edit automatically.
 */
import cssSource from '../styles/index.css?raw'

/** A font-family token, e.g. `font-primary`. */
export interface FontFamily {
  name: string
  cssVar: string
  /** Raw stack, e.g. `'spendrups_primary', Arial, sans-serif`. */
  value: string
}

/** A font-weight token, e.g. `bold`. */
export interface FontWeight {
  name: string
  cssVar: string
  value: string
}

/** A font-size token with its paired line-height (Tailwind `--text-*` modifier). */
export interface TypeToken {
  /** Token name, e.g. `h-xl`, `body`, `cta-l`. */
  name: string
  /** Font-size custom property, e.g. `--text-h-xl`. */
  cssVar: string
  /** Authored size, e.g. `2.5rem`. */
  size: string
  /** Size converted to px (16px root), e.g. `40px`. */
  sizePx?: string
  /** Paired line-height, e.g. `3.25rem` (absent for off-scale tokens). */
  lineHeight?: string
  lineHeightPx?: string
  /** Line-height custom property, e.g. `--text-h-xl--line-height`. */
  lineHeightVar?: string
}

/** A named cluster of type tokens (e.g. `Headings — Mobile`, `Body`). */
export interface TypeGroup {
  name: string
  tokens: TypeToken[]
}

/** A letter-spacing token, e.g. `cta-l`. */
export interface Tracking {
  name: string
  cssVar: string
  value: string
}

const LINE_HEIGHT_SUFFIX = '--line-height'

/** Body of the first `@theme { … }` block (typography lives here, not in `inline`). */
const THEME_BLOCK = cssSource.match(/@theme\s*\{([\s\S]*?)\}/)?.[1] ?? ''

function declarations(prefix: string): Array<{ name: string; value: string }> {
  const pattern = new RegExp(`--${prefix}-([\\w-]+)\\s*:\\s*([^;]+);`, 'g')
  return [...THEME_BLOCK.matchAll(pattern)].map(([, name, value]) => ({
    name,
    value: value.trim(),
  }))
}

/** Convert a `<n>rem` value to px (16px root); undefined for non-rem values. */
function toPx(value: string): string | undefined {
  const match = value.match(/^([\d.]+)rem$/)
  return match ? `${parseFloat(match[1]) * 16}px` : undefined
}

// — Font families & weights — `--font-weight-*` is disambiguated from families.
export const fontFamilies: FontFamily[] = declarations('font')
  .filter(({ name }) => !name.startsWith('weight-'))
  .map(({ name, value }) => ({ name: `font-${name}`, cssVar: `--font-${name}`, value }))

export const fontWeights: FontWeight[] = declarations('font')
  .filter(({ name }) => name.startsWith('weight-'))
  .map(({ name, value }) => ({
    name: name.replace(/^weight-/, ''),
    cssVar: `--font-${name}`,
    value,
  }))

// — Letter spacing —
export const trackings: Tracking[] = declarations('tracking').map(({ name, value }) => ({
  name,
  cssVar: `--tracking-${name}`,
  value,
}))

// — Type scale — sizes paired with their `--*--line-height` modifier.
const typeTokens: TypeToken[] = (() => {
  const sizes: Array<{ name: string; value: string }> = []
  const lineHeights = new Map<string, string>()

  for (const { name, value } of declarations('text')) {
    if (name.endsWith(LINE_HEIGHT_SUFFIX)) {
      lineHeights.set(name.slice(0, -LINE_HEIGHT_SUFFIX.length), value)
    } else {
      sizes.push({ name, value })
    }
  }

  return sizes.map(({ name, value }) => {
    const lineHeight = lineHeights.get(name)
    return {
      name,
      cssVar: `--text-${name}`,
      size: value,
      sizePx: toPx(value),
      lineHeight,
      lineHeightPx: lineHeight ? toPx(lineHeight) : undefined,
      lineHeightVar: lineHeight ? `--text-${name}${LINE_HEIGHT_SUFFIX}` : undefined,
    }
  })
})()

/** Classify a type token by its role. Desktop heading steps carry the `-lg` suffix. */
function typeGroup(name: string): string {
  if (name.startsWith('h-')) {
    return name.endsWith('-lg') ? 'Headings — Desktop' : 'Headings — Mobile'
  }
  if (name.startsWith('body')) return 'Body'
  if (name.startsWith('cta')) return 'CTA Labels'
  if (name.startsWith('tag')) return 'Tag Labels'
  if (name.startsWith('icon')) return 'Icon Sizes'
  return 'Other'
}

const GROUP_ORDER = [
  'Headings — Mobile',
  'Headings — Desktop',
  'Body',
  'CTA Labels',
  'Tag Labels',
  'Icon Sizes',
  'Other',
]

function orderIndex(name: string): number {
  const index = GROUP_ORDER.indexOf(name)
  return index === -1 ? GROUP_ORDER.length : index
}

/** The type scale grouped by role, ordered for display. */
export const typographyGroups: TypeGroup[] = (() => {
  const grouped = new Map<string, TypeToken[]>()
  for (const token of typeTokens) {
    const group = typeGroup(token.name)
    const bucket = grouped.get(group) ?? []
    bucket.push(token)
    grouped.set(group, bucket)
  }
  return [...grouped.entries()]
    .sort(([a], [b]) => orderIndex(a) - orderIndex(b))
    .map(([name, tokens]) => ({ name, tokens }))
})()

/** Total number of type-scale tokens (for the gallery header + tests). */
export const typeTokenCount = typeTokens.length
