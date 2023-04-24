import React from 'react'
import { Cart } from './cart'
import type { Meta, StoryObj } from '@storybook/react'
import { CartOrderDetailsStory } from '../cart-order-details/cart-order-details.stories'
import { CartDeliveryDetailsStory } from '../cart-delivery-details/cart-delivery-details.stories'
import { CartDeliveryDetails } from '../cart-delivery-details/cart-delivery-details'
import { CartOrderDetails } from '../cart-order-details/cart-order-details'
import { LinkButton, ToggleSwitch, Button, Heading } from '../../atoms'
import { CartProduct, FormGroup, GroupWrapper } from '../../molecules'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../cart-product-list/cart-product-list'
import { DeliveryForm } from '../delivery-form/delivery-form'
import { ButtonPlaceOrderStory } from '../../atoms/button/button.stories'
import { DeliveryFormStory } from '../delivery-form/delivery-form.stories'
import { TextContent } from '../../atoms/text/text-content'

const meta: Meta<typeof Cart> = {
    title: 'Design System/Organisms/Cart',
    component: Cart
}

export default meta
type Story = StoryObj<typeof Cart>

const CartStoryTemplate: Story = {
    render: ({ ...args }) => {

        function handleStartCheckout(){
            alert(`Start checkout process...`)
        }
        
        return(
            <div style={{ margin: 'auto', position: 'relative'}}>
                <Cart>
                    <CartDeliveryDetails>
                        <DeliveryForm {...DeliveryFormStory.args}/>
                        <FormGroup label={'Jag godkänner köpesvillkoren'} formElementId={'terms-and-conditions'}>
                            <ToggleSwitch id={'terms-and-conditions'} onChangeToggle={()=>{}}></ToggleSwitch>
                        </FormGroup>
                        <TextContent>Genom att klicka på "Lägg beställning" godkänner jag Villkor för Spendrups Shoppingtjänst och bekräftar att jag har läst Spendrups Dataskyddsinformation och Cookiepolicy. Jag godkänner villkoren för Spendrups AB.</TextContent>
                        <TextContent componentType='a' href='/kopevillkor' underline color='#DE9034'>Spendrups köpevillkor</TextContent>
                        <Button {...ButtonPlaceOrderStory.args} type={'button'} surface={'primary'} onClick={handleStartCheckout} ></Button>
                    </CartDeliveryDetails>
                    <CartOrderDetails>
                    <GroupWrapper position='apart'>
                        <Heading order={1}>{args.cartOrderDetails.heading}</Heading>
                        <Heading order={1}>{args.cartOrderDetails.totalAmount}</Heading>
                        </GroupWrapper>
                        <GroupWrapper>
                            <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                            <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{icon:'icon-package'}} rounded onClick={()=>{}}/>
                        </GroupWrapper>
                        <CartProductList>
                            { args.cartOrderDetails.cartProductsList?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product} onClickRemoveProduct={()=>{}}></CartProduct>) }
                        </CartProductList>
                        <GroupWrapper>
                            <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
                        <FormGroup label={'Spara som inköpslista'} formElementId={'toggle-save-shopping-list'}>
                            <ToggleSwitch id={'toggle-save-shopping-list'} onChangeToggle={()=>{}}></ToggleSwitch>
                        </FormGroup>
                        </GroupWrapper>
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