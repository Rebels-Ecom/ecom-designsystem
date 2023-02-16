import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './button'
import { Icon } from '../icon/icon'

export default {
  title: 'Design System/Atoms/Buttons',
  component: Button,
  argTypes: {
    surfaceVariant: {
      options: ['orange', 'blue', 'light_orange'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children ? args.children : 'Button'}</Button>

export const ButtonStory = Template.bind({})
ButtonStory.storyName = 'Button'
ButtonStory.args = {
  id: 'ButtonID',
  disabled: false,
  children: 'Button'
}

export const ButtonStoryPrimary = Template.bind({})
ButtonStoryPrimary.storyName = 'Button Primary'
ButtonStoryPrimary.args = {
  id: 'button_primary_1',
  value: '',
  disabled: false,
  surface: 'primary',
  surfaceVariant: 'blue'
}

export const ButtonStorySecondary = Template.bind({})
ButtonStorySecondary.storyName = 'Button Secondary'
ButtonStorySecondary.args = {
  id: 'button_secondary_1',
  value: '',
  disabled: false,
  surface: 'secondary'
}

export const ButtonStoryTertiary = Template.bind({})
ButtonStoryTertiary.storyName = 'Button Tertiary'
ButtonStoryTertiary.args = {
  id: 'button_tertiary_3',
  value: '',
  disabled: false,
  rounded:true,
  surface: 'tertiary',
  children: <>Byt förpacking&nbsp; &nbsp; <Icon icon="icon-layers"/></>
}

export const ButtonStoryTertiaryIconOnly = Template.bind({})
ButtonStoryTertiaryIconOnly.storyName = 'Button Tertiary Icon Only'
ButtonStoryTertiaryIconOnly.args = {
  id: 'button_tertiary_icon_only',
  value: '',
  disabled: false,
  rounded:true,
  surface: 'tertiary',
  children: <Icon icon="icon-layers"/>
}

export const ButtonProductCardStory = Template.bind({})
ButtonProductCardStory.storyName = 'Button Product Card'
ButtonProductCardStory.args = {
  id: 'ButtonID_ProductCard',
  disabled: false,
  size: 'small',
  children: 'Lägg i kundvagn',
  onClick: () => {},
}
