import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import type { LinkComponentType } from '../../../lib/link'
import { Icon, type IconName } from '../../atoms/Icon'
import { LinkButton, type LinkButtonTarget } from '../LinkButton'

export interface SocialMediaLinkProps {
  /** Platform glyph (e.g. `icon-facebook`). Always decorative — the name comes from `label`. */
  icon: IconName
  /** Accessible name describing the destination (e.g. "Facebook"). Required — the link is icon-only. */
  label: string
  /** Destination URL. */
  href: string
  /** Anchor target. @default '_blank' */
  target?: LinkButtonTarget
  /** External link — adds `rel="noopener noreferrer"`. @default true */
  isExternal?: boolean
  /**
   * Component used to render the anchor. Defaults to a semantic `<a>`; pass a client-side router
   * link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying anchor. */
  ref?: Ref<HTMLAnchorElement>
}

/**
 * Social media link (molecule) — a circular, icon-only link to an external profile. Composes a
 * round {@link LinkButton} around a decorative {@link Icon}.
 *
 * Accessibility: renders a real `<a href>` (4.1.2) whose accessible name is the required `label`
 * (applied as `aria-label`, since there is no visible text — 1.1.1 / 2.4.4); the glyph is
 * `aria-hidden`. The blue glyph on the light chip clears 3:1 (1.4.11) and the anchor shows the
 * standard `focus-visible` ring (2.4.7). Opens in a new tab by default with `rel="noopener
 * noreferrer"`.
 */
function SocialMediaLink({
  icon,
  label,
  href,
  target = '_blank',
  isExternal = true,
  linkComponent,
  className,
  ref,
}: SocialMediaLinkProps) {
  return (
    <LinkButton
      ref={ref}
      href={href}
      surface="secondary"
      size="x-small"
      round
      noBorder
      target={target}
      isExternal={isExternal}
      linkComponent={linkComponent}
      title={label}
      ariaLabel={label}
      className={cn('rounded-full bg-icon-bg-blue text-text-blue', className)}
    >
      <Icon icon={icon} />
    </LinkButton>
  )
}

export { SocialMediaLink }
