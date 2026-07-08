import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Cart } from './Cart'
import { CartDeliveryDetails } from '../CartDeliveryDetails'
import { CartOrderDetails } from '../CartOrderDetails'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button } from '../../molecules/Button'

const meta = {
  title: 'Design System/Organisms/Cart',
  component: Cart,
} satisfies Meta<typeof Cart>

export default meta
type Story = StoryObj<typeof meta>

// The two cart columns, built from migrated components. The real cart also nests DeliveryForm and
// CartProductList (not yet migrated) — see the Visual note.
const cartColumns = (
  <>
    <CartDeliveryDetails>
      <Heading order={3}>Leverans</Heading>
      <Text>Ange dina leveransuppgifter för att slutföra beställningen.</Text>
      <Button type="button" surface="primary">
        Lägg beställning
      </Button>
    </CartDeliveryDetails>
    <CartOrderDetails>
      <Heading order={3}>Din Kundvagn</Heading>
      <Text>1378,00 kr</Text>
    </CartOrderDetails>
  </>
)

/**
 * Two-column cart. The play test confirms both columns render and that the delivery column precedes
 * the order summary in DOM/reading order (the 60/40 split is CSS-only at `lg`).
 */
export const Default: Story = {
  args: { children: cartColumns },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const delivery = canvas.getByRole('heading', { name: 'Leverans' })
    const order = canvas.getByRole('heading', { name: 'Din Kundvagn' })
    expect(delivery).toBeInTheDocument()
    expect(order).toBeInTheDocument()
    // Delivery column comes first in reading order.
    expect(delivery.compareDocumentPosition(order) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  },
}

// Gallery-only: NOT mapped — the legacy `cart-story` frame nests the unmigrated DeliveryForm and
// CartProductList/CartProduct. Re-map once those land. Shows the 60/40 layout with migrated content.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: cartColumns },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: 'auto', position: 'relative' }}>
      <Cart {...args} />
    </div>
  ),
}
