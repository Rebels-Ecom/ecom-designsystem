import React, { useState } from 'react'
import { CartOrderDetails } from './cart-order-details'
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGoToCart, LatertOrderButtonStory, ShoppingListButtonStory } from '../../atoms/button/button.stories';
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories';
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories';
import { Group, Title } from '@mantine/core';
import { Button } from '../../atoms/button/button';
import { LinkButton } from '../../atoms/link-button/link-button';
import { FormGroup } from '../../molecules/form-group/form-group';
import { ToggleSwitch } from '../../atoms/toggle-switch/toggle-switch';
import { CartProduct } from '../../molecules';
import { ICartProduct } from '../../molecules/cart-product/cart-product';
import { CartProductList } from '../cart-product-list/cart-product-list';

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
        function handleToggleSwitch(e: React.ChangeEvent<HTMLInputElement>) {
            console.log("---", e.currentTarget.checked);
        }
        return(
            <div style={{ margin: 'auto', position: 'relative' }}>
                {/* <CartOrderDetails {...args} addSuggestedProductToCart={handleAddSuggestedProductToCart} onClickRemoveProduct={handleRemoveProduct}/> */}
                <CartOrderDetails>
                        <Group position='apart'>
                            <Title order={1} inherit>{args.heading}</Title>
                            <Title order={1}>1378,00 kr</Title>
                        </Group>
                        <Group>
                            <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                            <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{icon:'icon-package'}} rounded onClick={()=>{}}/>
                            {/* <Button {...args.shoppingListButton}></Button> */}
                        </Group>
                        <CartProductList>
                            { args?.cartProductsList?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product}></CartProduct>) }
                        </CartProductList>
                        <Group>
                            <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
                        <FormGroup label={'Spara som inköpslista'} formElementId={'toggle-save-shopping-list'}>
                            <ToggleSwitch id={'toggle-save-shopping-list'} onChangeToggle={handleToggleSwitch}></ToggleSwitch>
                        </FormGroup>
                        </Group>
                </CartOrderDetails>
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