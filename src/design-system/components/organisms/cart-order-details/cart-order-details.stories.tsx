import React, { useState } from 'react'
import { CartOrderDetails } from './cart-order-details'
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGoToCart, LatertOrderButtonStory, ShoppingListButtonStory } from '../../atoms/button/button.stories';
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories';
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories';

const meta: Meta<typeof CartOrderDetails> = {
    title: 'Design System/Organisms/CartOrderDetails',
    component: CartOrderDetails
};

export default meta;
type Story = StoryObj<typeof CartOrderDetails>;

const CartOrderDetailsStoryTemplate: Story = {
    render: ({ ...args }) => {

        function handleRemoveProduct(id: string){
            alert(`Removing the product with id: ${id}`)
        }
        function handleAddSuggestedProductToCart(product:any) {
            alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
        }
        return(
            <div style={{ margin: 'auto', position: 'relative' }}>
                <CartOrderDetails {...args} addSuggestedProductToCart={handleAddSuggestedProductToCart} onClickRemoveProduct={handleRemoveProduct}/>
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