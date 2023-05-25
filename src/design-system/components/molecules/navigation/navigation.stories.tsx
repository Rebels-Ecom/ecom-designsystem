import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Navigation } from './navigation'
import { SearchNavBarStory } from '../search-nav-bar/search-nav-bar.stories'
import { TopNavBarStory_Guest_User } from '../top-nav-bar/top-nav-bar.stories'

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
  topNavBar: TopNavBarStory_Guest_User.args,
  searchNavBar: SearchNavBarStory.args,
  links: [
    {
      href: '#',
      children: 'Hem',
      title: 'Hem',
      isExternal: true,
    },
    {
      href: '/nyheter',
      title: 'Nyheter',
      children: 'Nyheter',
      isExternal: true,
    },
    {
      href: '/ol',
      title: 'Öl',
      children: 'Öl',
      isExternal: true,
      hasChildren: true,
      subNavBtnLabel: 'Visa alla sorter',
      subNavigationLinks: [
        {href: 'ol/ale', title: 'Ale', children: 'Ale',isExternal: false }, 
        {href: 'ol/ipa', title: 'Ipa', children: 'Ipa', isExternal: true}, 
        {href: 'ol/ljus-lager', title: 'Ljus lager', children: 'Ljus lager', isExternal: true},
        {href: 'ol/mork-lager', title: 'Mörk lager', children: 'Mörk lager', isExternal: true}, 
        {href: 'ol/pale-ale', title: 'Pale Ale', children: 'Pale Ale', isExternal: true}, 
        {href: 'ol/stout-och-porter', title: 'Stout och Porter', children: 'Stout och Porter', isExternal: true}, 
        {href: 'ol/surol', title: 'Suröl', children: 'Suröl', isExternal: true}, 
        {href: 'ol/veteol', title: 'Veteöl', children: 'Veteöl', isExternal: true}
      ]
    },
    {
      href: '/vin',
      children: 'Vin',
      title: 'Vin',
      isExternal: true,
      hasChildren: true,
      subNavBtnLabel: 'Visa alla vin',
      subNavigationLinks: [
        {href: 'vin/alkoholfritt', title: 'Alkoholfritt', children: 'Alkoholfritt', isExternal: true }, 
        {href: 'vin/champagne', title: 'Champagne',  children: 'Champagne', isExternal: true}, 
        {href: 'vin/mousserande', title: 'Mousserande', children: 'Mousserande', isExternal: true},
        {href: 'vin/rose', title: 'Rosé', children: 'Rosé', isExternal: true},
        {href: 'vin/rott', title: 'Rött', children: 'Rött', isExternal: true},
        {href: 'vin/sma-partier', title: 'Små partier', children: 'Små partier', isExternal: true},
        {href: 'vin/sott', title: 'Sött', children: 'Sött', isExternal: true},
        {href: 'vin/starkvin', title: 'Starkvin', children: 'Starkvin', isExternal: true},
        {href: 'vin/vitt', title: 'Vitt', children: 'Vitt', isExternal: true}
      ]
    },
    {
      href: '/sprit',
      children: 'Sprit',
      title: 'Sprit',
      isExternal: true,
    },
    {
      href: '/cider',
      children: 'Cider',
      title: 'Cider',
      isExternal: true,
    },
    {
      href: '/alcoholfritt',
      children: 'Alcoholfritt',
      title: 'Alcoholfritt',
      isExternal: true,
    },
    {
      href: '/ovrigt',
      children: 'Övrigt',
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
