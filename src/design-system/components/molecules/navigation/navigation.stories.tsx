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
      title: 'Hem',
      isExternal: true,
    },
    {
      href: '/nyheter',
      title: 'Nyheter',
      isExternal: true,
    },
    {
      href: '/ol',
      title: 'Öl',
      isExternal: true,
    },
    {
      href: '/vin',
      title: 'Vin',
      isExternal: true,
    },
    {
      href: '/sprit',
      title: 'Sprit',
      isExternal: true,
    },
    {
      href: '/cider',
      title: 'Cider',
      isExternal: true,
    },
    {
      href: '/alcoholfritt',
      title: 'Alcoholfritt',
      isExternal: true,
    },
    {
      href: '/ovrigt',
      title: 'Övrigt',
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
