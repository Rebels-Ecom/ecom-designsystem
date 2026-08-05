import { useEffect, useState, type ChangeEvent, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { InputText } from '../InputText'

export interface ProductQuantityInputLabels {
  /** Accessible name for the quantity field (it has no visible label). @default 'Quantity' */
  quantity: string
  /** Unit-count word shown in the detail row. @default 'pcs' */
  pieces: string
  /** Price line prefix. @default 'Price:' */
  price: string
  /** Currency suffix on the price line. @default 'kr' */
  currency: string
  /** Multiplier symbol between quantity and sales unit. @default '×' */
  times: string
}

export interface ProductQuantityInputProps {
  /** Id of the quantity `<input>`. */
  quantityInputId: string
  /** Controlled quantity value (string, to allow an empty field). */
  quantity: string
  /** Sales unit label (e.g. "KLI"). */
  salesUnit: string
  /** Items per sales unit, shown in the detail row. */
  itemNumberPerSalesUnit: number
  /** Pre-formatted total price string (e.g. "350,10"). */
  totalPrice: string
  /** Read-only presentation — hides the input and shows the quantity as text. @default false */
  disabled?: boolean
  /** Borderless grey styling for the input (does not disable it). @default false */
  disabledNoBorder?: boolean
  /** Fires on each accepted quantity change (native input event). */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** Upper bound — larger typed values are rejected. */
  maxQuantity?: number
  /** Hide the price line and the per-unit price detail. @default false */
  hidePrice?: boolean
  /** Extra per-unit price text appended to the detail row. */
  pricePerUnitText?: string
  /** Allow negative values (drops the `min="0"` constraint). @default false */
  allowNegative?: boolean
  /** Overridable UI strings (English defaults) — see {@link ProductQuantityInputLabels}. */
  labels?: Partial<ProductQuantityInputLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the quantity `<input>`. */
  ref?: Ref<HTMLInputElement>
}

const defaultProductQuantityInputLabels: ProductQuantityInputLabels = {
  quantity: 'Quantity',
  pieces: 'pcs',
  price: 'Price:',
  currency: 'kr',
  times: '×',
}

/* Characters a quantity field must never accept (sign, decimal separators, exponent). */
const illegalKeys = ['-', '+', '.', ',', 'e', 'E']

/**
 * Quantity stepper with a live price readout (molecule). Composes the {@link InputText} number field
 * (native spinner + brand focus ring) with a detail line and a total-price line. The input carries an
 * `aria-label` (`labels.quantity`) since it has no visible label (3.3.1 / 4.1.2) — legacy shipped it
 * unnamed. `onChange` only reports the value (3.2.2); typing illegal characters or pasting is blocked,
 * and clearing the field settles to "0" on blur. All UI copy is localisable via `labels`.
 */
function ProductQuantityInput({
  quantityInputId,
  quantity,
  salesUnit,
  itemNumberPerSalesUnit,
  totalPrice,
  disabled = false,
  disabledNoBorder = false,
  onChange,
  maxQuantity,
  hidePrice,
  pricePerUnitText,
  allowNegative = false,
  labels,
  className,
  ref,
}: ProductQuantityInputProps) {
  const t = { ...defaultProductQuantityInputLabels, ...labels }
  const [val, setVal] = useState(quantity)

  useEffect(() => {
    setVal(quantity)
  }, [quantity])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (maxQuantity !== undefined && Number(event.target.value) > maxQuantity) return
    if (event.target.value !== '') onChange?.(event)
    setVal(event.target.value)
  }

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setVal('0')
      onChange?.(event)
    }
  }

  const priceDetail = `${itemNumberPerSalesUnit} ${t.pieces} ${pricePerUnitText ?? ''}`.trim()
  const detail = hidePrice ? `${itemNumberPerSalesUnit} ${t.pieces}` : priceDetail

  return (
    <div className={cn('flex items-center justify-start gap-2', className)}>
      {!disabled && (
        <InputText
          ref={ref}
          id={quantityInputId}
          type="number"
          value={val}
          placeholder="0"
          small
          centered
          disabledNoBorder={disabledNoBorder}
          min={allowNegative ? undefined : '0'}
          ariaLabel={t.quantity}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={(event) => {
            if (illegalKeys.includes(event.key)) event.preventDefault()
          }}
          onPaste={(event) => event.preventDefault()}
        />
      )}
      <div>
        <p className="m-0 text-body-s text-text-blue">
          {`${disabled ? val : ''} ${t.times} ${salesUnit} (${detail})`}
        </p>
        {!hidePrice && (
          <p className="m-0 text-body-s font-bold text-text-default">
            {`${t.price} ${totalPrice} ${t.currency}`}
          </p>
        )}
      </div>
    </div>
  )
}

export { ProductQuantityInput }
