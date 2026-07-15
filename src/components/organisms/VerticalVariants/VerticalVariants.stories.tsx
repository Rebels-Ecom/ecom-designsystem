import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { VerticalVariants } from './VerticalVariants'
import type { ProductVariantListItem } from '../ProductVariantList'

// Deterministic, self-contained thumbnail (no network) so the review gallery renders reproducibly.
const image = {
  id: 'variant-thumb',
  src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='160'><rect width='120' height='160' fill='%23e6e2dd'/></svg>",
  sources: [],
  alt: '',
}

const product = 'Norrlands Guld Export 5,3'
const variants: ProductVariantListItem[] = [
  { productName: product, variantName: '50cl Returglas', variantId: '1105101', priceStr: '22,68', image },
  { productName: product, variantName: '33cl Engångsglas', variantId: '1105102', priceStr: '18,90', image },
  { productName: product, variantName: '50cl Burk', variantId: '1105103', priceStr: '15,40', image },
  { productName: product, variantName: '30-pack Burk', variantId: '1105104', priceStr: '289,00', image },
]

const meta = {
  title: 'Design System/Organisms/VerticalVariants',
  component: VerticalVariants,
  args: {
    variants,
    selectedVariantId: '',
    open: true,
    onVariantSelect: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof VerticalVariants>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical open picker. The `play` proves the variants form one named radio group, selecting the
 * first (always-visible) tile fires `onVariantSelect` and checks it, and `Escape` dismisses the panel.
 */
export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('group', { name: 'Choose a variant' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Close' })).toBeInTheDocument()

    const first = canvas.getByRole('radio', { name: '50cl Returglas' })
    await userEvent.click(first)
    await expect(first).toBeChecked()
    await expect(args.onVariantSelect).toHaveBeenCalled()

    await userEvent.keyboard('{Escape}')
    await expect(args.onClose).toHaveBeenCalled()
  },
}

/** A closed picker renders nothing. */
export const Closed: Story = {
  args: { open: false },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('group')).toBeNull()
  },
}

/*
 * Gallery-only Visual (no baseline — legacy only ever rendered this inside an unmigrated parent). An
 * open picker with a pre-selected variant for human review; behaviour is covered by the play tests.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { selectedVariantId: '1105101' },
}
