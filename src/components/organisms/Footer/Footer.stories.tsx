import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Footer } from './Footer'
import type { FooterLinkGroup } from './Footer'
import type { FooterTopBarLink } from '../../molecules/FooterTopBar'
import { SocialMediaLink } from '../../molecules/SocialMediaLink'

const footerTopBarLinks: FooterTopBarLink[] = [
  { label: 'Logga in', href: '/login', type: 'login' },
  { label: 'Registrera', href: '/register', type: 'register' },
  { label: 'Kontakt', href: '/contact', type: 'contact' },
]

const linkGroups: FooterLinkGroup[] = [
  {
    title: 'Kategorier',
    links: [
      { label: 'Öl', href: '/#ol', isExternal: true },
      { label: 'Vin', href: '/#vin', isExternal: true },
      { label: 'Sprit', href: '/#sprit', isExternal: true },
      { label: 'Cider', href: '/#cider', isExternal: true },
      { label: 'FAB / Blanddryck', href: '/#blanddryck', isExternal: true },
      { label: 'Vatten', href: '/#vatten', isExternal: true },
      { label: 'Läsk', href: '/#lask', isExternal: true },
    ],
  },
  {
    title: 'Konto',
    links: [
      { label: 'Mitt konto', href: '/#mitt-konto', isExternal: true },
      { label: 'Fakturor', href: '/#fakturor', isExternal: true },
      { label: 'Returer', href: '/#returer', isExternal: true },
      { label: 'Orderhistorik', href: '/#orderhistorik', isExternal: true },
    ],
  },
  {
    title: 'Sidor',
    links: [
      { label: 'Blogg', href: '/#blogg', isExternal: true },
      { label: 'Vår webshop', href: '/#webshop', isExternal: true },
    ],
  },
]

const socials = [
  <SocialMediaLink key="fb" icon="icon-facebook" label="Facebook" href="https://facebook.com/spendrupsbryggeri" isExternal />,
  <SocialMediaLink key="ig" icon="icon-instagram" label="Instagram" href="https://instagram.com/spendrups" isExternal />,
]

const meta = {
  title: 'Design System/Organisms/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
  args: {
    footerTopBarLinks,
    linkGroups,
    addressLabel: 'Besöksadress:',
    address: 'Huvudkontoret Vårby Allé 39, 143 30 Vårby',
    bottomBarText: '© 2026 SPENDRUPS BRYGGERI AB - All Rights Reserved',
    children: socials,
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

/**
 * **Legacy drop-in shape (v1.6.6).** The app renders `<Footer {...} />` with `links` (not `linkGroups`),
 * inner items using `children` (not `label`), a consumer `logo` element, `trackFooterLink`, and NO
 * `footerTopBarLinks`. Locks that this renders without crashing — the `links`→`linkGroups` rename made
 * `linkGroups` undefined → `.filter()` threw at render.
 */
export const LegacyLinksShape: Story = {
  render: () => (
    <Footer
      links={[
        { title: 'Kategorier', links: [{ children: 'Öl', href: '/ol' }, { children: 'Vin', href: '/vin' }] },
        { title: 'Konto', links: [{ children: 'Mitt konto', href: '/konto' }] },
      ]}
      logo={<div data-testid="app-logo">APP LOGO</div>}
      trackFooterLink={() => {}}
      addressLabel="Besöksadress:"
      address="Vårby Allé 39"
      bottomBarText="© 2026 Spendrups"
    >
      {socials}
    </Footer>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Renders (no crash) from the legacy `links`+`children` shape, with no top bar and the app's logo.
    await expect(canvas.getByRole('link', { name: 'Öl' })).toBeInTheDocument()
    await expect(canvas.getByRole('link', { name: 'Mitt konto' })).toBeInTheDocument()
    await expect(canvas.getByTestId('app-logo')).toBeInTheDocument()
  },
}

/** Canonical footer with quick-links bar, link columns, address, social links and newsletter. */
export const Default: Story = {
  args: {
    showNewsletter: true,
    newsletterPlaceholder: 'Skriv din e-postadress',
    onNewsletterSubmit: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The footer is a single contentinfo landmark.
    const footer = canvas.getByRole('contentinfo')
    await expect(footer).toBeInTheDocument()
    // The link columns form a labelled navigation landmark.
    await expect(canvas.getByRole('navigation', { name: 'Footer' })).toBeInTheDocument()
    // Group heading + a real link inside it.
    await expect(canvas.getByRole('heading', { name: 'Kategorier' })).toBeInTheDocument()
    await expect(canvas.getByRole('link', { name: 'Öl' })).toHaveAttribute('href', '/#ol')
    // Logo links home.
    await expect(canvas.getByRole('link', { name: 'Spendrups home' })).toHaveAttribute('href', '/')
  },
}

/** Newsletter sign-up validates the email before reporting it (interaction). */
export const WithNewsletter: Story = {
  args: {
    showNewsletter: true,
    newsletterPlaceholder: 'Skriv din e-postadress',
    onNewsletterSubmit: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getByLabelText('Email address')
    await userEvent.type(email, 'kund@spendrups.se')
    await userEvent.click(canvas.getByRole('button', { name: 'Newsletter' }))
    await expect(args.onNewsletterSubmit).toHaveBeenCalledWith('kund@spendrups.se')
  },
}

/** Anonymous user: no newsletter, no link columns — just the top bar, address and social links. */
export const AnonymousUser: Story = {
  args: {
    linkGroups: [],
    showNewsletter: false,
    children: socials,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('contentinfo')).toBeInTheDocument()
    // No link columns → no footer navigation landmark.
    await expect(canvas.queryByRole('navigation', { name: 'Footer' })).not.toBeInTheDocument()
  },
}

/** Landmark and logo accessible names are overridable for non-English consumers. */
export const Localized: Story = {
  args: {
    labels: { linksNav: 'Sidfot', home: 'Spendrups startsida' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Sidfot' })).toBeInTheDocument()
    await expect(canvas.getByRole('link', { name: 'Spendrups startsida' })).toBeInTheDocument()
  },
}

/**
 * Static frame for the review gallery. NOT mapped to a legacy baseline: both legacy `footer` snapshots
 * are Storybook **error frames** — the legacy Footer rendered its `logo` *object* directly
 * (`{logo && logo}`), throwing "Objects are not valid as a React child", so there is no valid oracle.
 * V2 replaces that slot with the self-contained `Logotype`. Current-only in the gallery.
 */
export const Visual: Story = {
  tags: ['visual'],
  args: {
    showNewsletter: true,
    newsletterPlaceholder: 'Skriv din e-postadress',
  },
}
