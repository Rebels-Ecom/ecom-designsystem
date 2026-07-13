import { useEffect, useState } from 'react'
import type { ChangeEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { IconButton } from '../IconButton'

export interface AddToCartButtonLabels {
  /** Accessible name for the whole control group. @default 'Quantity selector' */
  group: string
  /** Accessible name for the quantity number field. @default 'Quantity' */
  quantity: string
  /** Accessible name for the increment button. @default 'Increase quantity' */
  increase: string
  /** Accessible name for the decrement button. @default 'Decrease quantity' */
  decrease: string
}

const defaultAddToCartButtonLabels: AddToCartButtonLabels = {
  group: 'Quantity selector',
  quantity: 'Quantity',
  increase: 'Increase quantity',
  decrease: 'Decrease quantity',
}

export interface AddToCartButtonProps {
  /** Id for the quantity `<input>` (and the label that names it). */
  id: string
  /** Controlled quantity — `0` shows the add-to-cart button, `>0` shows the stepper. @default 0 */
  quantity?: number
  /** Visible add-to-cart label; it is also the button's accessible name (2.5.3), so it is required. */
  buttonLabel: string
  /** Fires when the add-to-cart button is pressed (the "add" action). */
  onAdd: () => void
  /** Fires whenever the quantity changes via the stepper or field. */
  onChange?: (value: number) => void
  /** Upper bound for the quantity (increment/typing clamps to it). */
  maxQuantity?: number
  /** Disable the whole control. @default false */
  disabled?: boolean
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<AddToCartButtonLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Add-to-cart control (molecule) that morphs between a single add button and a quantity stepper.
 * At quantity `0` it is one real `<button>` whose visible `buttonLabel` is its accessible name
 * (4.1.2 / 2.5.3 — the legacy empty-label + redundant `aria-label` are dropped). Once a quantity is
 * set it becomes a labelled `role="group"` (`labels.group`) holding a decrement {@link IconButton}, a
 * named number `<input>` (a visually-hidden `<label htmlFor>` gives it one accessible name, replacing
 * the legacy conflicting `<label>`+`aria-label` pair, 3.3.1), and an increment {@link IconButton};
 * each control keeps the visible `focus-visible` ring. The legacy Framer scale transitions are dropped
 * as non-essential motion (2.3.3†). Quantity is controlled via `quantity` + `onChange`.
 */
function AddToCartButton({
  id,
  quantity = 0,
  buttonLabel,
  onAdd,
  onChange,
  maxQuantity,
  disabled = false,
  labels,
  className,
  ref,
}: AddToCartButtonProps) {
  const t = { ...defaultAddToCartButtonLabels, ...labels }
  const [value, setValue] = useState<number | ''>(quantity)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setValue(quantity)
  }, [quantity])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value
    if (raw === '') {
      setValue('')
      return
    }
    const parsed = Math.max(0, parseInt(raw, 10) || 0)
    if (maxQuantity === undefined || parsed <= maxQuantity) {
      setValue(parsed)
      onChange?.(parsed)
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (Number(value) <= 0) {
      setValue(0)
      onChange?.(0)
    }
  }

  const handleIncrement = () => {
    const current = typeof value === 'string' ? parseInt(value, 10) || 0 : value
    const next = Math.min(current + 1, maxQuantity ?? current + 1)
    setValue(next)
    onChange?.(next)
  }

  const handleDecrement = () => {
    const current = typeof value === 'string' ? parseInt(value, 10) || 0 : value
    const next = Math.max(current - 1, 0)
    setValue(next)
    onChange?.(next)
  }

  const showAddButton = (value === 0 || value === '') && !isFocused

  return (
    <div
      ref={ref}
      className={cn('my-2 flex h-8 max-w-45 overflow-hidden rounded-3xl bg-action-primary', className)}
    >
      {showAddButton ? (
        <button
          type="button"
          onClick={onAdd}
          disabled={disabled}
          className={cn(
            'flex h-full flex-1 cursor-pointer items-center justify-center px-2 font-primary text-body-s text-text-on-primary',
            'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-text-on-primary',
            'disabled:cursor-not-allowed disabled:opacity-70',
          )}
        >
          {buttonLabel}
        </button>
      ) : (
        <div role="group" aria-label={t.group} className="flex h-full w-full items-center justify-between">
          <IconButton
            type="button"
            icon="icon-minus"
            label={t.decrease}
            size="small"
            onClick={handleDecrement}
            disabled={disabled}
            isTransparent
            noBorder
            round
            className="text-text-on-primary"
          />
          <label htmlFor={id} className="sr-only">
            {t.quantity}
          </label>
          <input
            id={id}
            type="number"
            min="0"
            value={value}
            disabled={disabled}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            className={cn(
              'my-1 h-6 w-12 appearance-none rounded-sm border-0 bg-surface-default text-center font-primary text-body text-text-input',
              'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-action-primary',
              '[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            )}
          />
          <IconButton
            type="button"
            icon="icon-plus"
            label={t.increase}
            size="small"
            onClick={handleIncrement}
            disabled={disabled}
            isTransparent
            noBorder
            round
            className="text-text-on-primary"
          />
        </div>
      )}
    </div>
  )
}

export { AddToCartButton }
