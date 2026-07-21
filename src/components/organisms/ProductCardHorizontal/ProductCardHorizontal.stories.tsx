import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductCardHorizontal } from './ProductCardHorizontal'
import { dummyBeerProduct } from '../ProductCard/dummyProduct'

const productImage = { id: 'pch-image', src: '', sources: [] }

/**
 * `ProductCardHorizontal` is the row layout `ProductCard` renders for `cardDisplay="horizontal"`.
 * These stories drive it directly (orchestration props at `meta.args`).
 */
const meta = {
  title: 'Design System/Organisms/ProductCardHorizontal',
  component: ProductCardHorizontal,
  args: {
    product: dummyBeerProduct,
    productImage,
    loading: false,
    addToCart: fn(),
    addToCartBtnLabel: 'Add to cart',
    showPackaging: true,
    variantsOpen: false,
    onVariantsButtonClick: fn(),
    handlePackageChange: fn(),
    onCloseVariants: fn(),
    onChangeQuantity: fn(),
    onClickRemoveProduct: fn(),
    selectedVariantId: dummyBeerProduct.partNo,
    productArea: 'category',
  },
  parameters: {
    controls: {
      exclude: [
        'product',
        'productImage',
        'addToCart',
        'handlePackageChange',
        'onVariantsButtonClick',
        'onCloseVariants',
        'onChangeQuantity',
        'onClickRemoveProduct',
        'linkComponent',
        'className',
      ],
    },
  },
} satisfies Meta<typeof ProductCardHorizontal>

export default meta
type Story = StoryObj<typeof meta>

/** Standard horizontal card with cart, remove, favourite and open-variants actions. */
export const Default: Story = {
  args: {
    showFavoriteIcon: true,
    showAddToPurchaseListIcon: true,
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button', { name: 'Add to cart' }))
    await expect(args.addToCart).toHaveBeenCalled()

    await userEvent.click(canvas.getByRole('button', { name: 'Remove product' }))
    await expect(args.onClickRemoveProduct).toHaveBeenCalledWith('1125111')

    // The open-variants icon is a disclosure trigger (two variants → shown).
    await userEvent.click(canvas.getByRole('button', { name: 'Open variants list' }))
    await expect(args.onVariantsButtonClick).toHaveBeenCalled()
  },
}

/** Restricted user — the quantity/price are hidden and the cart control is a labelled button. */
export const Restricted: Story = {
  args: { isRestrictedUser: true },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Add to cart' }))
    await expect(args.addToCart).toHaveBeenCalled()
  },
}

/** All built-in control names are localisable via `labels`. */
export const Localized: Story = {
  args: { labels: { removeProduct: 'Ta bort produkt' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Ta bort produkt' })).toBeInTheDocument()
  },
}

/** Visual parity — reproduces the legacy `Product_Card_Horizontal`. */
export const Visual: Story = {
  tags: ['visual'],
  args: {
    showFavoriteIcon: true,
    showAddToPurchaseListIcon: true,
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
    productQuantityDisabled: true,
  },
  parameters: { layout: 'fullscreen' },
}
