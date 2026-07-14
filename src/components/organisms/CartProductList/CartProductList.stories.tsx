import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, within } from 'storybook/test'
import { CartProductList } from './CartProductList'
import { Text } from '../../atoms/Text'
import { CartProduct, type CartProductItem } from '../CartProduct'
import fallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'

const meta = {
  title: 'Design System/Organisms/CartProductList',
  component: CartProductList,
} satisfies Meta<typeof CartProductList>

export default meta
type Story = StoryObj<typeof meta>

// Placeholder product rows. The real cart passes the (not-yet-migrated) CartProduct molecule here.
function rows(n: number) {
  const products = [
    ['Spendrups Old Gold 4-pack 33cl burk', '89,00 kr'],
    ['Loka Crush Citron 24-pack 33cl burk', '129,00 kr'],
  ]
  return Array.from({ length: n }, (_, i) => {
    const [name, price] = products[i % products.length]
    return (
      <div key={i} className="flex items-center justify-between">
        <Text className="font-bold">{name}</Text>
        <Text>{price}</Text>
      </div>
    )
  })
}

/** Canonical list. The play test confirms the semantic `role="list"` and one `<li>` per product. */
export const Default: Story = {
  args: { children: rows(3) },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('list')).toBeInTheDocument()
    expect(canvas.getAllByRole('listitem')).toHaveLength(3)
  },
}

// Reproduces the legacy `cart-product-list-story` frame now that CartProduct has landed: a column of
// CartProduct rows, alternating settled / loading (matching the legacy capture). `reviewOnly` in
// baseline-map.ts — the row layout matches, but the legacy product image rendered broken (remote CDN)
// while V2 shows a deterministic local fallback, so it's paired for review rather than pixel-gated.
const beer: CartProductItem = {
  partNo: '1105101',
  productName: 'Norrlands Guld Export 5,3',
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

export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    children: [false, true, false, true].map((loading, i) => (
      <CartProduct
        key={i}
        product={beer}
        loading={loading}
        removable
        onRemove={fn()}
        fallbackImageUrl={fallbackImage}
      />
    )),
  },
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <CartProductList {...args} />
    </div>
  ),
}
