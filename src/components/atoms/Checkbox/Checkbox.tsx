import type { ChangeEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface CheckboxProps {
  /** Id of the underlying `<input>`. Wire an external `<label htmlFor>` to it for the accessible name. */
  id: string
  /** Form field name submitted with the value. */
  name: string
  /** Value submitted when checked. */
  value?: string
  /** Controlled checked state — drive it with `onChange`. */
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
  /**
   * Id(s) of the element(s) that name the field, for when the label is rich content that can't
   * be a `<label>` (e.g. a heading + metadata). Sets `aria-labelledby`; takes precedence over
   * `ariaLabel` per the ARIA name-computation order.
   */
  ariaLabelledBy?: string
  /** Id of the element describing the field, e.g. an inline error message. */
  ariaDescribedBy?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<input>`. */
  ref?: Ref<HTMLInputElement>
}

/**
 * Checkbox atom — a styled native `<input type="checkbox">`.
 *
 * Accessibility contract: renders a real checkbox, so `aria-checked` and keyboard toggling
 * (Space) come from the browser for free. It draws a `focus-visible` outline ring and, when
 * `isErroneous` is set, exposes `aria-invalid`. It has no built-in label — the consumer must
 * supply the accessible name via an external `<label htmlFor={id}>` (preferred) or `ariaLabel`,
 * wire any error text through `ariaDescribedBy`, and provide `name`/`value` plus the controlled
 * `checked`/`onChange` pair. The 18px box relies on the WCAG 2.5.8 ≥24px-spacing exception.
 */
function Checkbox({
  id,
  name,
  value,
  checked,
  onChange,
  disabled,
  isErroneous,
  required,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  className,
  ref,
}: CheckboxProps) {
  return (
    <input
      ref={ref}
      type="checkbox"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      required={required}
      aria-invalid={isErroneous || undefined}
      aria-label={ariaLabelledBy ? undefined : ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      className={cn(
        // 18px visual box (legacy size). Under WCAG 2.5.8 it relies on the ≥24px-spacing
        // exception — keep neighbouring targets at least 24px apart (center-to-center).
        'relative m-0 size-4.5 cursor-pointer appearance-none rounded border border-border-default bg-surface-default',
        // Checkmark glyph — a rotated half-border box, shown only while checked.
        'after:absolute after:top-px after:left-1.25 after:hidden after:h-3 after:w-1.5 after:rotate-45 after:border-r-2 after:border-b-2 after:border-text-white',
        'checked:border-action-primary checked:bg-action-primary checked:after:inline',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        'disabled:cursor-not-allowed disabled:border-border-disabled disabled:bg-surface-subdued disabled:checked:border-interactive-disabled disabled:checked:bg-interactive-disabled',
        isErroneous &&
          'border-border-critical bg-surface-critical-subdued checked:border-border-critical checked:bg-surface-critical',
        className,
      )}
    />
  )
}

export { Checkbox }
