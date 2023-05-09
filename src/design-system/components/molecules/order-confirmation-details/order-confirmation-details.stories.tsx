import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OrderConfirmationDetails } from './order-confirmation-details'

const meta: Meta<typeof OrderConfirmationDetails> = {
  title: 'Design System/Molecules/OrderConfirmationDetails',
  component: OrderConfirmationDetails
}

export default meta;
type Story = StoryObj<typeof OrderConfirmationDetails>;

const OrderConfirmationDetailsStoryTemplate: Story = {
  render: ({ ...args }) => (<OrderConfirmationDetails {...args} />)
}

export const OrderConfirmationDetailsStory_Delivery = {
    ...OrderConfirmationDetailsStoryTemplate,
    args: {
        label: 'Leveransuppgifter',
        detailItems: [
            {label: 'Postnummer', value: '135 44'},
            {label: 'Adress', value: 'Granängsringen 3'},
            {label: 'Ort', value: 'Tyresö'}
        ]
    }
}

export const OrderConfirmationDetailsStory_Pricing = {
    ...OrderConfirmationDetailsStoryTemplate,
    args: {
        detailItems: [
        {label: 'Summa produkter', value: '420,70'},
        {label: 'Avdrag', value: '10%'},
        {label: 'Frakt', value: 'Gratis'}
        ]
    }
}

export const OrderConfirmationDetailsStory_TotalPayment = {
    ...OrderConfirmationDetailsStoryTemplate,
    args: {
        label: 'Totalt',
        withBackground: true,
        detailItems: [
            {label: 'Inklusive moms', value: '378,70 kr', isTotal: true},
            {label: 'Betalning', value: 'Faktura'}
        ]
    }
}