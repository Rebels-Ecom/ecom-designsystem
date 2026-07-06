import { useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Breakpoints = Record<Breakpoint, number>

/**
 * Min-width breakpoints in `px`, matching the design system's responsive scale
 * (`sm` 576 · `md` 768 · `lg` 1024 · `xl` 1440). `xl` (1440px = 90rem) aligns with the CSS
 * `--breakpoint-3xl` token and the `isBigScreen` media query.
 */
export const breakpoints: Breakpoints = { xs: 0, sm: 576, md: 768, lg: 1024, xl: 1440 }

/**
 * Subscribe to a CSS media query and re-render when it changes. Implemented with
 * `useSyncExternalStore` (no `react-responsive` dependency) so it is concurrent-safe and SSR-safe:
 * the server snapshot resolves to `false` and hydrates to the real match on the client.
 *
 * @param query a media-query string, e.g. `'(min-width: 48em)'`
 * @returns whether the query currently matches
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

export interface BreakpointFlags {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isBigScreen: boolean
}

/**
 * Responsive helper hook — the modern replacement for the legacy `mediaQueryHelper`. Returns
 * mutually exclusive booleans for the four size bands: mobile (`<48em`), tablet (`48–63.938em`),
 * desktop (`64–89.938em`), and big screen (`≥90em`). Prefer rendering responsively with CSS where
 * possible; use this only when layout must branch in JS.
 */
export function useBreakpoint(): BreakpointFlags {
  const isMobile = useMediaQuery('(max-width: 47.938em)')
  const isTablet = useMediaQuery('(min-width: 48em) and (max-width: 63.938em)')
  const isDesktop = useMediaQuery('(min-width: 64em) and (max-width: 89.938em)')
  const isBigScreen = useMediaQuery('(min-width: 90em)')
  return { isMobile, isTablet, isDesktop, isBigScreen }
}

/** `children` may be a node, or a render-prop receiving whether the query currently matches. */
type ResponsiveChildren = ReactNode | ((matches: boolean) => ReactNode)

function render(children: ResponsiveChildren, matches: boolean): ReactNode {
  if (typeof children === 'function') return children(matches)
  return matches ? children : null
}

export interface AboveProps {
  /** Render (or report a match) at or above this breakpoint's min-width. */
  breakpoint: Breakpoint
  /** Content to reveal, or a render-prop receiving the match state. */
  children: ResponsiveChildren
}

/**
 * Renders `children` only at or above `breakpoint` (min-width). With a render-prop child, always
 * renders and passes the current match state instead. Conditionally rendering removes the content
 * from the DOM — never hide content essential to the task behind a breakpoint (1.4.10).
 *
 * @deprecated Prefer the `useBreakpoint` / `useMediaQuery` hooks, or CSS responsive utilities.
 */
export function Above({ breakpoint, children }: AboveProps): ReactNode {
  const matches = useMediaQuery(`(min-width: ${breakpoints[breakpoint]}px)`)
  return render(children, matches)
}

export interface BelowProps {
  /** Render (or report a match) strictly below this breakpoint's min-width. */
  breakpoint: Breakpoint
  /** Content to reveal, or a render-prop receiving the match state. */
  children: ResponsiveChildren
}

/**
 * Renders `children` only below `breakpoint` (max-width). With a render-prop child, always renders
 * and passes the current match state instead. Conditionally rendering removes the content from the
 * DOM — never hide content essential to the task behind a breakpoint (1.4.10).
 *
 * @deprecated Prefer the `useBreakpoint` / `useMediaQuery` hooks, or CSS responsive utilities.
 */
export function Below({ breakpoint, children }: BelowProps): ReactNode {
  const matches = useMediaQuery(`(max-width: ${breakpoints[breakpoint] - 1}px)`)
  return render(children, matches)
}

export interface BetweenProps {
  /** `[min, max]` breakpoints — matches from `min`'s min-width up to `max`'s min-width (inclusive). */
  betweenBreakpoints: [Breakpoint, Breakpoint]
  /** Content to reveal, or a render-prop receiving the match state. */
  children: ResponsiveChildren
}

/**
 * Renders `children` only within the `[min, max]` breakpoint range. With a render-prop child,
 * always renders and passes the current match state instead. Conditionally rendering removes the
 * content from the DOM — never hide content essential to the task behind a breakpoint (1.4.10).
 */
export function Between({ betweenBreakpoints: [min, max], children }: BetweenProps): ReactNode {
  const matches = useMediaQuery(
    `(min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max]}px)`,
  )
  return render(children, matches)
}
