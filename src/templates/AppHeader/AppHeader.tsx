import type { ReactNode, Ref } from 'react'
import { cn } from '../../lib/cn'
import { Icon } from '../../components/atoms/Icon'
import { DefaultLink, type LinkComponentType } from '../../lib/link'
import { IconButton } from '../../components/molecules/IconButton'
import { Logotype } from '../../components/molecules/Logotype'
import { Header } from '../../components/organisms/Header'
import { DesktopNavigation } from '../../components/organisms/DesktopNavigation'
import { MobileNavigation, type NavItem } from '../../components/organisms/MobileNavigation'
import {
  UserProfileDropdown,
  type UserProfileMenuItem,
} from '../../components/organisms/UserProfileDropdown'
import { Search, type SearchNoResult, type SearchResult } from '../../components/molecules/Search'
import { TopNavBar, type TopNavLink } from '../../components/molecules/TopNavBar'

export interface AppHeaderProps {
  /** The mega-menu category tree. */
  categories: NavItem[]
  /** Slug of the current page (drives the active nav item's `aria-current`). */
  currentSlug?: string

  // --- Search (controlled by the harness) ---------------------------------------------------------
  /** Current search query. */
  searchQuery: string
  /** Type-ahead results for the current query. */
  searchResults: SearchResult[]
  /** Empty-results copy. */
  searchNoResult: SearchNoResult
  /** Whether the results dropdown is open. */
  searchOpen: boolean
  /** Fires as the query changes (drives live type-ahead). */
  onSearchQueryChange: (query: string) => void
  /** Fires when the dropdown opens/closes. */
  onSearchOpenChange: (open: boolean) => void
  /** Fires on focus/blur of the field. */
  onSearchFocusChange?: (focused: boolean) => void
  /** Fires when the search is submitted. */
  onSearchSubmit?: (query: string) => void

  // --- Mobile menu (controlled) -------------------------------------------------------------------
  /** Whether the mobile menu drawer is open. */
  mobileMenuOpen: boolean
  /** Fires when the mobile menu opens/closes. */
  onMobileMenuOpenChange: (open: boolean) => void

  // --- User / auth (controlled) -------------------------------------------------------------------
  /** Whether a user is signed in (drives the profile control + utility bar). */
  isAuthenticated?: boolean
  /** Signed-in user's display name. */
  userName?: string
  /** Profile drawer menu items. */
  profileItems: UserProfileMenuItem[]
  /** Whether the profile drawer is open. */
  profileOpen: boolean
  /** Fires when the profile drawer opens/closes. */
  onProfileOpenChange: (open: boolean) => void
  /** Fires when the user signs out. */
  onSignOut?: () => void

  // --- Cart & favourites --------------------------------------------------------------------------
  /** Number of cart line-items (badge + accessible name). */
  cartCount: number
  /** Fires when the cart button is activated (opens the mini-cart). */
  onOpenCart: () => void
  /** Number of favourites (badge on the heart). @default 0 */
  favoritesCount?: number
  /** Fires when the favourites (heart) button is activated. */
  onOpenFavorites?: () => void

  // --- B2B extras ---------------------------------------------------------------------------------
  /** Signed-in customer text for the utility bar (e.g. "Inloggad som 377693, SPENDRUPS EHANDEL"). */
  loggedInAs?: string
  /** Order-deadline / delivery pill label (e.g. "Beställ inom 2 dagar för leverans om 4 dagar"). */
  deliveryDeadlineLabel?: string
  /** Fires when the delivery pill is activated (opens the delivery-date picker). */
  onDeliveryClick?: () => void
  /** Top sales/admin search bar (e.g. an `AdminSearch`) shown above the header for sales users. */
  salesTool?: ReactNode

  // --- Chrome -------------------------------------------------------------------------------------
  /** Utility-bar quick links (start). */
  topLeftLinks?: TopNavLink[]
  /** Utility-bar quick links (end). */
  topRightLinks?: TopNavLink[]
  /** Fires when a navigation target is activated (analytics). */
  onNavigate?: (target: string) => void
  /** Router link component; defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** Swap the navigation for busy placeholders. @default false */
  loading?: boolean
  /** Extra classes merged onto the root `<header>`. */
  className?: string
  /** Forwarded to the root `<header>`. */
  ref?: Ref<HTMLElement>
}

/**
 * **AppHeader** template (Storybook-only) — the global site header assembled the way the app's
 * `HeaderContainer` builds it: a {@link Header} shell filled with a {@link TopNavBar} utility row, the
 * brand {@link Logotype} home link, a type-ahead {@link Search}, cart + {@link UserProfileDropdown}
 * actions, the desktop {@link DesktopNavigation} mega-menu and the {@link MobileNavigation} drawer.
 * Stateless: all open-state, the query, results and auth status are controlled by the story harness so
 * the interactions run live. Swedish accessible names match the app's i18next copy.
 */
