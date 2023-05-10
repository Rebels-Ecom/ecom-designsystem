import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './footer'
import { FooterTopBarStory } from '../../molecules/footer-top-bar/footer-top-bar.stories'
import { SocialMediaLink } from '../../atoms/social-media-link/social-media-link'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_horiontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'

const meta: Meta<typeof Footer> = {
  title: 'Design System/Organisms/Footer',
  component: Footer,
}

export default meta
type Story = StoryObj<typeof Footer>

const FooterTemplate: Story = {
  render: (args) => <Footer {...args} />,
}

export const FooterStory = {
  ...FooterTemplate,
  args: {
    footerTopBarLinks: FooterTopBarStory.args.footerTopBarLinks,
    logo: {
      src: logotype_desktop_horizontal,
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [
        { srcset: logotype_mobile_horiontal, media: `(max-width: 767px)` },
        { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
      ],
    },
    addressLabel: 'Besöksadress: ',
    address: 'Huvudkontoret Vårby Allé 39, 143 30 Vårby',
    children: [
      <SocialMediaLink icon={'icon-facebook'} children={undefined} href={''} />,
      <SocialMediaLink icon={'icon-instagram'} children={undefined} href={''} />,
    ],
    showNewsletter: true,
    newsletterId: 'footerNewsLetterId',
    newsletterPlaceholder: 'Skriv din email address',
    links: [
      {
        title: 'Kategorier',
        links: [
          {
            href: '/#ol',
            children: 'Öl',
            isExternal: true,
          },
          {
            href: '/#vin',
            children: 'Vin',
            isExternal: true,
          },
          {
            href: '/#sprit',
            children: 'Sprit',
            isExternal: true,
          },
          {
            href: '/#cider',
            children: 'Cider',
            isExternal: true,
          },
          {
            href: '/#blanddryck',
            children: 'FAB / Blanddryck',
            isExternal: true,
          },
          {
            href: '/#vatten',
            children: 'Vatten',
            isExternal: true,
          },
          {
            href: '/#lask',
            children: 'Läsk',
            isExternal: true,
          },
          {
            href: '/#fruktdryck',
            children: 'Fruktdryck',
            isExternal: true,
          },
          {
            href: '/#mixers',
            children: 'Mixers',
            isExternal: true,
          },
          {
            href: '/#ovriga-produkter',
            children: 'Övriga produkter',
            isExternal: true,
          },
        ],
      },
      {
        title: 'Konto',
        links: [
          {
            href: '/#mitt-konto',
            children: 'Mitt konto',
            isExternal: true,
          },
          {
            href: '/#faktoror',
            children: 'Faktoror',
            isExternal: true,
          },
          {
            href: '/#returer',
            children: 'Returer',
            isExternal: true,
          },
          {
            href: '/#orderhistorik',
            children: 'Orderhistorik',
            isExternal: true,
          },
          {
            href: '/#favoriter',
            children: 'Inköpslistor / Favoriter',
            isExternal: true,
          },
        ],
      },
      {
        title: 'Sidor',
        links: [
          {
            href: '/#blogg',
            children: 'Blogg',
            isExternal: true,
          },
          {
            href: '/#webshop',
            children: 'Våran webshop',
            isExternal: true,
          },
        ],
      },
    ],
    linkComponent: 'a',
    bottomBarText: '© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved',
  },
}

export const FooterStory_AnonymousUser = {
  ...FooterTemplate,
  args: {
    footerTopBarLinks: FooterTopBarStory.args.footerTopBarLinks,
    logo: {
      src: logotype_desktop_horizontal,
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [
        { srcset: logotype_mobile_horiontal, media: `(max-width: 767px)` },
        { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
      ],
    },
    addressLabel: 'Besöksadress: ',
    address: 'Huvudkontoret Vårby Allé 39, 143 30 Vårby',
    children: [
      <SocialMediaLink 
        icon={'icon-facebook'}
        href= {'https://www.facebook.com/spendrupsbryggeri/'}
        children= {'Facebook'}
        isExternal={true} />,
      <SocialMediaLink icon={'icon-instagram'} children={undefined} href={''} />,
    ],
    showNewsletter: false,
    newsletterId: 'footerNewsLetterId',
    newsletterPlaceholder: 'Skriv din email address',
    links: [],
    linkComponent: 'a',
    bottomBarText: '© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved',
  },
}
