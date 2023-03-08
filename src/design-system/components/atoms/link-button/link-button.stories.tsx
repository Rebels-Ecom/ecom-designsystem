import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LinkButton } from './link-button'
import { UILinkStory } from '../ui-link/ui-link.stories'

const meta: Meta<typeof LinkButton> = {
  title: 'Design System/Atoms/LinkButton',
  component: LinkButton
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

const LinkButtonStoryTemplate: Story = {
  render: ({ ...args }) => (<LinkButton {...args} />)
};

export const LinkButtonStory = {
  ...LinkButtonStoryTemplate,
  args: {
    ...UILinkStory.args,
    size: 'large',
    surface: 'primary',
  }
}
