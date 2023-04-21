import React, { useState } from 'react'
import { CartDeliveryDetails } from './cart-delivery-details'
import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryFormStory } from '../delivery-form/delivery-form.stories';

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
                <CartDeliveryDetails {...args} onClick={handleStartCheckout}/>
            </div>
        )
    }
}

export const CartDeliveryDetailsStory = {
    ...CartDeliveryDetailsStoryTemplate,
    args: {
        deliveryForm: DeliveryFormStory.args
    }
}