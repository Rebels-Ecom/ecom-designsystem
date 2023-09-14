import { forwardRef } from 'react'
import cx from 'classnames'
import { getisErroneousStyle } from '../../../../helpers/form-helper'
import { TOther } from '../../../../types/other'
import styles from './textarea.module.css'
export interface ITextarea {
  id: string
  className?: string
  value?: string
  defaultValue?: string
  onChange?: CallableFunction
  placeholder?: string
  /**
   * Sets the height of the text area field
   * @default 5
   */
  rows?: number
  cols?: number
  disabled?: boolean
  isErroneous?: boolean
  required?: boolean
  other?: TOther
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ id, className, value, defaultValue, isErroneous, required, onChange, disabled, rows = 5, cols, placeholder, other }, ref) => {
    function handleOnChange(e: React.FormEvent<HTMLTextAreaElement>) {
      if (onChange) {
        onChange(e)
      }
    }

    return (
      <textarea
        ref={ref}
        className={cx('body', styles.textarea, getisErroneousStyle(styles, isErroneous), className)}
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={handleOnChange}
        disabled={disabled}
        required={required}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        {...other}
      />
    )
  }
)

export { Textarea }
