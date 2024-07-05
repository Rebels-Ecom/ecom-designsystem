import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonWithTooltip } from './button-with-tooltip'

const meta: Meta<typeof ButtonWithTooltip> = {
  title: 'Design System/Atoms/ButtonWithTooltip',
  component: ButtonWithTooltip,
};

export default meta;
type Story = StoryObj<typeof ButtonWithTooltip>;

const ButtonWithTooltipStoryTemplate: Story = {
  render: () => {
    return (
      <ButtonWithTooltip
        content='Välj variant'
        children='Click me'
        type='button'
        surface="secondary"
        iconRight={{ icon: 'icon-layers' }}
        rounded
        onClick={() => {}}
        name='Select packaging'
        side='right'
        align='center'
      />
    )
  }
};

export const ButtonWithTooltipStory = {
  ...ButtonWithTooltipStoryTemplate,
  args: {}
}
