import React, { useState } from 'react'
import { Cart } from './cart'
import type { Meta, StoryObj } from '@storybook/react'
import { CartOrderDetailsStory } from '../../organisms/cart-order-details/cart-order-details.stories'
import { CartDeliveryDetailsStory } from '../../organisms/cart-delivery-details/cart-delivery-details.stories'
import { CartDeliveryDetails } from '../../organisms/cart-delivery-details/cart-delivery-details'
import { CartOrderDetails } from '../../organisms/cart-order-details/cart-order-details'
import { LinkButton, Button, Heading, Loader, Checkbox } from '../../atoms'
import { CartProduct, GroupWrapper } from '../../molecules'
import { ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList } from '../../organisms/cart-product-list/cart-product-list'
import { DeliveryForm } from '../../organisms/delivery-form/delivery-form'
import { DeliveryFormStory } from '../../organisms/delivery-form/delivery-form.stories'
import { Text } from '../../atoms/text/text'
import { Heading_DeliveryForm_Story } from '../../atoms/heading/heading.stories'
import { FlexContainer } from '../../layouts'

const meta: Meta<typeof Cart> = {
    title: 'Design System/Templates/Cart',
    component: Cart
}

export default meta
type Story = StoryObj<typeof Cart>

const CartStoryTemplate: Story = {
    render: ({ ...args }) => {
        const [termsAndConditionsIsAccepted, setTermsAndConditions] = useState<boolean>(false)
        const [isLoading, setIsLoading] = useState<boolean>(false)
        function handleStartCheckout(){
            setIsLoading(true)
        }
        
        return(
            <div style={{ margin: 'auto', position: 'relative'}}>
                <Cart>
                    <CartDeliveryDetails loading={isLoading}>
                        <Heading order={3}>{Heading_DeliveryForm_Story.args.children}</Heading>
                        <DeliveryForm {...DeliveryFormStory.args}/>
                        <FlexContainer alignItems="center" gap={0.5}>
                            <Checkbox
                                id="terms-and-conditions"
                                name="terms-and-conditions"
                                value={`${termsAndConditionsIsAccepted}`}
                                checked={termsAndConditionsIsAccepted}
                                onChange={() => setTermsAndConditions(!termsAndConditionsIsAccepted)}
                                other={{
                                    ['aria-label']: 'Terms and conditions'
                                }}
                            />
                            <Text size="small">
                                <p
                                    dangerouslySetInnerHTML={{
                                    __html: 'Terms and conditions',
                                    }}
                                />
                            </Text>
                        </FlexContainer>
                        <Text>Genom att klicka på "Lägg beställning" godkänner jag Villkor för Spendrups Shoppingtjänst och bekräftar att jag har läst Spendrups Dataskyddsinformation och Cookiepolicy. Jag godkänner villkoren för Spendrups AB.</Text>
                        <Text componentType='a' href='/kopevillkor' underline>Spendrups köpevillkor</Text>
                        <Button children='Button' type={'button'} surface={'primary'} onClick={handleStartCheckout} ></Button>
                    </CartDeliveryDetails>
                    <CartOrderDetails>
                        {isLoading
                        ?
                        <GroupWrapper direction='column' align='center' spacing='lg'>
                            <Heading order={3}>Vi hanterar din order</Heading>
                            <Text>Det här kan ta någon minut eller två.</Text>
                            <Loader visible={isLoading} size='lg' position='relative' color='orange'></Loader>
                        </GroupWrapper>
                        :
                        <GroupWrapper direction='column' align='left' spacing='xl'>
                            <GroupWrapper position='apart'>
                                <Heading order={3}>{ CartOrderDetailsStory.args.heading}</Heading>
                                <Heading order={3}>{ CartOrderDetailsStory.args.totalAmount}</Heading>
                            </GroupWrapper>
                            <GroupWrapper spacing='md'>
                                <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{icon:'icon-layers'}} rounded onClick={()=>{}}/>
                                <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{icon:'icon-package'}} rounded onClick={()=>{}}/>
                            </GroupWrapper>
                            <CartProductList>
                                { args.cartOrderDetails.cartProductsList?.children?.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product} onClickRemoveProduct={()=>{}}></CartProduct>) }
                            </CartProductList>
                            <GroupWrapper align='right'>
                                <LinkButton surface={'primary'} isExternal={true} href={'?path=/story/design-system-organisms-cart--cart-story'}>Go to cart</LinkButton>
                            </GroupWrapper>
                        </GroupWrapper>
                        }   
                    </CartOrderDetails>
                </Cart>
            </div>
        )
    }
}

export const CartStory = {
    ...CartStoryTemplate,
    args: {
        ...CartDeliveryDetailsStory.args,
        cartOrderDetails: CartOrderDetailsStory.args
    }
}