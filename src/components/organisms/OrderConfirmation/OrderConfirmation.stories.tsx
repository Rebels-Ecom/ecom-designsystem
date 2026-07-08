import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { OrderConfirmation } from './OrderConfirmation'
import { CartProductList } from '../CartProductList'
import { OrderConfirmationDetails } from '../../molecules/OrderConfirmationDetails'
import { MessageBanner } from '../../molecules/MessageBanner'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button } from '../../molecules/Button'

const meta = {
  title: 'Design System/Organisms/OrderConfirmation',
  component: OrderConfirmation,
} satisfies Meta<typeof OrderConfirmation>

export default meta
type Story = StoryObj<typeof meta>

const productRow = (name: string, price: string) => (
  <div className="flex w-full items-center justify-between">
    <Text className="font-bold">{name}</Text>
    <Text>{price}</Text>
  </div>
)

// The real page nests the (not-yet-migrated) CartProduct molecule in the product list.
const confirmationContent = (
  <>
    <Heading order={3}>Grattis</Heading>
    <Text>Din order är nu registrerad och kommer att förberedas för packning.</Text>
    <MessageBanner type="success">Ditt ordernr: 12345678</MessageBanner>
    <Text>Vi har skickat din orderbekräftelse till jon.jonsson@beerfest.com</Text>
    <OrderConfirmationDetails
      label="Leveransuppgifter"
      detailItems={[
        { label: 'Postnummer', value: '135 44' },
        { label: 'Adress', value: 'Granängsringen 3' },
        { label: 'Ort', value: 'Tyresö' },
      ]}
    />
    <OrderConfirmationDetails
      label="Totalt"
      detailItems={[
        { label: 'Inklusive moms', value: '378,70 kr', isTotal: true },
        { label: 'Betalning', value: 'Faktura' },
      ]}
    />
    <CartProductList>
      {productRow('Spendrups Old Gold 4-pack 33cl burk', '89,00 kr')}
      {productRow('Loka Crush Citron 24-pack 33cl burk', '129,00 kr')}
    </CartProductList>
    <div className="flex gap-2">
      <Button type="button" surface="primary">
        Fortsätt handla
      </Button>
      <Button type="button" surface="secondary">
        Se över mina ordrar
      </Button>
    </div>
  </>
)

/**
 * Full confirmation. The play test confirms the heading, the `role="status"` success banner, and a
 * keyboard-reachable action.
 */
export const Default: Story = {
  args: { children: confirmationContent },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'Grattis' })).toBeInTheDocument()
    expect(canvas.getByRole('status')).toBeInTheDocument()
    const button = canvas.getByRole('button', { name: 'Fortsätt handla' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}

// Gallery-only: NOT mapped — the legacy `order-confirmation-story` frame composes the unmigrated
// CartProduct molecule (product images are a large part of the frame). Everything else (MessageBanner,
// OrderConfirmationDetails, Heading/Text/Button) is migrated. Re-map once CartProduct lands.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: confirmationContent },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: 'auto', position: 'relative' }}>
      <OrderConfirmation {...args} />
    </div>
  ),
}
