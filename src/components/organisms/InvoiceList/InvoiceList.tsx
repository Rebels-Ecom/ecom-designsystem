import { useId, useState, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'
import { ExpandableWrapper } from '../../atoms/ExpandableWrapper'
import { ComponentWithTooltip } from '../../atoms/ComponentWithTooltip'
import { Button } from '../../molecules/Button'
import { IconButton } from '../../molecules/IconButton'
import { LoadingOverlay } from '../../molecules/LoadingOverlay'

interface BaseInvoice {
  /** Invoice reference number. */
  invoiceNumber: string
  /** Human-readable invoice title. */
  title: string
  /** ISO currency label rendered after the amount (e.g. `SEK`). */
  currency: string
  /** Due date — an ISO date string (`YYYY-MM-DD` or `YYYYMMDD`); drives the date pill and grouping. */
  dueDate?: string
  /** Invoice amount. */
  amount?: number
}

export interface UnpaidInvoice extends BaseInvoice {
  type: 'unpaid'
  /** Extra detail rows, revealed by the per-row disclosure. */
  expirationDate?: string
  amountLabel?: string
  paid?: number
  remaining?: number
  /** Marks the invoice overdue — styles the date pill and is announced in its label. */
  expired?: boolean
  /** Optional credit chip shown beside the amount. */
  creditLabel?: string
  /** Short "expires in …" note under the row. */
  expireIn?: string
  /** Download handler; receives the invoice number. */
  onDownload?: (invoiceNumber: string) => void
}

export interface PaidInvoice extends BaseInvoice {
  type: 'paid'
  /** Order reference — also the grouping/react key for paid rows. */
  orderNumber: string
  /** When set, the download control is a real download `<a>` instead of a button. */
  downloadUrl?: string
  customOrderNumber?: string
  /** Optional chip (e.g. a credit note marker). */
  tooltipLabel?: string
  /** Download handler when there is no `downloadUrl`; receives the invoice and order numbers. */
  onDownload?: (invoiceNumber: string, orderNumber: string) => void
}

export type Invoice = UnpaidInvoice | PaidInvoice

export interface InvoiceListLabels {
  /** Expand the overflow list of unpaid invoices. @default 'Show more' */
  viewMore?: string
  /** Collapse the overflow list. @default 'Show less' */
  viewLess?: string
  /** Accessible name of a row's expand toggle. @default 'Expand details' */
  expandDetails?: string
  /** Accessible name of a row's collapse toggle. @default 'Collapse details' */
  collapseDetails?: string
  /** Accessible name of every download control. @default 'Download invoice' */
  download?: string
  /** Announced while the list loads. @default 'Loading invoices…' */
  loading?: string
  /** Heading for paid invoices with no valid due date. @default 'Other invoices' */
  otherInvoices?: string
  /** Builds the date pill's accessible label. @default `Due date: {date}[, expired]` */
  dueDate?: (date: string, expired: boolean) => string
}

const defaultInvoiceListLabels: Required<InvoiceListLabels> = {
  viewMore: 'Show more',
  viewLess: 'Show less',
  expandDetails: 'Expand details',
  collapseDetails: 'Collapse details',
  download: 'Download invoice',
  loading: 'Loading invoices…',
  otherInvoices: 'Other invoices',
  dueDate: (date, expired) => `Due date: ${date}${expired ? ', expired' : ''}`,
}

export interface InvoiceListProps {
  /** The invoices to render — a discriminated union of `unpaid` and `paid` rows. */
  invoices: Invoice[]
  /** Show the skeleton placeholder + a polite loading announcement. @default false */
  loading?: boolean
  /** Tooltip shown on the download control (visual hint; the control keeps its own accessible name). */
  downloadTooltip?: string
  /** The invoice/order number whose download is in progress — swaps its control for a spinner. */
  downloadingId?: string | null
  /** BCP-47 locale for the date pill and month-group headings. @default 'en-US' */
  locale?: string
  /** Overridable UI copy (localisation). Merged over English defaults. */
  labels?: InvoiceListLabels
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const amountPill = 'inline-flex items-center whitespace-nowrap rounded-full border border-border-grey px-3 py-1.5 text-body-s font-bold text-text-default'
const creditPill = 'inline-flex items-center whitespace-nowrap rounded-full border border-transparent bg-grey-300 px-3 py-1.5 text-body-s font-bold text-text-default'

/** Parse a `YYYY-MM-DD` / `YYYYMMDD` string into a Date, or null when invalid/absent. */
function parseDueDate(value: string | undefined): Date | null {
  if (!value) return null
  const digits = value.replace(/-/g, '')
  if (digits.length === 8) {
    const year = Number(digits.slice(0, 4))
    const month = Number(digits.slice(4, 6))
    const day = Number(digits.slice(6, 8))
    if (month < 1 || month > 12 || day < 1 || day > 31) return null
    const date = new Date(year, month - 1, day)
    return Number.isNaN(date.getTime()) ? null : date
  }
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

function DateDisplay({
  date,
  expired,
  locale,
  buildLabel,
}: {
  date: Date | null
  expired?: boolean
  locale: string
  buildLabel: (date: string, expired: boolean) => string
}) {
  if (!date) {
    return (
      <span aria-hidden="true" className="flex min-h-10 w-10 items-center justify-center text-text-subdued">
        —
      </span>
    )
  }
  const day = new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date)
  const month = new Intl.DateTimeFormat(locale, { month: 'short' }).format(date)
  return (
    <span
      role="img"
      aria-label={buildLabel(`${day} ${month}`, !!expired)}
      className={cn(
        'flex min-h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full py-2 text-center',
        // Legacy overdue pill: solid critical red (#ce0b0b, the `icon-critical` token) + white text —
        // ~5.7:1, so it stays AA (state is also carried in the `aria-label`, never colour-only, 1.4.1).
        expired ? 'bg-icon-critical text-text-white' : 'bg-grey-300 text-text-default',
      )}
    >
      <span className="text-xs leading-4">{month}</span>
      <span className="text-xl font-bold leading-5">{day}</span>
    </span>
  )
}

/**
 * A list of customer invoices (organism). Renders unpaid invoices first (capped at four, with a
 * disclosure `<button>` — `aria-expanded`/`aria-controls` — revealing the rest), then paid invoices
 * grouped by month under `<h3>` headings. Each row carries a date pill (its due date is exposed as an
 * `aria-label`, so overdue state is never colour-only), an optional per-row detail disclosure, and a
 * download control (`IconButton` — a download `<a>` when a `downloadUrl` is present, otherwise a
 * button; swapped for a {@link LoadingOverlay} spinner while `downloadingId` matches). A persistent
 * polite `role="status"` region announces the loading state. All built-in copy is overridable via
 * `labels` and dates are formatted with the `locale` prop, so the list ships locale-agnostic.
 */
function InvoiceList({
  invoices,
  loading,
  downloadTooltip,
  downloadingId,
  locale = 'en-US',
  labels,
  className,
  ref,
}: InvoiceListProps) {
  const t = { ...defaultInvoiceListLabels, ...labels }
  const baseId = useId()
  const [overflowOpen, setOverflowOpen] = useState(false)
  const [openRows, setOpenRows] = useState<Record<string, boolean>>({})

  const toggleRow = (key: string) => setOpenRows((prev) => ({ ...prev, [key]: !prev[key] }))

  const unpaid = invoices.filter((i): i is UnpaidInvoice => i.type === 'unpaid')
  const paid = invoices.filter((i): i is PaidInvoice => i.type === 'paid')
  const firstUnpaid = unpaid.slice(0, 4)
  const overflowUnpaid = unpaid.slice(4)

  const paidByMonth = new Map<string, PaidInvoice[]>()
  for (const invoice of paid) {
    const date = parseDueDate(invoice.dueDate)
    const key = date
      ? new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date)
      : t.otherInvoices
    const bucket = paidByMonth.get(key)
    if (bucket) bucket.push(invoice)
    else paidByMonth.set(key, [invoice])
  }

  const downloadControl = (invoice: Invoice, id: string) => {
    if (downloadingId === id) {
      return (
        <span className="relative inline-flex size-9">
          <LoadingOverlay isVisible position="absolute" overlayBkgColor="transparent" loaderSize="xs" />
        </span>
      )
    }
    const control =
      invoice.type === 'paid' && invoice.downloadUrl ? (
        <IconButton
          type="link"
          icon="icon-download"
          href={invoice.downloadUrl}
          download
          isExternal
          target="_self"
          round
          isTransparent
          noBorder
          label={t.download}
        />
      ) : (
        <IconButton
          type="button"
          icon="icon-download"
          round
          isTransparent
          noBorder
          label={t.download}
          onClick={() =>
            invoice.type === 'unpaid'
              ? invoice.onDownload?.(invoice.invoiceNumber)
              : invoice.onDownload?.(invoice.invoiceNumber, invoice.orderNumber)
          }
        />
      )
    return downloadTooltip ? <ComponentWithTooltip content={downloadTooltip} element={control} /> : control
  }

  const renderUnpaid = (invoice: UnpaidInvoice) => {
    const key = invoice.invoiceNumber
    const isOpen = !!openRows[key]
    const panelId = `${baseId}-panel-${key}`
    const amount = invoice.amount ?? 0
    return (
      <li key={key} className="flex items-stretch gap-4 border-b border-border-grey py-3 last:border-b-0">
        <DateDisplay date={parseDueDate(invoice.dueDate)} expired={invoice.expired} locale={locale} buildLabel={t.dueDate} />
        <div className="flex flex-1 items-start justify-between gap-2">
          {/* Left: title + toggle, the (collapsible) detail rows, and the "expires in" note stacked
              tight — no flex column-gap, so a collapsed panel doesn't leave a double gap. */}
          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-text-default">{invoice.title}</span>
              <button
                type="button"
                onClick={() => toggleRow(key)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-label={isOpen ? t.collapseDetails : t.expandDetails}
                className="inline-flex size-8 items-center justify-center rounded text-text-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
              >
                <Icon icon={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'} />
              </button>
            </div>
            <ExpandableWrapper open={isOpen} id={panelId}>
              <div className="flex flex-col gap-0.5 pt-1 text-body-s text-text-default lg:flex-row lg:flex-wrap lg:gap-x-3">
                {invoice.amount !== undefined && (
                  <span>
                    {invoice.amountLabel ? `${invoice.amountLabel}: ` : ''}
                    {invoice.amount} {invoice.currency}
                  </span>
                )}
                {invoice.paid !== undefined && <span>{invoice.paid}</span>}
                {invoice.remaining !== undefined && <span>{invoice.remaining}</span>}
                {invoice.expirationDate && <span className="basis-full text-text-subdued">{invoice.expirationDate}</span>}
              </div>
            </ExpandableWrapper>
            {invoice.expireIn && <span className="text-text-subdued text-xs">{invoice.expireIn}</span>}
          </div>
          {/* Right: credit chip, amount, download. */}
          <div className="flex flex-wrap items-center justify-end gap-2">
            {invoice.creditLabel && <span className={creditPill}>{invoice.creditLabel}</span>}
            <span className={amountPill}>
              {amount} {invoice.currency}
            </span>
            {downloadControl(invoice, invoice.invoiceNumber)}
          </div>
        </div>
      </li>
    )
  }

  const renderPaid = (invoice: PaidInvoice) => {
    const amount = invoice.amount ?? 0
    return (
      <li key={invoice.orderNumber} className="flex items-center gap-4 border-b border-border-grey py-3 last:border-b-0">
        <DateDisplay date={parseDueDate(invoice.dueDate)} locale={locale} buildLabel={t.dueDate} />
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex items-start justify-between gap-2">
            <span className="font-bold text-text-default">{invoice.title}</span>
            <div className="flex flex-wrap items-center justify-end gap-2">
              {invoice.tooltipLabel && <span className={creditPill}>{invoice.tooltipLabel}</span>}
              {amount > 0 && (
                // Legacy `.paidAmount`: on desktop the settled amount drops its border (de-emphasised
                // vs an unpaid amount, which keeps the pill outline to flag what's still owed).
                <span className={cn(amountPill, 'lg:border-transparent')}>
                  {amount} {invoice.currency}
                </span>
              )}
              {downloadControl(invoice, invoice.orderNumber)}
            </div>
          </div>
          <div className="flex flex-col gap-0.5 text-body-s text-text-default lg:flex-row lg:flex-wrap lg:gap-x-3">
            {invoice.invoiceNumber && <span>{invoice.invoiceNumber}</span>}
            {invoice.customOrderNumber && <span>{invoice.customOrderNumber}</span>}
          </div>
        </div>
      </li>
    )
  }

  return (
    <div ref={ref} className={cn('flex flex-col gap-4', className)}>
      <p role="status" aria-live="polite" className="sr-only">
        {loading ? t.loading : ''}
      </p>

      {loading ? (
        <div aria-hidden="true" className="flex flex-col">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-4 border-b border-border-grey py-3 last:border-b-0">
              <span className="size-10 shrink-0 rounded-full bg-grey-300" />
              <div className="flex flex-1 flex-col gap-2">
                <span className="h-4 w-32 rounded bg-grey-300" />
                <span className="h-3.5 w-20 rounded bg-grey-300" />
              </div>
              <span className="h-8 w-20 rounded-full bg-grey-300" />
            </div>
          ))}
        </div>
      ) : (
        <>
          {firstUnpaid.length > 0 && (
            <div className="flex flex-col gap-4">
              <ul role="list" className="flex flex-col">
                {firstUnpaid.map(renderUnpaid)}
              </ul>
              {overflowUnpaid.length > 0 && (
                <>
                  <Button
                    surface="link"
                    weight="bold"
                    aria-expanded={overflowOpen}
                    aria-controls={`${baseId}-overflow`}
                    iconRight={overflowOpen ? 'icon-chevron-up' : 'icon-chevron-down'}
                    onClick={() => setOverflowOpen((prev) => !prev)}
                    className="self-start"
                  >
                    {overflowOpen ? t.viewLess : t.viewMore}
                  </Button>
                  <ul
                    id={`${baseId}-overflow`}
                    role="list"
                    className={cn('flex-col', overflowOpen ? 'flex' : 'hidden')}
                  >
                    {overflowUnpaid.map(renderUnpaid)}
                  </ul>
                </>
              )}
            </div>
          )}

          {[...paidByMonth.entries()].map(([month, group]) => (
            <div key={month} className="flex flex-col gap-4">
              <h3 className="border-b-2 border-text-default pb-4 text-h-s font-bold capitalize">{month}</h3>
              <ul role="list" aria-label={month} className="flex flex-col">
                {group.map(renderPaid)}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export { InvoiceList, defaultInvoiceListLabels }
