import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Footer } from './footer'
import { FooterTopBarStory } from '../../molecules/footer-top-bar/footer-top-bar.stories'

export default {
  title: 'Design System/Organisms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => {
  return (<Footer {...args} />)
}

export const FooterStory = Template.bind({})

FooterStory.args = {
  footerTopBarLinks: FooterTopBarStory.args.footerTopBarLinks,
  logo: {
    src: '/logotypes/Spendrups_logo_desktop_horizontal.svg',
    alt: 'logo',
    href: '/',
    id: 'logo',
    sources: [
      { srcset: '/logotypes/Spendrups_logo_mobile_horizontal.svg', media: `(max-width: 767px)`},
      { srcset: '/logotypes/Spendrups_logo_desktop_horizontal.svg', media: `(min-width: 768px)` }],
  },
  address: 'Huvudkontoret Vårby Allé 39, 143 30 Vårby',
  socialMediaLinks: [
    {
      icon:'icon-facebook',
      href: 'https://www.facebook.com/spendrupsbryggeri/',
      text: 'Facebook',
      isExternal: true,
    },
    {
      icon:'icon-instagram',
      href: 'https://www.instagram.com/spendrupsbryggeri/',
      text: 'Instagram',
      isExternal: true,
    },
    {
      icon:'icon-linkedin',
      href: 'https://www.linkedin.com/company/spendrups-bryggeri-ab/',
      text: 'Facebook',
      isExternal: true,
    },
  ],


  newsletterId: 'footerNewsLetterId',
  newsletterPlaceholder: 'Skriv din email address',
  links: [
    { title: 'Kategorier',
      links: [
        {
          href: '/#ol',
          text: 'Öl',
          isExternal: true,
        },
        {
          href: '/#vin',
          text: 'Vin',
          isExternal: true,
        },
        {
          href: '/#sprit',
          text: 'Sprit',
          isExternal: true,
        },
        {
          href: '/#cider',
          text: 'Cider',
          isExternal: true,
        },
        {
          href:'/#blanddryck',
          text: 'FAB / Blanddryck',
          isExternal: true,
        },
        {
          href: '/#vatten',
          text: 'Vatten',
          isExternal: true,
        },
        {
          href: '/#lask',
          text: 'Läsk',
          isExternal: true,
        },
        {
          href: '/#fruktdryck',
          text: 'Fruktdryck',
          isExternal: true,
        },
        {
          href: '/#mixers',
          text: 'Mixers',
          isExternal: true,
        },
        {
          href:'/#ovriga-produkter',
          text: 'Övriga produkter',
          isExternal: true,
        }
      ]
    },
    { title: 'Konto',
      links: [
        {
          href: '/#mitt-konto',
          text: 'Mitt konto',
          isExternal: true,
        },
        {
          href: '/#faktoror',
          text: 'Faktoror',
          isExternal: true,
        },
        {
          href: '/#returer',
          text: 'Returer',
          isExternal: true,
        },
        {
          href: '/#orderhistorik',
          text: 'Orderhistorik',
          isExternal: true,
        },
        {
          href:'/#favoriter',
          text: 'Inköpslistor / Favoriter',
          isExternal: true,
        }
      ]
    },
    { title: 'Sidor',
      links: [
        {
          href: '/#blogg',
          text: 'Blogg',
          isExternal: true,
        },
        {
          href: '/#webshop',
          text: 'Våran webshop',
          isExternal: true,
        }
      ]
    }
  ],
  linkComponent: 'a',
  bottomBarText: '© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved'
}

FooterStory.storyName = 'Footer'

FooterStory.parameters = { padding: false }
