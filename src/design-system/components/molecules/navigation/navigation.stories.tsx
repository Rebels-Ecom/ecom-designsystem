import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from './navigation'
import { SearchNavBarStory } from '../search-nav-bar/search-nav-bar.stories'
import { TopNavBarStory } from '../top-nav-bar/top-nav-bar.stories'

const meta: Meta<typeof Navigation> = {
  title: 'Design System/Molecules/Navigation',
  component: Navigation
};
export default meta;
type Story = StoryObj<typeof Navigation>;

const NavigationStoryTemplate: Story = {
  render: ({ ...args }) => (<Navigation {...args} />)
};

const navigationArgs = {
  topNavBar: TopNavBarStory.args,
  searchNavBar: SearchNavBarStory.args,
  links: [
    {
      href: '#',
      text: 'Hem',
      isExternal: true,
    },
    {
      href: '/nyheter',
      text: 'Nyheter',
      isExternal: true,
    },
    {
      href: '/ol',
      text: 'Öl',
      isExternal: true,
    },
    {
      href: '/vin',
      text: 'Vin',
      isExternal: true,
    },
    {
      href: '/sprit',
      text: 'Sprit',
      isExternal: true,
    },
    {
      href: '/cider',
      text: 'Cider',
      isExternal: true,
    },
    {
      href: '/alcoholfritt',
      text: 'Alcoholfritt',
      isExternal: true,
    },
    {
      href: '/ovrigt',
      text: 'Övrigt',
      isExternal: true,
    },
  ],
  linkComponent: 'a'
}

export const NavigationStory = {
  ...NavigationStoryTemplate,
  args: {
    ...navigationArgs
  }
}
