import React, { useState } from 'react'
import { CartSidebar } from './cart-sidebar'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGoToCart, LatestOrderButtonStory, ShoppingListButtonStory } from '../../atoms/button/button.stories'
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories'
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories'
import { DrawerSidebar } from '../../molecules/drawer-sidebar/drawer-sidebar'
import { Button } from '../../atoms/button/button'
import { CartProductList } from '../cart-product-list/cart-product-list'
import { LinkButton } from '../../atoms/link-button/link-button'
import { FormGroup } from '../../molecules/form-group/form-group'
import { ToggleSwitch } from '../../atoms/toggle-switch/toggle-switch'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'
import { Heading } from '../../atoms/heading/heading'
import { GroupWrapper } from '../../molecules'

const meta: Meta<typeof CartSidebar> = {
    title: 'Design System/Organisms/CartSidebar',
    component: CartSidebar
}

export default meta;
type Story = StoryObj<typeof CartSidebar>

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
                <DrawerSidebar onClose={closeCartSidebar} isOpen={showCartSidebar}>
                    <CartSidebar classNames={['light']}>
                        <GroupWrapper position='apart'>
                            <Heading order={3}>{args.heading}</Heading>
                            <Heading order={3}>1378,00 kr</Heading>
                        </GroupWrapper>
                        <GroupWrapper spacing='xl'>
                            <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                            <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{icon:'icon-package'}} rounded onClick={()=>{}}/>
                        </GroupWrapper>
                        <CartProductList>
                            { args?.cartProductsList?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product}></CartProduct>) }
                        </CartProductList>
                        <GroupWrapper spacing='xl'>
                            <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
                        <FormGroup label={'Spara som inköpslista'} formElementId={'toggle-save-shopping-list'} isToggleBtnLabel>
                            <ToggleSwitch id={'toggle-save-shopping-list'} onChangeToggle={()=>{}}></ToggleSwitch>
                        </FormGroup>
                        </GroupWrapper>
                    </CartSidebar>
                </DrawerSidebar>
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
        latestOrderButton: LatestOrderButtonStory.args,
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
        latestOrderButton: LatestOrderButtonStory.args,
        cartProductsList: [],
        goToCartButton: ButtonGoToCart.args,
        toggleSwitchLabel: 'Spara som inköpslista',
        suggestedProductsList: FeaturedProductsStory.args
    }
}