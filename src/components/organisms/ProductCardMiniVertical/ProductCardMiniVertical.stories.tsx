import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import beerGlass from '../../../assets/product-images/beer-glass.jpg'
import type { ProductCardProduct, ProductCardVariant } from '../ProductCard/types'
import { ProductCardMiniVertical } from './ProductCardMiniVertical'

// The mini card is a compact, ~2-up grid tile — present it at a realistic cell width so its layout
// (and the variant picker that overlays the card) reads correctly. The Visual story sets its own width.
const inCardCell: Decorator = (Story) => (
  <div style={{ maxWidth: '20rem' }}>
    <Story />
  </div>
)

const image = { id: 'mini-thumb', src: beerGlass, sources: [], alt: '' }
const productName = 'Wisby Pils 5,0 EKO'

// Rich variants (the mini re-derives price/packaging/image from the selected one, like the family).
const variants: ProductCardVariant[] = [
  {
    productName,
    variantName: '33cl Engångsglas',
    variantId: '1105101',
    priceStr: '10,00',
    price: 10,
    pricePerUnit: 10,
    pricePerUnitString: '10,00',
    salesUnit: 'Kolli',
    itemNumberPerSalesUnit: 24,
    image,
  },
  {
    productName,
    variantName: '50cl Burk',
    variantId: '1105103',
    priceStr: '11,20',
    price: 11.2,
    pricePerUnit: 11.2,
    pricePerUnitString: '11,20',
    salesUnit: 'Kolli',
    itemNumberPerSalesUnit: 20,
    image: { id: 'mini-thumb-fallback', src: '', sources: [], alt: '' },
  },
]

const product: ProductCardProduct = {
  partNo: '1105101',
  productName,
  productUrl: '/product/1105101',
  primaryImageUrl: '',
  packaging: '33cl Engångsglas',
  priceLabel: 'Listpris',
  priceStr: '10',
  price: 10,
  pricePerUnit: 10,
  pricePerUnitString: '10',
  currencyLabel: 'kr',
  unitLabel: 'st',
  salesUnit: 'Kolli',
  itemNumberPerSalesUnit: 24,
  productVariantList: variants,
  tags: [
    { text: 'Eko', color: 'green' },
    { text: 'Nyhet', color: 'black' },
  ],
  sellerOnly: true,
  isAccessoryPotItem: true,
  partNoLabel: 'Art.nr.',
  aLabel: 'à',
}

const meta = {
  title: 'Design System/Organisms/ProductCardMiniVertical',
  component: ProductCardMiniVertical,
  parameters: {
    controls: { exclude: ['addToCart', 'onChangeQuantity', 'onVariantChange', 'onProductClick'] },
  },
  args: {
    product,
    variantsInCart: [],
    addToCartBtnLabel: 'Add to cart',
    addToCart: fn(),
    onChangeQuantity: fn(),
    onVariantChange: fn(),
    fallbackImageUrl: beerGlass,
  },
} satisfies Meta<typeof ProductCardMiniVertical>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical card. The `play` proves the product name is a focusable link, the packaging button is a
 * disclosure that opens the variant picker (dismissed with the close button), and pressing Add promotes
 * the control to the quantity stepper seeded at 1 (the legacy "Add bumps the quantity" behaviour).
 */
export const Default: Story = {
  decorators: [inCardCell],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const nameLink = canvas.getByRole('link', { name: productName })
    await userEvent.tab()
    await expect(nameLink).toHaveFocus()

    // Packaging button is a disclosure trigger.
    const packaging = canvas.getByRole('button', { name: '33cl Engångsglas' })
    await expect(packaging).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(packaging)
    await expect(packaging).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByRole('group', { name: 'Choose a variant' })).toBeInTheDocument()
    await userEvent.click(canvas.getByRole('button', { name: 'Close' }))
    await expect(packaging).toHaveAttribute('aria-expanded', 'false')

    // Add promotes the control to a stepper seeded at 1.
    await userEvent.click(canvas.getByRole('button', { name: 'Add to cart' }))
    await expect(canvas.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue(1)
  },
}

