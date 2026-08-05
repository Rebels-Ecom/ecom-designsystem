import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { CartDeliveryDetails } from './CartDeliveryDetails'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button } from '../../molecules/Button'

const meta = {
  title: 'Design System/Deprecated/CartDeliveryDetails',
  component: CartDeliveryDetails,
} satisfies Meta<typeof CartDeliveryDetails>

export default meta
type Story = StoryObj<typeof meta>

// Representative delivery-step content. The real cart uses the (not-yet-migrated) DeliveryForm here.
const deliveryContent = (
  <>
    <Heading order={3}>Leverans</Heading>
    <Text>Ange dina leveransuppgifter för att slutföra beställningen.</Text>
    <Button type="button" surface="primary">
      Lägg beställning
    </Button>
  </>
)

/** Idle panel — content is fully interactive; the submit button is keyboard-reachable. */
export const Default: Story = {
  args: { children: deliveryContent },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Lägg beställning' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}

/**
 * Busy panel — the region is `aria-busy` and its content is `inert`, so the dimmed button can't be
 * focused by keyboard (the play test tabs and asserts focus never lands on it).
 */
export const Loading: Story = {
  args: { children: deliveryContent, loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvasElement.querySelector('[aria-busy="true"]')).toBeInTheDocument()
    const button = canvas.getByRole('button', { name: 'Lägg beställning' })
    await userEvent.tab()
    await expect(button).not.toHaveFocus()
  },
}

// Gallery-only: NOT mapped to the legacy baseline — a faithful frame needs the unmigrated DeliveryForm
// (the bulk of the panel). Re-map once DeliveryForm lands. Shows representative content for review.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: deliveryContent },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: 'auto', position: 'relative' }}>
      <CartDeliveryDetails {...args} />
    </div>
  ),
}
