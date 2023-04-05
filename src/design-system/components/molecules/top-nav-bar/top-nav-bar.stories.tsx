import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TopNavBar } from './top-nav-bar'


const meta: Meta<typeof TopNavBar> = {
  title: 'Design System/Molecules/Top Nav Bar',
  component: TopNavBar
};

export default meta;
type Story = StoryObj<typeof TopNavBar>;

const TopNavBarStoryTemplate: Story = {
  render: ({ ...args }) => (<TopNavBar {...args} />)
};

const topNavArgs = {
  topNavLinks: [
    {
      navLinkType: 'email',
      href: 'ehandel@spendrups.se',
      children: 'Kontakta oss',
      isExternal: false,
    },
    {
      navLinkType: 'telephone',
      href: '0771-494910',
      children: '0771-494910',
      isExternal: false,
    },
    {
      navLinkType: 'register',
      href: 'http://spendrups.se/kund/',
      children: 'Bli kund',
      isExternal: true,
    },
    {
      navLinkType: 'login',
      href: '/login',
      children: 'Logga in',
      isExternal: false,
    }
  ],
  linkComponent: 'a'
}

export const TopNavBarStory = {
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs
  }
}
