import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { FormGroup } from '../form-group/form-group'
import { IInputText } from '../../atoms/inputs/input-text/input-text'
import { Checkbox, InputText } from '../../atoms'
import styles from './input-password-form-group.module.css'

export interface IInputPasswordFormGroup {
  label: string
  className?: string
  inputProps: IInputText
  helperText?: string
  errorText?: string
  checkboxLabel: string
  labelRightText?: React.ReactNode
  visiblePassword?: boolean
}

const InputPasswordFormGroup = ({
  className,
  label,
  inputProps,
  helperText,
  errorText,
  checkboxLabel,
  labelRightText,
  visiblePassword = false,
}: IInputPasswordFormGroup) => {
  const [showPassword, setShowPassword] = useState<boolean>(visiblePassword)

  useEffect(() => {
    setShowPassword(visiblePassword)
  }, [visiblePassword])

  function handleOnChangeCheckbox(e: React.FormEvent<HTMLInputElement>): void {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <FormGroup
        formElementId={inputProps.id}
        className={className}
        label={label}
        errorText={errorText}
        helperText={helperText}
        labelRightText={labelRightText}
      >
        <InputText {...inputProps} type={showPassword ? 'text' : 'password'} isErroneous={!!errorText} />
      </FormGroup>
      <div className={styles.checkboxWrapper}>
        <Checkbox
          id={`password-checkbox`}
          name="password-checkbox"
          value="password-checkbox"
          checked={showPassword}
          onChange={handleOnChangeCheckbox}
          disabled={inputProps?.disabled}
          aria-controls={inputProps.id}
          aria-expanded={showPassword}
        />
        <label htmlFor={`password-checkbox`} className={cx('body', styles.defaultStyleLabel, inputProps?.disabled && styles.disabled)}>
          {checkboxLabel}
        </label>
      </div>
    </>
  )
}

export { InputPasswordFormGroup }
