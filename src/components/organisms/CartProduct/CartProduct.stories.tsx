import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { CartProduct, type CartProductItem } from './CartProduct'
import fallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'

const beer: CartProductItem = {
  partNo: '1105101',
  productName: 'Norrlands Guld Export 5,3',
  productUrl: '#product',
  country: 'Sverige',
  packaging: '50cl Returglas',
  priceStr: '22,68',
  currencyLabel: 'kr',
  unitLabel: 'st',
  quantity: '1',
  salesUnit: 'KLI',
  itemNumberPerSalesUnit: 15,
  totalPrice: '340,15',
}

const meta = {
  title: 'Design System/Organisms/CartProduct',
  component: CartProduct,
  parameters: { layout: 'fullscreen' },
  args: {
    product: beer,
    removable: true,
    onRemove: fn(),
    fallbackImageUrl: fallbackImage,
  },
} satisfies Meta<typeof CartProduct>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: a removable cart row with a linked product name and quantity readout. */
export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    // Name is a real link…
    const nameLink = canvas.getByRole('link', { name: 'Norrlands Guld Export 5,3' })
    await expect(nameLink).toHaveAttribute('href', '#product')
    // …and the remove control is a named button that fires the handler.
    const remove = canvas.getByRole('button', { name: 'Remove product' })
    await userEvent.click(remove)
    await expect(args.onRemove).toHaveBeenCalledWith('1105101')
  },
}

/** Loading swaps the body for an announced spinner. */
export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
  },
}

/** Localised copy — the remove button and article-number prefix follow `labels`. */
export const Localized: Story = {
  args: {
    labels: { remove: 'Ta bort produkt', articleNumber: 'Art.nr.', loading: 'Laddar' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Ta bort produkt' })).toBeInTheDocument()
  },
}

/** Visual: gallery-only — the legacy baseline shows a broken remote product image (non-deterministic). */
export const Visual: Story = {
  tags: ['visual'],
}
