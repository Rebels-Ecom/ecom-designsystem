import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FooterTopBar } from './footer-top-bar'

export default {
  title: 'Design System/Molecules/Footer Top Bar',
  component: FooterTopBar,
} as ComponentMeta<typeof FooterTopBar>

const Template: ComponentStory<typeof FooterTopBar> = (args) => <FooterTopBar {...args} />

const footerTopBarArgs = {
    footerTopBarLinks: [
    {
        navLinkType: 'login',
        href: '/login',
        text: 'Logga in',
        isExternal: false,
    },
    {
      navLinkType: 'register',
      href: 'http://spendrups.se/kund/',
      text: 'Bli e-handels kund',
      isExternal: true,
    },
    {
      navLinkType: 'contact',
      href: '/kontakta-oss',
      text: 'Kontakta oss',
      isExternal: false,
    }
  ],
  linkComponent: 'a'
}

export const FooterTopBarStory = Template.bind({})
FooterTopBarStory.storyName = 'FooterTopBar'
FooterTopBarStory.args = {
  ...footerTopBarArgs
}
