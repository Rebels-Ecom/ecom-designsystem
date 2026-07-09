import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import { Icon, type IconName } from '../../atoms/Icon'

export type IconLinkTarget = '_blank' | '_self' | '_parent' | '_top'

export interface IconLinkProps {
  /** Link label — the accessible name; make it describe the destination (2.4.4). */
  children: ReactNode
  /** Destination URL. */
  href: string
  /** Glyph shown in the circular badge under the label (decorative). */
  icon: IconName
  /** External link — adds `rel="noopener noreferrer"` and defaults `target` to `_blank`. @default false */
  isExternal?: boolean
  /**
   * Component used to render the anchor. Defaults to a semantic `<a>` ({@link DefaultLink}); pass a
   * client-side router link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** Anchor target. */
  target?: IconLinkTarget
  /** Overrides the accessible name; omit to use the visible label. */
  ariaLabel?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying anchor. */
  ref?: Ref<HTMLAnchorElement>
}

/**
 * Vertical icon call-to-action link (molecule): an underlined text label above a circular icon badge,
 * rendered as one focusable `<a href>` (4.1.2). The label is the accessible name; the badge glyph is
 * decorative (`aria-hidden`). The label is `underline`d (the non-colour cue, 1.4.1) and uses the
 * accessible `text-text-blue` — an intentional divergence from the legacy orange, which fails 4.5:1 on
 * the light surface. Keyboard focus shows the standard `focus-visible` ring (2.4.7).
 */
function IconLink({
  children,
  href,
  icon,
  isExternal,
  linkComponent,
  target,
  ariaLabel,
  className,
  ref,
}: IconLinkProps) {
  const Link = linkComponent ?? DefaultLink

  return (
    <div className="my-8 flex flex-col items-center justify-center">
      <Link
        ref={ref}
        href={href}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        className={cn(
          'flex flex-col items-center gap-4 text-body no-underline',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          className,
        )}
      >
        <span className="text-text-blue underline underline-offset-2">{children}</span>
        <span className="flex size-7.5 items-center justify-center rounded-full bg-action-icon-bg text-text-default">
          <Icon icon={icon} size="medium" />
        </span>
      </Link>
    </div>
  )
}

export { IconLink }
