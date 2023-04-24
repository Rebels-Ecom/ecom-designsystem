import React, { useState } from 'react'
import { CartDeliveryDetails } from './cart-delivery-details'
import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryFormStory } from '../delivery-form/delivery-form.stories';
import { ButtonPlaceOrderStory } from '../../atoms/button/button.stories';
import { DeliveryForm } from '../delivery-form/delivery-form';
import { Button } from '../../atoms/button/button';
import { FormGroup } from '../../molecules/form-group/form-group';
import { ToggleSwitch } from '../../atoms/toggle-switch/toggle-switch';
import { TextContent } from '../../atoms/text/text-content';
import { GroupWrapper } from '../../molecules/group-wrapper/group-wrapper';

const meta: Meta<typeof CartDeliveryDetails> = {
    title: 'Design System/Organisms/CartDeliveryDetails',
    component: CartDeliveryDetails
};

export default meta;
type Story = StoryObj<typeof CartDeliveryDetails>;

const CartDeliveryDetailsStoryTemplate: Story = {
    render: ({ ...args }) => {

        function handleStartCheckout(){
            alert(`Start checkout process...`)
        }

        return(
            <div style={{ margin: 'auto', position: 'relative' }}>
                <CartDeliveryDetails>
                    <DeliveryForm {...DeliveryFormStory.args}/>
                    <FormGroup label={'Jag godkänner köpesvillkoren'} formElementId={'terms-and-conditions'}>
                        <ToggleSwitch id={'terms-and-conditions'} onChangeToggle={()=>{}}></ToggleSwitch>
                    </FormGroup>
                    <TextContent>Genom att klicka på "Lägg beställning" godkänner jag Villkor för Spendrups Shoppingtjänst och bekräftar att jag har läst Spendrups Dataskyddsinformation och Cookiepolicy. Jag godkänner villkoren för Spendrups AB.</TextContent>
                    <TextContent componentType='a' href='/kopevillkor' underline color='#DE9034'>Spendrups köpevillkor</TextContent>
                    <Button {...ButtonPlaceOrderStory.args} type={'button'} surface={'primary'} onClick={handleStartCheckout} ></Button>
                </CartDeliveryDetails>
            </div>
        )
    }
}

export const CartDeliveryDetailsStory = {
    ...CartDeliveryDetailsStoryTemplate,
    args: {
        ...DeliveryFormStory.args,
        ...ButtonPlaceOrderStory.args
    }
}