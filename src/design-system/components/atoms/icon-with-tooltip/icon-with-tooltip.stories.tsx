import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconWithTooltip } from './icon-with-tooltip'

const meta: Meta<typeof IconWithTooltip> = {
  title: 'Design System/Atoms/IconWithTooltip',
  component: IconWithTooltip,
};

export default meta;
type Story = StoryObj<typeof IconWithTooltip>;

const TooltipStoryTemplate: Story = {
  render: (args) => {
    return (
      <IconWithTooltip
        icon={{ icon: 'icon-alert-circle' }}
        content='Icon with tooltip story'
      />
    )
  }
};

export const TooltipStory = {
  ...TooltipStoryTemplate,
  args: {
    size: 'sm'
  }
}
