import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FooterTopBar } from './footer-top-bar'

const meta: Meta<typeof FooterTopBar> = {
  title: 'Design System/Molecules/FooterTopBar',
  component: FooterTopBar
}

export default meta;
type Story = StoryObj<typeof FooterTopBar>

const FooterTopBarTemplate: Story = {
  render: (args) => (<FooterTopBar {...args} />)
}

const footerTopBarArgs = {
  footerTopBarLinks: [
  {
    navLinkType: 'login',
    children: 'Logga in',
    href: '/login',
    title: 'Logga in',
    isExternal: true,
    target: null,
  },
  {
    navLinkType: 'register',
    children: 'Bli e-handels kund',
    href: 'http://spendrups.se/kund/',
    title: 'Bli e-handels kund',
    isExternal: true,
    target: null,
  },
  {
    navLinkType: 'contact',
    children: 'Kontakta oss',
    href: '/kontakta-oss',
    title: 'Kontakta oss',
    isExternal: true,
    target: null,
  }
  ],
  linkComponent: 'a'
}

export const FooterTopBarStory= {
  ...FooterTopBarTemplate,
  args: { 
      ...footerTopBarArgs
   }
}
