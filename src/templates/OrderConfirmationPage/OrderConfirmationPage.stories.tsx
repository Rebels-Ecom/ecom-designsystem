import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { PageShell } from '../PageShell'
import { DemoFooter, DemoHeader, DemoLink } from '../_shared/chrome'
import { initialCartState, selectCartTotals } from '../_shared/cartModel'
import { OrderConfirmationPage } from './OrderConfirmationPage'

/**
 * **OrderConfirmationPage templates** — the post-order receipt, wired to the checkout's completed state
 * (`cartMachine` `orderComplete`). The frozen order comes from the shared cart model; the harness makes
 * the "download receipt" action observable via a status banner. Rendered inside {@link PageShell} with
 * the shared chrome. Untagged.
 */

const orderNumber = '377693-100482'
const totals = selectCartTotals(initialCartState)

function Harness() {
  const [downloadMessage, setDownloadMessage] = useState<string | undefined>(undefined)
  return (
    <PageShell header={<DemoHeader cartCount={0} />} footer={<DemoFooter />}>
      <OrderConfirmationPage
        orderNumber={orderNumber}
        deliveryDate="31 juli 2026"
        totals={totals}
        lines={initialCartState.lines}
        downloadMessage={downloadMessage}
        onDownloadReceipt={() => setDownloadMessage('Ditt kvitto laddas ner.')}
        linkComponent={DemoLink}
      />
    </PageShell>
  )
}

const meta = {
  title: 'Design System/Templates/Flow 1 — Checkout/OrderConfirmationPage',
  component: OrderConfirmationPage,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  args: {
    orderNumber,
    deliveryDate: '31 juli 2026',
    totals,
    lines: initialCartState.lines,
    onDownloadReceipt: () => {},
  },
} satisfies Meta<typeof OrderConfirmationPage>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The receipt. The `play` checks the thank-you heading, the order-number status banner, the summary total
 * and the ordered lines, then downloads the receipt (a confirmation banner appears).
 */
export const Default: Story = {
  render: () => <Harness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('heading', { level: 1, name: 'Tack för din beställning!' }),
    ).toBeInTheDocument()
    await expect(canvas.getByText(`Din order ${orderNumber} är mottagen.`, { exact: false })).toBeInTheDocument()
    await expect(canvas.getByText('Totalt')).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { level: 3, name: 'Blue Moon Glas' })).toBeInTheDocument()

    // Download the receipt → the confirmation banner appears.
    await userEvent.click(canvas.getByRole('button', { name: 'Ladda ner kvitto' }))
    await expect(canvas.getByText('Ditt kvitto laddas ner.')).toBeInTheDocument()
  },
}
