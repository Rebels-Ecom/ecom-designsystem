import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UiCard } from './ui-card'
import { ProductCardStory } from '../product-card/product-card.stories';

const meta: Meta<typeof UiCard> = {
  title: 'Design System/Molecules/UiCard',
  component: UiCard
};

export default meta;
type Story = StoryObj<typeof UiCard>;

const UiCardStoryTemplate: Story = {
  render: (args) => (
    <div style={{ width: '100%', marginTop: '2rem', marginLeft: '2rem' }}>
      <UiCard {...args}/>
    </div>
  )
}

export const UiCardStory = {
  ...UiCardStoryTemplate,
  args: {
    ...ProductCardStory.args
  }
}