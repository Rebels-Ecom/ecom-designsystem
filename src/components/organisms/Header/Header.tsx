import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { Loader } from '../../atoms/Loader'
import { DesktopNavigation } from '../DesktopNavigation'

export interface HeaderProps {
  /** Optional sales/admin tool row above everything (e.g. an `AdminSearch`). */
  salesTool?: ReactNode
  /** Slim quick-links bar (e.g. `TopNavBar`) shown at the very top of the header. */
  topNavBar?: ReactNode
  /** Delivery-status banner (e.g. `DeliveryInfoBar`) below the top bar. */
  deliveryInfoBar?: ReactNode
  /** Brand logo / home link, shown at the start of the main bar on every viewport. */
  logo?: ReactNode
  /** Action controls shown at the end of the mobile/tablet bar (below `lg`). */
  mobileActions?: ReactNode
  /** Calendar/date row shown under the mobile/tablet bar (below `lg`). */
  mobileCalendar?: ReactNode
  /** Menu trigger shown at the end of the mobile/tablet bar (replaced by a loader while `loading`). */
  mobileNavigation?: ReactNode
  /** Search field shown in the desktop bar (`lg` and up). */
  desktopSearchBar?: ReactNode
  /** Action controls shown at the end of the desktop bar (`lg` and up). */
  desktopActions?: ReactNode
  /** Primary navigation shown under the desktop bar (`lg` and up; a busy placeholder while `loading`). */
  desktopNavigation?: ReactNode
  /** Show loading placeholders in place of the navigation. @default false */
  loading?: boolean
  /** Extra classes, merged onto the root `<header>` via `cn()`. */
  className?: string
  /** Forwarded to the root `<header>`. */
  ref?: Ref<HTMLElement>
}

/**
 * Site header shell (organism) — a sticky `<header>` (banner landmark) that arranges the injected
 * pieces (sales tool, top bar, delivery banner, logo, search, actions and navigation) into a
 * mobile/tablet layout and a desktop layout. Purely compositional: every visible string comes from the
 * slots the consumer passes, so it carries no built-in copy.
 *
 * Accessibility: the root is the `<header>` banner landmark (1.3.1). The legacy JS `mediaQueryHelper`
 * (which rendered only one layout at a time and left the header empty when it resolved to nothing) is
 * replaced by responsive `display` utilities — the inactive layout is `display:none`, so it leaves the
 * accessibility tree and its duplicated controls are never announced twice (a `getByText` in tests still
 * matches both DOM copies → assert with `getAll*`). While `loading`, the mobile menu is swapped for a
 * `Loader` and the desktop nav for the `DesktopNavigation` busy placeholder.
 */
function Header({
  salesTool,
  topNavBar,
  deliveryInfoBar,
  logo,
  mobileActions,
  mobileCalendar,
  mobileNavigation,
  desktopSearchBar,
  desktopActions,
  desktopNavigation,
  loading = false,
  className,
  ref,
}: HeaderProps) {
  return (
    <header
      ref={ref}
      className={cn(
        'sticky top-0 z-menu w-full bg-background md:border-b md:border-border-grey',
        className,
      )}
    >
      {/* The sales tool sits on the page surface (not the nav bar) with breathing room all around. */}
      {salesTool && <div className="px-4 py-3 md:px-8">{salesTool}</div>}
      {topNavBar}
      {deliveryInfoBar}

      {/* Mobile & tablet layout (below lg) — the logo/actions bar carries the warm nav surface. */}
      <div className="bg-background-nav lg:hidden">
        <ContentWrapper>
          <div className="flex items-center justify-between gap-2 py-2">
            {logo}
            <div className="flex items-center justify-end gap-1">
              {mobileActions}
              {loading ? <Loader visible position="relative" size="xs" /> : mobileNavigation}
            </div>
          </div>
        </ContentWrapper>
        {/* The delivery-date row sits on the white page surface, not the warm nav bar. */}
        {mobileCalendar && <div className="bg-surface-default px-4 py-2">{mobileCalendar}</div>}
      </div>

      {/* Desktop layout (lg and up) */}
      <div className="hidden bg-background-nav lg:block">
        <ContentWrapper>
          <div className="flex items-center gap-4 py-2">
            {logo}
            {desktopSearchBar}
            <div className="flex flex-1 items-center justify-end gap-2">{desktopActions}</div>
          </div>
        </ContentWrapper>
        {loading ? <DesktopNavigation categories={[]} /> : desktopNavigation}
      </div>
    </header>
  )
}

export { Header }
