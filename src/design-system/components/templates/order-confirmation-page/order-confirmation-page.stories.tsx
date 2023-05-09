import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OrderConfirmationPage } from './order-confirmation-page'
import { OrderConfirmationStory } from '../../organisms/order-confirmation/order-confirmation.stories'
import { OrderConfirmation } from '../../organisms/order-confirmation/order-confirmation'
import { Button, Heading, Text, MessageBanner } from '../../atoms'
import { OrderConfirmationDetails, CartProduct, GroupWrapper } from '../../molecules'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../../organisms/cart-product-list/cart-product-list'

const meta: Meta<typeof OrderConfirmationPage> = {
  title: 'Design System/Templates/OrderConfirmationPage',
  component: OrderConfirmationPage,
}

export default meta
type Story = StoryObj<typeof OrderConfirmationPage>

const OrderConfirmationPageStoryTemplate: Story = {
  render: ({ ...args }) => (
    <OrderConfirmationPage>
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
    </OrderConfirmationPage>
  ),
}

export const OrderConfirmationPageTemplateStory = {
  ...OrderConfirmationPageStoryTemplate,
  args: {
    ...OrderConfirmationStory.args,
  },
}
