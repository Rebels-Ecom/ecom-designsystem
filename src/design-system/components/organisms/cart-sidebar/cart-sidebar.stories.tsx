import React, { useState } from 'react'
import { CartSidebar } from './cart-sidebar'
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGoToCart, LatertOrderButtonStory, ShoppingListButtonStory } from '../../atoms/button/button.stories';
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories';
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories';
import { Drawer, Group, Title } from '@mantine/core'
import { Button } from '../../atoms/button/button';
import { CartProductList } from '../cart-product-list/cart-product-list';
import { LinkButton } from '../../atoms/link-button/link-button';
import { FormGroup } from '../../molecules/form-group/form-group';
import { ToggleSwitch } from '../../atoms/toggle-switch/toggle-switch';
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product';

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

        return(
            <div style={{ margin: 'auto', position: 'relative' }} className='light'>
                <Button  onClick={openCartSidebar} type={'button'} surface={'primary'}>Open sidebar</Button>
                <Drawer onClose={closeCartSidebar} opened={showCartSidebar} position='right' size='lg' overlayProps={{ opacity: 0.9, blur: 1, color: '#003E51' }}>
                    <CartSidebar classNames={['light']}>
                        <Group position='apart'>
                            <Title order={1} inherit>{args.heading}</Title>
                            <Title order={1}>1378,00 kr</Title>
                        </Group>
                        <Group>
                            <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                            <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{icon:'icon-package'}} rounded onClick={()=>{}}/>
                        </Group>
                        <CartProductList>
                            { args?.cartProductsList?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product}></CartProduct>) }
                        </CartProductList>
                        <Group>
                            <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
                        <FormGroup label={'Spara som inköpslista'} formElementId={'toggle-save-shopping-list'}>
                            <ToggleSwitch id={'toggle-save-shopping-list'} onChangeToggle={()=>{}}></ToggleSwitch>
                        </FormGroup>
                        </Group>
                    </CartSidebar>
                </Drawer>
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
        toggleSwitchLabel: 'Spara som inköpslista',
        suggestedProductsList: FeaturedProductsStory.args
    }
}

export const CartSidebarStoryNoProducts = {
    ...CartSidebarStoryTemplate,
    args: {
        heading: 'Kundvagn',
        totalAmount: '1378,70',
        productsNumber: 7,
        text: '<p><b>Du kan snabbt addera produkter till din beställning genom att hämta från dina inköpslistor eller senaste order</b></p>',
        shoppingListButton: ShoppingListButtonStory.args,
        latestOrderButton: LatertOrderButtonStory.args,
        cartProductsList: [],
        goToCartButton: ButtonGoToCart.args,
        toggleSwitchLabel: 'Spara som inköpslista',
        suggestedProductsList: FeaturedProductsStory.args
    }
}