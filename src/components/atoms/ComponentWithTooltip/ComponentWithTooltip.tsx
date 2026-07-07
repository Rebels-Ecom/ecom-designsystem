import {
  cloneElement,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactElement,
  type Ref,
} from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'

/**
 * Grace period before a hover-out actually closes the tooltip. WCAG 2.2 SC 1.4.13
 * ("hoverable") requires the pointer be able to travel onto the tooltip body. Because
 * the tip is rendered with a small offset gap from the trigger, leaving the trigger
 * fires `mouseleave`; deferring the close lets the pointer reach the tip, where
 * `mouseenter` re-fires and cancels the close.
 */
const CLOSE_GRACE_MS = 150

/** Trigger↔tip gap (matches the mb-1/mt-1 anchor) and the viewport safety margin, in px. */
const GAP = 4
const VIEWPORT_MARGIN = 8

// useLayoutEffect on the client so the tip is positioned before paint (never a flash off-screen);
// useEffect on the server to avoid React's "useLayoutEffect does nothing on the server" warning.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left'
export type TooltipAlign = 'start' | 'center' | 'end'
export type TooltipColor = 'black' | 'pink'

export interface ComponentWithTooltipProps {
  /** The trigger element the tooltip describes. */
  element: ReactElement
  /** Tooltip text. When omitted the element is rendered without a tooltip. */
  content?: string
  /** Extra classes for the wrapping `<span>`, merged with the component's own via `cn()`. */
  wrapperClassName?: string
  /** Preferred side; auto-flips to the opposite side if it would overflow the viewport. @default 'top' */
  side?: TooltipSide
  /** @default 'center' */
  align?: TooltipAlign
  /** @default 'black' */
  color?: TooltipColor
  /** Forwarded to the wrapping `<span>`. */
  ref?: Ref<HTMLSpanElement>
}

const colorClasses: Record<TooltipColor, string> = {
  black: 'bg-black text-text-white',
  pink: 'bg-alert-icon-error-bg text-text-default',
}

const sideClasses: Record<TooltipSide, string> = {
  top: 'bottom-full mb-1',
  bottom: 'top-full mt-1',
  left: 'right-full mr-1',
  right: 'left-full ml-1',
}

// Cross-axis anchor only — the centering translate is applied inline so it can compose with the
// viewport-clamp shift (an inline `transform` would otherwise clobber a Tailwind translate class).
const alignAnchor: Record<TooltipSide, Record<TooltipAlign, string>> = {
  top: { start: 'left-0', center: 'left-1/2', end: 'right-0' },
  bottom: { start: 'left-0', center: 'left-1/2', end: 'right-0' },
  left: { start: 'top-0', center: 'top-1/2', end: 'bottom-0' },
  right: { start: 'top-0', center: 'top-1/2', end: 'bottom-0' },
}

const isVertical = (s: TooltipSide): boolean => s === 'top' || s === 'bottom'

/**
 * Wraps a trigger element with an accessible tooltip (atom). The tip opens on hover and on focus
 * (via `onMouseEnter`/`onFocus` on the wrapping `<span>`) and is rendered with `role="tooltip"`
 * and a generated `id`; that id is cloned onto the trigger as `aria-describedby` only while open,
 * so screen readers announce it. Meeting WCAG 2.2 SC 1.4.13, Escape dismisses it immediately and a
 * grace period on close lets the pointer travel onto the hoverable tip. When `content` is empty the
 * bare `element` is returned unwrapped. Consumers must pass a genuinely focusable trigger as
 * `element` so keyboard and screen-reader users can reach the description.
 *
 * Positioning is viewport-aware: `side`/`align` are the *preferred* placement, but on open (and on
 * scroll/resize) the tip is measured and the side is flipped when it lacks room, then shifted along
 * the cross axis to stay clamped inside the viewport — so it is always fully visible. The tip stays a
 * DOM descendant of the wrapper (never portalled) so the hoverable grace period keeps working.
 */
