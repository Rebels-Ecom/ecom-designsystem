import type { MouseEventHandler, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import { Icon, type IconName } from '../../atoms/Icon'

export type IconButtonSize = 'x-small' | 'small' | 'medium' | 'large'
export type IconButtonSurface = 'primary' | 'white'
export type IconButtonTarget = '_blank' | '_self' | '_parent' | '_top'

interface IconButtonBaseProps {
  /** Glyph to render, keyed by legacy icomoon name (see `Icon`). Always decorative here. */
  icon: IconName
  /**
   * Accessible name describing the **action** (e.g. "Open cart"), not the glyph. Required: an
   * icon-only control has no visible text, so this is its accessible name (4.1.2 / 1.1.1) and is
   * applied as `aria-label`. When a `notification` count matters to assistive tech, fold it into
   * this label (e.g. "Cart, 7 items") — the badge itself is decorative.
   */
  label: string
  /** Size preset (height / padding + icon scale). @default 'small' */
  size?: IconButtonSize
  /** Surface fill. `white` is the neutral desktop chip; `primary` is the blue CTA fill. @default 'white' */
  surface?: IconButtonSurface
  /** Transparent background (overrides the surface fill). @default false */
  isTransparent?: boolean
  /** Remove the visible border. @default false */
  noBorder?: boolean
  /** Remove all padding (icon flush to the edges). @default false */
  noPadding?: boolean
  /** Fully rounded (circular) corners. @default false */
  round?: boolean
  /** Disable the control. @default false */
  disabled?: boolean
  /**
   * Optional count badge; `1`–`99` render as-is, `≥100` clamps to "99+", `0`/omitted hides it. The
   * badge is decorative (`aria-hidden`) with an accessible dark-on-orange pairing (legacy was
   * white-on-orange, which fails 4.5:1) — reflect the count in `label` for assistive tech.
   */
  notification?: number
  /**
   * Pulse the icon to signal background activity (e.g. adding to cart) and expose `aria-busy`.
   * Motion is suppressed under `prefers-reduced-motion` (2.3.3†). @default false
   */
  busy?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
}

export interface IconButtonAsButtonProps extends IconButtonBaseProps {
  /** Render a real `<button type="button">`. @default 'button' */
  type?: 'button'
  onClick?: MouseEventHandler<HTMLButtonElement>
  /** Forwarded to the underlying `<button>`. */
  ref?: Ref<HTMLButtonElement>
}

export interface IconButtonAsLinkProps extends IconButtonBaseProps {
  /** Render a navigational anchor instead of a button. */
  type: 'link'
  /** Destination URL. */
  href: string
  /**
   * Component used to render the anchor. Defaults to a semantic `<a>` ({@link DefaultLink}); pass a
   * client-side router link (adapted to accept `href`) to keep navigation on the SPA.
   */
  linkComponent?: LinkComponentType
  /** External link — adds `rel="noopener noreferrer"` and defaults `target` to `_blank`. @default false */
  isExternal?: boolean
  /** Mark the target as a download. @default false */
  download?: boolean
  /** Anchor target. */
  target?: IconButtonTarget
  /** Forwarded to the underlying anchor. */
  ref?: Ref<HTMLAnchorElement>
}

export type IconButtonProps = IconButtonAsButtonProps | IconButtonAsLinkProps

/* Height/padding + a `text-*` that the (unsized) Icon inherits as its `1em` glyph size, mirroring
 * how the legacy control sized its icon font off the container. */
const sizeClasses: Record<IconButtonSize, string> = {
  'x-small': 'h-9 min-w-5 p-2 text-base',
  small: 'h-9 min-w-9 p-2 text-base',
  medium: 'p-2.5 text-lg',
  large: 'p-3 text-xl',
}

const surfaceClasses: Record<IconButtonSurface, string> = {
  // Neutral chip — the fill/border only appear from the `md` breakpoint up (legacy parity).
  white: 'md:border-border-on-x md:bg-action-x',
  primary: 'bg-action-primary text-text-on-primary hover:bg-action-primary-hover',
}

/**
 * Icon-only interactive control (molecule) — renders either a native `<button>` (default) or a
 * semantic `<a>` when `type="link"` (override via `linkComponent` for an SPA router). It has no
 * visible text, so the required `label` becomes its accessible name via `aria-label` (4.1.2); the
 * glyph is always decorative (`aria-hidden`). Keyboard operation and the visible `focus-visible`
 * ring (2.4.7) come free from the native elements. `size="large"` meets the 44px target (2.5.5†);
 * the smaller presets rely on the WCAG 2.5.8 ≥24px-spacing exception, so keep neighbours spaced.
 */
function IconButton(props: IconButtonProps) {
  const {
    icon,
    label,
    size = 'small',
    surface = 'white',
    isTransparent,
    noBorder,
    noPadding,
    round,
    disabled,
    notification,
    busy,
    className,
  } = props

  const classes = cn(
    'relative inline-flex cursor-pointer items-center justify-center rounded border border-transparent font-primary text-text-default',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
    sizeClasses[size],
    surfaceClasses[surface],
    isTransparent && 'bg-transparent md:bg-transparent',
    // The `white` surface adds `md:border-border-on-x` (a border from `md` up), so clearing the base
    // border alone leaves a ring on desktop — neutralise the `md:` border too.
    noBorder && 'border-transparent md:border-transparent',
    noPadding && 'p-0',
    round && 'rounded-full',
    disabled &&
      (surface === 'primary'
        ? 'bg-action-primary-disabled text-text-on-primary-disabled'
        : 'text-text-on-secondary-disabled'),
    disabled && 'pointer-events-none cursor-not-allowed',
    className,
  )

  const content = (
    <>
      <Icon
        icon={icon}
        className={cn(busy && 'animate-icon-pulse motion-reduce:animate-none')}
      />
      {typeof notification === 'number' && notification > 0 && (
        <span
          aria-hidden
          className={cn(
            'absolute flex h-5 min-w-5 items-center justify-center rounded-full bg-action-tertiary px-1 text-xs text-text-on-tertiary',
            size === 'large'
              ? 'bottom-1 left-1'
              : noPadding
                ? '-bottom-2 -left-2'
                : '-bottom-0.5 -left-0.5',
          )}
        >
          {notification < 100 ? notification : '99+'}
        </span>
      )}
    </>
  )

  if (props.type === 'link') {
    const Link = props.linkComponent ?? DefaultLink
    return (
      <Link
        ref={props.ref}
        href={props.href}
        target={props.target ?? (props.isExternal ? '_blank' : undefined)}
        rel={props.isExternal ? 'noopener noreferrer' : undefined}
        download={props.download}
        aria-label={label}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={classes}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      ref={props.ref}
      type="button"
      onClick={props.onClick}
      disabled={disabled}
      aria-label={label}
      aria-busy={busy || undefined}
      className={classes}
    >
      {content}
    </button>
  )
}

export { IconButton }
