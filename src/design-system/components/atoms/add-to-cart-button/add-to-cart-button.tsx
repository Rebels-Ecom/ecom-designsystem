import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IconButton } from '../icon-button/icon-button'
import styles from './add-to-cart-button.module.css'

export type TAddToCartButton = {
  id: string
  quantity: number
  hasBeenAdded: boolean
  onClick: CallableFunction
  buttonLabel: string
  className?: string
  disabled?: boolean
  onChange?: (value: number) => void
  maxQuantity?: number
}

const AddToCartButton = ({
  id,
  quantity = 0,
  hasBeenAdded,
  onClick,
  buttonLabel = '',
  disabled = false,
  onChange = () => {},
  maxQuantity,
}: TAddToCartButton) => {
  const [val, setVal] = useState<number>(quantity)

  useEffect(() => {
    setVal(quantity)
  }, [quantity])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value) || 0)
    if (maxQuantity === undefined || value <= maxQuantity) {
      setVal(value)
      onChange(value)
    }
  }

  const handleOnClick = () => {
    if (!disabled) {
      onClick()
    }
  }

  const handleOnBlur = () => {
    if (val < 0) {
      setVal(0)
      onChange(0)
    }
  }

  const handleIncrement = () => {
    if (maxQuantity === undefined || val < maxQuantity) {
      setVal((prev) => Math.min(prev + 1, maxQuantity || prev + 1))
      onChange(val + 1)
    }
  }

  const handleDecrement = () => {
    if (val > 0) {
      setVal((prev) => Math.max(prev - 1, 0))
      onChange(val - 1)
    }
  }

  return (
    <AnimatePresence>
      <div className={styles.addToCartButton} role="group" aria-label="Quantity changer">
        {!hasBeenAdded && (
          <motion.button
            key="add-button"
            className={styles.button}
            onClick={handleOnClick}
            initial={{ scale: 0.2 }}
            animate={{ scale: val === 0 ? 1 : 0 }}
            exit={{ scale: 0.2 }}
            disabled={disabled}
            aria-label="Add item to cart"
          >
            {buttonLabel}
          </motion.button>
        )}
        {hasBeenAdded && (
          <motion.div
            key="quantity-controls"
            className={styles.inputWrapper}
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: val > 0 ? 1 : 0, opacity: val > 0 ? 1 : 0 }}
            exit={{ scale: 0.2, opacity: 0 }}
          >
            <IconButton
              onClick={handleDecrement}
              className={styles.decrement}
              size="small"
              icon="icon-minus"
              type="button"
              name="Decrease quantity"
              noBorder
              surface="white"
              disabled={disabled}
              round
            />
            <label htmlFor={id} className={styles.visuallyHidden}>
              Current quantity
            </label>
            <input
              id={id}
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
              aria-live="polite"
            />
            <IconButton
              className={styles.increment}
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
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}

export { AddToCartButton }
