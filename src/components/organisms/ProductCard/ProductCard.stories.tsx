import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductCard } from './ProductCard'
import { dummyBeerProduct, dummyProductNoVariants, dummyWineProduct } from './productCardFixtures'

/**
 * `ProductCard` is the stateful dispatcher for the product-card family: it owns the active product
 * (image, quantity, running total, selected variant) and renders `ProductCardHorizontal`,
 * `ProductCardVertical` or `ProductCardRestricted` based on `cardDisplay` / `isRestrictedUser`.
 */
const meta = {
  title: 'Design System/Organisms/ProductCard',
  component: ProductCard,
  args: {
    addToCart: fn(),
    addToCartBtnLabel: 'Lägg i varukorg',
    loading: false,
  },
  parameters: {
    controls: {
      exclude: ['product', 'addToCart', 'onChangeQuantity', 'onVariantChange', 'linkComponent', 'className'],
    },
  },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

/** Standard vertical card. Add-to-cart reports the current product; the packaging button opens the picker. */
export const Default: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyWineProduct,
    onVariantsButtonClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    // Add-to-cart forwards the internally-managed product.
    await userEvent.click(canvas.getByRole('button', { name: 'Lägg i varukorg' }))
    await expect(args.addToCart).toHaveBeenCalled()

    // The packaging button is a disclosure that opens the variant picker (two variants → enabled).
    await userEvent.click(canvas.getByRole('button', { name: '75cl Engångsglas' }))
    await expect(args.onVariantsButtonClick).toHaveBeenCalled()
    await expect(await canvas.findByRole('radio', { name: '75cl Kolli' })).toBeInTheDocument()
  },
}

/** Horizontal (row) card with a quantity field and cart / favourite / purchase-list / remove actions. */
export const Horizontal: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: dummyBeerProduct,
    addToCartBtnLabel: 'Add to cart',
    showPackaging: true,
    onRemoveProduct: fn(),
    showFavoriteIcon: true,
    showAddToPurchaseListIcon: true,
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
    // Seed this product as an existing favourite so the toggle renders in its active (filled) state.
    favoriteProductsIds: [dummyBeerProduct.partNo],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Remove product' }))
    await expect(args.onRemoveProduct).toHaveBeenCalledWith('1125111')

    // The favourite toggle is present and reflects the seeded favourite state.
    await userEvent.click(canvas.getByRole('button', { name: 'Remove from favourites' }))
    await expect(args.onFavoriteIconClick).toHaveBeenCalledWith('1125111', true, expect.anything())
  },
}

/** A single-variant product — the packaging button is disabled (nothing to switch to). */
export const NoVariants: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyProductNoVariants,
    defaultQuantity: '4',
  },
}

/** Skeleton state while the product loads. */
export const Loading: Story = {
  args: {
    cardDisplay: 'vertical',
    product: dummyProductNoVariants,
    loading: true,
  },
}

/** All built-in control names are localisable via `labels` (English defaults). */
export const Localized: Story = {
  args: {
    cardDisplay: 'horizontal',
    product: dummyBeerProduct,
    addToCartBtnLabel: 'Lägg i varukorg',
    onRemoveProduct: fn(),
    labels: { removeProduct: 'Ta bort produkt' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Ta bort produkt' })).toBeInTheDocument()
  },
}

/** Visual parity — vertical card (reproduces the legacy `ProductCardStory`). */
export const Visual: Story = {
  tags: ['visual'],
  args: { cardDisplay: 'vertical', product: dummyWineProduct },
  parameters: { layout: 'fullscreen' },
}

/** Visual parity — horizontal card (reproduces the legacy `ProductCardStory_Horizontal`). */
export const VisualHorizontal: Story = {
  tags: ['visual'],
  args: { cardDisplay: 'horizontal', product: dummyBeerProduct, addToCartBtnLabel: 'Lägg i varukorg', showPackaging: true },
  parameters: { layout: 'fullscreen' },
}

/** Visual parity — loading skeleton (reproduces the legacy `ProductCardStory_Loading`). */
export const VisualLoading: Story = {
  tags: ['visual'],
  args: { cardDisplay: 'vertical', product: dummyProductNoVariants, loading: true },
  parameters: { layout: 'fullscreen' },
}

/** Visual parity — single-variant card (reproduces the legacy `ProductCardStory_NoVariants`). */
export const VisualNoVariants: Story = {
  tags: ['visual'],
  args: { cardDisplay: 'vertical', product: dummyProductNoVariants, defaultQuantity: '4' },
  parameters: { layout: 'fullscreen' },
}
