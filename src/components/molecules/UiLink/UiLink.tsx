import type { MouseEventHandler, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { resolveLink, type LinkComponentType } from '../../../lib/link'
import { Icon, type IconName } from '../../atoms/Icon'

export type UiLinkTarget = '_blank' | '_self' | '_parent' | '_top'
export type UiLinkSurface = 'transparent' | 'decorativeOne' | 'decorativeTwo'

export interface UiLinkProps {
  /** Link text. */
  children: ReactNode
  /** Destination URL. */
  href: string
  /**
   * Component used to render the anchor. Defaults to a semantic `<a>` ({@link DefaultLink}); pass a
   * client-side router link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** Anchor target. */
  target?: UiLinkTarget
  /** External link — adds `rel="noopener noreferrer"`. @default false */
  isExternal?: boolean
  /** Native `title` tooltip. */
  title?: string
  /** Decorative icon before the text (rendered `aria-hidden`). */
  iconLeft?: IconName
  /** Decorative icon after the text (rendered `aria-hidden`). */
  iconRight?: IconName
  /** Surface the link sits on — drives its colour. @default 'transparent' */
  onSurface?: UiLinkSurface
  /**
   * Drop the underline. Underline is the non-colour affordance for links (1.4.1); only remove it
   * where another affordance makes the link obvious (e.g. an icon-led CTA). @default false
   */
  noUnderline?: boolean
  /** Mark the target as a download. @default false */
  download?: boolean
  /** Overrides the accessible name; omit to use the visible text. */
  ariaLabel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  /** Underlying element id. */
  id?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying anchor. */
  ref?: Ref<HTMLAnchorElement>
}

const surfaceClasses: Record<UiLinkSurface, string> = {
  // On a light surface: accessible blue (legacy used orange, which fails AA on white — see note).
  transparent: 'text-text-blue hover:text-action-primary-hover',
  // On decorative/coloured surfaces: white text.
  decorativeOne: 'text-text-white hover:text-text-white',
  decorativeTwo: 'text-text-white hover:text-text-white',
}

/**
 * Text link (molecule). Renders a real, focusable `<a href>` (4.1.2) — override the element via
 * `linkComponent` for a client-side router. The visible text is the accessible name and is
 * `underline`d as the non-colour cue (1.4.1); its colour is the accessible `text-text-blue` on light
 * surfaces (an intentional divergence from the legacy orange, which fails AA). Icons are decorative
 * (`aria-hidden`). Keyboard focus shows the standard `focus-visible` ring (2.4.7).
 */
function UiLink({
  children,
  href,
  linkComponent,
  target,
  isExternal,
  title,
  iconLeft,
  iconRight,
  onSurface = 'transparent',
  noUnderline,
  download,
  ariaLabel,
  onClick,
  id,
  className,
  ref,
}: UiLinkProps) {
  const Link = resolveLink(linkComponent)

  return (
    <Link
      ref={ref}
      id={id}
      href={href}
      target={target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      title={title}
      download={download}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'relative inline-flex items-center gap-1 text-body',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        surfaceClasses[onSurface],
        className,
      )}
    >
      {iconLeft && <Icon icon={iconLeft} />}
      <span className={cn(!noUnderline && 'underline underline-offset-2')}>{children}</span>
      {iconRight && <Icon icon={iconRight} />}
    </Link>
  )
}

export { UiLink }
