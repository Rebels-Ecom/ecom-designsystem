import React, { useState } from 'react'
import { CartDeliveryDetails } from './cart-delivery-details'
import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryFormStory } from '../delivery-form/delivery-form.stories';
import { ButtonPlaceOrderStory } from '../../atoms/button/button.stories';
import { DeliveryForm } from '../delivery-form/delivery-form';
import { Button } from '../../atoms/button/button';

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