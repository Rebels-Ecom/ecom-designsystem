import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
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
  'icon-users'
]

export default {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: icons,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />
Template.storyName = 'Icon'

Template.args = {
  icon: 'icon-map-pin',
}

export { Template }
