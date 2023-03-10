import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UILink } from './ui-link'

export default {
  title: 'Design System/Atoms/UILink',
  component: UILink,
} as ComponentMeta<typeof UILink>

const Template: ComponentStory<typeof UILink> = (args) => (
  <div>
    <div style={{ marginBottom: '1rem' }}>
      <UILink {...args} />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <UILink {...args} iconLeft={'icon-arrow-right'} />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <UILink {...args} iconRight={'icon-arrow-right'} />
    </div>
  </div>
)

export const UILinkStory = Template.bind({})

UILinkStory.storyName = 'UILink'
UILinkStory.args = {
  children: 'Read more here',
  href: '',
  isExternal: true,
  target: null,
  title: 'Go to some page',
  size: 'default',
  onSurface: 'transparent',
}

export const UILinkBlogStory = Template.bind({})
UILinkBlogStory.storyName = 'UILink Blog'
UILinkBlogStory.args = {
  children: 'Läs mer',
  href: '',
  isExternal: true,
  target: null,
  title: 'Läs mer',
  size: 'default',
  onSurface: 'transparent',
}