function AppHeader({
  categories,
  currentSlug,
  searchQuery,
  searchResults,
  searchNoResult,
  searchOpen,
  onSearchQueryChange,
  onSearchOpenChange,
  onSearchFocusChange,
  onSearchSubmit,
  mobileMenuOpen,
  onMobileMenuOpenChange,
  isAuthenticated = false,
  userName,
  profileItems,
  profileOpen,
  onProfileOpenChange,
  onSignOut,
  cartCount,
  onOpenCart,
  favoritesCount = 0,
  onOpenFavorites,
  loggedInAs,
  deliveryDeadlineLabel,
  onDeliveryClick,
  salesTool,
  topLeftLinks,
  topRightLinks,
  onNavigate,
  linkComponent = DefaultLink,
  loading = false,
  className,
  ref,
}: AppHeaderProps) {
  const Link = linkComponent

  const cartButton = (
    <IconButton
      type="button"
      icon="icon-shopping-cart"
      label={`Varukorg, ${cartCount} varor`}
      notification={cartCount}
      size="medium"
      onClick={onOpenCart}
    />
  )

  const favoritesButton = onOpenFavorites && (
    <IconButton
      type="button"
      icon="icon-heart-o"
      label={`Favoriter, ${favoritesCount} sparade`}
      notification={favoritesCount || undefined}
      size="medium"
      onClick={onOpenFavorites}
    />
  )

  const deliveryPill = deliveryDeadlineLabel && (
    <button
      type="button"
      onClick={onDeliveryClick}
      className="inline-flex items-center gap-2 rounded-lg border border-border-grey px-4 py-2 font-primary text-body-s text-text-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
    >
      <span>{deliveryDeadlineLabel}</span>
      <Icon icon="icon-calendar" />
    </button>
  )

  const searchField = (id: string) => (
    <Search
      id={id}
      isOpen={searchOpen}
      setIsOpen={onSearchOpenChange}
      setIsFocused={(focused) => onSearchFocusChange?.(focused)}
      query={searchQuery}
      setQuery={onSearchQueryChange}
      results={searchResults}
      noResult={searchNoResult}
      placeholder="Sök produkter"
      linkComponent={linkComponent}
      onSubmit={onSearchSubmit}
      labels={{ field: 'Sök', submit: 'Sök', clear: 'Rensa sökning' }}
    />
  )

  return (
    <>
      <Header
        ref={ref}
        className={className}
        loading={loading}
        salesTool={salesTool}
        topNavBar={
          <TopNavBar
            leftLinks={topLeftLinks}
            rightLinks={topRightLinks}
            userLoggedIn={isAuthenticated}
            userName={loggedInAs ?? userName}
            linkComponent={linkComponent}
          />
        }
        logo={
          <Link href="/" className="inline-flex shrink-0 items-center">
            <Logotype ariaLabel="Spendrups – till startsidan" />
          </Link>
        }
        desktopSearchBar={<div className="min-w-0 flex-1">{searchField('app-header-search-desktop')}</div>}
        desktopActions={
          <>
            {deliveryPill}
            {favoritesButton}
            {cartButton}
            <UserProfileDropdown
              items={profileItems}
              userName={userName}
              open={profileOpen}
              onOpenChange={onProfileOpenChange}
              onSignOut={onSignOut}
              labels={{ trigger: 'Mitt konto', signOut: 'Logga ut' }}
            />
          </>
        }
        desktopNavigation={
          <DesktopNavigation
            categories={categories}
            currentSlug={currentSlug}
            linkComponent={linkComponent}
            trackNavigation={onNavigate}
            labels={{ nav: 'Huvudmeny' }}
          />
        }
        mobileActions={
          <>
            <IconButton
              type="button"
              icon="icon-search"
              label={searchOpen ? 'Stäng sök' : 'Sök'}
              size="medium"
              isTransparent
              noBorder
              onClick={() => onSearchOpenChange(!searchOpen)}
            />
            {favoritesButton}
            {cartButton}
          </>
        }
        mobileNavigation={
          <MobileNavigation
            categories={categories}
            isOpen={mobileMenuOpen}
            setIsOpen={onMobileMenuOpenChange}
            linkComponent={linkComponent}
            isAuthenticated={isAuthenticated}
            signOutLabel="Logga ut"
            onSignOut={onSignOut}
            actions={cartButton}
            trackNavigation={onNavigate}
            labels={{ nav: 'Huvudmeny', openMenu: 'Öppna meny', closeMenu: 'Stäng meny' }}
          />
        }
      />

      {/* Mobile search row (below-lg) — the mobile bar's search icon reveals the field here. */}
      {searchOpen && (
        <div className={cn('border-b border-border-grey bg-surface-default px-4 py-3 lg:hidden')}>
          {searchField('app-header-search-mobile')}
        </div>
      )}
    </>
  )
}

export { AppHeader }
