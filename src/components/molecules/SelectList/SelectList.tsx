import { useEffect, useId, useRef, useState } from 'react'
import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { Button } from '../Button'

export interface SelectListOption {
  /** Human-readable label shown in the option row and on the trigger once selected. */
  name: string
  /** Stable value reported to `onClickItem`. */
  value: string
}

export interface SelectListProps {
  /** Selectable options rendered as a single-choice radio group. */
  options: SelectListOption[]
  /** Trigger text shown until an option is selected; also names the option group. */
  placeholder: string
  /** Initially selected option (controlled from the outside via re-render). */
  preSelected?: SelectListOption
  /** Called whenever the trigger is toggled. */
  onClickButton?: () => void
  /** Called with the chosen option when a radio is selected. */
  onClickItem?: (item: SelectListOption) => void
  /** Close the popup as soon as an option is chosen. @default false */
  closeOnSelect?: boolean
  /** Disables the trigger and all options. */
  disabled?: boolean
  /** Compact trigger height on `md` and up. @default false */
  small?: boolean
  /** Fully rounded (pill) trigger. @default false */
  round?: boolean
  /** Extra classes, merged onto the root `<div>` via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Single-select dropdown (molecule) — e.g. a "sort by" control. A disclosure `<button>` reveals a
 * group of native radio buttons; the trigger shows the current selection or the `placeholder`.
 *
 * Accessibility: the trigger exposes `aria-haspopup`, `aria-expanded` and `aria-controls` for the
 * popup and opens on activation, not focus (3.2.1). Options are real `<input type="radio">` sharing a
 * group `name`, so single-selection semantics, `aria-checked` state and native arrow-key navigation
 * come for free (2.1.1, 4.1.2); the group is labelled by `placeholder`. `Escape` closes the popup and
 * returns focus to the trigger; a pointer press outside also closes it. The revealed options sit next
 * in the focus order (2.4.3). No hardcoded UI strings — all visible text is consumer-supplied.
 */
function SelectList({
  options,
  placeholder,
  preSelected,
  onClickButton,
  onClickItem,
  closeOnSelect,
  disabled,
  small,
  round,
  className,
  ref,
}: SelectListProps) {
  const popupId = useId()
  const radioName = useId()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<SelectListOption | undefined>(preSelected)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setSelected(preSelected)
  }, [preSelected])

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

  function close() {
    setOpen(false)
    triggerRef.current?.focus()
  }

  function handleToggle() {
    onClickButton?.()
    setOpen((prev) => !prev)
  }

  function handleSelect(option: SelectListOption) {
    onClickItem?.(option)
    setSelected((prev) => (prev?.value === option.value ? prev : option))
    if (closeOnSelect) close()
  }

  return (
    <div
      ref={mergeRefs(containerRef, ref)}
      className={cn('relative w-full self-start md:w-auto', className)}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) close()
      }}
    >
      <Button
        ref={triggerRef}
        type="button"
        surface="x"
        size="xx-small"
        rounded={round}
        disabled={disabled}
        iconRight={open ? 'icon-chevron-up' : 'icon-chevron-down'}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={popupId}
        onClick={handleToggle}
        className={cn('h-12 w-full justify-between md:h-10 md:w-auto', small && 'md:h-9')}
      >
        {selected?.name ?? placeholder}
      </Button>
      {open && (
        <div
          id={popupId}
          role="group"
          aria-label={placeholder}
          className="absolute left-0 top-full z-menu mt-1 min-w-48 rounded border border-border-grey bg-surface-default md:w-auto"
        >
          {options?.map((option) => {
            const isSelected = option.value === selected?.value
            return (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-2 border-b border-border-grey px-3 py-2.5 text-body text-text-default last:border-b-0 hover:bg-border-grey"
              >
                <input
                  type="radio"
                  name={radioName}
                  value={option.value}
                  checked={isSelected}
                  disabled={disabled}
                  onChange={() => handleSelect(option)}
                  className="size-4 accent-action-primary"
                />
                <span className="whitespace-nowrap">{option.name}</span>
              </label>
            )
          })}
        </div>
      )}
    </div>
  )
}

export { SelectList }
