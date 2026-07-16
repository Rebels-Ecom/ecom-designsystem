import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import beerGlass from '../../../assets/product-images/beer-glass.jpg'
import type { ProductVariantListItem } from '../ProductVariantList'
import { ProductCardMiniVertical } from './ProductCardMiniVertical'

// The mini card is a compact, ~2-up grid tile — present it at a realistic cell width so its layout
// (and the variant picker that overlays the card) reads correctly. The Visual story sets its own width.
const inCardCell: Decorator = (Story) => (
  <div style={{ maxWidth: '20rem' }}>
    <Story />
  </div>
)

// A real (bundled, deterministic) product photo for the variant thumbnails.
const image = { id: 'mini-thumb', src: beerGlass, sources: [], alt: '' }

const productName = 'Wisby Pils 5,0 EKO'
// The last variant deliberately has no image, so the picker exercises the fallback placeholder (the
// mini card forwards its `fallbackImageUrl` to the variants) alongside the two real product photos.
const variants: ProductVariantListItem[] = [
  { productName, variantName: '33cl Engångsglas', variantId: '1105101', priceStr: '10,00', image },
  { productName, variantName: '50cl Returglas', variantId: '1105102', priceStr: '12,40', image },
  {
    productName,
    variantName: '50cl Burk',
    variantId: '1105103',
    priceStr: '11,20',
    image: { id: 'mini-thumb-fallback', src: '', sources: [], alt: '' },
  },
]

const meta = {
  title: 'Design System/Organisms/ProductCardMiniVertical',
  component: ProductCardMiniVertical,
  parameters: {
    controls: { exclude: ['onAddToCart', 'onChangeQuantity', 'onVariantSelect', 'onProductClick'] },
  },
  args: {
    product: {
      partNo: '1105101',
      productName,
      productUrl: '/product/1105101',
      packaging: '33cl Engångsglas',
      priceLabel: 'Listpris',
      priceStr: '10',
      currencyLabel: 'kr',
      unitLabel: 'st',
      totalPrice: '548,26',
      salesUnit: 'Kolli',
      itemNumberPerSalesUnit: 24,
      variants,
      tags: [
        { text: 'Eko', color: 'green' },
        { text: 'Nyhet', color: 'black' },
      ],
      sellerOnly: true,
      isAccessoryPotItem: true,
    },
    addToCartLabel: 'Add to cart',
    quantity: 0,
    onAddToCart: fn(),
    onChangeQuantity: fn(),
    onVariantSelect: fn(),
  },
} satisfies Meta<typeof ProductCardMiniVertical>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical card. The `play` proves the product name is a focusable link, the add-to-cart button
 * activates its handler, and the packaging button is a disclosure that opens the variant picker
 * (`aria-expanded` flips true) and is dismissed with `Escape`.
 */
export const Default: Story = {
  decorators: [inCardCell],
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    // Product name is a real, focusable link.
    const nameLink = canvas.getByRole('link', { name: productName })
    await userEvent.tab()
    await expect(nameLink).toHaveFocus()

    // Add-to-cart activates its handler.
    await userEvent.click(canvas.getByRole('button', { name: 'Add to cart' }))
    await expect(args.onAddToCart).toHaveBeenCalled()

    // Packaging button is a disclosure trigger.
    const packaging = canvas.getByRole('button', { name: '33cl Engångsglas' })
    await expect(packaging).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(packaging)
    await expect(packaging).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByRole('group', { name: 'Choose a variant' })).toBeInTheDocument()

    // The picker's own close button dismisses the disclosure.
    await userEvent.click(canvas.getByRole('button', { name: 'Close' }))
    await expect(packaging).toHaveAttribute('aria-expanded', 'false')
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
    isFavorite: true,
    onFavoriteClick: fn(),
    showAddToPurchaseListIcon: true,
    onAddToPurchaseList: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    const purchaseList = canvas.getByRole('button', { name: 'Add to purchase list' })
    await userEvent.click(purchaseList)
    await expect(args.onAddToPurchaseList).toHaveBeenCalled()

    // isFavorite → the toggle names the "remove" action.
    const favorite = canvas.getByRole('button', { name: 'Remove from favourites' })
    await userEvent.click(favorite)
    await expect(args.onFavoriteClick).toHaveBeenCalled()
  },
}

/**
 * Restricted user — pricing is hidden, and so are the favourite / add-to-purchase-list icons (those
 * account actions aren't available), even though `showFavoriteIcon` / `showAddToPurchaseListIcon` are set.
 */
export const RestrictedUser: Story = {
  decorators: [inCardCell],
  args: {
    isRestrictedUser: true,
    showFavoriteIcon: true,
    onFavoriteClick: fn(),
    showAddToPurchaseListIcon: true,
    onAddToPurchaseList: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('button', { name: 'Add to purchase list' })).toBeNull()
    await expect(canvas.queryByRole('button', { name: 'Add to favourites' })).toBeNull()
    // Pricing is suppressed too.
    await expect(canvas.queryByText('Listpris: 10 kr/st')).toBeNull()
    // The product is still navigable and orderable.
    await expect(canvas.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument()
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
    onAddToPurchaseList: fn(),
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
 * tags, packaging picker and add-to-cart. Colours diverge for accessibility (dark title over the legacy
 * orange link; dark-on-orange "S" badge over the legacy white-on-orange) and the brand secondary font
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
    onFavoriteClick: fn(),
    showAddToPurchaseListIcon: true,
    onAddToPurchaseList: fn(),
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
