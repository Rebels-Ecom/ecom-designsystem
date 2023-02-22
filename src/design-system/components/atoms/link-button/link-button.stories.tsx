import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LinkButton } from './link-button'
import { UILinkStory } from '../ui-link/ui-link.stories'

export default {
  title: 'Design System/Atoms/LinkButton',
  component: LinkButton,
  argTypes: {
    surfaceVariant: {
      options: ['orange', 'blue', 'light_orange'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof LinkButton>

const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args}></LinkButton>
Template.storyName = 'LinkButton'
Template.args = {
  ...UILinkStory.args,
  size: 'large',
  surface: 'primary',
  surfaceVariant: 'blue'
}

export { Template }
