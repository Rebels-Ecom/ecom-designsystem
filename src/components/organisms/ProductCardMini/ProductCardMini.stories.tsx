import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import beerGlass from '../../../assets/product-images/beer-glass.jpg'
import { ProductCardMini } from './ProductCardMini'

const meta = {
  title: 'Design System/Organisms/ProductCardMini',
  component: ProductCardMini,
  args: {
    product: {
      partNo: '2543824',
      primaryImageUrl: beerGlass,
      productName: 'El Esteco Malbec',
      packaging: '75cl Engångsglas',
      priceLabel: 'Pris',
      priceStr: '136',
      currencyLabel: 'kr',
      unitLabel: 'ST',
      country: 'Argentina',
      partNoLabel: 'Art.nr.',
    },
  },
} satisfies Meta<typeof ProductCardMini>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical mini card. The `play` proves the product name is a real heading (1.3.1) and that the
 * price + article-number lines render the composed copy.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByRole('heading', { name: 'El Esteco Malbec' }),
    ).toBeInTheDocument()
    // Price line: "Pris: 136 kr/st" (unit lower-cased).
    await expect(canvas.getByText('Pris: 136 kr/st')).toBeInTheDocument()
    // Article-number + country line.
    await expect(canvas.getByText('Art.nr. 2543824 - Argentina')).toBeInTheDocument()
  },
}

/**
 * Sparse product — no packaging, no price and no country. The optional meta lines are omitted rather
 * than printing stray "undefined" / dangling separators (a legacy bug).
 */
export const Minimal: Story = {
  args: {
    product: {
      partNo: '1105101',
      primaryImageUrl: '',
      productName: 'Norrlands Guld Export 5,3',
      priceLabel: 'Pris',
      partNoLabel: 'Art.nr.',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByText(/undefined/)).toBeNull()
    // The article-number line still renders (there is a part number), country half omitted.
    await expect(canvas.getByText('Art.nr. 1105101')).toBeInTheDocument()
  },
}

/**
 * Long name — the heading is clamped to a single line with an ellipsis so the card keeps its compact,
 * fixed-height row inside a toast or dense list.
 */
export const LongName: Story = {
  args: {
    product: {
      partNo: '2116112',
      primaryImageUrl: '',
      productName: 'Paulaner Hefe-Weissbier Naturtrüb Alkoholfri Extra Lång Produktbenämning 5,5',
      packaging: '33cl Engångsglas',
      priceLabel: 'Pris',
      priceStr: '28',
      currencyLabel: 'kr',
      unitLabel: 'ST',
      country: 'Tyskland',
      partNoLabel: 'Art.nr.',
    },
  },
}

/*
 * Gallery review frame (current-only — the mini card has no standalone legacy baseline; it is captured
 * inside the `miniproducttoast` frame, where the toast is closed). Rendered at its natural ~20rem
 * desktop width so reviewers can eyeball the composed layout. No `play` — a captured frame must not mutate.
 */
export const Visual: Story = {
  tags: ['visual'],
}
