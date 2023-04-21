import React from 'react'
import { CartOrderDetails } from './cart-order-details'
import type { Meta, StoryObj } from '@storybook/react'
import { FeaturedProductsStory } from '../../molecules/featured-products/featured-products.stories'
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories'
import { Button } from '../../atoms/button/button'
import { LinkButton } from '../../atoms/link-button/link-button'
import { FormGroup } from '../../molecules/form-group/form-group'
import { ToggleSwitch } from '../../atoms/toggle-switch/toggle-switch'
import { CartProduct, GroupWrapper } from '../../molecules'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../cart-product-list/cart-product-list'
import { Heading } from '../../atoms/heading/heading'

const meta: Meta<typeof CartOrderDetails> = {
    title: 'Design System/Organisms/CartOrderDetails',
    component: CartOrderDetails
}

export default meta;
type Story = StoryObj<typeof CartOrderDetails>;

const CartOrderDetailsStoryTemplate: Story = {
    render: ({ ...args }) => {

        return(
            <div style={{ margin: 'auto', position: 'relative' }}>
                <CartOrderDetails>
                        <GroupWrapper position='apart'>
                            <Heading order={1}>{args.heading}</Heading>
                            <Heading order={1}>1378,00 kr</Heading>
                        </GroupWrapper>
                        <GroupWrapper>
                            <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                            <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{icon:'icon-package'}} rounded onClick={()=>{}}/>
                            {/* <Button {...args.shoppingListButton}></Button> */}
                        </GroupWrapper>
                        <CartProductList>
                            { args?.cartProductsList?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product} onClickRemoveProduct={()=>{}}></CartProduct>) }
                        </CartProductList>
                        <GroupWrapper>
                            <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
                        <FormGroup label={'Spara som inköpslista'} formElementId={'toggle-save-shopping-list'}>
                            <ToggleSwitch id={'toggle-save-shopping-list'} onChangeToggle={()=>{}}></ToggleSwitch>
                        </FormGroup>
                        </GroupWrapper>
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