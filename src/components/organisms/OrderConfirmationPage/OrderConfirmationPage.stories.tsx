import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { OrderConfirmationPage } from './OrderConfirmationPage'
import { OrderConfirmation } from '../OrderConfirmation'
import { MessageBanner } from '../../molecules/MessageBanner'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button } from '../../molecules/Button'

const meta = {
  title: 'Design System/Organisms/OrderConfirmationPage',
  component: OrderConfirmationPage,
} satisfies Meta<typeof OrderConfirmationPage>

export default meta
type Story = StoryObj<typeof meta>

// The confirmation card on the page backdrop. The real page uses the full OrderConfirmation content
// (incl. the not-yet-migrated CartProduct list) — kept compact here for the shell demo.
const pageContent = (
  <OrderConfirmation>
    <Heading order={3}>Grattis</Heading>
    <Text>Din order är nu registrerad och kommer att förberedas för packning.</Text>
    <MessageBanner type="success">Ditt ordernr: 12345678</MessageBanner>
    <div className="flex gap-2">
      <Button type="button" surface="primary">
        Fortsätt handla
      </Button>
      <Button type="button" surface="secondary">
        Se över mina ordrar
      </Button>
    </div>
  </OrderConfirmation>
)

/** The page shell wrapping a confirmation card. The play test confirms the heading and status banner. */
export const Default: Story = {
  args: { children: pageContent },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'Grattis' })).toBeInTheDocument()
    expect(canvas.getByRole('status')).toBeInTheDocument()
  },
}

// Gallery-only: NOT mapped — the legacy `order-confirmation-page-template-story` frame nests the full
// OrderConfirmation, which composes the unmigrated CartProduct molecule. Re-map once CartProduct lands.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: pageContent },
  parameters: { layout: 'fullscreen' },
}
