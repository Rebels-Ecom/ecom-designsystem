import React from 'react'
import { Cart} from './cart'
import type { Meta, StoryObj } from '@storybook/react';
import { CartOrderDetailsStory } from '../cart-order-details/cart-order-details.stories';
import { CartDeliveryDetailsStory } from '../cart-delivery-details/cart-delivery-details.stories';
import { CartDeliveryDetails } from '../cart-delivery-details/cart-delivery-details';
import { CartOrderDetails } from '../cart-order-details/cart-order-details';
import { Group, Title } from '@mantine/core';
import { LinkButton, ToggleSwitch, Button } from '../../atoms';
import { CartProduct, FormGroup } from '../../molecules';
import { ICartProduct } from '../../molecules/cart-product/cart-product';
import { CartProductList } from '../cart-product-list/cart-product-list';

const meta: Meta<typeof Cart> = {
    title: 'Design System/Organisms/Cart',
    component: Cart
};

export default meta;
type Story = StoryObj<typeof Cart>;

const CartStoryTemplate: Story = {
    render: ({ ...args }) => {

        return(
            <div style={{ margin: 'auto', position: 'relative'}}>
                <Cart>
                    <CartDeliveryDetails {...args.deliveryDetails}/>
                    <CartOrderDetails>
                    <Group position='apart'>
                        <Title order={1} inherit>{args.cartOrderDetails.heading}</Title>
                        <Title order={1}>{args.cartOrderDetails.totalAmount}</Title>
                        </Group>
                        <Group>
                            <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                            <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{icon:'icon-package'}} rounded onClick={()=>{}}/>
                        </Group>
                        <CartProductList>
                            { args.cartOrderDetails.cartProductsList?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product} onClickRemoveProduct={()=>{}}></CartProduct>) }
                        </CartProductList>
                        <Group>
                            <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
                        <FormGroup label={'Spara som inköpslista'} formElementId={'toggle-save-shopping-list'}>
                            <ToggleSwitch id={'toggle-save-shopping-list'} onChangeToggle={()=>{}}></ToggleSwitch>
                        </FormGroup>
                        </Group>
                    </CartOrderDetails>
                </Cart>
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