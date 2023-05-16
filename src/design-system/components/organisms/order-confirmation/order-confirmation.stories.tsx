import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OrderConfirmation } from './order-confirmation'
import { CartProduct_OrderConfirmation_Beer, CartProduct_OrderConfirmation_Wine } from '../../molecules/cart-product/cart-product.stories';
import {Heading, Text, MessageBanner, Button } from '../../atoms'
import { CartProduct, GroupWrapper, OrderConfirmationDetails } from '../../molecules'
import { ICartProduct } from '../../molecules/cart-product/cart-product';
import { CartProductList } from '../cart-product-list/cart-product-list';

const meta: Meta<typeof OrderConfirmation> = {
  title: 'Design System/Organisms/OrderConfirmation',
  component: OrderConfirmation
}

export default meta;
type Story = StoryObj<typeof OrderConfirmation>;

const OrderConfirmationStoryTemplate: Story = {
    render: ({...args}) => {
        return(
            <div style={{ margin: 'auto', position: 'relative' }}>
                <OrderConfirmation {...args}>
                    <Heading order={3}>Grattis</Heading>
                    <Text>Din order är nu registrerad & kommer att förbereds för packning</Text>
                    <MessageBanner type={'success'}>Ditt order nr:  {args.orderNumber}</MessageBanner>
                    <Text size='small'>{args.emailLabel} &nbsp; <b>{args.email}</b></Text>
                    <OrderConfirmationDetails detailItems={args.deliveryDetails} label='Leveransuppgifter'></OrderConfirmationDetails>
                    <OrderConfirmationDetails detailItems={args.pricingDetails}></OrderConfirmationDetails>
                    <OrderConfirmationDetails detailItems={args.paymentDetails} label='Totalt'></OrderConfirmationDetails>
                    <CartProductList>
                        { args.itemsList.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product} ></CartProduct>) }
                    </CartProductList>
                    <GroupWrapper spacing='xl'>
                        <Button children={'Fortsätt handla'} type={'button'} surface={'primary'}></Button>
                        <Button children={'Se över mina ordrar'} type={'button'} surface={'secondary'}></Button>
                    </GroupWrapper> 
                </OrderConfirmation>
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