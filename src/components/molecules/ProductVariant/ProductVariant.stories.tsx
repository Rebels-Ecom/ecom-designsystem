import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductVariant } from './ProductVariant'

// Deterministic, self-contained thumbnail (no network) so the review gallery renders reproducibly.
const image = {
  id: 'product-variant-thumb',
  src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='160'><rect width='120' height='160' fill='%23e6e2dd'/></svg>",
  sources: [],
  alt: '',
}

const meta = {
  title: 'Design System/Molecules/Product/ProductVariant',
  component: ProductVariant,
  args: {
    productName: 'Norrlands Guld Export 5,3',
    variantName: '50cl Returglas',
    variantId: '1105101',
    priceStr: '22,68',
    partNoLabel: 'Art no',
    currencyLabel: 'kr',
    unitLabel: 'st',
    checked: false,
    image,
    onSelect: fn(),
  },
} satisfies Meta<typeof ProductVariant>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical selectable variant. The `play` proves the whole card is the radio's label: clicking the
 * variant name (not the radio dot itself) selects the single radio and fires `onSelect`.
 */
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <ProductVariant {...args} checked={checked} onChange={() => setChecked(true)} />
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByRole('radio', { name: '50cl Returglas' })
    await expect(radio).not.toBeChecked()
    // Click the card body (the label), not the radio input — selection must propagate.
    await userEvent.click(canvas.getByText('50cl Returglas'))
    await expect(radio).toBeChecked()
    await expect(args.onSelect).toHaveBeenCalledWith('1105101')
  },
}

/**
 * Seller-only marker with a tooltip. The eye marker is a real focusable tooltip trigger; the
 * article/price rows still render. axe scans the decorative-grey and purple meta text for contrast.
 */
export const SellerOnlyWithTooltip: Story = {
  args: { sellerOnly: true, sellerOnlyTooltipText: 'Only visible to sellers' },
}

/** Seller-only marker without a tooltip — a plain eye icon named by `sellerOnlyLabel` (localisable). */
export const SellerOnlyIcon: Story = {
  args: { sellerOnly: true, sellerOnlyLabel: 'Endast säljare' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img', { name: 'Endast säljare' })).toBeInTheDocument()
  },
}

/** Restricted user — article number and price are hidden; only the name and image remain. */
export const RestrictedUser: Story = {
  args: { isRestrictedUser: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByText(/Art no/)).toBeNull()
  },
}

/*
 * Gallery-only Visual (no baseline map). The legacy `product-variant-story` frame is not
 * reproducible: its image is a remote CDN URL (non-deterministic — it rendered broken in the legacy
 * capture) and the story passed no label props, so the meta rows read "undefined". This frame uses a
 * deterministic placeholder image and real labels for human review; behaviour is covered by the play
 * tests above.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { sellerOnly: true, sellerOnlyTooltipText: 'Only visible to sellers' },
}
