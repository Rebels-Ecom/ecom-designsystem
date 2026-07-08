import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { CartSidebar } from './CartSidebar'
import { CartProductList } from '../CartProductList'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button } from '../../molecules/Button'

const meta = {
  title: 'Design System/Organisms/CartSidebar',
  component: CartSidebar,
} satisfies Meta<typeof CartSidebar>

export default meta
type Story = StoryObj<typeof meta>

const productRow = (name: string, price: string) => (
  <div className="flex items-center justify-between">
    <Text className="font-bold">{name}</Text>
    <Text>{price}</Text>
  </div>
)

// Representative sidebar. The real cart nests this inside the (not-yet-migrated) DrawerSidebar.
const sidebarContents = (
  <>
    <div className="flex justify-between">
      <Heading order={3}>Kundvagn</Heading>
      <Heading order={3}>1378,00 kr</Heading>
    </div>
    <Button type="button" surface="secondary" iconRight="icon-layers" rounded>
      Hämta inköpslista
    </Button>
    <CartProductList>
      {productRow('Spendrups Old Gold 4-pack 33cl burk', '89,00 kr')}
      {productRow('Loka Crush Citron 24-pack 33cl burk', '129,00 kr')}
    </CartProductList>
  </>
)

/** Populated sidebar. The play test confirms the heading and a keyboard-reachable action. */
export const Default: Story = {
  args: { children: sidebarContents },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'Kundvagn' })).toBeInTheDocument()
    const button = canvas.getByRole('button', { name: 'Hämta inköpslista' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}

/** Empty cart — the product list collapses to nothing, only the heading and action remain. */
export const NoProducts: Story = {
  args: {
    children: (
      <>
        <div className="flex justify-between">
          <Heading order={3}>Kundvagn</Heading>
          <Heading order={3}>0,00 kr</Heading>
        </div>
        <Text>Din kundvagn är tom.</Text>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'Kundvagn' })).toBeInTheDocument()
    expect(canvas.queryByRole('list')).not.toBeInTheDocument()
  },
}

// Gallery-only: NOT mapped — the legacy `cart-sidebar-story` frame renders inside the unmigrated
// DrawerSidebar (captured closed → just a trigger button), and nests unmigrated CartProduct rows.
// Re-map once DrawerSidebar + CartProduct land. Shows representative contents for review.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: sidebarContents },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: 'auto', maxWidth: '480px' }}>
      <CartSidebar {...args} />
    </div>
  ),
}
