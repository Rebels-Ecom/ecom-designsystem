import type { ChangeEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface CheckboxProps {
  id: string
  name: string
  value?: string
  checked: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  /** Marks the field as failing validation — styled and exposed via `aria-invalid`. */
  isErroneous?: boolean
  required?: boolean
  /** Accessible name for standalone use. Prefer an external `<label htmlFor>`. */
  ariaLabel?: string
  /** Id of the element describing the field, e.g. an inline error message. */
  ariaDescribedBy?: string
  className?: string
  ref?: Ref<HTMLInputElement>
}

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
      aria-label={ariaLabel}
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
