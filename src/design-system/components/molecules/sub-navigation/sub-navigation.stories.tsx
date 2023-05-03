import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SubNavigation } from './sub-navigation'

const meta: Meta<typeof SubNavigation> = {
  title: 'Design System/Molecules/SubNavigation',
  component: SubNavigation
};

export default meta;
type Story = StoryObj<typeof SubNavigation>;

const IconStoryTemplate: Story = {
  render: ({ ...args }) => {
    return(<SubNavigation {...args} />)
  }
};

export const IconStory = {
  ...IconStoryTemplate,
  args: {
    
  }
}