import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { OfferCard } from './offer-card'

const meta: Meta<typeof OfferCard> = {
    title: 'Design System/Molecules/OfferCard',
    component: OfferCard
};

export default meta;
type Story = StoryObj<typeof OfferCard>;

const OfferCardStoryTemplate: Story = {
  render: ({ ...args }) => (<OfferCard {...args} />)
};

export const OfferCardStory1 = {
    ...OfferCardStoryTemplate,
    args: {
        icon: 'icon-refresh-cw',
        heading: '24/7 Support',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    }
}
export const OfferCardStory2 = {
    ...OfferCardStoryTemplate,
    args: {
        icon: 'icon-mail',
        heading: 'Säkra leveranser',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    }
}