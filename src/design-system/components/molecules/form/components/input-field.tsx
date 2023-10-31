import { FocusEventHandler, HTMLInputTypeAttribute, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './input-field.module.css'
import { IUILink, UILink } from '../../../atoms/ui-link/ui-link'

export interface IInputField {
  name: string
  label?: string
  className?: string
  // rightIcon?: React.ReactElement;
  // leftIcon?: React.ReactElement;
  // iconIgnoresFocus?: boolean;
  type: HTMLInputTypeAttribute
  value?: string | number
  originalValue?: string
  placeholder?: string
  min?: number
  max?: number
  // rules?: IRules;
  // serverValidatedRules?: IServerValidatedRules;
  disabled?: boolean
  readonly?: boolean
  // variant?: myEpirocInputVariantsType;
  // useClearButton?: boolean;
  focusOnRender?: boolean
  // hideValidationIcon?: true;
  // disableValidationOnBlur?: true;
  // maxLength?: number;
  /**
   * size of the input. big = height 48px, small = height 36px, mini = height 24px.
   * @default "big" for mobile
   * @default "small" for desktop
   */
  // size?: InputSizeType;
  /** option to scroll to input field on focus
   * @default mobile: true, desktop: false
   */
  // scrollToOnFocus?: boolean;
  /** the unit of the inputs value, e.g: "m" or "kg". Will be suffixed to the end of the input */
  // unit?: string;

  /** opt out of errors component, which reserves space in the forms */
  // omitErrors?: boolean;
  maxWidth?: string
  /** whether the input should start in a dirty state, useful when adding new inputs in runtime */
  // startDirty?: boolean;
  /** whether the input should start in a touched state */
  // startTouched?: boolean;
  onChange?: (newVal: string, name: string) => void
  onControlledChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e?: React.MouseEvent | React.KeyboardEvent) => void
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onInput?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  required?: boolean
  valid?: boolean
  error?: string
  dirty?: boolean
  action?: IUILink
}

const InputField = ({ onChange, onBlur, onControlledChange, ...props }: IInputField) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist()

      onChange?.(e.target.value, props.name)
      onControlledChange?.(e)
    },
    [props.name, onChange]
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      e.persist()

      onBlur?.(e)
      onControlledChange?.(e)
    },
    [onBlur]
  )

  return (
    <div className={styles.inputField}>
      {props.label && <label className={styles.label}>{props.label}</label>}
      <input
        data-isinvalid={props.dirty && !props.valid}
        type={props.type}
        name={props.name}
        inputMode={props.type === 'number' ? 'decimal' : undefined}
        placeholder={props.placeholder}
        className={styles.input}
        step="any"
        onChange={handleChange}
        value={props.value ?? props.originalValue}
        min={props.min}
        max={props.max}
        disabled={props.disabled}
        readOnly={props.readonly}
        autoFocus={props.focusOnRender}
        // onKeyPress={props.onKeyPress}
        // onKeyDown={props.onKeyDown}
        // onChangeCapture={handleChange}
        // onClick={handleClick}
        // onInput={props.onInput}
        // onInputCapture={handleChange}
        onBlur={handleBlur}
        // maxLength={props.maxLength}
      />
      <div className={styles.errorWrapper}>
        <motion.label
          className={styles.error}
          initial={{ y: '-100%', opacity: 0 }}
          animate={props.error && !props.valid && props.dirty ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
        >
          {props.error}
        </motion.label>
      </div>
      <div className={styles.linkWrapper}>
        <motion.div className={styles.error} initial={{ y: '-100%', opacity: 0 }} animate={props.action ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}>
          {props.action && <UILink {...props.action} />}
        </motion.div>
      </div>
    </div>
  )
}

export { InputField }
