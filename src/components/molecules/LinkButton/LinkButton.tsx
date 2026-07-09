import type { MouseEventHandler, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'

export type LinkButtonSurface = 'primary' | 'secondary' | 'tertiary'
export type LinkButtonSize = 'x-small' | 'small' | 'large'
export type LinkButtonTarget = '_blank' | '_self' | '_parent' | '_top'

export interface LinkButtonProps {
  /** Visible label — the link's accessible name; make it describe the destination (2.4.4). */
  children: ReactNode
  /** Destination URL. */
  href: string
  /** Visual emphasis. @default 'primary' */
  surface?: LinkButtonSurface
  /** Size preset (height + type scale). @default 'small' */
  size?: LinkButtonSize
  /**
   * Component used to render the anchor. Defaults to a semantic `<a>` ({@link DefaultLink}); pass a
   * client-side router link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** Anchor target. */
  target?: LinkButtonTarget
  /** External link — adds `rel="noopener noreferrer"` and defaults `target` to `_blank`. @default false */
  isExternal?: boolean
  /** Native `title` tooltip. */
  title?: string
  /** Underlying element id. */
  id?: string
  /** Fully rounded (pill) corners. @default false */
  rounded?: boolean
  /** Circular icon-sized button (fixed 40px square). @default false */
  round?: boolean
  /** Disable the link — drops `href`/`onClick`, exposes `aria-disabled`, removes it from tab order. @default false */
  disabled?: boolean
  /** Remove the visible border. @default false */
  noBorder?: boolean
  /** Slightly translucent fill (secondary surface only). @default false */
  opacity?: boolean
  /** Overrides the accessible name; omit to use the visible text. */
  ariaLabel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying anchor. */
  ref?: Ref<HTMLAnchorElement>
}

const sizeClasses: Record<LinkButtonSize, string> = {
  'x-small': 'h-10 px-4 text-cta-s',
  small: 'h-10 px-8 text-cta-s',
  large: 'h-12 px-8 text-cta-l',
}

const surfaceClasses: Record<LinkButtonSurface, string> = {
  primary: 'bg-action-primary text-text-on-primary hover:bg-action-primary-hover',
  secondary:
    'bg-action-secondary border-border-on-secondary text-text-on-secondary hover:border-border-on-secondary-hover hover:text-text-on-secondary-hover',
  tertiary: 'bg-action-tertiary text-text-on-tertiary hover:bg-action-tertiary-hover',
}

const disabledSurfaceClasses: Record<LinkButtonSurface, string> = {
  primary: 'bg-action-primary-disabled text-text-on-primary-disabled',
  secondary: 'border-border-on-secondary-disabled text-text-on-secondary-disabled',
  tertiary: 'bg-action-tertiary-disabled text-text-on-tertiary-disabled',
}

/**
 * Button-styled navigational link (molecule). Renders a real, focusable `<a href>` (4.1.2) — so it
 * navigates and is exposed as a link, not a button — styled like the {@link Button} CTA with the
 * same semantic surface tokens. Override the element via `linkComponent` for a client-side router.
 * It is a full-width block CTA by default (legacy parity); the visible `children` is its accessible
 * name, so make it describe the destination. Keyboard focus shows the standard `focus-visible` ring
 * (2.4.7); `size="large"` meets the 44px target (2.5.5†).
 */
function LinkButton({
  children,
  href,
  surface = 'primary',
  size = 'small',
  linkComponent,
  target,
  isExternal,
  title,
  id,
  rounded,
  round,
  disabled,
  noBorder,
  opacity,
  ariaLabel,
  onClick,
  className,
  ref,
}: LinkButtonProps) {
  const Link = linkComponent ?? DefaultLink

  return (
    <Link
      ref={ref}
      id={id}
      href={disabled ? undefined : href}
      target={target ?? (isExternal ? '_blank' : undefined)}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      title={title}
      onClick={disabled ? undefined : onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        'flex w-full cursor-pointer items-center justify-center rounded border border-transparent font-primary no-underline',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        sizeClasses[size],
        surfaceClasses[surface],
        opacity && surface === 'secondary' && 'bg-action-secondary-opacity',
        rounded && 'rounded-full',
        round && 'size-10 w-10 min-w-10 p-2',
        noBorder && 'border-transparent',
        disabled && disabledSurfaceClasses[surface],
        disabled && 'pointer-events-none cursor-not-allowed',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export { LinkButton }
