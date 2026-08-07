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
  // At the `startMonth`/`endMonth` boundary react-day-picker marks the nav button `aria-disabled`
  // (kept focusable for SR discoverability) rather than setting the native `disabled` attribute — so
  // fade + neutralise the cursor off `aria-disabled` too, otherwise the dead arrow looks fully active.
  button_previous:
    'flex size-8 cursor-pointer items-center justify-center rounded text-text-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary disabled:cursor-default disabled:opacity-30 aria-disabled:cursor-default aria-disabled:opacity-30',
  button_next:
    'flex size-8 cursor-pointer items-center justify-center rounded text-text-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary disabled:cursor-default disabled:opacity-30 aria-disabled:cursor-default aria-disabled:opacity-30',
  chevron: 'size-5 fill-current',
  // Tighter cell spacing on mobile so all seven columns fit a phone (they overflowed at the desktop gap).
  month_grid: 'border-separate border-spacing-1 md:border-spacing-2',
  weekday: 'w-10 pb-1 text-body-s font-normal text-text-subdued md:w-17',
  day: 'p-0 text-center align-middle',
}

/**
 * Fully-styled day cell button. Styling lives here (not on the `<td>` via `modifiersClassNames`) so the
 * fill/border track the fixed button box exactly, and so `cn()` (tailwind-merge) resolves the modifier
 * conflicts deterministically — the later class wins, so precedence reads top-to-bottom: base grey box →
 * weekend/holiday → delivery → today → selected. Every cell is a filled grey square with a muted number
 * (legacy `.day`); weekends and holidays darken (legacy `.holidayDay`); delivery days are white with an
 * orange border (legacy `.deliveryDay`); today is light-yellow (legacy `.currentDay`); the selected day
 * is dark-on-orange — legacy's white-on-orange fails WCAG AA. Non-delivery days carry `disabled`, so axe
 * skips their (intentionally muted) contrast.
 */
function DeliveryDayButton({ modifiers, className: _className, ...buttonProps }: DayButtonProps) {
  const m = modifiers as Modifiers & Record<string, boolean>
  return (
    <button
      {...buttonProps}
      className={cn(
        'flex size-10 items-center justify-center rounded bg-tag-grey font-primary font-bold text-text-subdued md:size-17',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        (m.weekend || m.holiday) && 'bg-grey-500 text-text-blue/90',
        // Delivery day — white with an orange border; fills orange on hover (legacy `.deliveryDay:hover`).
        // Blue-on-orange still clears AA, and axe never triggers `:hover` so the gate is unaffected.
        m.delivery && 'cursor-pointer border border-border-orange bg-surface-default text-text-blue hover:bg-action-tertiary',
        m.disabled && 'cursor-default',
        // Today — light-yellow; hover keeps it yellow, matching legacy `.currentDay` (no hover change).
        m.today && 'border border-border-orange bg-tag-yellow text-text-blue hover:bg-tag-yellow',
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

  // Constrain navigation to the months that actually hold delivery days (legacy did this implicitly via
  // react-datepicker's `includeDates`): the prev/next arrows disable at the first/last delivery month
  // instead of wandering into empty calendars.
  const deliveryTimes = deliveryDates.map((date) => date.getTime())
  const startMonth = deliveryTimes.length ? new Date(Math.min(...deliveryTimes)) : undefined
  const endMonth = deliveryTimes.length ? new Date(Math.max(...deliveryTimes)) : undefined

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
  }, [open])

  return (
    <div ref={wrapperRef} className={cn('relative w-full', className)}>
      <Button
        ref={mergeRefs<HTMLButtonElement>(triggerRef, ref)}
        surface="x"
        // surface="x" only paints its white fill from md up; the trigger reads as a white bar on mobile
        // too (matching legacy), so apply the fill at the base (the md:border stays desktop-only).
        className="bg-action-x"
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
          className="absolute left-1/2 z-menu-icon mt-1 -translate-x-1/2 rounded border border-border-orange bg-surface-default p-2 shadow-lg focus-visible:outline-none md:left-0 md:translate-x-0"
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
            modifiers={{ delivery: deliveryDates, holiday: holidayDates, weekend: { dayOfWeek: [0, 6] } }}
            defaultMonth={selected}
            startMonth={startMonth}
            endMonth={endMonth}
            weekStartsOn={1}
            showOutsideDays
            classNames={dayPickerClassNames}
            components={{ DayButton: DeliveryDayButton }}
          />
          {orderStopDate?.stopDates?.length ? (
            // Spans the calendar's width (the dialog shrink-wraps the grid); short notes fill it and a
            // long one wraps within the dialog rather than leaving dead space (legacy `.orderStopDates`).
            // `text-body-s` (0.875rem) — the paragraphs inherit it; matches legacy's small calendar text
            // (react-datepicker's 0.8rem base), rounded to the nearest DS scale token.
            <div className="flex w-full flex-col gap-2 px-4 pt-4 pb-6 text-body-s">
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
