import type { ChangeEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface SingleSelectOption {
  /** Visible option label (rendered after the group `name`). */
  name: string
  /** Value submitted / reported when the option is chosen. */
  value: string
}

export interface SingleSelectProps {
  /** Id of the underlying `<select>`. Wire an external `<label htmlFor>` to it, or pass `ariaLabel`. */
  id?: string
  /** Group prefix prepended to each option's label (e.g. `Sortera` → "Sortera Pris"). */
  name: string
  /** Selectable options. Renders nothing when empty. */
  options: SingleSelectOption[]
  /** Change handler receiving the native select event. */
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  /** Selects the option at this index (takes precedence over `value`). */
  selectedIndex?: number
  /** Controlled selected value. */
  value?: string
  /** Disables the control and applies the disabled styling. */
  disabled?: boolean
  /** Marks the field as failing validation — exposed via `aria-invalid`. */
  isErroneous?: boolean
  /** Sets the native `required` constraint. */
  required?: boolean
  /** `autocomplete` token so browsers/AT can identify the input purpose (1.3.5). */
  autoComplete?: string
  /** Accessible name when there is no visible `<label htmlFor>`. Strongly recommended (3.3.2). */
  ariaLabel?: string
  /** Id of the element describing the field, e.g. an inline error message. */
  ariaDescribedBy?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<select>`. */
  ref?: Ref<HTMLSelectElement>
}

/**
 * Single-choice dropdown atom — a native `<select>`, so role, keyboard operation and value are
 * free. Provide a name via an external `<label htmlFor={id}>` or `ariaLabel` (3.3.2). Selecting a
 * value only reports `onChange`; it never navigates or submits on its own (3.2.2) — the consumer
 * decides. Draws a `focus-visible` ring in place of the legacy `outline:none`.
 *
 * @deprecated Use `SelectList` instead.
 */
function SingleSelect({
  id,
  name,
  options,
  onChange,
  selectedIndex,
  value,
  disabled,
  isErroneous,
  required,
  autoComplete,
  ariaLabel,
  ariaDescribedBy,
  className,
  ref,
}: SingleSelectProps) {
  if (!Array.isArray(options) || options.length === 0) {
    return null
  }

  const selectedValue =
    selectedIndex !== undefined && options[selectedIndex] ? options[selectedIndex].value : value

  return (
    <div className="relative">
      <select
        ref={ref}
        id={id}
        value={selectedValue}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        aria-label={ariaLabel}
        aria-invalid={isErroneous || undefined}
        aria-describedby={ariaDescribedBy}
        onChange={onChange}
        className={cn(
          'my-2 h-8 cursor-pointer appearance-none rounded-full border-2 border-transparent bg-action-primary px-4 py-1 font-primary text-tag-sm text-text-white',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          'disabled:cursor-not-allowed disabled:bg-action-primary-disabled disabled:text-text-on-primary-disabled',
          className,
        )}
      >
        {options.map((option, i) => (
          <option key={`${id ?? name}_option_${i}`} value={option.value}>
            {name} {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export { SingleSelect }
