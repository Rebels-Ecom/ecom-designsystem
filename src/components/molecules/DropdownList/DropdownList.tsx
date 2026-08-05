import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, resolveLink, type LinkComponentType } from '../../../lib/link'

export type DropdownListTarget = '_blank' | '_self' | '_parent' | '_top'

export interface DropdownListLink {
  /** Link destination. */
  href: string
  /** Visible label (rendered uppercase); also the anchor's `title`. */
  title: string
  /** Anchor target. */
  target?: DropdownListTarget
  /** External links always render a plain `<a>`; internal links use `linkComponent`. @default false */
  isExternal?: boolean
  /** Marks the current page — exposed as `aria-current="page"` and shown bold (a non-colour cue). */
  isActive?: boolean
}

export interface DropdownListProps {
  /** Navigation links to render, in order. */
  links: DropdownListLink[]
  /**
   * Router link component for internal links (e.g. React Router / Next `Link` adapted to
   * {@link LinkComponentType}); external links always use a plain `<a>`. @default DefaultLink
   */
  linkComponent?: LinkComponentType
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<ul>`. */
  ref?: Ref<HTMLUListElement>
}

/**
 * A vertical list of navigation links (molecule), e.g. an account dropdown menu. Renders a real
 * `<ul>`/`<li>` list — with `role="list"` so Safari + VoiceOver keep list semantics after the Tailwind
 * reset (1.3.1) — of `<a>` links: external links render a plain anchor, internal links use the injected
 * `linkComponent` (defaulting to a semantic `<a>`, so links are focusable and exposed to AT — 4.1.2).
 * Each link is keyboard-focusable with a visible focus ring (2.4.7); the active link is marked with
 * `aria-current="page"` and bold weight rather than colour alone. Link text carries the destination
 * (2.4.4), and each row is a ≥44px target (2.5.5†). Labels render uppercase.
 */
function DropdownList({ links, linkComponent, className, ref }: DropdownListProps) {
  const InternalLink = resolveLink(linkComponent)

  return (
    <ul ref={ref} role="list" className={cn('m-0 flex list-none flex-col items-center p-0 md:w-full', className)}>
      {links.map((link, index) => {
        const LinkComponent = link.isExternal ? DefaultLink : InternalLink
        return (
          <li key={`${link.href}-${index}`} className="h-12 w-full">
            <LinkComponent
              href={link.href}
              target={link.target}
              title={link.title}
              aria-current={link.isActive ? 'page' : undefined}
              className={cn(
                'flex h-full items-center font-primary text-body text-nav-text-default no-underline',
                'hover:text-text-orange',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
                link.isActive && 'font-bold',
              )}
            >
              {link.title.toUpperCase()}
            </LinkComponent>
          </li>
        )
      })}
    </ul>
  )
}

export { DropdownList }
