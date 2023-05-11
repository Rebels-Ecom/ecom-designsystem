import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './loader'

const meta: Meta<typeof Loader> = {
  title: 'Design System/Atoms/Loader',
  component: Loader
};

export default meta;
type Story = StoryObj<typeof Loader>;

const LoaderStoryTemplate: Story = {
  render: ({ ...args }) => (<Loader {...args} />)
};

export const LoaderStory = {
  ...LoaderStoryTemplate,
  args: {
    visible: true,
    text: 'Loading',
  }
}

export const LoaderStory_Large = {
  ...LoaderStoryTemplate,
  args: {
    visible: true,
    size: 'lg',
  }
}