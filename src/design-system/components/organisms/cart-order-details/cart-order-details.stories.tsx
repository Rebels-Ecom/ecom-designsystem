import React, { useState } from 'react'
import { CartOrderDetails } from './cart-order-details'
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGoToCart, LatertOrderButtonStory, ShoppingListButtonStory } from '../../atoms/button/button.stories';
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories';
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories';

const meta: Meta<typeof CartOrderDetails> = {
    title: 'Design System/Organisms/CartSidebar',
    component: CartOrderDetails
};

export default meta;
type Story = StoryObj<typeof CartOrderDetails>;

const CartOrderDetailsStoryTemplate: Story = {
    render: ({ ...args }) => {
        const [showCartSidebar, setShowCartSidebar] = useState(false)
        function openCartSidebar(){
            setShowCartSidebar(true)
        }
        function closeCartSidebar(){
            setShowCartSidebar(false)
        }
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
                <button style={{ position: 'absolute', top:'2rem', left:'2rem'}}  onClick={openCartSidebar}>Open sidebar</button>
                <CartOrderDetails {...args} isOpen={showCartSidebar} onClose={closeCartSidebar} addSuggestedProductToCart={handleAddSuggestedProductToCart}/>
            </div>
        )
    }
}

export const CartOrderDetailsStory = {
    ...CartOrderDetailsStoryTemplate,
    args: {
        heading: 'Din Kundvagn',
        totalAmount: '1378,70',
        productsNumber: 7,
        text: '<p>Tillagda produkter</p>',
        cartProductsList: CartProductListStory.args,
        suggestedProductsList: FeaturedProductsStory.args
    }
}