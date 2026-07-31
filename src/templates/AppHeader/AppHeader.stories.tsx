import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import type { LinkComponentType } from '../../lib/link'
import type { SearchResult } from '../../components/molecules/Search'
import { AppHeader } from './AppHeader'
import {
  navCategories,
  profileItems,
  searchCatalog,
  searchNoResult,
  topLeftLinks,
  topRightLinks,
} from './AppHeader.fixtures'

/**
 * **AppHeader templates** — the global header wired live. The harness owns every open-state, the search
 * query, the derived type-ahead results and the auth status (the app holds these in `HeaderContext` +
 * `authenticationMachine`); here a small `useState` reproduces them so mega-menu, search, profile and
 * cart all work in Storybook. Untagged — a new composition with no legacy pixel baseline.
 */

/** Stand-in for the app's injected React Router `Link`. */
const Link: LinkComponentType = ({ href, children, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
)

const onNavigate = fn()
const onOpenCart = fn()
const onSearchSubmit = fn()

interface HarnessInit {
  isAuthenticated?: boolean
  userName?: string
  cartCount?: number
  loading?: boolean
}

/** Reproduces the header's UI + search state (the essential slice of HeaderContext). */
function AppHeaderHarness({
  isAuthenticated = false,
  userName,
  cartCount = 0,
  loading = false,
}: HarnessInit) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [authed, setAuthed] = useState(isAuthenticated)

  // Type-ahead: derive results from the query, exactly as the app derives them from the search service.
  const searchResults: SearchResult[] = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []
    return searchCatalog
      .filter((p) => p.name.toLowerCase().includes(q))
      .map((p) => ({ label: p.name, text: p.text, slug: p.slug }))
  }, [searchQuery])

  return (
    <AppHeader
      categories={navCategories}
      currentSlug="/nyheter"
      searchQuery={searchQuery}
      searchResults={searchResults}
      searchNoResult={searchNoResult}
      searchOpen={searchOpen}
      onSearchQueryChange={setSearchQuery}
      onSearchOpenChange={setSearchOpen}
      onSearchFocusChange={(focused) => focused && setSearchOpen(true)}
      onSearchSubmit={onSearchSubmit}
      mobileMenuOpen={mobileMenuOpen}
      onMobileMenuOpenChange={setMobileMenuOpen}
      isAuthenticated={authed}
      userName={authed ? userName : undefined}
      profileItems={profileItems}
      profileOpen={profileOpen}
      onProfileOpenChange={setProfileOpen}
      onSignOut={() => setAuthed(false)}
      cartCount={cartCount}
      onOpenCart={onOpenCart}
      topLeftLinks={topLeftLinks}
      topRightLinks={topRightLinks}
      onNavigate={onNavigate}
      linkComponent={Link}
      loading={loading}
    />
  )
}

const meta = {
  title: 'Design System/Templates/Flow 0 — Chrome/AppHeader',
  component: AppHeader,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  // Every story renders the stateful `AppHeaderHarness`, which supplies the real (controlled) props — so
  // these `args` exist only to satisfy the typed meta (the header's props are all required). They are
  // never read by the render.
  args: {
    categories: navCategories,
    searchQuery: '',
    searchResults: [],
    searchNoResult,
    searchOpen: false,
    onSearchQueryChange: () => {},
    onSearchOpenChange: () => {},
    mobileMenuOpen: false,
    onMobileMenuOpenChange: () => {},
    profileItems,
    profileOpen: false,
    onProfileOpenChange: () => {},
    cartCount: 0,
    onOpenCart: () => {},
  },
} satisfies Meta<typeof AppHeader>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Signed-in header. The `play` drives the live interactions: the banner + labelled nav landmarks exist,
 * the mega-menu opens, type-ahead search returns matches, the cart button reports its count, and the
 * profile drawer opens and signs out.
 */
export const SignedIn: Story = {
  render: () => <AppHeaderHarness isAuthenticated userName="Anna Andersson" cartCount={3} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Landmarks: banner + the two distinctly-named navs + the search landmark.
    await expect(canvas.getByRole('banner')).toBeInTheDocument()
    await expect(canvas.getByRole('navigation', { name: 'Huvudmeny' })).toBeInTheDocument()
    await expect(canvas.getByRole('navigation', { name: 'Utility' })).toBeInTheDocument()
    await expect(canvas.getByRole('search')).toBeInTheDocument()

    // Mega-menu: a category is a disclosure that opens its flyout.
    const drycker = canvas.getByRole('button', { name: 'Drycker' })
    await expect(drycker).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(drycker)
    await expect(drycker).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByRole('link', { name: 'Öl' })).toBeVisible()

    // Type-ahead search: typing returns matching product links.
    const field = canvas.getByRole('textbox', { name: 'Sök' })
    await userEvent.type(field, 'mari')
    await expect(canvas.getByRole('link', { name: /Mariestads/ })).toBeInTheDocument()
    await expect(canvas.queryByRole('link', { name: /El Esteco/ })).toBeNull()

    // Cart button folds its count into the accessible name.
    await userEvent.click(canvas.getByRole('button', { name: 'Varukorg, 3 varor' }))
    await expect(onOpenCart).toHaveBeenCalled()

    // Profile drawer opens and the sign-out control works.
    await userEvent.click(canvas.getByRole('button', { name: 'Mitt konto' }))
    await expect(canvas.getByRole('link', { name: 'Mina sidor' })).toBeVisible()
    await userEvent.click(canvas.getByRole('button', { name: 'Logga ut' }))
    // After sign-out the profile trigger no longer greets the user.
    await expect(canvas.queryByRole('link', { name: 'Mina sidor' })).toBeNull()
  },
}

/**
 * Signed-out header — no user greeting; the utility bar shows the public links and the profile control
 * offers sign-in rather than a name.
 */
export const SignedOut: Story = {
  render: () => <AppHeaderHarness cartCount={0} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('banner')).toBeInTheDocument()
    // Search and mega-menu still work when signed out.
    await expect(canvas.getByRole('button', { name: 'Drycker' })).toBeInTheDocument()
    await expect(canvas.getByRole('textbox', { name: 'Sök' })).toBeInTheDocument()
  },
}

/**
 * Loading — while the nav data is in flight the header shows busy placeholders instead of the mega-menu
 * (the app's `showMenuLoader`). The `play` confirms the categories aren't rendered yet.
 */
export const Loading: Story = {
  render: () => <AppHeaderHarness loading />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('banner')).toBeInTheDocument()
    await expect(canvas.queryByRole('button', { name: 'Drycker' })).toBeNull()
  },
}
