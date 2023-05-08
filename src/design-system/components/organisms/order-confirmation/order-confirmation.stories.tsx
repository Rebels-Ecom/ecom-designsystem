import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OrderConfirmation } from './order-confirmation'
import { CartProduct_OrderConfirmation_Beer, CartProduct_OrderConfirmation_Wine } from '../../molecules/cart-product/cart-product.stories';

const meta: Meta<typeof OrderConfirmation> = {
  title: 'Design System/Organisms/OrderConfirmation',
  component: OrderConfirmation
}

export default meta;
type Story = StoryObj<typeof OrderConfirmation>;

const OrderConfirmationStoryTemplate: Story = {
    render: ({...args}) => {
        function handleStartCheckout(){
            alert(`Start checkout process...`)
        }
        
        return(
            <div style={{ margin: 'auto', position: 'relative' }}>
                <OrderConfirmation {...args}/>
            </div>
        )
    }
}

const cartProducts = [
    CartProduct_OrderConfirmation_Beer.args,
    CartProduct_OrderConfirmation_Wine.args,
  ]

export const OrderConfirmationStory = {
  ...OrderConfirmationStoryTemplate,
  args: {
    title: 'Grattis',
    text: 'Din order är nu registrerad & kommer att förbereds för packning',
    orderNumberLabel: 'Ditt order nr: ',
    orderNumber:'12345678',
    emailLabel: 'Vi har skickat din orderbekräftelse till ',
    email: 'jon.jonsson@beerfest@com',
    deliveryDetailsLabel: 'Leveransuppgifter',
    totalAmountLabel: 'Totalt',
    deliveryDetails: [
        {label: 'Postnummer', value: '135 44'},
        {label: 'Adress', value: 'Granängsringen 3'},
        {label: 'Ort', value: 'Tyresö'}
    ],
    pricingDetails: [
        {label: 'Summa produkter', value: '420,70'},
        {label: 'Avdrag', value: '10%'},
        {label: 'Frakt', value: 'Gratis'}
    ],
    paymentDetails: [
        {label: 'Inklusive moms', value: '378,70 kr', isTotal: true},
        {label: 'Betalning', value: 'Faktura'}
    ],
    deliveryDateLabel: 'Ditt aktuella leveransdatum',
    deliveryDate: '2022-06-03',
    itemsList: cartProducts,
    
  }
}