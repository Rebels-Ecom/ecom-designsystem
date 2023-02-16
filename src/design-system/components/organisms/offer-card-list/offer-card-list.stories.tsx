import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OfferCardList } from './offer-card-list'
import { OfferCardStory1, OfferCardStory2 } from '../../molecules/offer-card/offer-card.stories'

export default {
    title: 'Design System/Organisms/OfferCardList',
    component: OfferCardList,
} as ComponentMeta<typeof OfferCardList>

const Template: ComponentStory<typeof OfferCardList> = (args) => <OfferCardList {...args}></OfferCardList>

const offersList = [
    OfferCardStory1.args,
    OfferCardStory2.args,
    OfferCardStory1.args,
    OfferCardStory2.args,
];

export const OfferCardListStory = Template.bind({});
OfferCardListStory.storyName = 'Offer Card List Story',
OfferCardListStory.args = {
    list: offersList
}
