import React, { useState } from 'react'
import { CartDeliveryDetails } from './cart-delivery-details'
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGoToCart, LatertOrderButtonStory, ShoppingListButtonStory } from '../../atoms/button/button.stories';
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories';
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories';
import { DeliveryFormStory } from '../delivery-form/delivery-form.stories';

const meta: Meta<typeof CartDeliveryDetails> = {
    title: 'Design System/Organisms/CartDeliveryDetails',
    component: CartDeliveryDetails
};

export default meta;
type Story = StoryObj<typeof CartDeliveryDetails>;

const CartDeliveryDetailsStoryTemplate: Story = {
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
            <div style={{ margin: 'auto', position: 'relative' }}>
                <CartDeliveryDetails {...args}/>
            </div>
        )
    }
}

export const CartDeliveryDetailsStory = {
    ...CartDeliveryDetailsStoryTemplate,
    args: {
        deliveryForm: DeliveryFormStory.args
    }
}