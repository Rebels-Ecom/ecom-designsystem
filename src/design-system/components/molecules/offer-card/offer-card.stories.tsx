import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OfferCard } from './offer-card'

export default {
    title: 'Design System/Molecules/OfferCard',
    component: OfferCard,
} as ComponentMeta<typeof OfferCard>

const Template: ComponentStory<typeof OfferCard> = (args) => <OfferCard {...args}></OfferCard>

export const OfferCardStory1 = Template.bind({})
OfferCardStory1.storyName = 'Offer Card Story 1',
OfferCardStory1.args = {
    icon: 'icon-refresh-cw',
    heading: '24/7 Support',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
}

export const OfferCardStory2 = Template.bind({})
OfferCardStory2.storyName = 'Offer Card Story 2',
OfferCardStory2.args = {
    icon: 'icon-mail',
    heading: 'Säkra leveranser',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
}