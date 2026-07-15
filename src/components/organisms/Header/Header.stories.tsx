import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Header } from './Header'
import { AdminSearch, type AdminSearchResult } from '../../molecules/AdminSearch'
import { DeliveryInfoBar } from '../../molecules/DeliveryInfoBar'
import { TopNavBar, type TopNavLink } from '../../molecules/TopNavBar'
import { UiDatePicker } from '../../molecules/UiDatePicker'
import { IconButton } from '../../molecules/IconButton'
import { Logotype } from '../../molecules/Logotype'
import { MobileNavigation, type NavItem } from '../MobileNavigation'
import { DesktopNavigation } from '../DesktopNavigation'

const searchDataset: AdminSearchResult[] = [
  { name: 'German Jss', companyName: 'Experium Lodgebaren (371000)', email: 'jss@tt.tt' },
  { name: 'Ebba Persson', companyName: 'Experium Lodgebaren (371000)', email: 'ebba.persson@nexergroup.com' },
]

const utilityLeft: TopNavLink[] = [
  { href: '/kontakta-oss', icon: 'icon-mail', children: 'Kontakta oss' },
  { href: '0771-494910', icon: 'icon-phone', children: '0771-494910', isTelephoneLink: true, isExternal: true },
]
const utilityRight: TopNavLink[] = [{ href: '/login', icon: 'icon-user', children: 'Logga in' }]

const navCategories: NavItem[] = [
  {
    name: 'Drycker',
    href: '/drycker',
    links: [
      { name: 'Öl', href: '/drycker/ol' },
      { name: 'Vin', href: '/drycker/vin' },
    ],
  },
  { name: 'Nyheter', href: '/nyheter' },
  { name: 'Kampanjer', href: '/kampanjer' },
]

const deliveryDates = [new Date(2026, 6, 20), new Date(2026, 6, 22), new Date(2026, 6, 24)]

/** Wires the stateful slots (search / mobile menu) so the Header shell can be composed as a real page header. */
function HeaderDemo({ loading = false }: { loading?: boolean }) {
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const results = query
    ? searchDataset.filter((item) =>
        [item.name, item.companyName, item.email].some((field) => field.toLowerCase().includes(query.toLowerCase())),
      )
    : []

  const logo = (
    <a
      href="/"
      aria-label="Spendrups home"
      className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
    >
      <Logotype variant="responsive" className="h-8 w-auto md:h-10" />
    </a>
  )

  return (
    <Header
      loading={loading}
      salesTool={
        <AdminSearch
          id="header-admin-search"
          placeholder="Sök på kundnummer, företag, namn"
          noResultText="Inga träffar"
          query={query}
          setQuery={setQuery}
          isOpen={searchOpen}
          setIsOpen={setSearchOpen}
          results={results}
          onClickSearchResult={() => {}}
        />
      }
      topNavBar={<TopNavBar leftLinks={utilityLeft} rightLinks={utilityRight} />}
      deliveryInfoBar={<DeliveryInfoBar exists infoText="Kom ihåg att lämna tillbaka era tomfat!" onClick={() => {}} />}
      logo={logo}
      mobileActions={
        <>
          <IconButton type="button" icon="icon-search" label="Sök" size="large" isTransparent onClick={() => {}} />
          <IconButton type="button" icon="icon-heart-o" label="Favoriter" size="large" isTransparent onClick={() => {}} />
          <IconButton
            type="button"
            icon="icon-shopping-cart"
            label="Kundvagn, 2 varor"
            notification={2}
            size="large"
            isTransparent
            onClick={() => {}}
          />
          <IconButton type="button" icon="icon-user" label="Mitt konto" size="large" isTransparent onClick={() => {}} />
        </>
      }
      mobileNavigation={<MobileNavigation categories={navCategories} isOpen={menuOpen} setIsOpen={setMenuOpen} />}
      mobileCalendar={
        <UiDatePicker
          buttonLabel="Välj leveransdag"
          selectedDeliveryDate="2026-07-20"
          deliveryDates={deliveryDates}
          onDateSelected={() => {}}
        />
      }
      desktopActions={
        <>
          <IconButton
            type="button"
            icon="icon-shopping-cart"
            label="Kundvagn, 2 varor"
            notification={2}
            size="medium"
            onClick={() => {}}
          />
          <UiDatePicker
            buttonLabel="Välj leveransdag"
            selectedDeliveryDate="2026-07-20"
            deliveryDates={deliveryDates}
            onDateSelected={() => {}}
          />
          <IconButton type="button" icon="icon-user" label="Mitt konto" size="medium" onClick={() => {}} />
        </>
      }
      desktopNavigation={<DesktopNavigation categories={navCategories} currentSlug="/nyheter" />}
    />
  )
}

const meta = {
  title: 'Design System/Organisms/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical composed header: sales tool, utility bar, delivery banner, logo, actions and navigation. */
export const Standard: Story = {
  render: () => <HeaderDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The header is the banner landmark.
    await expect(canvas.getByRole('banner')).toBeInTheDocument()
    // The logo links home (the inactive layout is display:none, so only the visible copy is queryable).
    const logo = canvas.getByRole('link', { name: 'Spendrups home' })
    await expect(logo).toHaveAttribute('href', '/')
    // The logo/actions bar uses the warm nav surface (#f2efea = rgb(242,239,234)), not white.
    const bar = logo.closest('.bg-background-nav') as HTMLElement
    await expect(getComputedStyle(bar).backgroundColor).toBe('rgb(242, 239, 234)')
    // The profile action appears in both the mobile and desktop layouts (one is display:none).
    await expect(canvas.getAllByRole('button', { name: 'Mitt konto', hidden: true })).toHaveLength(2)
  },
}

/** Loading: the primary navigation is replaced by a busy placeholder, so no category links render. */
export const Loading: Story = {
  render: () => <HeaderDemo loading />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('banner')).toBeInTheDocument()
    await expect(canvas.queryByRole('link', { name: 'Nyheter' })).not.toBeInTheDocument()
  },
}

/**
 * Visual-parity frame — reproduces the legacy `Standard_Header`: the admin search bar, delivery banner,
 * logo, action icons + delivery date picker and the primary navigation. Paired `reviewOnly`: it composes
 * many brand sub-components (each already visually reviewed on its own) across viewport-specific layouts
 * that use the brand fonts/icons + accessible colours, so the frame can't pixel-match the legacy capture
 * within 2%, but it is a faithful reproduction of the same scene.
 */
export const Visual: Story = {
  tags: ['visual'],
  render: () => <HeaderDemo />,
}
