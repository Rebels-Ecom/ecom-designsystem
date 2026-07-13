import { useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import { Icon } from '../../atoms/Icon'
import { Button } from '../../molecules/Button'

export interface NavLink {
  /** Visible link text (also its accessible name). */
  name: string
  /** Destination URL. */
  href: string
  /** Open in a new tab (adds `target="_blank"` + `rel="noopener noreferrer"`). */
  openInNewTab?: boolean
  /** Optional descriptive text. */
  description?: string
  links?: never
}

export interface NavCategory {
  /** Visible category label. */
  name: string
  /** Optional destination for the category itself. */
  href?: string
  openInNewTab?: boolean
  description?: string
  subtitle?: string
  /** Child items — presence of `links` is what makes an item an expandable category. */
  links: NavItem[]
}

export type NavItem = NavLink | NavCategory

const isCategory = (item: NavItem): item is NavCategory => Array.isArray((item as NavCategory).links)

export interface MobileNavigationLabels {
  /** Accessible name for the hamburger toggle. @default 'Open menu' */
  openMenu: string
  /** Accessible name for the close button. @default 'Close menu' */
  closeMenu: string
  /** Accessible name for the navigation panel landmark. @default 'Main menu' */
  nav: string
}

export interface MobileNavigationProps {
  /** Top-level navigation items (links and/or expandable categories). */
  categories: NavItem[]
  /** Whether the drawer is open (controlled). */
  isOpen: boolean
  /** Setter for the open state (controlled). */
  setIsOpen: (open: boolean) => void
  /** Injected router link component for every nav link; defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** Show the sign-out action (needs `signOutLabel` + `onSignOut`). */
  isAuthenticated?: boolean
  /** Sign-out button label (consumer-supplied copy). */
  signOutLabel?: string
  /** Sign-out handler. */
  onSignOut?: () => void
  /** Optional actions rendered in the top bar, left of the toggle. */
  actions?: ReactNode
  /** Called with a link's href when it is activated (analytics hook). */
  trackNavigation?: (target: string) => void
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<MobileNavigationLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the top-level wrapper `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const defaultMobileNavigationLabels: MobileNavigationLabels = {
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  nav: 'Main menu',
}

const itemRowClasses =
  'flex w-full items-center justify-between gap-2 py-4 font-primary text-body text-text-default no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'

/** A single link or expandable category row (recurses for category children). */
function NavListItem({
  item,
  linkComponent,
  onNavigate,
  level,
}: {
  item: NavItem
  linkComponent?: LinkComponentType
  onNavigate: (href: string) => void
  level: number
}) {
  const Link = linkComponent ?? DefaultLink
  const [open, setOpen] = useState(false)
  const regionId = useId()

  return (
    <li className="flex flex-col border-b border-border-grey last:border-b-0">
      {isCategory(item) ? (
        <>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={regionId}
            onClick={() => setOpen((prev) => !prev)}
            className={cn(itemRowClasses, 'cursor-pointer')}
          >
            <span className={cn(open && 'font-bold')}>{item.name}</span>
            <Icon icon={open ? 'icon-chevron-up' : 'icon-chevron-down'} size="large" />
          </button>
          <ul id={regionId} hidden={!open} className="flex flex-col pl-4">
            {item.links.map((child) => (
              <NavListItem
                key={`${child.name}-${child.href ?? ''}`}
                item={child}
                linkComponent={linkComponent}
                onNavigate={onNavigate}
                level={level + 1}
              />
            ))}
          </ul>
        </>
      ) : (
        <Link
          href={item.href}
          target={item.openInNewTab ? '_blank' : '_self'}
          rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
          onClick={() => onNavigate(item.href)}
          className={itemRowClasses}
        >
          {item.name}
          {level > 0 && <Icon icon="icon-chevron-right" size="large" />}
        </Link>
      )}
    </li>
  )
}

/**
 * Mobile navigation drawer (organism). A hamburger toggle (`aria-expanded` + `aria-controls`, 4.1.2)
 * opens a slide-in `<nav>` panel (named via `labels.nav`) over a click-to-dismiss backdrop. It is a
 * modal-style overlay: on open, focus moves to the close button and is trapped within the panel
 * (2.4.3); `Escape` and a backdrop click both close it and return focus to the toggle (2.1.2); the
 * page body is scroll-locked while open. Categories (items carrying `links`) are nested disclosure
 * buttons (`aria-expanded` + `aria-controls`) revealing a collapsed, `hidden` sub-list — so collapsed
 * items leave the tab order and the accessibility tree. The legacy Framer slide/`useOnClickOutside`
 * are reimplemented natively; the entrance is a mount (not a slide) since it is non-essential and the
 * closed hamburger is the only visual-regression frame. Open/close is controlled via `isOpen`/`setIsOpen`.
 */
function MobileNavigation({
  categories,
  isOpen,
  setIsOpen,
  linkComponent,
  isAuthenticated,
  signOutLabel,
  onSignOut,
  actions,
  trackNavigation,
  labels,
  className,
  ref,
}: MobileNavigationProps) {
  const t = { ...defaultMobileNavigationLabels, ...labels }
  const panelId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const wasOpenRef = useRef(false)

  const close = () => setIsOpen(false)
  const onNavigate = (href: string) => {
    close()
    trackNavigation?.(href)
  }

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  // Move focus into the panel on open; return it to the toggle on close.
  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus()
    } else if (wasOpenRef.current) {
      toggleRef.current?.focus()
    }
    wasOpenRef.current = isOpen
  }, [isOpen])

  // Escape closes; Tab cycles within the panel (focus trap for the full-screen overlay).
  const handlePanelKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      close()
      return
    }
    if (event.key !== 'Tab' || !panelRef.current) return
    const focusables = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.offsetParent !== null)
    if (focusables.length === 0) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <div ref={ref} className={cn('relative flex flex-col px-2', className)}>
      <div className="flex items-center justify-end gap-4">
        {actions}
        <button
          ref={toggleRef}
          type="button"
          aria-label={t.openMenu}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(true)}
          className="flex size-11 items-center justify-center text-text-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
        >
          <Icon icon="icon-menu" size="large" />
        </button>
      </div>

      {isOpen && (
        <>
          <div
            aria-hidden
            onClick={close}
            className="fixed inset-0 z-drawer-backdrop bg-blue-500/90 backdrop-blur-md"
          />
          <nav
            ref={panelRef}
            id={panelId}
            aria-label={t.nav}
            onKeyDown={handlePanelKeyDown}
            style={{ width: '90vw' }}
            className="fixed right-0 top-0 z-drawer flex h-screen flex-col bg-surface-default pt-6"
          >
            <div className="flex justify-end px-4 pb-2">
              <button
                ref={closeRef}
                type="button"
                aria-label={t.closeMenu}
                onClick={close}
                className="flex size-11 items-center justify-center text-text-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
              >
                <Icon icon="icon-x" size="large" />
              </button>
            </div>

            <div className="overflow-y-auto border-t border-border-grey px-4 pb-4">
              <ul className="m-0 flex flex-col p-0">
                {categories.map((item) => (
                  <NavListItem
                    key={`${item.name}-${item.href ?? ''}`}
                    item={item}
                    linkComponent={linkComponent}
                    onNavigate={onNavigate}
                    level={0}
                  />
                ))}
              </ul>

              {isAuthenticated && signOutLabel && onSignOut && (
                <div className="flex justify-center px-4 py-1">
                  <Button surface="x" type="button" onClick={onSignOut}>
                    {signOutLabel}
                  </Button>
                </div>
              )}
            </div>
          </nav>
        </>
      )}
    </div>
  )
}

export { MobileNavigation }
