import type { ChangeEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface RadioButtonProps {
  /** Id of the underlying `<input>`. Wire an external `<label htmlFor>` to it for the accessible name. */
  id: string
  /** Radio group name — shared across the mutually exclusive options. */
  name: string
  /** Value submitted when this option is selected. */
  value?: string
  /** Controlled selected state — drive it with `onChange`. */
  checked: boolean
  /** Change handler receiving the native input event. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** Disables the input and applies the disabled styling. */
  disabled?: boolean
  /** Marks the field as failing validation — styled and exposed via `aria-invalid`. */
  isErroneous?: boolean
  /** Sets the native `required` constraint. */
  required?: boolean
  /** Accessible name for standalone use. Prefer an external `<label htmlFor>`. */
  ariaLabel?: string
  /** Id of the element describing the field, e.g. an inline error message. */
  ariaDescribedBy?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<input>`. */
  ref?: Ref<HTMLInputElement>
}

/**
 * Native radio input styled via `accent-color`. The legacy module's styles never applied
 * (a broken `&input[type="radio"]` nesting selector), so V2 restores the intended sizing
 * and accent tokens. Group related radios in a `<fieldset>`/`<legend>` (WCAG 1.3.1).
 */
function RadioButton({
  id,
  name,
  value,
  checked,
  onChange,
  disabled,
  isErroneous,
  required,
  ariaLabel,
  ariaDescribedBy,
  className,
  ref,
}: RadioButtonProps) {
  return (
    <input
      ref={ref}
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      required={required}
      aria-invalid={isErroneous || undefined}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={cn(
        // 16×20px visual box (legacy intent). Under WCAG 2.5.8 it relies on the
        // ≥24px-spacing exception — keep neighbouring targets at least 24px apart.
        'm-0 h-4 w-5 accent-action-primary',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        'disabled:cursor-not-allowed',
        isErroneous && 'accent-surface-critical',
        className,
      )}
    />
  )
}

export { RadioButton }
