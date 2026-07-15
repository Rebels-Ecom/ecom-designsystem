import { useId, useState } from 'react'
import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { InputText } from '../../molecules/InputText'

export interface SliderRange {
  /** Lower bound of the selected range. */
  min: number
  /** Upper bound of the selected range. */
  max: number
}

export interface SliderLabels {
  /** Accessible name for the lower (minimum) thumb. @default 'Minimum value' */
  minThumb: string
  /** Accessible name for the upper (maximum) thumb. @default 'Maximum value' */
  maxThumb: string
}

export const defaultSliderLabels: SliderLabels = {
  minThumb: 'Minimum value',
  maxThumb: 'Maximum value',
}

export interface SliderProps {
  /** Lowest selectable value (left end of the track). */
  min: number
  /** Highest selectable value (right end of the track). */
  max: number
  /** Granularity of thumb movement. @default 1 */
  step?: number
  /** Initial value of the lower thumb. @default `min` */
  defaultMinVal?: number
  /** Initial value of the upper thumb. @default `max` */
  defaultMaxVal?: number
  /** Allow the two thumbs to hold the same value (otherwise they stay strictly ordered). @default false */
  allowSameValues?: boolean
  /** Render numeric entry fields above the track, wired two-way to the thumbs. @default false */
  withFields?: boolean
  /** Visible label for the lower field (only shown with `withFields`); also names the lower thumb. */
  minLabel?: string
  /** Visible label for the upper field (only shown with `withFields`); also names the upper thumb. */
  maxLabel?: string
  /** Disable both thumbs and the fields. */
  disabled?: boolean
  /** Reports the selected `{ min, max }` on every change — never changes context (3.2.2). */
  onChange?: (range: SliderRange) => void
  /** Overridable accessible names for the thumbs (English defaults). */
  labels?: Partial<SliderLabels>
  /** Extra classes, merged onto the wrapping `<div>` via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const clamp = (value: number, low: number, high: number) => Math.min(Math.max(value, low), high)

/**
 * Dual-thumb range selector (organism — composes the `InputText` molecule for its optional entry
 * fields). Two overlaid native `<input type="range">` give each thumb `role="slider"` with
 * `aria-valuemin/max/now`, arrow-key operation and value announcement for free (4.1.2 / 2.1.1); each
 * carries an overridable `aria-label` (`labels.minThumb` / `labels.maxThumb`, or the field label) since
 * the thumbs are otherwise unnamed. The thumbs stay strictly ordered unless `allowSameValues`. A visible
 * `focus-visible` ring is drawn on the focused thumb (2.4.7). Thumbs are 16px but rely on the 2.5.8
 * spacing exception (they sit far apart across the track). `onChange` reports the `{ min, max }` range
 * only. Replaces the legacy `react-input-range` dependency and its floating value labels — read the
 * values from the `withFields` inputs instead.
 */
function Slider({
  min,
  max,
  step = 1,
  defaultMinVal,
  defaultMaxVal,
  allowSameValues = false,
  withFields = false,
  minLabel,
  maxLabel,
  disabled,
  onChange,
  labels,
  className,
  ref,
}: SliderProps) {
  const t = { ...defaultSliderLabels, ...labels }
  const fieldId = useId()
  const initial: SliderRange = { min: defaultMinVal ?? min, max: defaultMaxVal ?? max }
  const [value, setValue] = useState<SliderRange>(initial)
  // The field text is tracked separately from the committed range so a value can be typed digit by
  // digit without each keystroke being clamped against the other thumb (which made "50" jump to "100").
  const [minText, setMinText] = useState(String(initial.min))
  const [maxText, setMaxText] = useState(String(initial.max))

  const gap = allowSameValues ? 0 : step

  // Commit a final, ordered range and mirror it into both field texts (used by the thumbs and on blur).
  const commit = (next: SliderRange) => {
    setValue(next)
    setMinText(String(next.min))
    setMaxText(String(next.max))
    onChange?.(next)
  }

  // Thumbs can't produce multi-digit intermediates, so they clamp against the other thumb (no crossing).
  const handleMinThumb = (raw: number) => commit({ min: clamp(raw, min, value.max - gap), max: value.max })
  const handleMaxThumb = (raw: number) => commit({ min: value.min, max: clamp(raw, value.min + gap, max) })

  // Field typing clamps only to the OUTER bounds — never to the other thumb — so partial values stay
  // typable; ordering is reconciled on blur. `onChange` fires only for a validly-ordered range.
  const handleFieldChange = (which: 'min' | 'max', text: string) => {
    const setText = which === 'min' ? setMinText : setMaxText
    if (text === '') {
      setText('')
      return
    }
    const parsed = Number(text)
    if (!Number.isInteger(parsed)) {
      setText(text)
      return
    }
    const clamped = clamp(parsed, min, max)
    setText(String(clamped))
    const next: SliderRange = which === 'min' ? { min: clamped, max: value.max } : { min: value.min, max: clamped }
    setValue(next)
    if (allowSameValues ? next.min <= next.max : next.min < next.max) onChange?.(next)
  }

  // On blur, snap the fields back to a valid, ordered range within bounds.
  const reconcile = () => {
    const rawLo = minText.trim() === '' ? value.min : Number(minText)
    const rawHi = maxText.trim() === '' ? value.max : Number(maxText)
    let lo = clamp(Number.isFinite(rawLo) ? rawLo : value.min, min, max)
    let hi = clamp(Number.isFinite(rawHi) ? rawHi : value.max, min, max)
    if (allowSameValues) {
      if (lo > hi) hi = lo
    } else {
      if (hi <= lo) hi = Math.min(max, lo + step)
      if (hi <= lo) lo = Math.max(min, hi - step)
    }
    commit({ min: lo, max: hi })
  }

  const span = max - min || 1
  const minPct = clamp(((value.min - min) / span) * 100, 0, 100)
  const maxPct = clamp(((value.max - min) / span) * 100, 0, 100)

  const thumbClasses = cn(
    'pointer-events-none absolute left-0 h-4 w-full appearance-none bg-transparent',
    'focus-visible:outline-none',
    // WebKit thumb
    '[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-action-primary',
    'focus-visible:[&::-webkit-slider-thumb]:outline-2 focus-visible:[&::-webkit-slider-thumb]:outline-offset-2 focus-visible:[&::-webkit-slider-thumb]:outline-action-primary',
    'disabled:[&::-webkit-slider-thumb]:cursor-default disabled:[&::-webkit-slider-thumb]:bg-action-primary-disabled',
    // Firefox thumb
    '[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-action-primary',
    'disabled:[&::-moz-range-thumb]:cursor-default disabled:[&::-moz-range-thumb]:bg-action-primary-disabled',
  )

  return (
    <div ref={ref} className={cn('min-w-48 font-primary', className)}>
      {withFields && (
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            {minLabel && (
              <label htmlFor={`${fieldId}-min`} className="text-body-s text-text-subdued">
                {minLabel}
              </label>
            )}
            <InputText
              id={`${fieldId}-min`}
              type="number"
              small
              value={minText}
              min={min.toString()}
              disabled={disabled}
              ariaLabel={minLabel ?? t.minThumb}
              onChange={(event) => handleFieldChange('min', event.target.value)}
              onBlur={reconcile}
            />
          </div>
          <div className="flex flex-col gap-1">
            {maxLabel && (
              <label htmlFor={`${fieldId}-max`} className="text-body-s text-text-subdued">
                {maxLabel}
              </label>
            )}
            <InputText
              id={`${fieldId}-max`}
              type="number"
              small
              value={maxText}
              min={min.toString()}
              disabled={disabled}
              ariaLabel={maxLabel ?? t.maxThumb}
              onChange={(event) => handleFieldChange('max', event.target.value)}
              onBlur={reconcile}
            />
          </div>
        </div>
      )}

      <div className="relative flex h-4 items-center">
        {/* Inactive track */}
        <div className="absolute h-1 w-full rounded-full bg-grey-300" aria-hidden="true" />
        {/* Active segment between the two thumbs */}
        <div
          className={cn('absolute h-1 rounded-full bg-action-primary', disabled && 'bg-action-primary-disabled')}
          style={{ left: `${minPct}%`, width: `${Math.max(0, maxPct - minPct)}%` }}
          aria-hidden="true"
        />
        <input
          type="range"
          className={thumbClasses}
          min={min}
          max={max}
          step={step}
          value={value.min}
          disabled={disabled}
          aria-label={t.minThumb}
          onChange={(event) => handleMinThumb(Number(event.target.value))}
        />
        <input
          type="range"
          className={thumbClasses}
          min={min}
          max={max}
          step={step}
          value={value.max}
          disabled={disabled}
          aria-label={t.maxThumb}
          onChange={(event) => handleMaxThumb(Number(event.target.value))}
        />
      </div>
    </div>
  )
}

export { Slider }
