import type { ChangeEvent, FocusEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface InputFileProps {
  id: string
  /** Visible text of the pick-a-file affordance. */
  label: string
  /** Shown next to the label while no file name is available. */
  placeholder: string
  /** Selected file name to display. Display-only — file inputs are uncontrolled. */
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  disabled?: boolean
  required?: boolean
  className?: string
  ref?: Ref<HTMLInputElement>
}

/**
 * File picker with a visually replaced input. The input is hidden with `sr-only` (not the
 * legacy `visibility: hidden`, which removed it from the tab order) so it stays keyboard-
 * focusable — Enter/Space open the native picker (WCAG 2.1.1) and the label carries the
 * accessible name (1.3.1).
 */
function InputFile({
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  disabled,
  required,
  className,
  ref,
}: InputFileProps) {
  return (
    <div className={cn(className)}>
      <input
        ref={ref}
        type="file"
        id={id}
        className="peer sr-only"
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
      />
      <label
        htmlFor={id}
        className={cn(
          'cursor-pointer peer-disabled:cursor-not-allowed',
          'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-action-primary',
        )}
      >
        {/* The legacy button classes (`.button`/`.small`) never existed in the module, so
            the affordance effectively rendered as plain secondary-coloured text — V2 ports
            that effective rendering to stay true to the frozen visual baseline. */}
        <span
          className={cn(
            'rounded bg-action-secondary text-text-on-secondary',
            disabled
              ? 'text-text-on-secondary-disabled'
              : 'hover:text-text-on-secondary-hover',
          )}
        >
          {label}
        </span>
        <span className="ml-2.5">{value ? value : placeholder}</span>
      </label>
    </div>
  )
}

export { InputFile }
