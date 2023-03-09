import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UILink } from './ui-link'

const meta: Meta<typeof UILink> = {
  title: 'Design System/Atoms/UILink',
  component: UILink
};

export default meta;
type Story = StoryObj<typeof UILink>;

const UILinkStoryTemplate: Story = {
  render: (args) => (
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
};

export const UILinkStory = {
  ...UILinkStoryTemplate,
  args: {
    children: 'Read more here',
    href: '',
    isExternal: true,
    target: null,
    title: 'Go to some page',
    size: 'default',
    onSurface: 'transparent',
  }
}

export const UILinkBlogStory = {
  ...UILinkStoryTemplate,
  args: {
    children: 'Läs mer',
    href: '',
    isExternal: true,
    target: null,
    title: 'Läs mer',
    size: 'default',
    onSurface: 'transparent',
  }
}
