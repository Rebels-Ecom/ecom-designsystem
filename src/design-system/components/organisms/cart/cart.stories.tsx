import React, { useState } from 'react'
import { Cart} from './cart'
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGoToCart, LatertOrderButtonStory, ShoppingListButtonStory } from '../../atoms/button/button.stories';
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories';
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories';
import { DeliveryFormStory } from '../delivery-form/delivery-form.stories';
import { CartOrderDetailsStory } from '../cart-order-details/cart-order-details.stories';
import { CartDeliveryDetailsStory } from '../cart-delivery-details/cart-delivery-details.stories';

const meta: Meta<typeof Cart> = {
    title: 'Design System/Organisms/Cart',
    component: Cart
};

export default meta;
type Story = StoryObj<typeof Cart>;

const CartStoryTemplate: Story = {
    render: ({ ...args }) => {
        const [showCartSidebar, setShowCartSidebar] = useState(false)

        function addShopingListToCart(){
            alert(`Updating cart with products from the shopping list`)
        }
        function addLatestOrderToCart(){
            alert('Updating cart with products from the latest order')
        }
        function handleGoToCart(){
            alert('Redirecting to cart page...')
        }
        function handleAddSuggestedProductToCart(product:any) {
            alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
        }
        return(
            <div style={{ margin: 'auto', position: 'relative'}}>
                <Cart {...args}/>
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