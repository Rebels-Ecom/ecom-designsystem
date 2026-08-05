import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, ClipboardEvent, FocusEvent, KeyboardEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'

const ILLEGAL_KEYS = ['-', '+', '.', ',', 'e', 'E']

export interface DebounceInputProps {
  /** Id of the underlying `<input>`, also used to derive the details element's id. */
  quantityInputId: string
  /** Controlled quantity value — resets the internal display when it changes. */
  quantity: string
  /** Sales-unit label rendered beside the field, e.g. the packaging unit. */
  salesUnit: string
  /** Number of items per sales unit, shown in the price detail line. */
  itemNumberPerSalesUnit: number
  /** Formatted total price rendered when the price is shown. */
  totalPrice: string
  /** Disables the input and applies the disabled styling. */
  disabled?: boolean
  /** Upper bound — changes exceeding it are ignored. */
  maxQuantity?: number
  /** When true, hides the price line and shows only the item count. */
  hidePrice?: boolean
  /** Delay before `debouncedEvent` fires (ms). @default 1000 */
  debounceVal?: number
  /** Called with the current value after the debounce elapses. */
  debouncedEvent: (value: string) => void
  /** Suffix text appended to the per-unit price detail. */
  pricePerUnitText?: string
  /** When true, treats the quantity as fixed and snaps the display back before notifying. */
  isGift?: boolean
  /** Accessible name for the quantity field. @default 'Antal' */
  ariaLabel?: string
  /** Extra classes, merged onto the wrapper `<div>` via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<input>`. */
  ref?: Ref<HTMLInputElement>
}

/**
 * Debounced numeric quantity input atom — a native `<input type="number">` paired with a
 * price/unit detail block, notifying the consumer only after typing settles.
 *
 * Accessibility contract: the real number input gets its accessible name from `ariaLabel`
 * (there is no visible `<label>`, so the consumer relies on this default/override) and is tied
 * to the detail text via `aria-describedby`. It draws a `focus-visible` outline ring. Keyboard
 * model: `-`, `+`, `.`, `,`, `e`/`E` are blocked on keydown and paste is prevented (WCAG 3.3.8
 * safe for a quantity field); a blur on an empty field coerces the value to `'0'`. The consumer
 * must supply the controlled `quantity` and a `debouncedEvent` handler to receive changes.
 */
function DebounceInput({
  quantityInputId,
  quantity,
  salesUnit,
  itemNumberPerSalesUnit,
  totalPrice,
  disabled,
  maxQuantity,
  hidePrice,
  debounceVal = 1000,
  debouncedEvent,
  pricePerUnitText,
  isGift,
  ariaLabel = 'Antal',
  className,
  ref,
}: DebounceInputProps) {
  const [value, setValue] = useState(quantity)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    setValue(quantity)
  }, [quantity])

  // A pending debounce must not fire after unmount.
  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  function scheduleDebounced(next: string) {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (next === '') return
      if (isGift) {
        // Gift quantities are fixed — snap the display back before notifying.
        setValue(quantity)
      }
      debouncedEvent(next)
    }, debounceVal)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (maxQuantity !== undefined && Number(event.target.value) > maxQuantity) {
      return
    }
    setValue(event.target.value)
    scheduleDebounced(event.target.value)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    if (event.target.value === '') {
      setValue('0')
      scheduleDebounced('0')
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (ILLEGAL_KEYS.includes(event.key)) {
      event.preventDefault()
    }
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    // Pasted text can carry the characters blocked above ('e', '-', …); a quantity
    // field is not a credential field, so blocking paste here is WCAG-safe (3.3.8).
    event.preventDefault()
  }

  const priceDetail = `${itemNumberPerSalesUnit} styck ${pricePerUnitText ?? ''}`
  const detailsId = `${quantityInputId}-details`

  return (
    <div className={cn('flex items-center justify-start gap-2', className)}>
      <input
        ref={ref}
        id={quantityInputId}
        type="number"
        min="0"
        value={value}
        placeholder="0"
        disabled={disabled}
        aria-label={ariaLabel}
        aria-describedby={detailsId}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        className={cn(
          'h-10 w-13 rounded-xs border border-input-border bg-surface-default text-center font-primary text-body text-text-input',
          'focus:bg-input-bg-focused focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          'enabled:w-16 enabled:pr-0 enabled:pl-1',
          'enabled:[&::-webkit-inner-spin-button]:h-12 enabled:[&::-webkit-inner-spin-button]:opacity-100 enabled:[&::-webkit-outer-spin-button]:h-12 enabled:[&::-webkit-outer-spin-button]:opacity-100',
          'disabled:cursor-default disabled:border-border-disabled disabled:bg-surface-disabled disabled:text-text-subdued',
          'disabled:[&::-webkit-inner-spin-button]:appearance-none disabled:[&::-webkit-outer-spin-button]:appearance-none',
        )}
      />
      <div id={detailsId}>
        <p className="m-0 text-body-s text-text-blue">
          {`x ${salesUnit} (${!hidePrice ? priceDetail.trim() : `${itemNumberPerSalesUnit} styck`})`}
        </p>
        {!hidePrice && (
          <p className="m-0 text-body-s font-bold text-text-default">{`Pris: ${totalPrice} kr`}</p>
        )}
      </div>
    </div>
  )
}

export { DebounceInput }
