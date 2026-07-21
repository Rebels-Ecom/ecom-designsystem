import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductCardVertical } from './ProductCardVertical'
import {
  dummyProductNoVariants,
  dummyWineProduct,
} from '../ProductCard/dummyProduct'

const productImage = { id: 'pcv-image', src: '', sources: [] }

/**
 * `ProductCardVertical` is the standard vertical layout rendered by `ProductCard`. These stories drive
 * it directly (the orchestration props the dispatcher normally supplies are set at `meta.args`).
 */
const meta = {
  title: 'Design System/Organisms/ProductCardVertical',
  component: ProductCardVertical,
  args: {
    product: dummyWineProduct,
    productImage,
    loading: false,
    addToCart: fn(),
    addToCartBtnLabel: 'Lägg i varukorg',
    variantsOpen: false,
    onVariantsButtonClick: fn(),
    handlePackageChange: fn(),
    onCloseVariants: fn(),
    selectedVariantId: dummyWineProduct.partNo,
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
        'linkComponent',
        'className',
      ],
    },
  },
} satisfies Meta<typeof ProductCardVertical>

export default meta
type Story = StoryObj<typeof meta>

/** Standard vertical card. */
export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Lägg i varukorg' }))
    await expect(args.addToCart).toHaveBeenCalled()

    // The packaging button is a disclosure trigger (two variants → enabled).
    const packaging = canvas.getByRole('button', { name: '75cl Engångsglas' })
    await expect(packaging).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(packaging)
    await expect(args.onVariantsButtonClick).toHaveBeenCalled()
  },
}

/** With the variant picker open (controlled) — the card is replaced by the radio-group list. */
export const VariantsOpen: Story = {
  args: { variantsOpen: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('radio', { name: '75cl Engångsglas' })).toBeInTheDocument()
    await expect(canvas.getByRole('radio', { name: '75cl Kolli' })).toBeInTheDocument()
  },
}

/** Favourite + add-to-purchase-list account actions. */
export const AccountActions: Story = {
  args: {
    showFavoriteIcon: true,
    showAddToPurchaseListIcon: true,
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Add to favourites' }))
    await expect(args.onFavoriteIconClick).toHaveBeenCalled()
  },
}

/** A campaign ribbon (a real `activeCampaign` — the legacy `campaign` story arg was vestigial). */
export const Campaign: Story = {
  args: {
    product: {
      ...dummyWineProduct,
      activeCampaign: { title: 'Kampanj', color: '#9a576f' },
    },
  },
}

/** All built-in control names are localisable via `labels`. */
export const Localized: Story = {
  args: {
    showFavoriteIcon: true,
    onFavoriteIconClick: fn(),
    labels: { addToFavorites: 'Lägg till favorit' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Lägg till favorit' })).toBeInTheDocument()
  },
}

/** Visual parity — reproduces the legacy `ProductCardVerticalStory`. */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

/**
 * Visual parity — reproduces the legacy `ProductCardVerticalStoryWithCampaign`. The legacy `campaign`
 * story arg was never read by the component, so this frame is identical to `Visual` (no ribbon).
 */
export const VisualWithCampaign: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

/** Visual parity — single-variant card (legacy `ProductCardVerticalStory_NoVariants`). */
export const VisualNoVariants: Story = {
  tags: ['visual'],
  args: { product: dummyProductNoVariants },
  parameters: { layout: 'fullscreen' },
}

/** Visual parity — with the favourite toggle (legacy `ProductCardVerticalStory_Favorite`). */
export const VisualFavorite: Story = {
  tags: ['visual'],
  args: { showFavoriteIcon: true, onFavoriteIconClick: fn() },
  parameters: { layout: 'fullscreen' },
}

/**
 * Visual parity — `ProductCardVerticalStory_Favorite_Active`. Legacy passed the same args as
 * `-favorite`, so this is a byte-identical twin of `VisualFavorite`.
 */
export const VisualFavoriteActive: Story = {
  tags: ['visual'],
  args: { showFavoriteIcon: true, onFavoriteIconClick: fn() },
  parameters: { layout: 'fullscreen' },
}

/** Visual parity — favourite + purchase-list icons (legacy `ProductCardVerticalStory_AddToPurchaseList`). */
export const VisualAddToPurchaseList: Story = {
  tags: ['visual'],
  args: {
    showFavoriteIcon: true,
    showAddToPurchaseListIcon: true,
    onFavoriteIconClick: fn(),
    onSaveToPurchaseListClick: fn(),
  },
  parameters: { layout: 'fullscreen' },
}
