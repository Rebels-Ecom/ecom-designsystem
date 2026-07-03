import type { ChangeEvent, FocusEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface TextareaProps {
  /** Id of the underlying `<textarea>`. Wire an external `<label htmlFor>` to it for the accessible name. */
  id: string
  /** Form control name submitted with the value. */
  name?: string
  /** Controlled value — pair with `onChange`. */
  value?: string
  /** Initial value for uncontrolled use. */
  defaultValue?: string
  /** Placeholder text — a hint, never a substitute for a label (3.3.2). */
  placeholder?: string
  /** Visible rows (native height hint). @default 5 */
  rows?: number
  /** Visible columns (native width hint). */
  cols?: number
  /** Disables the field and applies the disabled styling. */
  disabled?: boolean
  /** Renders read-only styling and sets the native `readonly` attribute. */
  readOnly?: boolean
  /** Marks the field as failing validation — styled and exposed via `aria-invalid`. */
  isErroneous?: boolean
  /** Sets the native `required` constraint. */
  required?: boolean
  /** Maximum character count. */
  maxLength?: number
  /** `autocomplete` token so browsers/AT can identify the input purpose (1.3.5). */
  autoComplete?: string
  /** Change handler receiving the native textarea event. */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  /** Blur handler receiving the native textarea event. */
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void
  /** Accessible name for standalone use. Prefer an external `<label htmlFor>`. */
  ariaLabel?: string
  /** Id of the element describing the field, e.g. an inline error message (3.3.1). */
  ariaDescribedBy?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<textarea>`. */
  ref?: Ref<HTMLTextAreaElement>
}

/**
 * Multi-line text input atom — a native `<textarea>`. Accessibility: pair it with an external
 * `<label htmlFor={id}>` (or pass `ariaLabel`) for its name (3.3.2); the error state sets
 * `aria-invalid` and should point `ariaDescribedBy` at a text message, not rely on the red border
 * alone (3.3.1 / 1.4.1). Draws a visible `focus-visible` ring in place of the legacy `outline:none`.
 * Form controls don't inherit the document font, so the brand `font-primary` is set explicitly.
 */
function Textarea({
  id,
  name,
  value,
  defaultValue,
  placeholder,
  rows = 5,
  cols,
  disabled,
  readOnly,
  isErroneous,
  required,
  maxLength,
  autoComplete,
  onChange,
  onBlur,
  ariaLabel,
  ariaDescribedBy,
  className,
  ref,
}: TextareaProps) {
  return (
    <textarea
      ref={ref}
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      maxLength={maxLength}
      autoComplete={autoComplete}
      aria-invalid={isErroneous || undefined}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      onChange={onChange}
      onBlur={onBlur}
      className={cn(
        'min-h-20 w-full resize-none appearance-none rounded border border-input-border bg-surface-default px-3 py-2 font-primary text-body text-text-input',
        'placeholder:text-text-subdued',
        'focus:bg-input-bg-focused focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        'read-only:bg-input-bg-readonly',
        'disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-surface-disabled disabled:text-text-subdued',
        isErroneous && 'border-border-critical bg-surface-critical-subdued',
        className,
      )}
    />
  )
}

export { Textarea }
