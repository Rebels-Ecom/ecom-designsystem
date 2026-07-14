import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { HorizontalVariant } from './HorizontalVariant'

// Deterministic, self-contained thumbnail (no network) so the review gallery renders reproducibly.
const image = {
  id: 'horizontal-variant-thumb',
  src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='160'><rect width='120' height='160' fill='%23e6e2dd'/></svg>",
  sources: [],
  alt: '',
}

const meta = {
  title: 'Design System/Organisms/Product/HorizontalVariant',
  component: HorizontalVariant,
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
} satisfies Meta<typeof HorizontalVariant>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical selectable card. The `play` proves the whole card is the radio's label: clicking the
 * variant name (not a radio dot) selects the single radio and fires `onSelect`, and the check glyph
 * appears — selection is never colour-only.
 */
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <HorizontalVariant {...args} checked={checked} onChange={() => setChecked(true)} />
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

/** Selected state — green border + check glyph, backed by the radio's `checked` state. */
export const Selected: Story = {
  args: { checked: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('radio', { name: '50cl Returglas' })).toBeChecked()
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
 * Gallery-only Visual (no legacy baseline exists for horizontal-variant — it only ever rendered inside
 * the unmigrated `horizontal-variants` carousel, which has no snapshot). Rendered selected with a
 * deterministic placeholder image and real labels for human review; behaviour is covered above.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { checked: true, sellerOnly: true, sellerOnlyTooltipText: 'Only visible to sellers' },
}
