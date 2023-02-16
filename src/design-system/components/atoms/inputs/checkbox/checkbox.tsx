import { forwardRef } from 'react'
import cx from 'classnames'
import { getisErroneousStyle } from '../../../../../helpers/form-helper'
import { TOther } from '../../../../../types/other'
import styles from './checkbox.module.css'

export interface ICheckbox {
  id: string
  name: string
  className?: string
  value?: string
  defaultValue?: string
  checked: boolean
  onChange?: CallableFunction
  disabled?: boolean
  isErroneous?: boolean
  required?: boolean
  other?: TOther
}

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>((props, ref) => {
  const { id, name, value, defaultValue, checked, className, isErroneous, required, onChange, disabled, other } = props

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <input
      ref={ref}
      type={'checkbox'}
      className={cx('body', styles.checkbox, getisErroneousStyle(styles, isErroneous), className)}
      id={id}
      name={name}
      onChange={handleOnChange}
      value={value}
      defaultValue={defaultValue}
      checked={checked}
      disabled={disabled}
      required={required}
      {...other}
    />
  )
})

export { Checkbox }
