import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import type { LinkComponentType } from '../../../lib/link'
import { Icon, type IconName } from '../../atoms/Icon'
import { LinkButton, type LinkButtonTarget } from '../LinkButton'

export type FooterTopBarLinkType = 'login' | 'register' | 'contact'

export interface FooterTopBarLink {
  /** Visible label — also the link's accessible name (kept even when the text is visually hidden). */
  label: string
  /** Destination URL. */
  href: string
  /** Quick-link kind; picks the leading icon. Omit for a plain text link (no icon). */
  type?: FooterTopBarLinkType
  /** External link — adds `rel="noopener noreferrer"` and defaults `target` to `_blank`. */
  isExternal?: boolean
  /** Anchor target. */
  target?: LinkButtonTarget
  /** Native `title` tooltip. */
  title?: string
  /** Underlying element id. */
  id?: string
}

export interface FooterTopBarLabels {
  /** Accessible name for the `<nav>` landmark. @default 'Quick links' */
  nav: string
}

export interface FooterTopBarProps {
  /** Quick-access links (login / register / contact, or plain links). Renders nothing when empty. */
  links: FooterTopBarLink[]
  /**
   * Component used to render each anchor. Defaults to a semantic `<a>`; pass a client-side router
   * link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** Overridable UI strings (English defaults) — see {@link FooterTopBarLabels}. */
  labels?: Partial<FooterTopBarLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<nav>`. */
  ref?: Ref<HTMLElement>
}

export const defaultFooterTopBarLabels: FooterTopBarLabels = {
  nav: 'Quick links',
}

const iconByType: Record<FooterTopBarLinkType, IconName> = {
  login: 'icon-user',
  register: 'icon-plus-circle',
  contact: 'icon-phone',
}

/**
 * Footer top bar (molecule) — a compact row of quick-access links (login / register / contact) on a
 * dark brand bar. Composes {@link LinkButton} pills with a leading {@link Icon}.
 *
 * Accessibility: rendered as a labelled `<nav>` landmark (2.4.1 / 1.3.1) named via `labels.nav`,
 * wrapping a `<ul role="list">` of real `<a href>` links (4.1.2) that expose the standard
 * `focus-visible` ring (2.4.7). Below `md` the pills collapse to icon-only circles and the visible
 * label is hidden — so each link always carries its `label` as an explicit accessible name
 * (`aria-label`), fixing the legacy control that became an unnamed link on mobile; the leading icon
 * stays decorative. Renders nothing when `links` is empty (legacy guard).
 */
function FooterTopBar({
  links,
  linkComponent,
  labels,
  className,
  ref,
}: FooterTopBarProps) {
  const t = { ...defaultFooterTopBarLabels, ...labels }

  if (!Array.isArray(links) || links.length === 0) return null

  return (
    <nav
      ref={ref}
      aria-label={t.nav}
      className={cn(
        'flex h-footer-bar-mobile w-full items-center justify-center bg-background-top-nav px-4 md:h-footer-bar-desktop md:px-14',
        className,
      )}
    >
      {/* Desktop: an inline-grid with equal (`auto-cols-fr`) columns so all pills share one width,
          sized to the widest label. Mobile: a simple flex row of icon-only circles. */}
      <ul
        role="list"
        className="flex list-none items-center justify-center gap-2 p-0 md:inline-grid md:grid-flow-col md:auto-cols-fr md:gap-6"
      >
        {links.map((link, index) => {
          const icon = link.type ? iconByType[link.type] : undefined
          return (
            <li key={`${link.href}-${index}`} className="flex">
              <LinkButton
                href={link.href}
                surface="secondary"
                size="small"
                rounded
                linkComponent={linkComponent}
                isExternal={link.isExternal}
                target={link.target}
                title={link.title}
                id={link.id}
                ariaLabel={link.label}
                className={cn(
                  'gap-2 max-md:size-10 max-md:w-10 max-md:min-w-10 max-md:p-2 md:px-6',
                )}
              >
                {icon && <Icon icon={icon} />}
                <span className={cn(icon && 'hidden md:inline')}>{link.label}</span>
              </LinkButton>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { FooterTopBar }
