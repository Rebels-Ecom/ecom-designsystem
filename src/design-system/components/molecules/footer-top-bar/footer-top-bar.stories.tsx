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
      href: '/login',
      title: 'Logga in',
      isExternal: false,
  },
  {
    navLinkType: 'register',
    href: 'http://spendrups.se/kund/',
    title: 'Bli e-handels kund',
    isExternal: true,
  },
  {
    navLinkType: 'contact',
    href: '/kontakta-oss',
    title: 'Kontakta oss',
    isExternal: false,
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
