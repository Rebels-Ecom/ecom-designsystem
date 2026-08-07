import { useEffect, useId, useRef, useState } from 'react'
import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { Button } from '../Button'
import type { IconName } from '../../atoms/Icon'

export interface MultiSelectOption {
  /** Human-readable label shown in the option row. */
  name: string
  /** Stable value stored in `selectedOptions`. */
  value: string
}

export interface MultiSelectLabels {
  /** Trigger suffix when more than one option is selected. @default (count) => `${count} selected` */
  selectedCount: (count: number) => string
}

export const defaultMultiSelectLabels: MultiSelectLabels = {
  selectedCount: (count) => `${count} selected`,
}

export interface MultiSelectProps {
  /** Optional id; when omitted a stable generated id wires the trigger to its popup. */
  id?: string
  /** Filter name shown on the trigger and used as the option group's accessible name. */
  name: string
  /** Selectable options; when empty the component renders nothing (like legacy). */
  options: MultiSelectOption[]
  /** Values of the currently selected options (controlled). */
  selectedOptions: string[]
  /** Called with the toggled option whenever a checkbox changes; the consumer updates `selectedOptions`. */
  onToggleOption: (option: MultiSelectOption) => void
  /** Decorative trailing icon on the trigger (rendered `aria-hidden` by `Button`). */
  icon?: IconName
  /** Disables the trigger. */
  disabled?: boolean
  /** Overridable UI strings (English defaults) so the built-in "selected" count can be localised. */
  labels?: Partial<MultiSelectLabels>
  /** Extra classes, merged onto the root `<div>` via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Multi-select filter dropdown (molecule). A disclosure `<button>` reveals a group of native
 * checkboxes; the trigger label reflects the current selection.
 *
 * Accessibility: the trigger exposes `aria-haspopup`, `aria-expanded` and `aria-controls` pointing at
 * the popup (4.1.2, disclosure pattern), and opens on activation, not focus (3.2.1). Options are real
 * `<input type="checkbox">` wrapped in `<label>`s, so role, keyboard operation and checked state are
 * native; they sit next in the focus order when open (2.4.3). `Escape` closes the popup and returns
 * focus to the trigger (2.1.1); a pointer press outside also closes it. The option group is named by
 * `name`; the "N selected" count is an overridable label defaulting to English for localisation.
 */
function MultiSelect({
  id,
  name,
  options,
  selectedOptions,
  onToggleOption,
  icon,
  disabled,
  labels,
  className,
  ref,
}: MultiSelectProps) {
  const t = { ...defaultMultiSelectLabels, ...labels }
  const generatedId = useId()
  const popupId = `${id ?? generatedId}-popup`
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    function handlePointerDown(event: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [open])

  if (!options || options.length === 0) return null

  function getTriggerLabel() {
    if (!selectedOptions || selectedOptions.length === 0) return name
    if (selectedOptions.length === 1) {
      const selectedName = options.find((option) => option.value === selectedOptions[0])?.name
      return selectedName ? `${name} (${selectedName})` : name
    }
    return `${name} (${t.selectedCount(selectedOptions.length)})`
  }

  function close() {
    setOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div
      ref={mergeRefs(containerRef, ref)}
      className={cn('relative', className)}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) close()
      }}
    >
      <Button
        ref={triggerRef}
        type="button"
        surface="x"
        size="xx-small"
        iconRight={icon}
        disabled={disabled}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={popupId}
        onClick={() => setOpen((prev) => !prev)}
        // surface="x" only paints its fill from md up; on mobile the trigger reads as a filled grey
        // select bar (matching legacy), so add the neutral fill below md (md:bg-action-x takes over).
        className="max-md:w-full max-md:bg-surface-select"
      >
        {getTriggerLabel()}
      </Button>
      {open && (
        <ul
          id={popupId}
          aria-label={name}
          className="absolute left-0 top-full z-menu mt-2 w-max min-w-full list-none border border-border-grey bg-surface-default py-1 max-md:w-full"
        >
          {options.map((option) => {
            const checked = Boolean(selectedOptions?.some((value) => value === option.value))
            return (
              <li key={option.value}>
                <label className="flex cursor-pointer items-center gap-2 px-3 py-1.5 text-body-s text-text-default hover:bg-border-grey">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleOption(option)}
                    className="size-4 accent-action-primary"
                  />
                  <span>{option.name}</span>
                </label>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export { MultiSelect }
