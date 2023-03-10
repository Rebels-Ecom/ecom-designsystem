import React, { forwardRef } from 'react'
import cx from 'classnames'
import { getisErroneousStyle } from '../../../../../helpers/form-helper'
import { TOther } from '../../../../../types/other'
import styles from './input-text.module.css'

type acceptedTypes = 'text' | 'email' | 'tel' | 'password' | 'number'

export interface IInputText {
  id: string
  className?: string
  type?: acceptedTypes
  value?: string
  defaultValue?: string
  onChange?: CallableFunction
  onBlur?: CallableFunction
  placeholder?: string
  disabled?: boolean
  isErroneous?: boolean
  required?: boolean
  other?: TOther
  autocomplete?: string
}

const InputText = forwardRef<HTMLInputElement, IInputText>(
  ({ id, className, type = 'text', value, defaultValue, isErroneous, required, onChange, onBlur, disabled, placeholder, other, autocomplete }, ref) => {
    function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
      if (onChange) {
        onChange(e)
      }
    }

    function handleOnBlur(e: React.FocusEvent<HTMLInputElement>) {
      if (onBlur) {
        onBlur(e)
      }
    }

    return (
      <input
        ref={ref}
        type={type}
        className={cx('body', styles.inputText, getisErroneousStyle(styles, isErroneous), className)}
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        {...other}
      />
    )
  }
)

export { InputText }
