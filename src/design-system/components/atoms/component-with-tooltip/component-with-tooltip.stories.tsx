import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentWithTooltip } from './component-with-tooltip'
import { IconButton } from '../icon-button/icon-button'

const meta: Meta<typeof ComponentWithTooltip> = {
  title: 'Design System/Atoms/ComponentWithTooltip',
  component: ComponentWithTooltip,
};

export default meta;
type Story = StoryObj<typeof ComponentWithTooltip>;

const ComponentWithTooltipStoryTemplate: Story = {
  render: () => {
    return (
      <ComponentWithTooltip
        content='Välj variant'
        element={<IconButton icon='icon-x' type='button' onClick={() => alert('clicked')} />}
        side='top'
        align='center'
      />
    )
  }
};

export const ComponentWithTooltipStory = {
  ...ComponentWithTooltipStoryTemplate,
  args: {}
}
