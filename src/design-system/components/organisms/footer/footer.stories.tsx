import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './footer'
import { FooterTopBarStory } from '../../molecules/footer-top-bar/footer-top-bar.stories'

const meta: Meta<typeof Footer> = {
    title: 'Design System/Organisms/Footer',
    component: Footer
  }
  
export default meta;
    type Story = StoryObj<typeof Footer>

const FooterTemplate: Story = {
    render: (args) => (<Footer {...args} />)
}

export const FooterStory= {
    ...FooterTemplate,
    args: { 
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
        addressLabel: 'Besöksadress: ',
        address: 'Huvudkontoret Vårby Allé 39, 143 30 Vårby',
        socialMediaLinks: [
            {
            icon:'icon-facebook',
            href: 'https://www.facebook.com/spendrupsbryggeri/',
            title: 'Facebook',
            isExternal: true,
            },
            {
            icon:'icon-instagram',
            href: 'https://www.instagram.com/spendrupsbryggeri/',
            title: 'Instagram',
            isExternal: true,
            },
            {
            icon:'icon-linkedin',
            href: 'https://www.linkedin.com/company/spendrups-bryggeri-ab/',
            title: 'Facebook',
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
                title: 'Öl',
                isExternal: true,
                },
                {
                href: '/#vin',
                title: 'Vin',
                isExternal: true,
                },
                {
                href: '/#sprit',
                title: 'Sprit',
                isExternal: true,
                },
                {
                href: '/#cider',
                title: 'Cider',
                isExternal: true,
                },
                {
                href:'/#blanddryck',
                title: 'FAB / Blanddryck',
                isExternal: true,
                },
                {
                href: '/#vatten',
                title: 'Vatten',
                isExternal: true,
                },
                {
                href: '/#lask',
                title: 'Läsk',
                isExternal: true,
                },
                {
                href: '/#fruktdryck',
                title: 'Fruktdryck',
                isExternal: true,
                },
                {
                href: '/#mixers',
                title: 'Mixers',
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
                title: 'Mitt konto',
                isExternal: true,
                },
                {
                href: '/#faktoror',
                title: 'Faktoror',
                isExternal: true,
                },
                {
                href: '/#returer',
                title: 'Returer',
                isExternal: true,
                },
                {
                href: '/#orderhistorik',
                title: 'Orderhistorik',
                isExternal: true,
                },
                {
                href:'/#favoriter',
                title: 'Inköpslistor / Favoriter',
                isExternal: true,
                }
            ]
            },
            { title: 'Sidor',
            links: [
                {
                href: '/#blogg',
                title: 'Blogg',
                isExternal: true,
                },
                {
                href: '/#webshop',
                title: 'Våran webshop',
                isExternal: true,
                }
            ]
            }
        ],
        linkComponent: 'a',
        bottomBarText: '© 2022 SPENDRUPS BRYGGERI AB - All Rights Reserved'
    }
}
