import { useEffect, useId, useRef, useState, type Ref } from 'react'
import { DayPicker, type DayButtonProps, type Modifiers } from 'react-day-picker'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { Button } from '../Button'

export interface UiDatePickerLabels {
  /** Popover heading / dialog accessible name. @default 'Choose your delivery day' */
  header: string
}

export interface UiDatePickerOrderStop {
  /** Heading for the order-stop notice. */
  title?: string
  /** Pre-formatted stop-date strings. */
  stopDates?: string[]
  /** Extra note under the stop dates. */
  note?: string
}

export interface UiDatePickerProps {
  /** Trigger label (also its accessible name) — e.g. the current delivery date or a CTA. */
  buttonLabel: string
  /** Currently-selected delivery date, as an ISO date string. */
  selectedDeliveryDate: string
  /** The selectable delivery dates. */
  deliveryDates: Date[]
  /** Dates to mark as holidays (shown distinctly; not selectable). @default [] */
  holidayDates?: Date[]
  /** Fired with the chosen date. */
  onDateSelected: (date: Date) => void
  /** Popover heading; overrides `labels.header`. */
  headerText?: string
  /** Disable the trigger (e.g. while dates load). @default false */
  loading?: boolean
  /** Fired when the popover opens (e.g. to lazy-load dates). */
  onOpen?: () => void
  /** Optional order-stop-date notice shown under the calendar. */
  orderStopDate?: UiDatePickerOrderStop
  /** Overridable UI strings (English defaults). */
  labels?: Partial<UiDatePickerLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the trigger `<button>`. */
  ref?: Ref<HTMLButtonElement>
}

const defaultLabels: UiDatePickerLabels = { header: 'Choose your delivery day' }

const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

/* react-day-picker part styling via `classNames` (headless — no base CSS imported); the day cells
 * hold a fully-styled custom DayButton (below). */
const dayPickerClassNames = {
  root: 'font-primary',
  months: 'relative',
  month: 'w-full',
  month_caption: 'flex h-10 items-center justify-center',
  caption_label: 'text-body font-bold text-text-default',
  nav: 'absolute inset-x-0 top-0 flex h-10 items-center justify-between',
  button_previous:
    'flex size-8 cursor-pointer items-center justify-center rounded text-text-default disabled:cursor-default disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
  button_next:
    'flex size-8 cursor-pointer items-center justify-center rounded text-text-default disabled:cursor-default disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
  chevron: 'size-5 fill-current',
  month_grid: 'border-separate border-spacing-1',
  weekday: 'size-10 pb-1 text-body-s font-normal text-text-subdued',
  day: 'p-0 text-center align-middle',
}

/**
 * Fully-styled day cell button. Styling lives here (not on the `<td>` via `modifiersClassNames`) so
 * the fill/border track the fixed 40px button exactly, and so `cn()` (tailwind-merge) resolves the
 * modifier conflicts deterministically — `selected` (listed last) wins its bg/border/text over
 * `delivery`/`today`. Delivery days are white with an orange border; the selected day is dark-on-orange
 * (legacy white-on-orange fails AA); holidays/disabled days are muted (their `disabled` attribute makes
 * axe skip the faded contrast).
 */
function DeliveryDayButton({ day: _day, modifiers, className: _className, ...buttonProps }: DayButtonProps) {
  const m = modifiers as Modifiers & Record<string, boolean>
  return (
    <button
      {...buttonProps}
      className={cn(
        'flex size-10 items-center justify-center rounded font-primary font-bold text-text-default',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        m.delivery && 'border border-border-orange text-text-blue',
        m.holiday && 'bg-surface-disabled text-text-subdued',
        m.disabled && 'cursor-default text-text-subdued opacity-40',
        m.today && 'border border-border-orange bg-tag-yellow text-text-blue',
        m.selected && 'border-transparent bg-action-tertiary text-text-on-tertiary',
      )}
    />
  )
}

/**
 * Delivery-date picker (molecule). A full-width {@link Button} trigger (calendar icon) opens a
 * `role="dialog"` popover with a `react-day-picker` calendar restricted to the valid `deliveryDates`
 * (all other days are `disabled`); holidays and the selection are styled via a custom day button, and
 * navigation is free (only delivery days are ever selectable). The library owns the in-grid keyboard
 * model and ARIA (`role="grid"`, roving focus, labelled nav); this wrapper owns the trigger
 * (`aria-haspopup="dialog"` + `aria-expanded`), moves focus into the dialog on open, and closes on
 * `Escape`/outside-click, returning focus to the trigger (2.1.2 / 2.4.3). Restyled with Tailwind tokens
 * via `classNames` + a custom `DayButton` — the library's base CSS is intentionally not imported.
 */
function UiDatePicker({
  buttonLabel,
  selectedDeliveryDate,
  deliveryDates,
  holidayDates = [],
  onDateSelected,
  headerText,
  loading,
  onOpen,
  orderStopDate,
  labels,
  className,
  ref,
}: UiDatePickerProps) {
  const header = headerText ?? { ...defaultLabels, ...labels }.header
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Date>(() => new Date(selectedDeliveryDate))
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const dialogId = useId()

  useEffect(() => {
    setSelected(new Date(selectedDeliveryDate))
  }, [selectedDeliveryDate])

  const isDeliveryDay = (day: Date) => deliveryDates.some((date) => isSameDay(date, day))

  const close = () => {
    setOpen(false)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    if (!open) return
    dialogRef.current?.focus()
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <div ref={wrapperRef} className={cn('relative w-full', className)}>
      <Button
        ref={mergeRefs<HTMLButtonElement>(triggerRef, ref)}
        surface="x"
        size="x-small"
        fullWidth
        iconRight="icon-calendar"
        disabled={loading}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          setOpen((value) => {
            if (!value) onOpen?.()
            return !value
          })
        }}
      >
        {buttonLabel}
      </Button>

      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-label={header}
          id={dialogId}
          tabIndex={-1}
          className="absolute left-0 z-menu-icon mt-1 rounded border border-border-orange bg-surface-default p-2 shadow-lg focus-visible:outline-none"
        >
          <p className="p-1 text-center font-primary text-text-default">{header}</p>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(day) => {
              if (!day) return
              setSelected(day)
              onDateSelected(day)
              close()
            }}
            disabled={(day) => !isDeliveryDay(day)}
            modifiers={{ delivery: deliveryDates, holiday: holidayDates }}
            defaultMonth={selected}
            showOutsideDays={false}
            classNames={dayPickerClassNames}
            components={{ DayButton: DeliveryDayButton }}
          />
          {orderStopDate?.stopDates?.length ? (
            // Cap to the calendar's own width (7×`size-10` + 8×`border-spacing-1` = 19.5rem) so a long
            // note wraps instead of stretching the dialog and leaving dead space beside the dates.
            <div className="flex max-w-78 flex-col gap-2 px-4 pt-4 pb-6">
              {orderStopDate.title && <p className="m-0 font-bold text-text-default">{orderStopDate.title}</p>}
              {orderStopDate.stopDates.map((stopDate) => (
                <p key={stopDate} className="m-0 text-text-default">
                  {stopDate}
                </p>
              ))}
              {orderStopDate.note && (
                <p className="m-0 text-text-default">
                  <em>{orderStopDate.note}</em>
                </p>
              )}
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export { UiDatePicker }
