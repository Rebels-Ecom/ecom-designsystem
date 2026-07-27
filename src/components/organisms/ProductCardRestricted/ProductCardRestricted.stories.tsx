import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductCardRestricted } from './ProductCardRestricted'
import {
  dummyProductNoVariants,
  dummyWineProduct,
} from '../ProductCard/productCardFixtures'

const productImage = { id: 'pcr-image', src: '', sources: [] }

/**
 * `ProductCardRestricted` is the trimmed vertical card `ProductCard` renders for restricted users
 * (no pricing, no quantity field). These stories drive it directly (orchestration props at `meta.args`).
 */
const meta = {
  title: 'Design System/Organisms/ProductCardRestricted',
  component: ProductCardRestricted,
  args: {
    product: dummyWineProduct,
    productImage,
    loading: false,
    addToCart: fn(),
    addToCartBtnLabel: 'Lägg i varukorg',
    variantsOpen: false,
    onVariantsButtonClick: fn(),
    onVariantSelect: fn(),
    onCloseVariants: fn(),
    selectedVariantId: dummyWineProduct.partNo,
  },
  parameters: {
    controls: {
      exclude: [
        'product',
        'productImage',
        'addToCart',
        'onVariantSelect',
        'onVariantsButtonClick',
        'onCloseVariants',
        'linkComponent',
        'className',
      ],
    },
  },
} satisfies Meta<typeof ProductCardRestricted>

export default meta
type Story = StoryObj<typeof meta>

/** Standard restricted card — no price or quantity, just name, country, packaging and add-to-cart. */
export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Lägg i varukorg' }))
    await expect(args.addToCart).toHaveBeenCalled()

    const packaging = canvas.getByRole('button', { name: '75cl Engångsglas' })
    await expect(packaging).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(packaging)
    await expect(args.onVariantsButtonClick).toHaveBeenCalled()
  },
}

/** Variant picker open (controlled) — the price/article-number rows stay hidden for restricted users. */
export const VariantsOpen: Story = {
  args: { variantsOpen: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('radio', { name: '75cl Engångsglas' })).toBeInTheDocument()
  },
}

/** Visual parity — reproduces the legacy `ProductCardRestrictedStory`. */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}

/** Visual parity — single-variant restricted card (legacy `ProductCardRestrictedStory_NoVariants`). */
export const VisualNoVariants: Story = {
  tags: ['visual'],
  args: { product: dummyProductNoVariants },
  parameters: { layout: 'fullscreen' },
}
