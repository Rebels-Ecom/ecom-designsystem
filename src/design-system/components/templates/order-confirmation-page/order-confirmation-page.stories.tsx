import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OrderConfirmationPage } from './order-confirmation-page'
import { OrderConfirmationStory } from '../../organisms/order-confirmation/order-confirmation.stories'
import { OrderConfirmation } from '../../organisms/order-confirmation/order-confirmation'
import { Heading } from '../../atoms'

const meta: Meta<typeof OrderConfirmationPage> = {
  title: 'Design System/Templates/OrderConfirmationPage',
  component: OrderConfirmationPage,
}

export default meta
type Story = StoryObj<typeof OrderConfirmationPage>

const OrderConfirmationPageStoryTemplate: Story = {
  render: ({ ...args }) => (
    <OrderConfirmationPage>
      <Heading order={3}>Order confirmation page</Heading>
      <OrderConfirmation children={OrderConfirmationStory.args} />
    </OrderConfirmationPage>
  ),
}

export const OrderConfirmationPageTemplateStory = {
  ...OrderConfirmationPageStoryTemplate,
  args: {
    ...OrderConfirmationStory.args,
  },
}
