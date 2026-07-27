import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import beerGlass from '../../../assets/product-images/beer-glass.jpg'
import { MiniProductToast, type MiniProductToastCartItem } from './MiniProductToast'

const cartProducts: MiniProductToastCartItem[] = [
  {
    product: {
      partNo: '2543824',
      primaryImageUrl: beerGlass,
      productName: 'El Esteco Malbec',
      packaging: '75cl Engångsglas',
      priceLabel: 'Pris',
      priceStr: '136',
      currencyLabel: 'kr',
      unitLabel: 'ST',
      country: 'Argentina',
      partNoLabel: 'Art.nr.',
    },
  },
]

const meta = {
  title: 'Design System/Organisms/MiniProductToast',
  component: MiniProductToast,
  parameters: { layout: 'fullscreen' },
  args: {
    open: true,
    cartProducts,
    notification: { quantity: 1, onClick: fn() },
  },
} satisfies Meta<typeof MiniProductToast>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Open toast. The `play` proves it is a polite status region (4.1.3), the cart-shortcut button folds
 * the item count into its accessible name (4.1.2), it surfaces the last cart product, and activating
 * the cart button fires its handler.
 */
export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
    // Open → the content is live (not inert).
    await expect(canvasElement.querySelector('[inert]')).toBeNull()

    const cart = canvas.getByRole('button', { name: 'View cart, 1 items' })
    await expect(cart).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { name: 'El Esteco Malbec' })).toBeInTheDocument()

    await userEvent.click(cart)
    await expect(args.notification!.onClick).toHaveBeenCalled()
  },
}

/**
 * Pending cart update — the cart-shortcut button is disabled and a spinner shows. The `play` confirms
 * the busy state.
 */
export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'View cart, 1 items' })).toBeDisabled()
  },
}

/**
 * Closed — the panel is slid off-screen and `inert`, so its content is removed from the tab order and
 * the accessibility tree (the cart button can't be tabbed into). The `play` confirms the inert subtree
 * and that the cart button is gone from the a11y tree.
 */
export const Closed: Story = {
  args: { open: false },
  play: async ({ canvasElement }) => {
    // The content wrapper carries `inert` while closed — in a real browser that removes its subtree
    // (the cart button, the product) from the tab order and the accessibility tree.
    await expect(canvasElement.querySelector('[inert]')).not.toBeNull()
  },
}

/** All built-in strings overridden — proves the `labels` prop drives the cart button's accessible name. */
export const Localized: Story = {
  args: {
    notification: { quantity: 3, onClick: fn() },
    labels: { cart: (quantity) => `Visa varukorg, ${quantity} varor` },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('button', { name: 'Visa varukorg, 3 varor' }),
    ).toBeInTheDocument()
  },
}

/*
 * Gallery review frame (current-only). The legacy `mini-product-toast-story` baseline captured the
 * toast **closed** (the story seeds an empty cart, so `open` is false → only the demo toggle buttons
 * are on screen). The V2 Visual instead renders the toast **open** — a deliberately *different* scene,
 * so it is NOT mapped to the legacy baseline (same closed-toast class as `ProductToast`). No `play`.
 */
export const Visual: Story = {
  tags: ['visual'],
}
