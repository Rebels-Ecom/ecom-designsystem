import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, ClipboardEvent, FocusEvent, KeyboardEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'

const ILLEGAL_KEYS = ['-', '+', '.', ',', 'e', 'E']

export interface DebounceInputProps {
  quantityInputId: string
  quantity: string
  salesUnit: string
  itemNumberPerSalesUnit: number
  totalPrice: string
  disabled?: boolean
  maxQuantity?: number
  hidePrice?: boolean
  /** Delay before `debouncedEvent` fires (ms). @default 1000 */
  debounceVal?: number
  debouncedEvent: (value: string) => void
  pricePerUnitText?: string
  isGift?: boolean
  /** Accessible name for the quantity field. @default 'Antal' */
  ariaLabel?: string
  className?: string
  ref?: Ref<HTMLInputElement>
}

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
    if (maxQuantity && Number(event.target.value) > maxQuantity) {
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
