import { useReducer } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, userEvent, within } from 'storybook/test'
import { PageShell } from '../PageShell'
import { DemoFooter, DemoHeader, DemoLink } from '../_shared/chrome'
import {
  cartReducer,
  initialCartState,
  selectCartTotals,
  type CartLine,
  type CartState,
} from '../_shared/cartModel'
import { CheckoutPage } from './CheckoutPage'

/**
 * **CheckoutPage templates** — the real Spendrups B2B checkout wired live. The harness runs the shared
 * `cartReducer` (distilled from the app's `cartMachine`); quantities, removals, favourites, the terms
 * gate and order submission all update live, and the Pris/Pant/Moms summary is re-derived by
 * `selectCartTotals`. Rendered inside {@link PageShell} with the shared chrome. Untagged.
 */

const recommendations: CartLine[] = [
  {
    partNo: '4827616',
    productName: 'Lantchips Gräddfil',
    packaging: 'Chips',
    primaryImageUrl: '',
    pricePerUnit: 7.9,
    itemNumberPerSalesUnit: 20,
    salesUnit: 'st',
    quantity: 1,
  },
  {
    partNo: '3011201',
    productName: 'Coca-Cola Zero',
    packaging: '33cl Engångsglas',
    primaryImageUrl: '',
    pricePerUnit: 6.5,
    itemNumberPerSalesUnit: 20,
    salesUnit: 'st',
    quantity: 1,
  },
]

const deliveryDates = [new Date('2026-07-31'), new Date('2026-08-01'), new Date('2026-08-04')]

/** Products the "Lägg till produkt" search can add. */
const catalog: CartLine[] = recommendations

/** In-stock alternative swapped in by the stock-shortage "Byt produkt" flow. */
const replacementLine: CartLine = {
  partNo: '9990001',
  productName: 'Sofiero Original',
  packaging: '33cl Engångsglas',
  primaryImageUrl: '',
  pricePerUnit: 8.5,
  itemNumberPerSalesUnit: 20,
  salesUnit: 'st',
  quantity: 1,
  pant: 20,
}

function CheckoutHarness({ initial = initialCartState }: { initial?: CartState }) {
  const [state, dispatch] = useReducer(cartReducer, initial)
  const totals = selectCartTotals(state)
  const addProduct = (partNo: string) => {
    const line = catalog.find((p) => p.partNo === partNo)
    if (line) dispatch({ type: 'ADD_TO_CART', line: { ...line, quantity: 1 } })
  }
  return (
    <PageShell header={<DemoHeader cartCount={state.lines.length} />} footer={<DemoFooter />}>
      <CheckoutPage
        lines={state.lines}
        totals={totals}
        termsAccepted={state.termsAccepted}
        deliveryDate={state.deliveryDate}
        deliveryDates={deliveryDates}
        customOrderNo={state.customOrderNo}
        accessoryPotBalance={5000}
        recommendations={recommendations}
        productCatalog={catalog}
        status={state.status}
        hidePrices={!state.showPrices}
        onChangeQuantity={(partNo, quantity) => dispatch({ type: 'UPDATE_CART', partNo, quantity })}
        onRemoveLine={(partNo) => dispatch({ type: 'REMOVE_FROM_CART', partNo })}
        onToggleFavorite={(partNo) => dispatch({ type: 'TOGGLE_FAVORITE', partNo })}
        onReplaceLine={(partNo) => dispatch({ type: 'REPLACE_LINE', partNo, replacement: replacementLine })}
        onAcceptTerms={(accepted) => dispatch({ type: 'ACCEPT_TERMS', accepted })}
        onCustomOrderNoChange={(value) => dispatch({ type: 'ADD_CUSTOM_ORDER_NUMBER', value })}
        onSelectDeliveryDate={(date) => dispatch({ type: 'SET_DELIVERY_DATE', date })}
        onAddProduct={addProduct}
        onSubmit={() => dispatch({ type: 'GO_TO_CHECKOUT' })}
        linkComponent={DemoLink}
      />
    </PageShell>
  )
}

