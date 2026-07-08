import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { CartProductList } from './CartProductList'
import { Text } from '../../atoms/Text'

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

// Gallery-only: NOT mapped — the legacy `cart-product-list-story` frame composes the unmigrated
// CartProduct molecule (with product images). Re-map once CartProduct lands. Shows placeholder rows.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: rows(4) },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <CartProductList {...args} />
    </div>
  ),
}
