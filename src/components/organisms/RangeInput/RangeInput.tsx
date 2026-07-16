import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Slider, type SliderLabels, type SliderRange } from '../Slider'

export interface RangeInputProps {
  /**
   * Ascending list of selectable breakpoints (e.g. `[0, 100, 250, 500, 1000]`). The track spans
   * `steps[0]`–`steps[last]`; reported values are snapped to the nearest entry. Must be non-empty.
   */
  steps: number[]
  /** Initial value of the lower thumb. Clamped + snapped to `steps`. @default `steps[0]` */
  defaultMinVal?: number
  /** Initial value of the upper thumb. Clamped + snapped to `steps`. @default `steps[last]` */
  defaultMaxVal?: number
  /** Reports the selected `{ min, max }` (snapped to `steps`) on change — never changes context (3.2.2). */
  onChange?: (range: SliderRange) => void
  /** Suffix appended to the two end labels, e.g. "kr" → "0 kr" … "1000 kr". */
  formatLabel?: string
  /** Render numeric entry fields above the track, wired two-way to the thumbs. @default false */
  withFields?: boolean
  /** Visible label for the lower field (only shown with `withFields`); also names the lower thumb. */
  minLabel?: string
  /** Visible label for the upper field (only shown with `withFields`); also names the upper thumb. */
  maxLabel?: string
  /** Allow the two thumbs to hold the same value (otherwise they stay strictly ordered). @default true */
  allowSameValues?: boolean
  /** Disable both thumbs and the fields. @default false */
  disabled?: boolean
  /** Overridable accessible names for the thumbs (English defaults), forwarded to {@link Slider}. */
  labels?: Partial<SliderLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Stepped dual-thumb range selector (organism) — a thin wrapper over {@link Slider} that snaps to a
 * caller-supplied list of breakpoints and shows the range bounds as end labels. It delegates the two
 * thumbs, the optional entry fields and all accessibility (each thumb is a native `role="slider"` with
 * `aria-valuemin/max/now`, arrow-key operation and a visible focus ring; the fields are labelled number
 * inputs) to `Slider`, so real values — not indices — are announced and typed. The `step` granularity
 * is derived from the smallest gap between consecutive `steps`, and every reported `{ min, max }` is
 * snapped to the nearest breakpoint. Replaces the legacy `rc-slider` dependency and its debounced
 * `onChange` (context-change-free reporting instead). Assumes `steps` is sorted ascending.
 */
function RangeInput({
  steps,
  defaultMinVal,
  defaultMaxVal,
  onChange,
  formatLabel,
  withFields = false,
  minLabel,
  maxLabel,
  allowSameValues = true,
  disabled = false,
  labels,
  className,
  ref,
}: RangeInputProps) {
  if (!steps || steps.length === 0) {
    throw new Error('RangeInput requires a non-empty `steps` array')
  }

  const min = steps[0]
  const max = steps[steps.length - 1]

  // Smallest positive gap between consecutive breakpoints → the thumb/keyboard granularity. Values
  // that land between breakpoints are reconciled by `snap` before they reach the consumer.
  const gaps = steps.slice(1).map((value, index) => value - steps[index]).filter((gap) => gap > 0)
  const step = gaps.length > 0 ? Math.min(...gaps) : 1

  const clamp = (value: number) => Math.max(min, Math.min(max, value))
  const snap = (value: number) =>
    steps.reduce((best, current) => (Math.abs(current - value) < Math.abs(best - value) ? current : best), steps[0])

  const suffix = formatLabel ? ` ${formatLabel}` : ''

  return (
    <div ref={ref} className={cn('min-w-48', className)}>
      <Slider
        min={min}
        max={max}
        step={step}
        defaultMinVal={snap(clamp(defaultMinVal ?? min))}
        defaultMaxVal={snap(clamp(defaultMaxVal ?? max))}
        allowSameValues={allowSameValues}
        withFields={withFields}
        minLabel={minLabel}
        maxLabel={maxLabel}
        disabled={disabled}
        labels={labels}
        onChange={(range) => onChange?.({ min: snap(range.min), max: snap(range.max) })}
      />
      <div className="mt-1 flex justify-between text-body-s text-text-subdued">
        <span>{`${min}${suffix}`}</span>
        <span>{`${max}${suffix}`}</span>
      </div>
    </div>
  )
}

export { RangeInput }
