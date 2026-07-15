import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { InvoiceList, type Invoice } from './InvoiceList'

// Unpaid rows exercise the per-row detail disclosure, the credit chip, the overdue (expired) pill and
// the "expires in" note.
const unpaidInvoices: Invoice[] = [
  {
    type: 'unpaid',
    invoiceNumber: 'INV-1001',
    title: 'March subscription',
    currency: 'SEK',
    dueDate: '2026-03-15',
    amount: 1299,
    amountLabel: 'Total',
    paid: 0,
    remaining: 1299,
    expirationDate: 'Payment window closes 2026-04-01',
    expireIn: 'Due in 5 days',
  },
  {
    type: 'unpaid',
    invoiceNumber: 'INV-1002',
    title: 'Overdue delivery',
    currency: 'SEK',
    dueDate: '2026-02-01',
    amount: 540,
    expired: true,
    creditLabel: 'Credit',
  },
]

// Paid rows exercise month grouping (two months), the download link (via `downloadUrl`) and the
// invoice/order number sub-row.
const paidInvoices: Invoice[] = [
  {
    type: 'paid',
    invoiceNumber: 'INV-0900',
    orderNumber: 'ORD-900',
    title: 'January order',
    currency: 'SEK',
    dueDate: '2026-01-20',
    amount: 820,
    downloadUrl: '/invoices/ord-900.pdf',
    customOrderNumber: 'PO-55',
  },
  {
    type: 'paid',
    invoiceNumber: 'INV-0899',
    orderNumber: 'ORD-899',
    title: 'January refill',
    currency: 'SEK',
    dueDate: '2026-01-05',
    amount: 300,
  },
  {
    type: 'paid',
    invoiceNumber: 'INV-0850',
    orderNumber: 'ORD-850',
    title: 'December order',
    currency: 'SEK',
    dueDate: '2025-12-18',
    amount: 1450,
    downloadUrl: '/invoices/ord-850.pdf',
  },
]

const invoices: Invoice[] = [...unpaidInvoices, ...paidInvoices]

// Six unpaid invoices so the fifth+ sit behind the "show more" disclosure.
const manyUnpaid: Invoice[] = Array.from({ length: 6 }, (_, i) => ({
  type: 'unpaid',
  invoiceNumber: `INV-20${i}`,
  title: `Monthly invoice ${i + 1}`,
  currency: 'SEK',
  dueDate: '2026-03-15',
  amount: 500 + i,
}))

const meta = {
  title: 'Design System/Organisms/InvoiceList',
  component: InvoiceList,
  args: { invoices },
} satisfies Meta<typeof InvoiceList>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical mixed list (unpaid + a paid month group). The `play` proves the per-row detail
 * disclosure toggles `aria-expanded`, and that a paid invoice with a `downloadUrl` exposes a
 * download **link** while the others expose download **buttons**.
 */
export const Default: Story = {
  args: { downloadTooltip: 'Download the invoice as a PDF' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getAllByRole('button', { name: 'Expand details' })[0]
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(toggle)
    await expect(canvas.getByRole('button', { name: 'Collapse details' })).toHaveAttribute('aria-expanded', 'true')

    const downloadLinks = canvas.getAllByRole('link', { name: 'Download invoice' })
    await expect(downloadLinks.some((a) => a.getAttribute('href') === '/invoices/ord-900.pdf')).toBe(true)
    await expect(canvas.getAllByRole('button', { name: 'Download invoice' }).length).toBeGreaterThan(0)
  },
}

/**
 * Unpaid invoices only — the expandable per-row detail (chevron toggle), the `Credit` chip, the
 * overdue (expired) date pill, and the "expires in" note. Static frame for visual review; the
 * disclosure behaviour is covered by `Default`.
 */
export const Unpaid: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { invoices: unpaidInvoices },
}

/**
 * Paid invoices only — grouped by month under `<h3>` headings, with the invoice/order number sub-row
 * and a download link where a `downloadUrl` is set. Static frame for visual review.
 */
export const Paid: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { invoices: paidInvoices },
}

/**
 * More than four unpaid invoices — the overflow sits behind a `Show more` disclosure. The `play`
 * asserts the toggle flips `aria-expanded` and that the hidden rows join the accessibility tree only
 * once expanded (4 → 6 row toggles).
 */
export const Overflow: Story = {
  args: { invoices: manyUnpaid },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getAllByRole('button', { name: 'Expand details' })).toHaveLength(4)
    const showMore = canvas.getByRole('button', { name: 'Show more' })
    await expect(showMore).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(showMore)
    await expect(canvas.getByRole('button', { name: 'Show less' })).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getAllByRole('button', { name: 'Expand details' })).toHaveLength(6)
  },
}

/** The loading state renders a decorative skeleton and announces progress via a polite status region. */
export const Loading: Story = {
  args: { loading: true, invoices: [] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toHaveTextContent('Loading invoices…')
  },
}

/**
 * Localisation — every built-in string is overridable via `labels`. The `play` asserts the Swedish
 * overrides drive both the disclosure toggle and the download controls' accessible names.
 */
export const Localized: Story = {
  args: {
    invoices: manyUnpaid,
    labels: { viewMore: 'Visa fler', viewLess: 'Visa färre', download: 'Ladda ner faktura' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Visa fler' })).toBeInTheDocument()
    await expect(canvas.getAllByRole('button', { name: 'Ladda ner faktura' }).length).toBeGreaterThan(0)
  },
}

/*
 * Gallery-only Visual (no baseline — legacy shipped no story/snapshot). The mixed list (both types +
 * a paid month group) for human review; per-type frames are `Unpaid` / `Paid`, behaviour is covered
 * by the play tests above.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}
