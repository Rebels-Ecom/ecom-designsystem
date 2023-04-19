import React, { useState } from 'react'
import { CartSidebar } from './cart-sidebar'
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGoToCart, LatertOrderButtonStory, ShoppingListButtonStory } from '../../atoms/button/button.stories';
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories';
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories';

const meta: Meta<typeof CartSidebar> = {
    title: 'Design System/Organisms/CartSidebar',
    component: CartSidebar
};

export default meta;
type Story = StoryObj<typeof CartSidebar>;

const CartSidebarStoryTemplate: Story = {
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
            //?path=/story/design-system-organisms-cart--cart-story
        }
        function handleAddSuggestedProductToCart(product:any) {
            alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
        }
        return(
            <div style={{ margin: 'auto', position: 'relative' }}>
                <button style={{ position: 'absolute', top:'2rem', left:'2rem'}}  onClick={openCartSidebar}>Open sidebar</button>
                <CartSidebar {...args} isOpen={showCartSidebar} onClose={closeCartSidebar} onClickShoppingList={addShopingListToCart} onClickLatestOrder={addLatestOrderToCart} onClickGoToCart={handleGoToCart} addSuggestedProductToCart={handleAddSuggestedProductToCart}/>
            </div>
        )
    }
}

export const CartSidebarStory = {
    ...CartSidebarStoryTemplate,
    args: {
        heading: 'Kundvagn',
        totalAmount: '1378,70',
        productsNumber: 7,
        text: '<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>',
        shoppingListButton: ShoppingListButtonStory.args,
        latestOrderButton: LatertOrderButtonStory.args,
        cartProductsList: CartProductListStory.args,
        goToCartButton: ButtonGoToCart.args,
        suggestedProductsList: FeaturedProductsStory.args
    }
}