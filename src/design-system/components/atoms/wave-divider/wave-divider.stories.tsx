import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WaveDivider } from './wave-divider'

const meta: Meta<typeof WaveDivider> = {
  title: 'Design System/Atoms/WaveDivider',
  component: WaveDivider,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WaveDivider>;

const WaveDividerStoryTemplate: Story = {
  render: (args) => {
    return (
      <WaveDivider {...args} />
    )
  }
};

export const WaveDividerStory = {
  ...WaveDividerStoryTemplate,
  args: {
    size: 'sm'
  }
}