function ComponentWithTooltip({
  element,
  content,
  wrapperClassName,
  side = 'top',
  align = 'center',
  color = 'black',
  ref,
}: ComponentWithTooltipProps) {
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<{ side: TooltipSide; shiftX: number; shiftY: number }>(
    () => ({ side, shiftX: 0, shiftY: 0 }),
  )
  const tooltipId = useId()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const appliedShift = useRef({ x: 0, y: 0 })

  // Cancel a pending close if we unmount, so we never setState on a gone component.
  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    },
    [],
  )

  // Keep the open tip inside the viewport: flip the side when the preferred side lacks room, then
  // shift on the cross axis to clamp within the viewport. Recomputed on open and on scroll/resize.
  useIsomorphicLayoutEffect(() => {
    if (!open) return
    const wrapperEl = wrapperRef.current
    const tipEl = tooltipRef.current
    if (!wrapperEl || !tipEl) return

    const reposition = () => {
      const w = wrapperEl.getBoundingClientRect()
      const t = tipEl.getBoundingClientRect()
      const vw = document.documentElement.clientWidth
      const vh = document.documentElement.clientHeight

      // 1) Flip the main-axis side when the preferred side doesn't fit (kept on the same axis).
      let resolvedSide = side
      if (isVertical(side)) {
        const spaceAbove = w.top
        const spaceBelow = vh - w.bottom
        const need = t.height + GAP + VIEWPORT_MARGIN
        if (side === 'top' && spaceAbove < need && spaceBelow > spaceAbove) resolvedSide = 'bottom'
        else if (side === 'bottom' && spaceBelow < need && spaceAbove > spaceBelow) resolvedSide = 'top'
      } else {
        const spaceLeft = w.left
        const spaceRight = vw - w.right
        const need = t.width + GAP + VIEWPORT_MARGIN
        if (side === 'left' && spaceLeft < need && spaceRight > spaceLeft) resolvedSide = 'right'
        else if (side === 'right' && spaceRight < need && spaceLeft > spaceRight) resolvedSide = 'left'
      }

      // 2) Shift on the cross axis to clamp inside the viewport. Measured from the UNSHIFTED
      //    baseline (subtract the currently-applied shift) so the correction is idempotent and can't
      //    oscillate on scroll/resize.
      let shiftX = 0
      let shiftY = 0
      if (isVertical(side)) {
        const baseLeft = t.left - appliedShift.current.x
        const baseRight = t.right - appliedShift.current.x
        const overLeft = VIEWPORT_MARGIN - baseLeft
        const overRight = baseRight - (vw - VIEWPORT_MARGIN)
        shiftX = overLeft > 0 ? overLeft : overRight > 0 ? -overRight : 0
      } else {
        const baseTop = t.top - appliedShift.current.y
        const baseBottom = t.bottom - appliedShift.current.y
        const overTop = VIEWPORT_MARGIN - baseTop
        const overBottom = baseBottom - (vh - VIEWPORT_MARGIN)
        shiftY = overTop > 0 ? overTop : overBottom > 0 ? -overBottom : 0
      }

      appliedShift.current = { x: shiftX, y: shiftY }
      setPlacement({ side: resolvedSide, shiftX, shiftY })
    }

    reposition()
    window.addEventListener('scroll', reposition, true)
    window.addEventListener('resize', reposition)
    return () => {
      window.removeEventListener('scroll', reposition, true)
      window.removeEventListener('resize', reposition)
    }
  }, [open, side, content])

  if (!content) return element

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  // Deferred close — entering the tooltip body (a descendant of the wrapper) re-fires
  // `mouseenter` -> show(), which clears this timer. See CLOSE_GRACE_MS above (SC 1.4.13).
  const hide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_GRACE_MS)
  }

  // Escape dismisses immediately, without the grace period (SC 1.4.13 "dismissible").
  const dismiss = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Escape') dismiss()
  }

  // Attach the description to the focusable trigger itself so screen readers
  // announce it. aria-describedby is valid on any host element.
  const trigger = cloneElement(element as ReactElement<{ 'aria-describedby'?: string }>, {
    'aria-describedby': open ? tooltipId : undefined,
  })

  const resolvedSide = placement.side
  // Compose the centering translate (only for align='center') with the viewport-clamp shift.
  const baseX = isVertical(resolvedSide) && align === 'center' ? '-50%' : '0px'
  const baseY = !isVertical(resolvedSide) && align === 'center' ? '-50%' : '0px'
  const tooltipTransform = `translate(calc(${baseX} + ${placement.shiftX}px), calc(${baseY} + ${placement.shiftY}px))`

  return (
    <span
      ref={mergeRefs<HTMLSpanElement>(wrapperRef, ref)}
      className={cn('relative inline-flex', wrapperClassName)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onKeyDown={handleKeyDown}
    >
      {trigger}
      {open && (
        <span
          ref={tooltipRef}
          role="tooltip"
          id={tooltipId}
          style={{ transform: tooltipTransform }}
          className={cn(
            'absolute z-menu-icon flex max-w-64 rounded px-2 py-1.5 text-body-s whitespace-normal',
            colorClasses[color],
            sideClasses[resolvedSide],
            alignAnchor[resolvedSide][align],
          )}
        >
          {content}
        </span>
      )}
    </span>
  )
}

export { ComponentWithTooltip }
