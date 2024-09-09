import React from 'react'
import { CartOrderDetails } from './cart-order-details'
import type { Meta, StoryObj } from '@storybook/react'
import { CartProductListStory } from '../cart-product-list/cart-product-list.stories'
import { Button } from '../../atoms/button/button'
import { LinkButton } from '../../atoms/link-button/link-button'
import { CartProduct, GroupWrapper } from '../../molecules'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../cart-product-list/cart-product-list'
import { Heading } from '../../atoms/heading/heading'
import { Text } from '../../atoms/text/text'
import { Loader } from '../../atoms/loader/loader'

const meta: Meta<typeof CartOrderDetails> = {
    title: 'Design System/Deprecated/CartOrderDetails',
    component: CartOrderDetails
}

export default meta;
type Story = StoryObj<typeof CartOrderDetails>;

const CartOrderDetailsStoryTemplate: Story = {
    render: (args) => {
        const isLoading = false
        return(
            <div style={{ margin: 'auto', position: 'relative' }}>
                <CartOrderDetails>
                    {isLoading ? 
                        <GroupWrapper direction='column' align='center' spacing='lg'>
                            <Heading order={3}>Vi hanterar din order</Heading>
                            <Text>Det här kan ta någon minut eller två.</Text>
                            <Loader visible={isLoading} size='lg' position='relative' color='orange'></Loader>
                        </GroupWrapper>
                    :
                    <GroupWrapper direction='column' align='left' spacing='lg'>
                    <GroupWrapper position='apart'>
                        <Heading order={3}>{args.heading}</Heading>
                        <Heading order={3}>1378,00 kr</Heading>
                    </GroupWrapper>
                    <GroupWrapper>
                        <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                        <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{icon:'icon-package'}} rounded onClick={()=>{}}/>
                        {/* <Button {...args.shoppingListButton}></Button> */}
                    </GroupWrapper>
                    <CartProductList>
                        { args?.cartProductsList?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product} onClickRemoveProduct={()=>{}}></CartProduct>) }
                    </CartProductList>
                    <GroupWrapper align='right'>
                        <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
                    </GroupWrapper>
                    </GroupWrapper>
                    }
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
    }
}