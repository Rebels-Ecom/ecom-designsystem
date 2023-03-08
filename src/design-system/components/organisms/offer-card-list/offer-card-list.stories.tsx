import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OfferCardList } from './offer-card-list'
import { OfferCardStory1, OfferCardStory2 } from '../../molecules/offer-card/offer-card.stories'

const meta: Meta<typeof OfferCardList> = {
    title: 'Design System/Organisms/OfferCardList',
    component: OfferCardList
};

export default meta;
type Story = StoryObj<typeof OfferCardList>;

const OfferCardListStoryTemplate: Story = {
  render: ({ ...args }) => (<OfferCardList {...args} />)
};

const offersList = [
    OfferCardStory1.args,
    OfferCardStory2.args,
    OfferCardStory1.args,
    OfferCardStory2.args,
];

export const OfferCardListStory = {
    ...OfferCardListStoryTemplate,
    args: {
        list: offersList
    }
}
