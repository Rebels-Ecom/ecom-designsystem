import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import type { LinkComponentType } from '../../lib/link'
import type { SearchResult } from '../../components/molecules/Search'
import { Breadcrumbs } from '../../components/organisms/Breadcrumbs'
import { Heading } from '../../components/atoms/Heading'
import { Text } from '../../components/atoms/Text'
import { AppHeader } from '../AppHeader'
import {
  navCategories,
  profileItems,
  searchCatalog,
  searchNoResult,
  topLeftLinks,
  topRightLinks,
} from '../AppHeader/AppHeader.fixtures'
import { AppFooter } from '../AppFooter'
import { footerTopBarLinks, linkGroups, socialLinks } from '../AppFooter/AppFooter.fixtures'
import { PageShell } from './PageShell'

/**
 * **PageShell templates** — the layout frame with live chrome slotted in. The header/footer carry their
 * own small harnesses (so the shell demo is interactive), and PageShell contributes the skip link + the
 * single `<main>` landmark. Untagged.
 */

const Link: LinkComponentType = ({ href, children, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
)

/** A compact, live AppHeader for the shell demo (full header interactions are covered in AppHeader's own stories). */
function ShellHeader() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const searchResults: SearchResult[] = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return q
      ? searchCatalog
          .filter((p) => p.name.toLowerCase().includes(q))
          .map((p) => ({ label: p.name, text: p.text, slug: p.slug }))
      : []
  }, [searchQuery])
  return (
    <AppHeader
      categories={navCategories}
      currentSlug="/drycker"
      searchQuery={searchQuery}
      searchResults={searchResults}
      searchNoResult={searchNoResult}
      searchOpen={searchOpen}
      onSearchQueryChange={setSearchQuery}
      onSearchOpenChange={setSearchOpen}
      onSearchFocusChange={(f) => f && setSearchOpen(true)}
      mobileMenuOpen={mobileMenuOpen}
      onMobileMenuOpenChange={setMobileMenuOpen}
      isAuthenticated
      userName="Anna Andersson"
      profileItems={profileItems}
      profileOpen={profileOpen}
      onProfileOpenChange={setProfileOpen}
      cartCount={2}
      onOpenCart={() => {}}
      topLeftLinks={topLeftLinks}
      topRightLinks={topRightLinks}
      linkComponent={Link}
    />
  )
}

function ShellFooter() {
  const [confirmation, setConfirmation] = useState<string | undefined>(undefined)
  return (
    <AppFooter
      footerTopBarLinks={footerTopBarLinks}
      linkGroups={linkGroups}
      socialLinks={socialLinks}
      onNewsletterSubmit={() => setConfirmation('Tack! Du är nu anmäld.')}
      newsletterConfirmation={confirmation}
      linkComponent={Link}
    />
  )
}

const demoMain = (
  <section className="py-8">
    <Heading order={1}>Öl</Heading>
    <Text>Utforska hela vårt ölsortiment — från ljus lager till alkoholfritt.</Text>
  </section>
)

const breadcrumbs = (
  <Breadcrumbs
    breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Drycker', href: '/drycker' }, { label: 'Öl' }]}
    linkComponent={Link}
  />
)

const meta = {
  title: 'Design System/Templates/Flow 0 — Chrome/PageShell',
  component: PageShell,
  parameters: { layout: 'fullscreen', controls: { disable: true } },
  args: { header: <ShellHeader />, footer: <ShellFooter />, children: demoMain },
} satisfies Meta<typeof PageShell>

export default meta
type Story = StoryObj<typeof meta>

/**
 * A full page frame. The `play` proves the landmark skeleton is exactly right — one banner, one main,
 * one contentinfo — plus a working skip-to-content link and the breadcrumb trail.
 */
export const Default: Story = {
  render: () => (
    <PageShell header={<ShellHeader />} footer={<ShellFooter />} breadcrumbs={breadcrumbs}>
      {demoMain}
    </PageShell>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Exactly one of each page landmark (no duplicates at composition scale).
    await expect(canvas.getAllByRole('banner')).toHaveLength(1)
    await expect(canvas.getAllByRole('main')).toHaveLength(1)
    await expect(canvas.getAllByRole('contentinfo')).toHaveLength(1)

    // Skip link targets the main landmark.
    const skip = canvas.getByRole('link', { name: 'Hoppa till innehåll' })
    await expect(skip).toHaveAttribute('href', '#main-content')
    await expect(canvas.getByRole('main')).toHaveAttribute('id', 'main-content')

    // Breadcrumb trail + page heading render inside main.
    await expect(canvas.getByRole('navigation', { name: /brödsmulor|breadcrumb/i })).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { level: 1, name: 'Öl' })).toBeInTheDocument()
  },
}