const meta = {
  title: 'Design System/Templates/Flow 1 — Checkout/CheckoutPage',
  component: CheckoutPage,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  args: {
    lines: initialCartState.lines,
    totals: selectCartTotals(initialCartState),
    termsAccepted: false,
    deliveryDate: initialCartState.deliveryDate,
    deliveryDates,
    customOrderNo: '',
    accessoryPotBalance: 5000,
    recommendations,
    productCatalog: catalog,
    status: 'shopping',
    hidePrices: false,
    onChangeQuantity: () => {},
    onRemoveLine: () => {},
    onToggleFavorite: () => {},
    onReplaceLine: () => {},
    onAcceptTerms: () => {},
    onCustomOrderNoChange: () => {},
    onSelectDeliveryDate: () => {},
    onAddProduct: () => {},
    onSubmit: () => {},
  },
} satisfies Meta<typeof CheckoutPage>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The cart. The `play` checks the "Varukorg" heading, the Översikt summary, the added-products count and
 * that editing a line quantity re-computes the total live.
 */
export const Default: Story = {
  render: () => <CheckoutHarness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('heading', { level: 3, name: 'Varukorg' })).toBeInTheDocument()
    await expect(canvas.getByText('Översikt')).toBeInTheDocument()
    await expect(canvas.getByText('Tillagda produkter: 3')).toBeInTheDocument()
    await expect(canvas.getByRole('article', { name: 'Blue Moon Glas' })).toBeInTheDocument()

    // Editing a line quantity re-computes the "Pris" line (Blue Moon 2→3 kolli adds 219 → 738,20 → 957,20).
    const line = canvas.getByRole('article', { name: 'Blue Moon Glas' })
    fireEvent.change(within(line).getByRole('spinbutton'), { target: { value: '3' } })
    await expect(canvas.getByText('957,20 kr')).toBeInTheDocument()
  },
}

/**
 * Placing the order is gated on the terms checkbox. The `play` proves the button is disabled until the
 * terms are accepted, then submits → the order confirmation.
 */
export const PlaceOrder: Story = {
  render: () => <CheckoutHarness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const submit = canvas.getByRole('button', { name: 'Lägg beställning' })
    await expect(submit).toBeDisabled()

    await userEvent.click(canvas.getByRole('checkbox', { name: 'Jag godkänner köpevillkoren' }))
    await expect(submit).toBeEnabled()
    await userEvent.click(submit)
    await expect(canvas.getByRole('heading', { name: 'Tack för din beställning!' })).toBeInTheDocument()
  },
}

/**
 * Removing a line updates the cart. The `play` removes the Loka line and checks it's gone and the count
 * drops to 2.
 */
export const RemoveLine: Story = {
  render: () => <CheckoutHarness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loka = canvas.getByRole('article', { name: 'Loka Naturell' })
    await userEvent.click(within(loka).getByRole('button', { name: 'Ta bort produkt' }))
    await expect(canvas.queryByRole('article', { name: 'Loka Naturell' })).toBeNull()
    await expect(canvas.getByText('Tillagda produkter: 2')).toBeInTheDocument()
  },
}

/** Empty cart. */
export const EmptyCart: Story = {
  render: () => <CheckoutHarness initial={{ ...initialCartState, lines: [] }} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Tillagda produkter: 0')).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Lägg beställning' })).toBeDisabled()
  },
}

// --- Dynamic scenario coverage (the checkout-family scenarios the real app drives these cards through) --

/** Patch one line by part number, leaving the others untouched. */
const patchLine = (partNo: string, patch: Partial<CartLine>): CartLine[] =>
  initialCartState.lines.map((l) => (l.partNo === partNo ? { ...l, ...patch } : l))

/**
 * A line carrying an active campaign (real-app scenario 11) renders the campaign ribbon on its card,
 * driven by data on the cart line — no interaction needed.
 */
