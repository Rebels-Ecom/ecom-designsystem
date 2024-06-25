import React, { useState } from 'react'
import { CartDeliveryDetails } from './cart-delivery-details'
import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryFormStory } from '../delivery-form/delivery-form.stories';
import { DeliveryForm } from '../delivery-form/delivery-form';
import { Button } from '../../atoms/button/button';
import { Text } from '../../atoms/text/text';
import { Checkbox, Heading } from '../../atoms';
import { Heading_DeliveryForm_Story } from '../../atoms/heading/heading.stories';
import { FlexContainer } from '../../layouts';

const meta: Meta<typeof CartDeliveryDetails> = {
    title: 'Design System/Organisms/CartDeliveryDetails',
    component: CartDeliveryDetails
};

export default meta;
type Story = StoryObj<typeof CartDeliveryDetails>;

const CartDeliveryDetailsStoryTemplate: Story = {
    render: ({ ...args }) => {
        const [termsAndConditionsIsAccepted, setTermsAndConditions] = useState(false);

        function handleStartCheckout(){
            alert(`Start checkout process...`)
        }

        return(
            <div style={{ margin: 'auto', position: 'relative' }}>
                <CartDeliveryDetails loading={args.loading}>
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
            </div>
        )
    }
}

export const CartDeliveryDetailsStory = {
    ...CartDeliveryDetailsStoryTemplate,
    args: {
        loading: false,
        ...Heading_DeliveryForm_Story.args,
        ...DeliveryFormStory.args,
    }
}