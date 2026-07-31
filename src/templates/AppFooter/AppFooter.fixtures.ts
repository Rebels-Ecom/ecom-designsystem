import type { FooterLinkGroup } from '../../components/organisms/Footer'
import type { FooterTopBarLink } from '../../components/molecules/FooterTopBar'
import type { SocialMediaLinksProps } from '../../components/molecules/SocialMediaLinks'

/**
 * Story-only fixtures for {@link AppFooter}, shaped like the app's `FooterMainContent` /
 * `FooterSocialLink` data (Swedish copy, deterministic). Not part of the public API.
 */

export const footerTopBarLinks: FooterTopBarLink[] = [
  { label: 'Kundservice', href: '/kundservice' },
  { label: 'Vanliga frågor', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const linkGroups: FooterLinkGroup[] = [
  {
    title: 'Sortiment',
    links: [
      { label: 'Öl', href: '/drycker/ol' },
      { label: 'Vin', href: '/drycker/vin' },
      { label: 'Sprit', href: '/drycker/sprit' },
      { label: 'Alkoholfritt', href: '/drycker/alkoholfritt' },
    ],
  },
  {
    title: 'Om Spendrups',
    links: [
      { label: 'Vår historia', href: '/om-oss/historia' },
      { label: 'Hållbarhet', href: '/om-oss/hallbarhet' },
      { label: 'Jobba hos oss', href: '/karriar' },
    ],
  },
  {
    title: 'Mitt konto',
    links: [
      { label: 'Mina sidor', href: '/mina-sidor' },
      { label: 'Orderhistorik', href: '/mina-sidor/orderhistorik' },
      { label: 'Fakturor', href: '/mina-sidor/fakturor' },
    ],
  },
]

export const socialLinks: SocialMediaLinksProps['links'] = [
  { icon: 'icon-facebook', label: 'Spendrups på Facebook', href: 'https://facebook.com', isExternal: true },
  { icon: 'icon-instagram', label: 'Spendrups på Instagram', href: 'https://instagram.com', isExternal: true },
  { icon: 'icon-linkedin', label: 'Spendrups på LinkedIn', href: 'https://linkedin.com', isExternal: true },
]
