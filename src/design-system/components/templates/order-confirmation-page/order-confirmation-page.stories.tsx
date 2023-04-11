import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OrderConfirmationPage } from './order-confirmation-page'
import { HeaderStory } from '../../organisms/header/header.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'

const meta: Meta<typeof OrderConfirmationPage> = {
  title: 'Design System/Templates/OrderConfirmationPage',
  component: OrderConfirmationPage,
}

export default meta
type Story = StoryObj<typeof OrderConfirmationPage>

const OrderConfirmationPageStoryTemplate: Story = {
  render: ({ ...args }) => <OrderConfirmationPage {...args} />,
}

export const OrderConfirmationPageTemplateStory = {
  ...OrderConfirmationPageStoryTemplate,
  args: {
    header: HeaderStory.args,
    footer: FooterStory.args,
  },
}
