import cx from 'classnames'
import { InlineHelperText } from '../../atoms/messages/inline-helper/inline-helper-text'
import { InputText, Textarea } from '../../atoms'
import { InlineErrorText } from '../../atoms/messages/inline-error/inline-error-text'
import styles from './form-group.module.css'

type TFormElement = React.ReactElement<typeof InputText> | React.ReactElement<typeof Textarea>
export interface IFormGroup {
  label?: string
  formElementId: string
  className?: string
  children: TFormElement
  helperText?: string
  errorText?: string
  requiredText?: string
  labelRightText?: string | React.ReactNode
  isToggleBtnLabel?: boolean
  fullWidth?: boolean
  alignItems?: 'normal' | 'start' | 'center' | 'end'
}

const FormGroup = ({
  label,
  formElementId,
  className,
  children,
  helperText,
  errorText,
  requiredText,
  labelRightText,
  isToggleBtnLabel = false,
  fullWidth,
  alignItems = 'normal',
}: IFormGroup) => {
  return (
    <div className={cx(styles.formGroup, className, fullWidth && styles.fullWidth, styles[alignItems])}>
      {(label || helperText) && (
        <label className={styles.labelWrapper} htmlFor={formElementId}>
          <span
            className={cx(
              'body',
              styles.label,
              helperText && styles.hasHelpText,
              isToggleBtnLabel && styles.isToggleBtnLabel
            )}
          >
            <span>
              {label} {requiredText}
            </span>
            {labelRightText && <span>{labelRightText}</span>}
          </span>
          {helperText && <InlineHelperText className={styles.helperText}>{helperText}</InlineHelperText>}
        </label>
      )}
      <>
        {children}
        {errorText && <InlineErrorText className={styles.errorText}>{errorText}</InlineErrorText>}
      </>
    </div>
  )
}

export { FormGroup }
