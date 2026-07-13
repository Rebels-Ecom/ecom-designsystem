import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductVariantList, type ProductVariantListItem } from './ProductVariantList'

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
  title: 'Design System/Organisms/ProductVariantList',
  component: ProductVariantList,
  args: {
    variants,
    selectedVariantId: '1105101',
    onVariantSelect: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof ProductVariantList>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical usage: four variants as one native radio group. The play test proves the group is named,
 * selecting a variant fires `onVariantSelect` with the chosen item, and the close button fires
 * `onClose`.
 */
export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(args.selectedVariantId)
    return (
      <ProductVariantList
        {...args}
        selectedVariantId={selected}
        onVariantSelect={(variant, all) => {
          if (variant) setSelected(variant.variantId)
          args.onVariantSelect(variant, all)
        }}
      />
    )
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    // The fieldset is a named group (its legend names it).
    await expect(canvas.getByRole('group', { name: 'Choose a variant' })).toBeInTheDocument()
    // Select a different variant by clicking its card body.
    const radio = canvas.getByRole('radio', { name: '33cl Engångsglas' })
    await userEvent.click(canvas.getByText('33cl Engångsglas'))
    await expect(radio).toBeChecked()
    await expect(args.onVariantSelect).toHaveBeenCalled()
    // The close button dismisses the list.
    await userEvent.click(canvas.getByRole('button', { name: 'Close' }))
    await expect(args.onClose).toHaveBeenCalled()
  },
}

/** `Escape` closes the list (non-modal dismiss — focus is not trapped). */
export const EscapeCloses: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    canvas.getByRole('radio', { name: '50cl Returglas' }).focus()
    await userEvent.keyboard('{Escape}')
    await expect(args.onClose).toHaveBeenCalled()
  },
}

/** All built-in UI strings are overridable (English defaults) — here they are localised to Swedish. */
export const Localized: Story = {
  args: {
    labels: {
      close: 'Stäng',
      legend: 'Välj variant',
      scrollForMore: 'Visa fler',
      scrollBack: 'Till toppen',
      partNo: 'Art nr',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('group', { name: 'Välj variant' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Stäng' })).toBeInTheDocument()
  },
}

/*
 * Gallery-only Visual (no baseline map). The legacy `product-variant-list-story` PNG is a full-page
 * capture (1280×1195 / 375×1195 — measured, both taller than the capture viewport), so it is
 * dimensionally incomparable to the fixed 800px/667px frame (gotcha-2). This frame uses deterministic
 * placeholder thumbnails and real labels for human review; behaviour is covered by the play tests.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}
