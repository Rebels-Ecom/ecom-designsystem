import { useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import { mergeRefs } from '../../../lib/mergeRefs'
import { Icon } from '../../atoms/Icon'
import type { NavCategory, NavItem } from '../MobileNavigation'

export type { NavItem, NavLink, NavCategory } from '../MobileNavigation'

const isCategory = (item: NavItem): item is NavCategory => Array.isArray((item as NavCategory).links)

export interface DesktopNavigationLabels {
  /** Accessible name for the `<nav>` landmark. @default 'Main menu' */
  nav: string
  /** Accessible name for the panel close button. @default 'Close menu' */
  close: string
}

export const defaultDesktopNavigationLabels: DesktopNavigationLabels = {
  nav: 'Main menu',
  close: 'Close menu',
}

export interface DesktopNavigationProps {
  /** Top-level navigation items (links and/or expandable categories with a mega-menu panel). */
  categories: NavItem[]
  /** Current path — the matching top-level item is marked `aria-current`. */
  currentSlug?: string
  /**
   * Component used to render every anchor. Defaults to a semantic `<a>`; pass a client-side router
   * link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** Called with a link's href when it is activated (analytics hook). */
  trackNavigation?: (target: string) => void
  /** Overridable UI strings (English defaults) — see {@link DesktopNavigationLabels}. */
  labels?: Partial<DesktopNavigationLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<nav>`. */
  ref?: Ref<HTMLElement>
}

const topLevelBase =
  'flex h-20 cursor-pointer items-center gap-1 whitespace-nowrap border-0 border-b-2 border-transparent bg-transparent px-6 font-primary text-body text-nav-text-default no-underline hover:text-nav-text-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'

/**
 * Desktop navigation bar (organism) — a horizontal row of top-level links and expandable category
 * triggers that reveal a mega-menu panel of second/third-level links. Composes {@link Icon} and the
 * injected `linkComponent`; shares the {@link NavItem} model with `MobileNavigation`.
 *
 * Accessibility (generated fresh, not ported): a labelled `<nav>` landmark (2.4.1 / 1.3.1). Plain
 * top-level items are real `<a href>` links; categories are `<button>` disclosures exposing
 * `aria-expanded` + `aria-controls` for their panel (4.1.2), only one open at a time. `Escape` closes
 * the open panel and returns focus to its trigger (2.1.2); a pointer-down outside the nav closes it.
 * The current item carries `aria-current="page"` and bold text, so state is never colour-only
 * (1.4.1). All controls are keyboard-operable (2.1.1) with the standard `focus-visible` ring
 * (2.4.7). The legacy orange active colour (fails 4.5:1 on white) is replaced by the accessible blue
 * text token plus a blue underline indicator; the Framer entrance is dropped as non-essential motion.
 * Renders an `aria-busy` placeholder bar while `categories` is empty (loading).
 */
function DesktopNavigation({
  categories,
  currentSlug,
  linkComponent,
  trackNavigation,
  labels,
  className,
  ref,
}: DesktopNavigationProps) {
  const t = { ...defaultDesktopNavigationLabels, ...labels }
  const Link = linkComponent ?? DefaultLink
  const panelBaseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([])

  const close = () => setOpenIndex(null)

  // A pointer-down outside the nav closes any open panel.
  useEffect(() => {
    if (openIndex === null) return
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) close()
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [openIndex])

  const handleNavigate = (href: string) => {
    close()
    trackNavigation?.(href)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape' && openIndex !== null) {
      event.stopPropagation()
      const index = openIndex
      close()
      triggerRefs.current[index]?.focus()
    }
  }

  const isActive = (item: NavItem): boolean =>
    Boolean(currentSlug && item.href && currentSlug.includes(item.href))

  if (!categories || categories.length === 0) {
    return (
      <nav
        ref={ref}
        aria-label={t.nav}
        aria-busy="true"
        className={cn(
          'skeleton-shimmer relative h-20 w-full animate-shimmer bg-nav-surface-default motion-reduce:animate-none',
          className,
        )}
      />
    )
  }

  return (
    <nav
      ref={mergeRefs<HTMLElement>(navRef, ref)}
      aria-label={t.nav}
      onKeyDown={handleKeyDown}
      className={cn('relative z-10 w-full bg-nav-surface-default', className)}
    >
      <ul role="list" className="m-0 flex list-none items-center overflow-x-auto p-0 scrollbar-none">
        {categories.map((item, index) => {
          const active = isActive(item)

          if (!isCategory(item)) {
            return (
              <li key={`${item.name}-${index}`} className="flex-none">
                <Link
                  href={item.href}
                  target={item.openInNewTab ? '_blank' : undefined}
                  rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => handleNavigate(item.href ?? '')}
                  className={cn(topLevelBase, active && 'border-action-primary font-bold')}
                >
                  {item.name}
                </Link>
              </li>
            )
          }

          const open = openIndex === index
          const panelId = `${panelBaseId}-${index}`

          return (
            <li key={`${item.name}-${index}`} className="flex-none">
              <button
                ref={(node) => {
                  triggerRefs.current[index] = node
                }}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpenIndex(open ? null : index)}
                className={cn(topLevelBase, (open || active) && 'border-action-primary font-bold')}
              >
                {item.name}
                <Icon icon={open ? 'icon-chevron-up' : 'icon-chevron-down'} />
              </button>

              <div
                id={panelId}
                hidden={!open}
                className="absolute left-0 top-20 z-20 w-full border-t border-border-grey bg-nav-surface-default shadow-lg"
              >
                <div className="mx-auto flex w-full max-w-content-fluid items-start justify-between gap-8 overflow-x-auto px-4 py-6">
                  <ul role="list" className="m-0 flex list-none gap-8 p-0">
                    {item.links.map((second, secondIndex) => (
                      <li key={`${second.name}-${secondIndex}`} className="min-w-max">
                        {second.href ? (
                          <Link
                            href={second.href}
                            target={second.openInNewTab ? '_blank' : undefined}
                            rel={second.openInNewTab ? 'noopener noreferrer' : undefined}
                            onClick={() => handleNavigate(second.href ?? '')}
                            className="inline-flex py-2 font-primary text-body font-bold uppercase text-nav-text-default no-underline hover:text-nav-text-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
                          >
                            {second.name}
                          </Link>
                        ) : (
                          <span className="inline-flex py-2 font-primary text-body font-bold uppercase text-nav-text-default">
                            {second.name}
                          </span>
                        )}

                        {isCategory(second) && (
                          <ul role="list" className="m-0 flex list-none flex-col gap-1 p-0">
                            {second.links.map((third, thirdIndex) => (
                              <li key={`${third.name}-${thirdIndex}`}>
                                <Link
                                  href={third.href}
                                  target={third.openInNewTab ? '_blank' : undefined}
                                  rel={third.openInNewTab ? 'noopener noreferrer' : undefined}
                                  title={third.name}
                                  onClick={() => handleNavigate(third.href ?? '')}
                                  className="inline-flex py-1 font-primary text-body text-nav-text-default no-underline hover:text-nav-text-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
                                >
                                  {third.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    aria-label={t.close}
                    onClick={() => {
                      close()
                      triggerRefs.current[index]?.focus()
                    }}
                    className="flex size-11 flex-none items-center justify-center text-nav-text-default hover:text-nav-text-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
                  >
                    <Icon icon="icon-x" size="large" />
                  </button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { DesktopNavigation }
