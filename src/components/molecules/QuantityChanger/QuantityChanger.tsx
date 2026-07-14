import { useEffect, useState, type ChangeEvent, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { IconButton } from '../IconButton'

export interface QuantityChangerLabels {
  /** Accessible name for the whole stepper group. @default 'Quantity' */
  group: string
  /** Accessible name for the number field (it has no visible label). @default 'Current quantity' */
  input: string
  /** Accessible name for the decrement button. @default 'Decrease quantity' */
  decrement: string
  /** Accessible name for the increment button. @default 'Increase quantity' */
  increment: string
}

export const defaultQuantityChangerLabels: QuantityChangerLabels = {
  group: 'Quantity',
  input: 'Current quantity',
  decrement: 'Decrease quantity',
  increment: 'Increase quantity',
}

export interface QuantityChangerProps {
  /** Id of the number `<input>`. */
  id: string
  /** Controlled quantity value (string, parsed to an integer). */
  quantity: string
  /** Disable the whole stepper. @default false */
  disabled?: boolean
  /** Fires with the new integer whenever the value changes. */
  onChange?: (value: number) => void
  /** Upper bound — the increment button and larger typed values are blocked past it. */
  maxQuantity?: number
  /** Overridable control names (English defaults) for localisation. */
  labels?: Partial<QuantityChangerLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the group `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Numeric quantity stepper (molecule) — a labelled `role="group"` pairing a `−`/`+`
 * {@link IconButton} pair with a native number field. Each control is independently keyboard-operable
 * with its own focus ring (2.4.7); the icon buttons carry action `aria-label`s and the field carries
 * an `aria-label` since it has no visible label (4.1.2 / 3.3.1). Bounds are enforced both ways —
 * decrement stops at 0, increment (and typed values) stop at `maxQuantity` — and disabled at those
 * edges so the state is exposed to assistive tech, never colour-only. All names default to English and
 * are overridable via `labels`.
 */
function QuantityChanger({
  id,
  quantity,
  disabled = false,
  onChange,
  maxQuantity,
  labels,
  className,
  ref,
}: QuantityChangerProps) {
  const t = { ...defaultQuantityChangerLabels, ...labels }
  const [val, setVal] = useState<number>(() => parseInt(quantity, 10) || 0)

  useEffect(() => {
    setVal(parseInt(quantity, 10) || 0)
  }, [quantity])

  const commit = (next: number) => {
    setVal(next)
    onChange?.(next)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    if (!Number.isNaN(value) && (maxQuantity === undefined || value <= maxQuantity)) commit(value)
  }

  const handleBlur = () => {
    if (val < 0) commit(0)
  }

  const atMax = maxQuantity !== undefined && val >= maxQuantity

  return (
    <div
      ref={ref}
      role="group"
      aria-label={t.group}
      className={cn(
        'inline-flex max-w-45 items-center justify-between rounded-3xl border border-border-grey',
        className,
      )}
    >
      <IconButton
        type="button"
        icon="icon-minus"
        label={t.decrement}
        size="small"
        surface="white"
        noBorder
        round
        disabled={disabled || val <= 0}
        onClick={() => commit(val - 1)}
      />
      <input
        id={id}
        type="number"
        inputMode="numeric"
        value={val}
        min={0}
        max={maxQuantity}
        placeholder="0"
        disabled={disabled}
        aria-label={t.input}
        onChange={handleChange}
        onBlur={handleBlur}
        className={cn(
          'w-12 min-w-0 appearance-none border-0 bg-transparent text-center font-primary text-body text-text-input',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        )}
      />
      <IconButton
        type="button"
        icon="icon-plus"
        label={t.increment}
        size="small"
        surface="white"
        noBorder
        round
        disabled={disabled || atMax}
        onClick={() => commit(val + 1)}
      />
    </div>
  )
}

export { QuantityChanger }
