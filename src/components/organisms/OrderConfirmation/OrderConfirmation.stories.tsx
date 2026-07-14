import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { OrderConfirmation } from './OrderConfirmation'
import { CartProductList } from '../CartProductList'
import { CartProduct, type CartProductItem } from '../CartProduct'
import { OrderConfirmationDetails } from '../../molecules/OrderConfirmationDetails'
import { MessageBanner } from '../../molecules/MessageBanner'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { Button } from '../../molecules/Button'
import fallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'

const meta = {
  title: 'Design System/Organisms/OrderConfirmation',
  // `confirmationContent` is a shared render fragment, not a story — keep Storybook from treating it as one.
  excludeStories: ['confirmationContent'],
  component: OrderConfirmation,
} satisfies Meta<typeof OrderConfirmation>

export default meta
type Story = StoryObj<typeof meta>

const beer: CartProductItem = {
  partNo: '1105101',
  productName: 'Norrlands Guld Export 5,3',
  packaging: '50cl Returglas',
  priceStr: '22,68',
  country: 'Sverige',
  quantity: '1',
  salesUnit: 'KLI',
  itemNumberPerSalesUnit: 15,
  totalPrice: '340,15',
}

const wine: CartProductItem = {
  partNo: '2543824',
  productName: 'El Esteco Malbec',
  packaging: '75cl Engångsglas',
  priceStr: '136',
  country: 'Argentina',
  quantity: '1',
  salesUnit: 'ST',
  itemNumberPerSalesUnit: 1,
  totalPrice: '136,00',
}

/**
 * The full legacy confirmation scene, composed from migrated primitives — now including real
 * {@link CartProduct} rows (the product list was the only piece missing until CartProduct landed).
 * Exported so `OrderConfirmationPage` reuses the identical content (as the legacy stories did).
 */
export const confirmationContent = (
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
      detailItems={[
        { label: 'Summa produkter', value: '420,70' },
        { label: 'Avdrag', value: '10%' },
        { label: 'Frakt', value: 'Gratis' },
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
      <CartProduct product={beer} headingLevel={4} fallbackImageUrl={fallbackImage} />
      <CartProduct product={wine} headingLevel={4} fallbackImageUrl={fallbackImage} />
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

// reviewOnly (baseline-map.ts): reproduces the full legacy `order-confirmation-story` scene now that
// CartProduct has landed. Diverges from the legacy PNG only via CartProduct's documented deltas (local
// fallback image vs the legacy broken remote thumbnail; brand font) + the full-page capture height, so
// it's paired for review, not pixel-gated.
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
