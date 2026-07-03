import { useId, type Ref } from 'react'
import { cn } from '../../../lib/cn'

export type LoadingBarValue =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'

export type LoadingBarColor = 'orange' | 'purple'

export interface LoadingBarProps {
  /** Visible label describing what the bar measures — also the meter's accessible name. */
  name: string
  /** Fill level on a 0–12 scale (12 = full). */
  value: LoadingBarValue
  /** Colour of the track/fill token pair. @default 'orange' */
  color?: LoadingBarColor
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const trackClasses: Record<LoadingBarColor, string> = {
  orange: 'bg-bar-bg-orange',
  purple: 'bg-bar-bg-purple',
}

const fillClasses: Record<LoadingBarColor, string> = {
  orange: 'bg-bar-fill-orange',
  purple: 'bg-bar-fill-purple',
}

/** Twelve discrete fill levels on the 0–12 scale. */
const SCALE_MAX = 12

/**
 * A single labelled vertical bar showing a value on a 0–12 scale (e.g. a beer's
 * bitterness/sweetness profile). Exposed as `role="meter"` with its value and range so
 * assistive tech announces "{name}, {value}" (WCAG 4.1.2 / 1.3.1); the coloured fill is
 * decorative (`aria-hidden`). The fill grows in on mount and is suppressed under
 * `prefers-reduced-motion` (2.3.3†).
 *
 * NOTE: the fill/track token pair (`bar-fill-*` on `bar-bg-*`) is a pre-vetted design
 * pairing; its non-text contrast (1.4.11) should be confirmed with design if the bar's
 * level must be distinguishable by sighted users without the label.
 */
function LoadingBar({ name, value, color = 'orange', className, ref }: LoadingBarProps) {
  const labelId = useId()
  const numericValue = Number(value)
  // Data-driven meter fill height (value/12) — a runtime value, not a design constant,
  // so it is set inline rather than via a utility token.
  const fillHeight = `${(numericValue / SCALE_MAX) * 100}%`

  return (
    <div ref={ref} className={cn('relative flex h-full items-end gap-4', className)}>
      <div
        role="meter"
        aria-labelledby={labelId}
        aria-valuemin={0}
        aria-valuemax={SCALE_MAX}
        aria-valuenow={numericValue}
        className={cn('relative h-full min-h-16 w-5 rounded', trackClasses[color])}
      >
        <div
          aria-hidden="true"
          style={{ height: fillHeight }}
          className={cn(
            'absolute bottom-0 box-border w-full origin-bottom rounded',
            'animate-grow motion-reduce:animate-none',
            fillClasses[color],
          )}
        />
      </div>
      <span id={labelId} className="max-w-16 truncate text-body">
        {name}
      </span>
    </div>
  )
}

export { LoadingBar }
