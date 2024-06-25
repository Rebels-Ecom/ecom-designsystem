import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoadingBars } from './loading-bars'
import { LoadingBarStory_Beska } from '../../atoms/loading-bar/loading-bar.stories';

const meta: Meta<typeof LoadingBars> = {
  title: 'Design System/Molecules/LoadingBars',
  component: LoadingBars
};

export default meta;
type Story = StoryObj<typeof LoadingBars>;

const LoadingBarsStoryTemplate: Story = {
  render: ({ ...args }) => (<LoadingBars {...args} />)
}

const loadingBarsList = [LoadingBarStory_Beska.args, LoadingBarStory_Beska.args, LoadingBarStory_Beska.args, LoadingBarStory_Beska.args, ]

export const LoadingBarsStory = {
  ...LoadingBarsStoryTemplate,
  args: {
    loadingBars: loadingBarsList
  }
}