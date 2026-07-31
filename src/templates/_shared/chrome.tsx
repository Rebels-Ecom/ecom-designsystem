import { useMemo, useState } from 'react'
import type { LinkComponentType } from '../../lib/link'
import type { SearchResult } from '../../components/molecules/Search'
import { AdminSearch, type AdminSearchResult } from '../../components/molecules/AdminSearch'
import { ContentWrapper } from '../../components/atoms/ContentWrapper'
import { AppHeader } from '../AppHeader'
import {
  loggedInAs,
  navCategories,
  profileItems,
  searchCatalog,
  searchNoResult,
  topLeftLinks,
  topRightLinks,
} from '../AppHeader/AppHeader.fixtures'
import { AppFooter } from '../AppFooter'
import { footerTopBarLinks, linkGroups, socialLinks } from '../AppFooter/AppFooter.fixtures'

/**
 * Story-only chrome harnesses — a live {@link AppHeader} and {@link AppFooter} that page templates slot
 * into {@link PageShell} so their stories render as full pages. Kept here (not duplicated per story) so
 * every Flow 1–4 page template shares one header/footer. Not part of the public API.
 */

/** Stand-in for the app's injected router `Link`. */
export const DemoLink: LinkComponentType = ({ href, children, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
)

// Customers the sales-tool search can find (mirrors the app's SalesTool `AdminSearch`).
const adminCatalog: AdminSearchResult[] = [
  { name: 'Restaurang Prinsen', companyName: 'Prinsen AB', email: 'order@prinsen.se' },
  { name: 'Hotell Diplomat', companyName: 'Diplomat Hotel AB', email: 'inkop@diplomat.se' },
  { name: 'Café Saturnus', companyName: 'Saturnus AB', email: 'info@saturnus.se' },
]

/** The top sales/admin customer-search bar (mirrors `sitecore-components/SalesTool`). */
export function DemoSalesTool() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const results =
    query.trim().length > 2
      ? adminCatalog.filter((c) =>
          `${c.name} ${c.companyName} ${c.email}`.toLowerCase().includes(query.toLowerCase()),
        )
      : []
  return (
    <ContentWrapper padding={[1, 0]}>
      <AdminSearch
        id="adminSearch"
        query={query}
        setQuery={setQuery}
        results={results}
        isOpen={open}
        setIsOpen={setOpen}
        onClickSearchResult={() => {}}
        noResultText={query.trim().length > 2 ? 'Inga träffar' : ''}
        placeholder="Sök på namn, mailadress eller kund-ID"
      />
    </ContentWrapper>
  )
}

/** A live, signed-in header for page-template stories. */
export function DemoHeader({ cartCount = 0 }: { cartCount?: number }) {
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
      currentSlug="/varukorg"
      salesTool={<DemoSalesTool />}
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
      loggedInAs={loggedInAs}
      deliveryDeadlineLabel="Beställ inom 2 dagar för leverans om 4 dagar"
      onDeliveryClick={() => {}}
      favoritesCount={0}
      onOpenFavorites={() => {}}
      profileItems={profileItems}
      profileOpen={profileOpen}
      onProfileOpenChange={setProfileOpen}
      cartCount={cartCount}
      onOpenCart={() => {}}
      topLeftLinks={topLeftLinks}
      topRightLinks={topRightLinks}
      linkComponent={DemoLink}
    />
  )
}

/** A live footer for page-template stories. */
export function DemoFooter() {
  const [confirmation, setConfirmation] = useState<string | undefined>(undefined)
  return (
    <AppFooter
      footerTopBarLinks={footerTopBarLinks}
      linkGroups={linkGroups}
      socialLinks={socialLinks}
      onNewsletterSubmit={() => setConfirmation('Tack! Du är nu anmäld.')}
      newsletterConfirmation={confirmation}
      linkComponent={DemoLink}
    />
  )
}
