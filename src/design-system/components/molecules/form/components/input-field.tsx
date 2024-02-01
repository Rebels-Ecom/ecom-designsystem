import { HTMLInputTypeAttribute, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './input-field.module.css'
import { IUILink, UILink } from '../../../atoms/ui-link/ui-link'
import cx from 'classnames';
import { detectAutofill } from '../../../../../helpers/form-helper';

export interface IInputField {
  name: string;
  label?: string;
  className?: string;
  type: HTMLInputTypeAttribute;
  value?: string | number;
  originalValue?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  readonly?: boolean;
  focusOnRender?: boolean
  /**
   * height of the input. sm = height 2.5rem, md = 3rem
   * @default "md" for mobile
   */
  height?: 'sm' | 'md';
  maxWidth?: string
  onChange?: (newVal: string, name: string) => void
  onControlledChange?: (value: string) => void
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
  validateAutofill?: (name: string) => void;
}

const InputField = ({
  onChange,
  onBlur,
  onControlledChange,
  height,
  ...props
}: IInputField) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist()
      onChange?.(e.target.value, props.name)
      
      onControlledChange?.(e.target.value)
    },
    [props.name, onChange]
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      e.persist()

      onBlur?.(e)
      onControlledChange?.(e.target.value)
    },
    [onBlur]
  )

  const checkForAutofill = async () => {
    if (inputRef?.current) {
      const valueFilled = await detectAutofill(inputRef?.current);

      if (valueFilled) {
        if (inputRef?.current?.value) {
          onChange?.(inputRef?.current?.value, props.name);
          onControlledChange?.(inputRef?.current?.value);
          props.validateAutofill?.(inputRef?.current?.name);
        } else {
          inputRef?.current?.focus();
          props.validateAutofill?.(inputRef?.current?.name);
        }
      } else if (inputRef?.current?.value) {
        onChange?.(inputRef?.current?.value, props.name);
        onControlledChange?.(inputRef?.current?.value);
        props.validateAutofill?.(inputRef?.current?.name);
      }
    }
  }

  useEffect(() => {
    if (props.validateAutofill) {
      checkForAutofill();
    }
  }, [inputRef?.current]);


  return (
    <div className={cx(styles.inputField, props.className)}>
      {props.label && <label className={styles.label}>{props.label}</label>}
      <input
        id={props.name}
        autoComplete='on'
        ref={inputRef}
        data-isinvalid={props.dirty && !props.valid}
        type={props.type}
        name={props.name}
        inputMode={props.type === 'number' ? 'decimal' : undefined}
        placeholder={props.placeholder}
        className={cx(styles.input, {
          [styles[height ?? '']]: height,
        })}
        step="any"
        onChange={handleChange}
        value={props.value ?? props.originalValue}
        min={props.min}
        max={props.max}
        disabled={props.disabled}
        readOnly={props.readonly}
        autoFocus={props.focusOnRender}
        onBlur={handleBlur}
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
