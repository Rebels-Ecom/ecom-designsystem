import React, { useEffect, useState } from 'react'
import { InputText } from '../../atoms'
import styles from './product-quantity-input.module.css'

export interface IProductQuantityInput {
  className?: string
  quantityInputId: string
  quantity: string
  salesUnit: string
  itemNumberPerSalesUnit: number
  totalPrice: string
  disabled?: boolean
  disabledNoBorder?: boolean
  onChange?: CallableFunction
  maxQuantity?: number
  hidePrice?: boolean
  pricePerUnitText?: string
}

const ProductQuantityInput = ({
  className,
  quantity,
  quantityInputId,
  salesUnit,
  itemNumberPerSalesUnit,
  totalPrice,
  disabled = false,
  disabledNoBorder = false,
  onChange,
  maxQuantity,
  hidePrice,
  pricePerUnitText,
}: IProductQuantityInput) => {
  const [val, setVal] = useState(quantity)

  useEffect(() => {
    setVal(quantity)
  }, [quantity])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxQuantity && Number(e.target.value) > maxQuantity) {
      return
    }
    if (e.target.value !== '') {
      onChange?.(e)
    }
    setVal(e.target.value)
  }

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setVal('0')
      onChange?.(e)
    }
  }

  const priceDetail = `${itemNumberPerSalesUnit} styck ${pricePerUnitText ?? ''}`

  return (
    <div className={`${styles.inputQuantityWrapper} ${className ? className : ''}`}>
      {!disabled && (
        <InputText
          id={quantityInputId}
          value={val}
          placeholder="0"
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          disabled={disabled}
          disabledNoBorder={disabledNoBorder}
          type="number"
          className={styles.quantityInputField}
          min="0"
          other={{
            onKeyDown: (e: React.KeyboardEvent) => {
              const illegalChars = ['-', '+', '.', ',', 'e', 'E']
              if (illegalChars.find((p) => p === e.key)) {
                e.preventDefault()
              }
            },
            onPaste: (e: React.ClipboardEvent) => {
              e.preventDefault()
            },
          }}
        />
      )}
      <div>
        <p className={`${styles.textQuantity} bodyS`}>{`${disabled ? val : ''} x ${salesUnit} (${
          !hidePrice ? priceDetail.trim() : `${itemNumberPerSalesUnit} styck`
        })`}</p>
        {!hidePrice && <p className={`${styles.textPrice} bodyS fontBold`}>{`Pris: ${totalPrice} kr`}</p>}
      </div>
    </div>
  )
}

export { ProductQuantityInput }
