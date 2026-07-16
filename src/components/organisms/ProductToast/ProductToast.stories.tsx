import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductToast } from './ProductToast'
import { CartProduct, type CartProductItem } from '../CartProduct'
import fallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'

const beer: CartProductItem = {
  partNo: '1105101',
  productName: 'Norrlands Guld Export 5,3',
  productUrl: '#product',
  country: 'Sverige',
  packaging: '50cl Returglas',
  priceStr: '22,68',
  currencyLabel: 'kr',
  unitLabel: 'st',
  quantity: '1',
  salesUnit: 'KLI',
  itemNumberPerSalesUnit: 15,
  totalPrice: '340,15',
}

const cider: CartProductItem = {
  ...beer,
  partNo: '1105102',
  productName: 'Briska Päron 4,5',
  packaging: '33cl Burk',
}

const meta = {
  title: 'Design System/Organisms/ProductToast',
  component: ProductToast,
  args: {
    product: beer,
    label: 'Added to cart',
    position: 'top-right',
    onClose: fn(),
    fallbackImageUrl: fallbackImage,
  },
} satisfies Meta<typeof ProductToast>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical: a slide-in confirmation with a close button. The play test proves the panel is a polite
 * `status` live region carrying the confirmation copy, and that the close button dismisses via `onClose`.
 */
export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const status = canvas.getByRole('status')
    await expect(status).toHaveTextContent('Added to cart')

    const close = canvas.getByRole('button', { name: 'Close' })
    await userEvent.click(close)
    await expect(args.onClose).toHaveBeenCalled()
  },
}

/**
 * With the cart-shortcut button — its count is folded into the accessible name (the badge is
 * decorative), and activating it fires the notification handler.
 */
export const WithCartButton: Story = {
  args: {
    notification: { quantity: 3, onClick: fn() },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const cart = canvas.getByRole('button', { name: 'View cart, 3 items' })
    await userEvent.click(cart)
    await expect(args.notification?.onClick).toHaveBeenCalled()
  },
}

/** Non-modal keyboard dismissal: `Escape` closes the toast without any focus trap. */
export const KeyboardDismiss: Story = {
  play: async ({ args }) => {
    await userEvent.keyboard('{Escape}')
    await expect(args.onClose).toHaveBeenCalled()
  },
}

/** Localised copy — the close and cart accessible names follow `labels`. */
export const Localized: Story = {
  args: {
    notification: { quantity: 3, onClick: fn() },
    labels: {
      close: 'Stäng',
      cart: (quantity) => `Visa varukorg, ${quantity} varor`,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Stäng' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Visa varukorg, 3 varor' })).toBeInTheDocument()
  },
}

/*
 * Gallery-only Visual (no baseline map). The legacy `product-toast-story` captured the CLOSED state —
 * a bare "Add toast" trigger button on an otherwise empty canvas (the story starts closed and a 3s
 * interval auto-closes the toast), which is NOT part of ProductToast, so there is nothing of the
 * component to diff. This frame instead shows the toast OPEN for human review; behaviour is covered by
 * the play tests above.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

/*
 * Gallery-only Visual — the recommended-products variant of the frame above. The recommended slot is
 * consumer-supplied `children` (here two extra CartProduct rows) beneath the divider and title. Same
 * closed-state caveat as `Visual`: the legacy `product-toast-story-with-recommended-products` baseline
 * is the auto-dismissed empty canvas, so it is not mapped.
 */
export const VisualWithRecommendedProducts: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    recommendedProductsTitle: 'You might also like',
    children: (
      <div className="flex flex-col gap-2">
        <CartProduct product={cider} hidePrice fallbackImageUrl={fallbackImage} />
        <CartProduct product={{ ...beer, partNo: '1105103', productName: 'Norrlands Guld 3,5' }} hidePrice fallbackImageUrl={fallbackImage} />
      </div>
    ),
  },
}
