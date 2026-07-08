import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { CartOrderDetails } from './CartOrderDetails'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button } from '../../molecules/Button'

// Legacy title kept under "Deprecated" so the group + story id match the frozen baseline grouping.
const meta = {
  title: 'Design System/Deprecated/CartOrderDetails',
  component: CartOrderDetails,
} satisfies Meta<typeof CartOrderDetails>

export default meta
type Story = StoryObj<typeof meta>

// Representative summary. The real cart renders the (not-yet-migrated) CartProductList here.
const orderContent = (
  <>
    <Heading order={3}>Din Kundvagn</Heading>
    <Text>1378,00 kr</Text>
    <Button type="button" surface="secondary" iconRight="icon-layers" rounded>
      Hämta inköpslista
    </Button>
  </>
)

/** Order summary panel. The play test confirms the heading and a keyboard-reachable action. */
export const Default: Story = {
  args: { children: orderContent },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'Din Kundvagn' })).toBeInTheDocument()
    const button = canvas.getByRole('button', { name: 'Hämta inköpslista' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}

// Gallery-only: NOT mapped — a faithful frame needs the unmigrated CartProductList/CartProduct
// children (the bulk of the panel). Re-map once those land. Shows representative content for review.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: orderContent },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: 'auto', position: 'relative' }}>
      <CartOrderDetails {...args} />
    </div>
  ),
}
