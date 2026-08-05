import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import type { ProductCardProduct, ProductCardVariant } from '../ProductCard/types'
import { ProductCardMiniVertical } from './ProductCardMiniVertical'

/**
 * **Runtime contract lock for `ProductCardMiniVertical`.** The mini card reproduces the legacy
 * `product-card-mini-vertical` (v1.6.6) behaviour: it owns an internal cart-quantity state machine
 * seeded from `variantsInCart`, recomputes the total with the sv-SE {@link calculateMiniTotalPrice},
 * reports quantity changes to `onChangeQuantity` **debounced 1000 ms** with the merged product, and the
 * Add button bumps the quantity for a normal user (calling `onChangeQuantity`, NOT `addToCart`) while a
 * restricted user's Add calls `addToCart()` with no args. These stories lock that behaviour; they are
 * untagged (behaviour, not pixels) and axe-scanned like any story.
 */

const image = { id: 'mv', src: '', sources: [] }

const variants: ProductCardVariant[] = [
  {
    productName: 'Wisby Pils',
    variantName: '33cl Engångsglas',
    variantId: 'MV-1',
    priceStr: '10,00',
    price: 10,
    pricePerUnit: 10,
    pricePerUnitString: '10,00',
    salesUnit: 'Kolli',
    itemNumberPerSalesUnit: 24,
    image,
  },
  {
    productName: 'Wisby Pils',
    variantName: '50cl Burk',
    variantId: 'MV-2',
    priceStr: '12,40',
    price: 12.4,
    pricePerUnit: 12.4,
    pricePerUnitString: '12,40',
    salesUnit: 'Kolli',
    itemNumberPerSalesUnit: 20,
    image,
  },
]

const baseProduct: ProductCardProduct = {
  partNo: 'MV-1',
  productName: 'Wisby Pils',
  productUrl: '/product/MV-1',
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
  partNoLabel: 'Art.nr.',
  aLabel: 'à',
}

const meta = {
  title: 'Design System/Organisms/ProductCardMiniVertical/Contract',
  component: ProductCardMiniVertical,
  args: {
    product: baseProduct,
    variantsInCart: [],
    addToCartBtnLabel: 'Lägg i varukorg',
    addToCart: fn(),
    onChangeQuantity: fn(),
    onVariantChange: fn(),
  },
  parameters: {
    controls: { exclude: ['addToCart', 'onChangeQuantity', 'onVariantChange', 'onProductClick'] },
  },
} satisfies Meta<typeof ProductCardMiniVertical>

export default meta
type Story = StoryObj<typeof meta>

/** `variantsInCart` seeds the stepper quantity for the selected variant (legacy in-cart quantity). */
export const VariantsInCartSeedsQuantity: Story = {
  args: { variantsInCart: [{ variantId: 'MV-1', quantity: 3 }] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue(3)
  },
}

/**
 * Stepping reports the merged product to `onChangeQuantity` **debounced** — legacy fires the app's cart
 * update ~1000 ms after the last change, with a product-shaped payload carrying the new (string) quantity.
 */
export const IncrementReportsProductDebounced: Story = {
  args: { variantsInCart: [{ variantId: 'MV-1', quantity: 2 }] },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByRole('spinbutton', { name: 'Quantity' })
    await expect(field).toHaveValue(2)

    await userEvent.click(canvas.getByRole('button', { name: 'Increase quantity' }))
    // Stepper updates immediately…
    await expect(field).toHaveValue(3)
    // …and the debounced report carries the merged product with the new quantity as a string.
    await waitFor(
      () =>
        expect(args.onChangeQuantity).toHaveBeenLastCalledWith(
          expect.objectContaining({ partNo: 'MV-1', quantity: '3' }),
        ),
      { timeout: 2500 },
    )
  },
}

/**
 * The legacy Add semantics for a NORMAL user: Add bumps the quantity to ≥1 (promoting the control to a
 * stepper) and reports via the debounced `onChangeQuantity` — it does NOT call `addToCart`.
 */
export const AddBumpsQuantityNotAddToCart: Story = {
  args: { variantsInCart: [] },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Lägg i varukorg' }))

    // Promoted to a stepper seeded at 1, immediately.
    await expect(canvas.getByRole('spinbutton', { name: 'Quantity' })).toHaveValue(1)
    await expect(args.addToCart).not.toHaveBeenCalled()
    await waitFor(
      () =>
        expect(args.onChangeQuantity).toHaveBeenLastCalledWith(
          expect.objectContaining({ partNo: 'MV-1', quantity: '1' }),
        ),
      { timeout: 2500 },
    )
  },
}

/** A restricted user's Add calls `addToCart()` with no arguments (login-and-buy) and never bumps quantity. */
export const RestrictedAddCallsAddToCart: Story = {
  args: { isRestrictedUser: true },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Lägg i varukorg' }))
    await expect(args.addToCart).toHaveBeenCalledWith()
    await expect(args.onChangeQuantity).not.toHaveBeenCalled()
  },
}

/**
 * Choosing a packaging variant re-derives the product from that variant (price, packaging, image …) and
 * fires `onVariantChange` with the merged product.
 */
export const VariantChangeReDerives: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: '33cl Engångsglas' }))
    await userEvent.click(await canvas.findByRole('radio', { name: '50cl Burk' }))

    await expect(args.onVariantChange).toHaveBeenCalledWith(
      expect.objectContaining({ partNo: 'MV-2', packaging: '50cl Burk', salesUnit: 'Kolli' }),
    )
    // The packaging button now reflects the chosen variant.
    await expect(canvas.getByRole('button', { name: '50cl Burk' })).toBeInTheDocument()
  },
}

/** Ribbon precedence — `activeCampaign` wins over `isLimitedProduct` and `outOfStock` (all set at once). */
export const RibbonPrecedenceCampaignWins: Story = {
  args: {
    product: {
      ...baseProduct,
      activeCampaign: { title: 'Kampanj', color: '#9a576f' },
      isLimitedProduct: true,
      limitedLabel: 'Begränsad',
      outOfStock: true,
      outOfStockLabel: 'Slut i lager',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Kampanj')).toBeInTheDocument()
    await expect(canvas.queryByText('Begränsad')).toBeNull()
    await expect(canvas.queryByText('Slut i lager')).toBeNull()
  },
}

/** `hideCartButton` removes the whole add/stepper control. */
export const HideCartButton: Story = {
  args: { hideCartButton: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('button', { name: 'Lägg i varukorg' })).toBeNull()
    await expect(canvas.queryByRole('spinbutton', { name: 'Quantity' })).toBeNull()
  },
}
