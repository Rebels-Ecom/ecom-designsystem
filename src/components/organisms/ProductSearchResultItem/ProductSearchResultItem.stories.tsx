import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductSearchResultItem } from './ProductSearchResultItem'
import beerGlass from '../../../assets/product-images/beer-glass.jpg'

// Real product photo (bundled from the legacy assets, so the review gallery renders reproducibly
// with no network). Decorative (empty alt) — the product name is the adjacent accessible text.
const image = { id: 'psr-thumb', src: beerGlass, sources: [], alt: '' }

const meta = {
  title: 'Design System/Organisms/Product/ProductSearchResultItem',
  component: ProductSearchResultItem,
  args: {
    partNo: '1109611',
    productName: 'Gotlands Bryggeri Wisby Kloster 5% 33cl',
    image,
    onSelect: fn(),
  },
} satisfies Meta<typeof ProductSearchResultItem>

export default meta
type Story = StoryObj<typeof meta>

/** Single product (no variants) — a trailing add button whose name includes the product name. */
export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const add = canvas.getByRole('button', {
      name: 'Add Gotlands Bryggeri Wisby Kloster 5% 33cl',
    })
    await userEvent.click(add)
    await expect(args.onSelect).toHaveBeenCalledWith('1109611')
  },
}

/**
 * Product with multiple variants — the trailing control is a disclosure toggle. The `play` proves it
 * toggles `aria-expanded`, reveals the variant list, and adding a variant fires `onSelect` with the
 * variant id.
 */
export const WithVariants: Story = {
  args: {
    productVariantList: [
      { variantId: '1109611', variantName: '33cl Engångsglas', image },
      { variantId: '2131291', variantName: '30l FAT', image, sellerOnly: true, sellerOnlyTooltipText: 'Only for sellers' },
    ],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button', { name: 'Show variants' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(toggle)
    await expect(canvas.getByRole('button', { name: 'Hide variants' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await userEvent.click(canvas.getByRole('button', { name: 'Add 30l FAT' }))
    await expect(args.onSelect).toHaveBeenCalledWith('2131291')
  },
}

/** Seller-only product with a tooltip marker; the add button still works. */
export const SellerOnly: Story = {
  args: { isSeller: true, sellerTooltip: 'Only visible to sellers' },
}

/** Localised control names — the add and expand labels come from `labels`. */
export const Localized: Story = {
  args: {
    productVariantList: [
      { variantId: '1109611', variantName: '33cl Engångsglas', image },
      { variantId: '2131291', variantName: '30l FAT', image },
    ],
    labels: { showVariants: 'Visa varianter', hideVariants: 'Dölj varianter', add: (name) => `Lägg till ${name}` },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Visa varianter' })).toBeInTheDocument()
  },
}

/*
 * Gallery-only Visual (no legacy baseline exists for product-search-result-item — it only ever
 * rendered inside the `product-search` dropdown, and that baseline captured the CLOSED bar). Rendered
 * expanded with a deterministic placeholder image for human review; behaviour is covered above.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    isSeller: true,
    sellerTooltip: 'Only visible to sellers',
    productVariantList: [
      { variantId: '1109611', variantName: '33cl Engångsglas', image },
      { variantId: '2131291', variantName: '30l FAT', image },
    ],
  },
}