export const CampaignLine: Story = {
  render: () => (
    <CheckoutHarness
      initial={{
        ...initialCartState,
        lines: patchLine('1105101', { activeCampaign: { title: 'Kampanj', color: '#9a576f' } }),
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const line = canvas.getByRole('article', { name: 'Norrlands Guld Export' })
    await expect(within(line).getByText('Kampanj')).toBeInTheDocument()
  },
}

/** An out-of-stock line (real-app scenario 12) shows the out-of-stock ribbon. */
export const OutOfStockLine: Story = {
  render: () => (
    <CheckoutHarness
      initial={{ ...initialCartState, lines: patchLine('2078801', { outOfStock: true }) }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const line = canvas.getByRole('article', { name: 'Loka Naturell' })
    await expect(within(line).getByText('Slut i lager')).toBeInTheDocument()
  },
}

/**
 * Stock shortage with a replacement offer (real-app scenario 13): the line shows a "change product"
 * affordance; using it swaps the shortage line for its in-stock replacement.
 */
export const StockShortageReplace: Story = {
  render: () => (
    <CheckoutHarness
      initial={{ ...initialCartState, lines: patchLine('2078801', { stockShortage: 2 }) }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const line = canvas.getByRole('article', { name: 'Loka Naturell' })
    await userEvent.click(within(line).getByRole('button', { name: 'Byt produkt' }))

    // The shortage line is replaced in place by the in-stock alternative.
    await expect(canvas.queryByRole('article', { name: 'Loka Naturell' })).toBeNull()
    await expect(canvas.getByRole('article', { name: 'Sofiero Original' })).toBeInTheDocument()
  },
}

/** A per-line loading skeleton (real-app scenario 21 — e.g. while a line is being replaced). */
export const LoadingLine: Story = {
  render: () => (
    <CheckoutHarness
      initial={{ ...initialCartState, lines: patchLine('1105101', { loading: true }) }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const line = canvas.getByRole('article', { name: 'Norrlands Guld Export' })
    await expect(line).toHaveAttribute('aria-busy', 'true')
    // Skeleton — no editable quantity field on the loading line.
    await expect(within(line).queryByRole('spinbutton')).toBeNull()
  },
}

/**
 * Prices hidden (real-app scenario 18 — the `ShowPrices=false` permission): the card price lines and the
 * Översikt summary are both suppressed; the cart is still usable.
 */
export const HidePrices: Story = {
  render: () => <CheckoutHarness initial={{ ...initialCartState, showPrices: false }} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByText('Översikt')).toBeNull()
    await expect(canvas.queryAllByText(/Pris:/)).toHaveLength(0)
    // The lines still render and the cart still works.
    await expect(canvas.getByRole('article', { name: 'Blue Moon Glas' })).toBeInTheDocument()
  },
}

/** Toggling a line's favourite flips the heart (accessible name) and updates cart state live. */
export const ToggleFavorite: Story = {
  render: () => <CheckoutHarness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const line = canvas.getByRole('article', { name: 'Norrlands Guld Export' })
    // Not yet a favourite → the toggle offers to add.
    await userEvent.click(within(line).getByRole('button', { name: 'Spara som favorit' }))
    // Now a favourite → the toggle offers to remove (state round-tripped through the reducer).
    await expect(within(line).getByRole('button', { name: 'Ta bort favorit' })).toBeInTheDocument()
  },
}

/** Editing a line quantity to 0 removes the line (real-app scenario 4). */
export const QuantityToZeroRemoves: Story = {
  render: () => <CheckoutHarness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const line = canvas.getByRole('article', { name: 'Loka Naturell' })
    fireEvent.change(within(line).getByRole('spinbutton'), { target: { value: '0' } })
    await expect(canvas.queryByRole('article', { name: 'Loka Naturell' })).toBeNull()
    await expect(canvas.getByText('Tillagda produkter: 2')).toBeInTheDocument()
  },
}
