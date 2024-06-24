import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoadingBar } from './loading-bar'

const meta: Meta<typeof LoadingBar> = {
  title: 'Design System/Atoms/LoadingBar',
  component: LoadingBar
};

export default meta;
type Story = StoryObj<typeof LoadingBar>;

const LoadingBarStoryTemplate: Story = {
  render: ({ ...args }) => (<LoadingBar {...args} />)
}

export const LoadingBarStory_Beska = {
  ...LoadingBarStoryTemplate,
  args: {
    name: 'Beska',
    value: '6',
    color: 'orange'
  }
}
