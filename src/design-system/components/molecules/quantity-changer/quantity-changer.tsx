import React, { useEffect, useState } from 'react'
import { IconButton } from '../../atoms'
import styles from './quantity-changer.module.css'

export type TQuantityChanger = {
  id: string
  quantity: string
  className?: string
  disabled?: boolean
  onChange?: (value: number) => void
  maxQuantity?: number
}

const QuantityChanger = ({ quantity, disabled = false, onChange, maxQuantity }: TQuantityChanger) => {
  const [val, setVal] = useState<number>(parseInt(quantity) || 0)

  useEffect(() => {
    setVal(parseInt(quantity) || 0)
  }, [quantity])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && (maxQuantity === undefined || value <= maxQuantity)) {
      setVal(value)
      onChange?.(value)
    }
  }

  const handleOnBlur = () => {
    if (val < 0) {
      setVal(0)
      onChange?.(0)
    }
  }

  const handleIncrement = () => {
    if (maxQuantity === undefined || val < maxQuantity) {
      setVal((prev) => prev + 1)
      onChange?.(val + 1)
    }
  }

  const handleDecrement = () => {
    if (val > 0) {
      setVal((prev) => prev - 1)
      onChange?.(val - 1)
    }
  }

  return (
    <div className={styles.quantityChanger} role="group" aria-label="Quantity changer">
      <IconButton
        onClick={handleDecrement}
        size="small"
        icon="icon-minus"
        type="button"
        name="Decrease quantity"
        noBorder
        surface="white"
        disabled={disabled}
        round
      />
      <input
        type="number"
        value={val}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        className={styles.quantityInput}
        aria-label="Current quantity"
        min="0"
        placeholder="0"
        disabled={disabled}
        size={4}
      />
      <IconButton
        size="small"
        onClick={handleIncrement}
        icon="icon-plus"
        type="button"
        name="Increase quantity"
        noBorder
        surface="white"
        round
        disabled={disabled}
      />
    </div>
  )
}

export { QuantityChanger }
