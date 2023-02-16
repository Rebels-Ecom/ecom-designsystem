import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TopNavBar } from './top-nav-bar'

export default {
  title: 'Design System/Molecules/Top Nav Bar',
  component: TopNavBar,
} as ComponentMeta<typeof TopNavBar>

const Template: ComponentStory<typeof TopNavBar> = (args) => <TopNavBar {...args} />

const topNavArgs = {
  topNavLinks: [
    {
      navLinkType: 'email',
      href: 'ehandel@spendrups.se',
      text: 'Kontakta oss',
      isExternal: false,
    },
    {
      navLinkType: 'telephone',
      href: '0771-494910',
      text: '0771-494910',
      isExternal: false,
    },
    {
      navLinkType: 'register',
      href: 'http://spendrups.se/kund/',
      text: 'Bli kund',
      isExternal: true,
    },
    {
      navLinkType: 'login',
      href: '/login',
      text: 'Logga in',
      isExternal: false,
    }
  ],
  linkComponent: 'a'
}

export const TopNavBarStory = Template.bind({})
TopNavBarStory.storyName = 'TopNavBar'
TopNavBarStory.args = {
  ...topNavArgs
}
