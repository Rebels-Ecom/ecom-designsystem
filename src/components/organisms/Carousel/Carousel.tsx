import { Children, useEffect, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { Icon } from '../../atoms/Icon'

export type CarouselDirection = 'horizontal' | 'vertical'

/** Per-breakpoint navigation settings. */
export interface CarouselBreakpoint {
  /** Number of slides visible per page. */
  perPage?: number
  /** Number of slides advanced per arrow/keyboard step. @default 1 */
  perMove?: number
  /** Hide the arrows at this breakpoint. */
  hideArrows?: boolean
}

/** Per-breakpoint settings. Each cut-in matches Tailwind: `md` = 48rem, `lg` = 64rem. */
export interface CarouselBreakpoints {
  /** From the smallest viewport up. `perPage` @default 1 */
  sm?: CarouselBreakpoint
  /** From `md` (48rem) up. `perPage` @default 2 */
  md?: CarouselBreakpoint
  /** From `lg` (64rem) up. `perPage` @default 4 */
  lg?: CarouselBreakpoint
}

/**
 * Overridable UI strings (accessible names for the built-in controls). Defaults are English so
 * the library carries no baked-in locale; a consumer localises by passing `labels`. Parameterised
 * entries are functions, not templates, so interpolation stays type-safe. See the i18n convention
 * in docs/DEVELOPMENT.md.
 */
export interface CarouselLabels {
  /** Accessible name for the "previous" arrow. @default 'Previous' */
  previous?: string
  /** Accessible name for the "next" arrow. @default 'Next' */
  next?: string
  /** Accessible name for a per-page dot. @default (page, total) => `Go to page ${page} of ${total}` */
  goToPage?: (page: number, total: number) => string
  /** Accessible name for a per-slide dot (`dotPerItem`). @default (slide, total) => `Go to slide ${slide} of ${total}` */
  goToSlide?: (slide: number, total: number) => string
}

const defaultCarouselLabels: Required<CarouselLabels> = {
  previous: 'Previous',
  next: 'Next',
  goToPage: (page, total) => `Go to page ${page} of ${total}`,
  goToSlide: (slide, total) => `Go to slide ${slide} of ${total}`,
}

/** Inline style carrying the responsive slides-per-page + gap custom properties. */
interface CarouselTrackStyle extends CSSProperties {
  '--cs-per-sm': number
  '--cs-per-md': number
  '--cs-per-lg': number
  '--cs-gap': string
}

export interface CarouselProps {
  /** The slides. Wrap each one in `<CarouselItem>` so it picks up the responsive size + snap point. */
  children: ReactNode
  /** Accessible name for the carousel region — required so AT can announce it (4.1.2). */
  ariaLabel: string
  /** Scroll axis. `vertical` needs the track height constrained via `trackClassName`. @default 'horizontal' */
  direction?: CarouselDirection
  /** Responsive slides-per-page + per-move. Defaults: `perPage` sm 1 / md 2 / lg 4, `perMove` 1. */
  breakpoints?: CarouselBreakpoints
  /** Gap between slides (any CSS length). Kept in sync with the slide-width calc. @default '1rem' */
  gap?: string
  /** Leading/trailing space so the neighbouring slides peek (any CSS length). */
  peek?: string
  /** Hide the previous/next arrow buttons at all breakpoints. @default false */
  hideArrows?: boolean
  /** Hide the pagination dots. @default false */
  hidePagination?: boolean
  /** Render one pagination dot per slide instead of one per page. @default false */
  dotPerItem?: boolean
  /** Lighter, translucent rounded arrows for use over imagery. @default false */
  lightArrows?: boolean
  /** Anchor the arrows to the trailing edge instead of centring them on the cross axis. @default false */
  arrowsBottom?: boolean
  /** Push the arrows out to the very edges of the region. @default false */
  offsetArrows?: boolean
  /** Called with the target slide index after a user navigates via an arrow, dot or key. */
  onNavigation?: (index: number) => void
  /** Called with the active slide index whenever it changes (including swipe/scroll). */
  onSlideChange?: (index: number) => void
  /** Overridable accessible names for the arrows and pagination dots (default English). */
  labels?: CarouselLabels
  /** Extra classes, merged onto the wrapping `<section>` via `cn()`. */
  className?: string
  /** Extra classes, merged onto the scroll track via `cn()` (set a height here for `vertical`). */
  trackClassName?: string
  /** Forwarded to the scroll track `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(value, max))

/** Resolve `perMove` + `hideArrows` for the current viewport (perPage is derived from layout). */
function resolveResponsive(breakpoints?: CarouselBreakpoints): { perMove: number; hideArrows: boolean } {
  let perMove = breakpoints?.sm?.perMove ?? 1
  let hideArrows = breakpoints?.sm?.hideArrows ?? false
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    if (window.matchMedia('(min-width: 48rem)').matches) {
      if (breakpoints?.md?.perMove != null) perMove = breakpoints.md.perMove
      if (breakpoints?.md?.hideArrows != null) hideArrows = breakpoints.md.hideArrows
    }
    if (window.matchMedia('(min-width: 64rem)').matches) {
      if (breakpoints?.lg?.perMove != null) perMove = breakpoints.lg.perMove
      if (breakpoints?.lg?.hideArrows != null) hideArrows = breakpoints.lg.hideArrows
    }
  }
  return { perMove: Math.max(1, perMove), hideArrows }
}

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Dependency-free carousel (organism). Slides live in a CSS scroll-snap track, so touch/trackpad
 * swipe works natively (the legacy Splide dependency is dropped). It matches the legacy capability
 * surface: responsive `perPage`/`perMove`, `direction` (horizontal or vertical), `gap`, peek
 * `padding`, `dotPerItem` pagination, per-breakpoint `hideArrows`, the arrow-placement variants
 * (`arrowsBottom`/`offsetArrows`/`lightArrows`) and the `onNavigation`/`onSlideChange` callbacks — the
 * Splide-only layout internals (`noGrid`, `zeroOffset`) have no equivalent in a flex/scroll-snap model
 * and are dropped. Navigation is slide-index based (measured from real slide offsets) so pagination
 * stays correct even when the last page is partial.
 *
 * Accessibility: the region is a labelled `<section aria-roledescription="carousel">`; a non-drag,
 * single-pointer alternative is always provided via real `<button>` arrows + pagination dots
 * (2.5.1 / 2.5.7), each keyboard-operable (2.1.1) with a visible `focus-visible` ring and a 44px/24px
 * target. The scroll track is focusable and moves slide-by-slide with the arrow keys (Home/End jump to
 * the ends). No auto-advance, so nothing needs pausing (2.2.2); smooth scrolling is suppressed under
 * `prefers-reduced-motion` (2.3.3). Arrows/dots appear only when the content overflows. Consumers must
 * supply a meaningful `ariaLabel` and wrap slides in `<CarouselItem>`.
 */
function Carousel({
  children,
  ariaLabel,
  direction = 'horizontal',
  breakpoints,
  gap = '1rem',
  peek,
  hideArrows,
  hidePagination,
  dotPerItem,
  lightArrows,
  arrowsBottom,
  offsetArrows,
  onNavigation,
  onSlideChange,
  labels,
  className,
  trackClassName,
  ref,
}: CarouselProps) {
  const t = { ...defaultCarouselLabels, ...labels }
  const horizontal = direction !== 'vertical'
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [config, setConfig] = useState({ maxIndex: 0, pageCount: 1, visible: 1, perMove: 1, hideArrows: false })

  const childCount = Children.count(children)
  const bpKey = JSON.stringify(breakpoints ?? {})

  // The stride between consecutive slides (slide size + gap), read from real layout so it stays
  // correct across breakpoints, gaps and peek padding (offsets shift uniformly, so the delta is exact).
  const measureStride = (el: HTMLDivElement): number => {
    const slides = el.children
    const first = slides[0] as HTMLElement | undefined
    if (!first) return 1
    if (slides.length > 1) {
      const second = slides[1] as HTMLElement
      const delta = horizontal ? second.offsetLeft - first.offsetLeft : second.offsetTop - first.offsetTop
      if (delta > 0) return delta
    }
    return (horizontal ? first.offsetWidth : first.offsetHeight) || 1
  }

  // Recompute layout-derived state (visible count, max index, page count) plus the responsive
  // perMove / hideArrows. Runs on mount, on resize (ResizeObserver) and on breakpoint changes.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const recompute = () => {
      const count = el.children.length
      const stride = measureStride(el)
      const clientSize = horizontal ? el.clientWidth : el.clientHeight
      const visible = Math.max(1, Math.round(clientSize / stride))
      const maxIndex = Math.max(0, count - visible)
      const pageCount = Math.max(1, Math.ceil(count / visible))
      const responsive = resolveResponsive(breakpoints)
      setConfig({ maxIndex, pageCount, visible, ...responsive })
      setActiveIndex((prev) => Math.min(prev, maxIndex))
    }

    recompute()
    const observer = new ResizeObserver(recompute)
    observer.observe(el)
    const queries = ['(min-width: 48rem)', '(min-width: 64rem)'].map((q) => window.matchMedia(q))
    queries.forEach((mql) => mql.addEventListener('change', recompute))
    return () => {
      observer.disconnect()
      queries.forEach((mql) => mql.removeEventListener('change', recompute))
    }
  }, [childCount, horizontal, bpKey])

  // A pending rAF must not fire after unmount.
  useEffect(() => () => cancelAnimationFrame(rafRef.current), [])

  const scrollToIndex = (index: number) => {
    const el = trackRef.current
    if (!el) return
    const target = clamp(index, 0, config.maxIndex)
    const first = el.children[0] as HTMLElement | undefined
    const slide = el.children[target] as HTMLElement | undefined
    if (!first || !slide) return
    const offset = horizontal ? slide.offsetLeft - first.offsetLeft : slide.offsetTop - first.offsetTop
    el.scrollTo({
      [horizontal ? 'left' : 'top']: offset,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  const navigateTo = (index: number) => {
    const target = clamp(index, 0, config.maxIndex)
    scrollToIndex(target)
    onNavigation?.(target)
  }

  const handleScroll = () => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const el = trackRef.current
      if (!el) return
      const stride = measureStride(el)
      const pos = horizontal ? el.scrollLeft : el.scrollTop
      const next = clamp(Math.round(pos / stride), 0, config.maxIndex)
      if (next !== activeIndex) {
        setActiveIndex(next)
        onSlideChange?.(next)
      }
    })
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    // Only when the track itself is focused — never hijack arrow keys inside slide content.
    if (event.target !== event.currentTarget) return
    const nextKey = horizontal ? 'ArrowRight' : 'ArrowDown'
    const prevKey = horizontal ? 'ArrowLeft' : 'ArrowUp'
    if (event.key === nextKey) {
      event.preventDefault()
      navigateTo(activeIndex + config.perMove)
    } else if (event.key === prevKey) {
      event.preventDefault()
      navigateTo(activeIndex - config.perMove)
    } else if (event.key === 'Home') {
      event.preventDefault()
      navigateTo(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      navigateTo(config.maxIndex)
    }
  }

  const trackStyle: CarouselTrackStyle = {
    '--cs-per-sm': breakpoints?.sm?.perPage ?? 1,
    '--cs-per-md': breakpoints?.md?.perPage ?? 2,
    '--cs-per-lg': breakpoints?.lg?.perPage ?? 4,
    '--cs-gap': gap,
    gap,
  }
  if (peek) {
    if (horizontal) {
      trackStyle.paddingInline = peek
      trackStyle.scrollPaddingInline = peek
    } else {
      trackStyle.paddingBlock = peek
      trackStyle.scrollPaddingBlock = peek
    }
  }

  const hasOverflow = config.maxIndex > 0
  const showArrows = hasOverflow && !hideArrows && !config.hideArrows
  const dotCount = dotPerItem ? childCount : config.pageCount
  const showDots = hasOverflow && !hidePagination && dotCount > 1
  const activeDot = dotPerItem
    ? activeIndex
    : activeIndex >= config.maxIndex
      ? config.pageCount - 1
      : Math.floor(activeIndex / config.visible)

  const arrowBase = cn(
    'absolute z-menu-icon flex size-11 items-center justify-center text-text-default',
    'transition-opacity disabled:pointer-events-none disabled:opacity-0',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
    lightArrows && 'rounded-full bg-grey-300/75',
  )
  const prevPlacement = horizontal
    ? cn(
        offsetArrows ? 'left-0' : 'left-2 md:left-4',
        arrowsBottom ? 'bottom-0' : 'top-1/2 -translate-y-1/2',
      )
    : cn('left-1/2 -translate-x-1/2', offsetArrows ? 'top-0' : 'top-2')
  const nextPlacement = horizontal
    ? cn(
        offsetArrows ? 'right-0' : 'right-2 md:right-4',
        arrowsBottom ? 'bottom-0' : 'top-1/2 -translate-y-1/2',
      )
    : cn('left-1/2 -translate-x-1/2', offsetArrows ? 'bottom-0' : 'bottom-2')

  return (
    <section aria-roledescription="carousel" aria-label={ariaLabel} className={cn('relative', className)}>
      <div
        ref={mergeRefs<HTMLDivElement>(trackRef, ref)}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        style={trackStyle}
        // Focusable so keyboard users can scroll the region with the arrow keys (2.1.1) — axe's
        // `scrollable-region-focusable`; the arrow/dot buttons remain the primary non-drag path.
        tabIndex={0}
        role="group"
        aria-label={ariaLabel}
        className={cn(
          // Scrollbar hidden (scrollbar-none) but the region stays scrollable by wheel/touch/keyboard;
          // the focusable track + arrow/dot buttons keep it operable (2.1.1 / 2.5.7), so this is
          // WCAG-safe. The dots convey scroll position/count in the scrollbar's place.
          'flex snap-mandatory scroll-smooth scrollbar-none motion-reduce:scroll-auto',
          horizontal ? 'snap-x overflow-x-auto pb-2' : 'h-full snap-y flex-col overflow-y-auto',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          trackClassName,
        )}
      >
        {children}
      </div>

      {showArrows && (
        <>
          <button
            type="button"
            aria-label={t.previous}
            disabled={activeIndex <= 0}
            onClick={() => navigateTo(activeIndex - config.perMove)}
            className={cn(arrowBase, prevPlacement)}
          >
            <Icon icon={horizontal ? 'icon-chevron-left' : 'icon-chevron-up'} size="large" />
          </button>
          <button
            type="button"
            aria-label={t.next}
            disabled={activeIndex >= config.maxIndex}
            onClick={() => navigateTo(activeIndex + config.perMove)}
            className={cn(arrowBase, nextPlacement)}
          >
            <Icon icon={horizontal ? 'icon-chevron-right' : 'icon-chevron-down'} size="large" />
          </button>
        </>
      )}

      {showDots && (
        <div className="mt-3 flex justify-center gap-1">
          {Array.from({ length: dotCount }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={dotPerItem ? t.goToSlide(index + 1, dotCount) : t.goToPage(index + 1, dotCount)}
              aria-current={index === activeDot ? 'true' : undefined}
              onClick={() => navigateTo(dotPerItem ? index : Math.min(index * config.visible, config.maxIndex))}
              className="flex size-6 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
            >
              <span
                className={cn(
                  'size-2 rounded-full bg-action-primary transition-opacity',
                  index === activeDot ? 'opacity-100' : 'opacity-50',
                )}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

export { Carousel }
