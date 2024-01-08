import { forwardRef } from 'react'
import cx from 'classnames'
import { TOther } from '../../../../../types/other'
import styles from './radio-button.module.css'

export interface IRadioButton {
  id: string
  name: string
  className?: string
  value?: string
  defaultValue?: string
  onChange?: CallableFunction
  disabled?: boolean
  isErroneous?: boolean
  required?: boolean
  checked: boolean
  other?: TOther
}

const RadioButton = forwardRef<HTMLInputElement, IRadioButton>(
  ({ id, name, value, defaultValue, className, isErroneous, required, onChange, disabled, checked, other }, ref) => {
    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
      if (onChange) {
        onChange(e)
      }
    }

    return (
      <input
        ref={ref}
        type='radio'
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        checked={checked}
        onChange={handleOnChange}
        disabled={disabled}
        required={required}
        className={cx(
          styles.radioButton,
          {[styles.error]: isErroneous },
          className
        )}
        {...other}
      />
    )
  }
)

export { RadioButton }
