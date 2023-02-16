import React, { forwardRef } from 'react'
import cx from 'classnames'
import buttonStyles from '../../button/button.module.css'
import { TOther } from '../../../../../types/other'
import styles from './input-file.module.css'

export interface IInputFile {
  id: string
  className?: string
  value?: string
  label: string
  placeholder: string
  defaultValue?: string
  onChange?: CallableFunction
  onBlur?: CallableFunction
  disabled?: boolean
  required?: boolean
  other?: TOther
}

const InputFile = forwardRef<HTMLInputElement, IInputFile>(
  ({ id, className, value, defaultValue, required, onChange, onBlur, disabled, label, placeholder, other }, ref) => {
    function handleOnChange(e: React.FormEvent<HTMLInputElement>): void {
      if (onChange) {
        onChange(e)
      }
    }

    function handleOnBlur(e: React.FocusEvent<HTMLInputElement>): void {
      if (onBlur) {
        onBlur(e)
      }
    }

    return (
      <div className={cx(className)}>
        <label htmlFor={id} className={styles.labelButton}>
          <span className={cx(buttonStyles.button, buttonStyles.small, buttonStyles.secondary, disabled && buttonStyles.disabled)}>{label}</span>
          <span className={styles.value}>{value ? value : placeholder}</span>
        </label>
        <input
          ref={ref}
          type={'file'}
          className={styles.inputFile}
          id={id}
          value={value}
          defaultValue={defaultValue}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          disabled={disabled}
          required={required}
          {...other}
        />
      </div>
    )
  }
)

export { InputFile }