/**
 * Favourite + purchase-list icon controls. The `play` asserts both icon-only buttons expose an
 * action-describing accessible name (1.1.1 / 4.1.2) and that activating them fires their handlers.
 */
export const WithIconActions: Story = {
  decorators: [inCardCell],
  args: {
    showFavoriteIcon: true,
    favoriteProductsIds: ['1105101'],
    onFavoriteIconClick: fn(),
    showAddToPurchaseListIcon: true,
    onSaveToPurchaseListClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    const purchaseList = canvas.getByRole('button', { name: 'Add to purchase list' })
    await userEvent.click(purchaseList)
    await expect(args.onSaveToPurchaseListClick).toHaveBeenCalledWith('1105101', expect.anything())

    // In favouriteProductsIds → the toggle names the "remove" action.
    const favorite = canvas.getByRole('button', { name: 'Remove from favourites' })
    await userEvent.click(favorite)
    await expect(args.onFavoriteIconClick).toHaveBeenCalledWith('1105101', true, expect.anything())
  },
}

/**
 * Restricted user — pricing is hidden, and so are the favourite / add-to-purchase-list icons (those
 * account actions aren't available). Add-to-cart routes to `addToCart()` (login-and-buy), with no args.
 */
export const RestrictedUser: Story = {
  decorators: [inCardCell],
  args: {
    isRestrictedUser: true,
    showFavoriteIcon: true,
    favoriteProductsIds: ['1105101'],
    onFavoriteIconClick: fn(),
    showAddToPurchaseListIcon: true,
    onSaveToPurchaseListClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('button', { name: 'Add to purchase list' })).toBeNull()
    await expect(canvas.queryByRole('button', { name: 'Add to favourites' })).toBeNull()
    await expect(canvas.queryByText('Listpris: 10 kr/st')).toBeNull()

    await userEvent.click(canvas.getByRole('button', { name: 'Add to cart' }))
    await expect(args.addToCart).toHaveBeenCalledWith()
  },
}

/** Loading state — a decorative skeleton plus a polite `role="status"` region; no add-to-cart. */
export const Loading: Story = {
  decorators: [inCardCell],
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toHaveTextContent('Loading product')
    await expect(canvas.queryByRole('button', { name: 'Add to cart' })).toBeNull()
  },
}

/** All built-in strings overridden — proves the `labels` prop drives the accessible names. */
export const Localized: Story = {
  decorators: [inCardCell],
  args: {
    showAddToPurchaseListIcon: true,
    onSaveToPurchaseListClick: fn(),
    labels: {
      addToPurchaseList: 'Lägg till i inköpslista',
      selectPackaging: 'Välj förpackning',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('button', { name: 'Lägg till i inköpslista' }),
    ).toBeInTheDocument()
  },
}

/*
 * Visual parity — reproduces the legacy `product-card-mini-vertical` frame: a single card at ~50%
 * width inside the legacy light-grey flex wrapper, with the seller-only + accessory markers, Eko/Nyhet
 * tags, packaging picker and add-to-cart. Colours diverge for accessibility and the brand secondary font
 * renders the tags/price, so this is mapped review-only. The Swedish quantity label is reproduced for
 * fidelity. No `play` — the captured frame must not mutate.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    labels: {
      quantitySummary: (quantity, salesUnit, itemNumberPerSalesUnit) =>
        `${quantity} x ${salesUnit} (${itemNumberPerSalesUnit} styck)`,
    },
    showFavoriteIcon: true,
    favoriteProductsIds: [],
    onFavoriteIconClick: fn(),
    showAddToPurchaseListIcon: true,
    onSaveToPurchaseListClick: fn(),
  },
  render: (renderArgs) => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        backgroundColor: 'lightgray',
        width: '100%',
        padding: '0.5rem',
      }}
    >
      <div style={{ width: 'calc(50% - 0.25rem)' }}>
        <ProductCardMiniVertical {...renderArgs} />
      </div>
    </div>
  ),
}
