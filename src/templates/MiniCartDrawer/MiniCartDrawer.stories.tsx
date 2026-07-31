import { useReducer, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Button } from '../../components/molecules/Button'
import { DemoLink } from '../_shared/chrome'
import { cartReducer, initialCartState, type CartLine, type CartState } from '../_shared/cartModel'
import { MiniCartDrawer } from './MiniCartDrawer'
import { addableProduct } from './MiniCartDrawer.fixtures'

/**
 * **MiniCartDrawer templates** — the app's `CartToolbar` wired live: the header cart button opens the
 * slide-in {@link MiniCartDrawer}, adding a product raises the "added to cart" toast, and removing /
 * emptying updates the drawer. The harness runs the shared `cartReducer` (from the app's `cartMachine`)
 * for the lines and holds the drawer-open + recent-item UI state locally (the machine's `Open`/`Closed`
 * states + `context.recentItem`). Untagged.
 */

function Harness({
  initial = initialCartState,
  initialOpen = false,
}: {
  initial?: CartState
  initialOpen?: boolean
}) {
  const [state, dispatch] = useReducer(cartReducer, initial)
  const [open, setOpen] = useState(initialOpen)
  const [recentItem, setRecentItem] = useState<CartLine | null>(null)
  const [toastOpen, setToastOpen] = useState(false)
  const favoriteIds = state.lines.filter((line) => line.isFavorite).map((line) => line.partNo)

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', line: { ...addableProduct, quantity: 1 } })
    setRecentItem({ ...addableProduct, quantity: 1 })
    setToastOpen(true)
  }

  return (
    <div className="p-4">
      <Button type="button" surface="secondary" onClick={addToCart}>
        Lägg Mariestads i varukorgen
      </Button>
      <MiniCartDrawer
        open={open}
        lines={state.lines}
        recentItem={recentItem}
        toastOpen={toastOpen}
        favoriteIds={favoriteIds}
        onToggleOpen={() => setOpen((v) => !v)}
        onClose={() => setOpen(false)}
        onRemoveLine={(partNo) => dispatch({ type: 'REMOVE_FROM_CART', partNo })}
        onToggleFavorite={(partNo) => dispatch({ type: 'TOGGLE_FAVORITE', partNo })}
        onClearCart={() => dispatch({ type: 'CLEAR_CART' })}
        onGoToCheckout={() => setOpen(false)}
        onToastCartClick={() => setToastOpen(false)}
        linkComponent={DemoLink}
      />
    </div>
  )
}

const meta = {
  title: 'Design System/Templates/Flow 1 — Checkout/MiniCartDrawer',
  component: MiniCartDrawer,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  args: {
    open: false,
    lines: initialCartState.lines,
    recentItem: null,
    toastOpen: false,
    favoriteIds: [],
    onToggleOpen: () => {},
    onClose: () => {},
    onRemoveLine: () => {},
    onToggleFavorite: () => {},
    onClearCart: () => {},
    onGoToCheckout: () => {},
    onToastCartClick: () => {},
  },
} satisfies Meta<typeof MiniCartDrawer>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The open drawer. The `play` checks the "Varukorg" heading, the product-count row, the cart lines and
 * that the "Till kassan" CTA points at the checkout.
 */
export const Default: Story = {
  render: () => <Harness initialOpen />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const drawer = canvas.getByRole('dialog', { name: 'Varukorg' })
    await expect(within(drawer).getByRole('heading', { level: 3, name: 'Varukorg' })).toBeInTheDocument()
    await expect(within(drawer).getByText('4 produkter i varukorgen')).toBeInTheDocument()
    await expect(within(drawer).getByRole('article', { name: 'Blue Moon Glas' })).toBeInTheDocument()
    const toCheckout = within(drawer).getByRole('link', { name: 'Till kassan' })
    await expect(toCheckout).toHaveAttribute('href', '/varukorg')
  },
}

/**
 * Opening and closing the drawer (`TOGGLE_CART`). The `play` clicks the header cart button to open it,
 * then the close button to dismiss it.
 */
export const ToggleOpen: Story = {
  render: () => <Harness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('dialog', { name: 'Varukorg' })).toBeNull()

    await userEvent.click(canvas.getByRole('button', { name: 'Varukorg, 4 varor' }))
    const drawer = await canvas.findByRole('dialog', { name: 'Varukorg' })
    await expect(drawer).toBeInTheDocument()

    await userEvent.click(within(drawer).getByRole('button', { name: 'Stäng varukorg' }))
    await expect(canvas.queryByRole('dialog', { name: 'Varukorg' })).toBeNull()
  },
}

/**
 * Adding a product raises the "added to cart" toast (`ADD_TO_CART` → `recentItem`). The `play` adds a
 * product from outside the cart and checks the toast announces it and the cart badge counts it.
 */
export const AddToCartToast: Story = {
  render: () => <Harness />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Lägg Mariestads i varukorgen' }))

    const toast = await canvas.findByRole('status')
    await expect(within(toast).getByRole('heading', { name: 'Mariestads Export' })).toBeInTheDocument()
    await expect(within(toast).getByRole('button', { name: 'Visa varukorg, 5 varor' })).toBeInTheDocument()
  },
}

/**
 * Removing a line (`REMOVE_FROM_CART`). The `play` removes the Loka line and checks it's gone and the
 * count drops to 3.
 */
export const RemoveLine: Story = {
  render: () => <Harness initialOpen />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const drawer = canvas.getByRole('dialog', { name: 'Varukorg' })
    const loka = within(drawer).getByRole('article', { name: 'Loka Naturell' })
    await userEvent.click(within(loka).getByRole('button', { name: 'Ta bort produkt' }))
    await expect(within(drawer).queryByRole('article', { name: 'Loka Naturell' })).toBeNull()
    await expect(within(drawer).getByText('3 produkter i varukorgen')).toBeInTheDocument()
  },
}

/**
 * Emptying the cart (`CLEAR_CART`). The `play` clicks "Töm varukorg" and checks the empty state — no
 * lines, no checkout CTA.
 */
export const EmptyCart: Story = {
  render: () => <Harness initialOpen />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const drawer = canvas.getByRole('dialog', { name: 'Varukorg' })
    await userEvent.click(within(drawer).getByRole('button', { name: 'Töm varukorg' }))
    await expect(within(drawer).getByText('Din varukorg är tom.')).toBeInTheDocument()
    await expect(within(drawer).queryByRole('link', { name: 'Till kassan' })).toBeNull()
    await expect(within(drawer).getByText('0 produkter i varukorgen')).toBeInTheDocument()
  },
}
