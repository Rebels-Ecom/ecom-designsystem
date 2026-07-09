import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { OrderItem } from './OrderItem'
import { TagsList } from '../TagsList'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'

const meta = {
  title: 'Design System/Molecules/OrderItem',
  component: OrderItem,
} satisfies Meta<typeof OrderItem>

export default meta
type Story = StoryObj<typeof meta>

/** Reproduces the legacy story wrapper so the captured frame matches the baseline. */
function Frame({ children }: { children: ReactNode }) {
  return <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>{children}</div>
}

const sommarfestChildren = (
  <>
    <TagsList tags={[{ text: 'Senast beställd: 2022-06-01', color: 'grey' }]} />
    <Heading order={4}>Sommmarfest</Heading>
    <Text>Leverad: 2022-06-07</Text>
    <Text>22 artiklar</Text>
  </>
)

const minSenasteOrderChildren = (
  <>
    <Heading order={4}>Order nummer: 1423569</Heading>
    <Text>22 artiklar</Text>
  </>
)

const minaOrdrar1Children = (
  <>
    <TagsList
      tags={[
        { text: '2022-06-01', color: 'grey' },
        { text: 'Packas', color: 'yellow' },
      ]}
    />
    <Heading order={4}>Order nummer: 1423569</Heading>
    <Text>Beräknad leverans: 2022-06-07</Text>
    <Text>22 artiklar</Text>
  </>
)

const minaOrdrar2Children = (
  <>
    <TagsList
      tags={[
        { text: '2022-05-28', color: 'grey' },
        { text: 'Skickas', color: 'blue' },
      ]}
    />
    <Heading order={4}>Order nummer: 1423568</Heading>
    <Text>Beräknad leverans: 2022-06-03</Text>
    <Text>12 artiklar</Text>
  </>
)

/** Inline mode: the order number and action are real, keyboard-operable buttons. */
export const InlineAction: Story = {
  args: {
    orderNumber: '1423569',
    orderNumberLabel: 'Ordernr.',
    orderStatus: 'Behandlas',
    btnLabel: 'Visa order',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const orderButton = canvas.getByRole('button', { name: 'Ordernr. 1423569' })
    await userEvent.click(orderButton)
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/** Link mode: a single accessible link navigates to the order (chevron is decorative). */
export const LinkMode: Story = {
  args: {
    orderNumber: '1423569',
    orderNumberLabel: 'Ordernr.',
    orderStatus: 'Skickad',
    linkUrl: '/orders/1423569',
    deliveryDate: '2023-06-07',
    deliveryDateLabel: 'Leverans:',
    children: <Text>22 artiklar</Text>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: 'Go to order 1423569' })
    await expect(link).toHaveAttribute('href', '/orders/1423569')
    await userEvent.tab()
  },
}

/** The link's accessible name is overridable for localisation. */
export const Localized: Story = {
  args: {
    linkUrl: '/orders/1423569',
    orderNumber: '1423569',
    labels: { goToOrder: (n) => `Gå till order ${n}` },
    children: <Text>22 artiklar</Text>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('link', { name: 'Gå till order 1423569' })).toBeInTheDocument()
  },
}

/** Static frame reproducing the legacy `default-order-item` baseline (inline, clickable order no.). */
export const VisualDefault: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    orderNumber: '1423569',
    orderNumberLabel: 'Ordernr.',
    orderStatus: 'Behandlas',
    deliveryDate: '2023-06-07',
    deliveryDateLabel: 'Leverans:',
    onClick: () => {},
  },
  render: (args) => (
    <Frame>
      <OrderItem {...args} />
    </Frame>
  ),
}

/** Static frame reproducing the legacy `order-item-min-senaste-order` baseline. */
export const VisualMinSenasteOrder: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { linkUrl: '/link-to-list-details', children: minSenasteOrderChildren },
  render: (args) => (
    <Frame>
      <OrderItem {...args} />
    </Frame>
  ),
}

/** Static frame reproducing the legacy `order-item-mina-ordrar-1` baseline. */
export const VisualMinaOrdrar1: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { linkUrl: '/link-to-list-details', children: minaOrdrar1Children },
  render: (args) => (
    <Frame>
      <OrderItem {...args} />
    </Frame>
  ),
}

/** Static frame reproducing the legacy `order-item-mina-ordrar-2` baseline. */
export const VisualMinaOrdrar2: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { linkUrl: '/link-to-list-details', children: minaOrdrar2Children },
  render: (args) => (
    <Frame>
      <OrderItem {...args} />
    </Frame>
  ),
}

/** Static frame reproducing the legacy `order-item-sommarfest` baseline. */
export const VisualSommarfest: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { linkUrl: '/link-to-list-details', children: sommarfestChildren },
  render: (args) => (
    <Frame>
      <OrderItem {...args} />
    </Frame>
  ),
}
