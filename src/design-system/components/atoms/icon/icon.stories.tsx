import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon'

const icons = [
  'icon-alert-circle',
  'icon-bell',
  'icon-chevron-left',
  'icon-mail',
  'icon-map-pin',
  'icon-menu',
  'icon-x',
  'icon-phone',
  'icon-refresh-cw',
  'icon-search',
  'icon-award',
  'icon-package',
  'icon-users',
  'icon-clipboard'
]

const meta: Meta<typeof Icon> = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: icons,
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

const IconStoryTemplate: Story = {
  render: ({ ...args }) => (<Icon {...args} />)
};

export const IconStory = {
  ...IconStoryTemplate,
  args: {
    icon: 'icon-map-pin',
  }
}