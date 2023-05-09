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
  render: ({ ...args }) => (<Navigation {...args} isOpen={true}/>)
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
      hasChildren: true,
      subNavigationLinks: [
        {href: 'ol/ale', title: 'Ale', isExternal: false }, 
        {href: 'ol/ipa', title: 'Ipa', isExternal: true}, 
        {href: 'ol/ljus-lager', title: 'Ljus lager', isExternal: true},
        {href: 'ol/mork-lager', title: 'Mörk lager', isExternal: true}, 
        {href: 'ol/pale-ale', title: 'Pale Ale', isExternal: true}, 
        {href: 'ol/stout-och-porter', title: 'Stout och Porter', isExternal: true}, 
        {href: 'ol/surol', title: 'Suröl', isExternal: true}, 
        {href: 'ol/veteol', title: 'Veteöl', isExternal: true}
      ]
    },
    {
      href: '/vin',
      title: 'Vin',
      isExternal: true,
      hasChildren: true,
      subNavigationLinks: [
        {href: 'vin/alkoholfritt', title: 'Alkoholfritt', isExternal: true }, 
        {href: 'vin/champagne', title: 'Champagne', isExternal: true}, 
        {href: 'vin/mousserande', title: 'Mousserande', isExternal: true},
        {href: 'vin/rose', title: 'Rosé', isExternal: true},
        {href: 'vin/rott', title: 'Rött', isExternal: true},
        {href: 'vin/sma-partier', title: 'Små partier', isExternal: true},
        {href: 'vin/sott', title: 'Sött', isExternal: true},
        {href: 'vin/starkvin', title: 'Starkvin', isExternal: true},
        {href: 'vin/vitt', title: 'Vitt', isExternal: true}
      ]
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
