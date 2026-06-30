import {
  cloneElement,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactElement,
  type Ref,
} from 'react'
import { cn } from '../../../lib/cn'

/**
 * Grace period before a hover-out actually closes the tooltip. WCAG 2.2 SC 1.4.13
 * ("hoverable") requires the pointer be able to travel onto the tooltip body. Because
 * the tip is rendered with a small offset gap from the trigger, leaving the trigger
 * fires `mouseleave`; deferring the close lets the pointer reach the tip, where
 * `mouseenter` re-fires and cancels the close.
 */
const CLOSE_GRACE_MS = 150

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left'
export type TooltipAlign = 'start' | 'center' | 'end'
export type TooltipColor = 'black' | 'pink'

export interface ComponentWithTooltipProps {
  /** The trigger element the tooltip describes. */
  element: ReactElement
  /** Tooltip text. When omitted the element is rendered without a tooltip. */
  content?: string
  wrapperClassName?: string
  /** @default 'top' */
  side?: TooltipSide
  /** @default 'center' */
  align?: TooltipAlign
  /** @default 'black' */
  color?: TooltipColor
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

const alignClasses: Record<TooltipSide, Record<TooltipAlign, string>> = {
  top: { start: 'left-0', center: 'left-1/2 -translate-x-1/2', end: 'right-0' },
  bottom: { start: 'left-0', center: 'left-1/2 -translate-x-1/2', end: 'right-0' },
  left: { start: 'top-0', center: 'top-1/2 -translate-y-1/2', end: 'bottom-0' },
  right: { start: 'top-0', center: 'top-1/2 -translate-y-1/2', end: 'bottom-0' },
}

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
  const tooltipId = useId()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Cancel a pending close if we unmount, so we never setState on a gone component.
  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    },
    [],
  )

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

  return (
    <span
      ref={ref}
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
          role="tooltip"
          id={tooltipId}
          className={cn(
            'absolute z-menu-icon flex max-w-64 rounded px-2 py-1.5 text-body-s whitespace-normal',
            colorClasses[color],
            sideClasses[side],
            alignClasses[side][align],
          )}
        >
          {content}
        </span>
      )}
    </span>
  )
}

export { ComponentWithTooltip }
