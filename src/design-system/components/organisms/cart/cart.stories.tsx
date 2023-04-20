import React from 'react'
import { Cart} from './cart'
import type { Meta, StoryObj } from '@storybook/react';
import { CartOrderDetailsStory } from '../cart-order-details/cart-order-details.stories';
import { CartDeliveryDetailsStory } from '../cart-delivery-details/cart-delivery-details.stories';
import { CartDeliveryDetails } from '../cart-delivery-details/cart-delivery-details';
import { CartOrderDetails } from '../cart-order-details/cart-order-details';

const meta: Meta<typeof Cart> = {
    title: 'Design System/Organisms/Cart',
    component: Cart
};

export default meta;
type Story = StoryObj<typeof Cart>;

const CartStoryTemplate: Story = {
    render: ({ ...args }) => {
        function handleRemoveFromCart(id: string){
            alert(`Remove product from cart - product id: ${id}`)
        }
        function handleAddSuggestedProductToCart(product:any) {
            alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
        }
        return(
            <div style={{ margin: 'auto', position: 'relative'}}>
                <Cart>
                    <CartDeliveryDetails {...args.deliveryDetails}/>
                    <CartOrderDetails>{args.cartOrderDetails}</CartOrderDetails>
                </Cart>
            </div>
        )
    }
}

export const CartStory = {
    ...CartStoryTemplate,
    args: {
        deliveryDetails: CartDeliveryDetailsStory.args,
        cartOrderDetails: CartOrderDetailsStory.args
    }
}