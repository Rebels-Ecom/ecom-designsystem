import type { ChangeEvent, ClipboardEvent, FocusEvent, KeyboardEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconName } from '../../atoms/Icon'

export type InputTextType = 'text' | 'email' | 'tel' | 'password' | 'number' | 'search'

export interface InputTextProps {
  /** Id of the underlying `<input>`. Wire an external `<label htmlFor>` to it for the accessible name. */
  id: string
  /** Input mode / native type. @default 'text' */
  type?: InputTextType
  /** Controlled value — pair with `onChange`. */
  value?: string
  /** Initial value for uncontrolled use. */
  defaultValue?: string
  /** Placeholder text — a hint, never a substitute for a label (3.3.2). */
  placeholder?: string
  /** Form control name submitted with the value. */
  name?: string
  /** Disables the field and applies the disabled styling. */
  disabled?: boolean
  /** Borderless, grey display styling for read-only-style presentation (does not set `disabled`). */
  disabledNoBorder?: boolean
  /** Renders read-only styling and sets the native `readonly` attribute. */
  readOnly?: boolean
  /** Marks the field as failing validation — styled and exposed via `aria-invalid`. */
  isErroneous?: boolean
  /** Sets the native `required` constraint. */
  required?: boolean
  /** `autocomplete` token so browsers/AT can identify the input purpose (1.3.5). */
  autoComplete?: string
  /** Native `min` attribute (for `type="number"`). */
  min?: string
  /** Decorative icon overlaid at the trailing edge (rendered `aria-hidden`; never the sole meaning). */
  iconRight?: IconName
  /** Stretch the field (and a `number` input) to the full width of its container. @default false */
  fullWidth?: boolean
  /** Compact height on `md` and up. @default false */
  small?: boolean
  /** Centre the text. @default false */
  centered?: boolean
  /** Change handler receiving the native input event. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** Focus handler receiving the native input event. */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  /** Blur handler receiving the native input event. */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  /** Key-down handler — e.g. to block illegal characters in a numeric field. */
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  /** Paste handler — e.g. to reject pasted content in a constrained field. */
  onPaste?: (event: ClipboardEvent<HTMLInputElement>) => void
  /** Accessible name for standalone use. Prefer an external `<label htmlFor>`. */
  ariaLabel?: string
  /** Id of the element describing the field, e.g. an inline error message (3.3.1). */
  ariaDescribedBy?: string
  /** Extra classes, merged onto the `<input>` via `cn()`. */
  className?: string
  /** Extra classes, merged onto the wrapping `<div>` via `cn()`. */
  wrapperClassName?: string
  /** Forwarded to the underlying `<input>`. */
  ref?: Ref<HTMLInputElement>
}

/**
 * Single-line text input (molecule) — a native `<input>` in a relative wrapper that can overlay a
 * decorative trailing `iconRight`. Accessibility: give it a name via an external `<label htmlFor={id}>`
 * or the `ariaLabel` prop (a placeholder is never a label, 3.3.2); the error state sets `aria-invalid`
 * and should point `ariaDescribedBy` at a text message rather than rely on the red border alone
 * (3.3.1 / 1.4.1). Draws a visible `focus-visible` ring over the legacy `outline:none`, and — since
 * form controls don't inherit the document font — sets the brand `font-primary` explicitly. `onChange`
 * only reports; it never changes context on input (3.2.2).
 */
function InputText({
  id,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  name,
  disabled,
  disabledNoBorder,
  readOnly,
  isErroneous,
  required,
  autoComplete,
  min,
  iconRight,
  fullWidth,
  small,
  centered,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onPaste,
  ariaLabel,
  ariaDescribedBy,
  className,
  wrapperClassName,
  ref,
}: InputTextProps) {
  const isNumber = type === 'number'

  return (
    <div className={cn('relative', fullWidth && 'w-full', wrapperClassName)}>
      <input
        ref={ref}
        id={id}
        type={type}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        autoComplete={autoComplete}
        min={min}
        aria-label={ariaLabel}
        aria-invalid={isErroneous || undefined}
        aria-describedby={ariaDescribedBy}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        className={cn(
          'h-12 w-full appearance-none rounded border border-input-border bg-surface-default px-3 py-2 font-primary text-body text-text-input',
          'placeholder:text-text-subdued',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          'read-only:bg-input-bg-readonly',
          'disabled:cursor-default disabled:border-border-disabled disabled:bg-surface-disabled disabled:text-text-subdued',
          small && 'md:h-10',
          centered && 'text-center',
          // number inputs shrink to a spinner-friendly width when enabled (full width when disabled),
          // trim their horizontal padding and keep the native spin buttons visible.
          isNumber &&
            !fullWidth &&
            'enabled:w-16 enabled:pr-0 enabled:pl-1 enabled:[&::-webkit-inner-spin-button]:h-12 enabled:[&::-webkit-inner-spin-button]:opacity-100 enabled:[&::-webkit-outer-spin-button]:h-12 enabled:[&::-webkit-outer-spin-button]:opacity-100 disabled:[&::-webkit-inner-spin-button]:appearance-none disabled:[&::-webkit-outer-spin-button]:appearance-none',
          isErroneous && 'border-border-critical bg-surface-critical-subdued',
          disabledNoBorder && 'border-none bg-grey-300 px-1 py-2 text-grey-900 lg:text-text-subdued',
          className,
        )}
      />
      {iconRight && (
        <Icon
          icon={iconRight}
          className="pointer-events-none absolute top-0 right-4 h-full items-center justify-center"
        />
      )}
    </div>
  )
}

export { InputText }
