import React, { forwardRef } from 'react'
import cx from 'classnames'
import { getisErroneousStyle } from '../../../../../helpers/form-helper'
import { TOther } from '../../../../../types/other'
import styles from './input-text.module.css'
import { IIcon, Icon } from '../../icon/icon'

type acceptedTypes = 'text' | 'email' | 'tel' | 'password' | 'number'

export interface IInputText {
  id: string
  className?: string
  wrapperClassName?: string
  type?: acceptedTypes
  value?: string
  defaultValue?: string
  onChange?: CallableFunction
  onFocus?: CallableFunction
  onBlur?: CallableFunction
  placeholder?: string
  disabled?: boolean
  disabledNoBorder?: boolean
  isErroneous?: boolean
  required?: boolean
  readonly?: boolean
  other?: TOther
  autocomplete?: string
  iconRight?: IIcon
  min?: string
  fullWidth?: boolean
}

const InputText = forwardRef<HTMLInputElement, IInputText>(
  (
    {
      id,
      className,
      wrapperClassName,
      type = 'text',
      value,
      defaultValue,
      isErroneous,
      required,
      readonly,
      onChange,
      onBlur,
      disabled,
      disabledNoBorder,
      placeholder,
      other,
      autocomplete,
      iconRight,
      min,
      fullWidth,
    },
    ref
  ) => {
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
      <div className={cx(styles.inputWrapper, wrapperClassName ? wrapperClassName : '', fullWidth ? styles.fullWidth : '')}>
        {iconRight && <Icon className={styles.iconRight} icon={iconRight.icon}></Icon>}
        <input
          ref={ref}
          type={type}
          className={cx('body', styles.inputText, getisErroneousStyle(styles, isErroneous), disabledNoBorder && styles.disabledNoBorder, className)}
          id={id}
          value={value}
          defaultValue={defaultValue}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          readOnly={readonly}
          autoComplete={autocomplete}
          min={min}
          {...other}
        />
      </div>
    )
  }
)

export { InputText }
