import type { ReactNode } from 'react'
import type { ProductCardLinkComponent } from './types'

export interface CardImageProps {
  /** The rendered `Picture` element (each card sets its own image classes). */
  picture: ReactNode
  /** Product page URL — wraps the image in a decorative link when set. */
  productUrl?: string
  /** Analytics hook fired when the image link is activated. */
  onClick?: () => void
  /** Component (or `'a'`) used to render the link (resolved by the caller). */
  linkComponent: ProductCardLinkComponent
  /** Classes for the link wrapper. */
  className: string
  /** When set, the non-link image is wrapped in a `<div>` with these classes; otherwise it is bare. */
  fallbackClassName?: string
}

/**
 * The product thumbnail shared by the three cards. When `productUrl` is set the image is wrapped in a
 * decorative link (`aria-hidden`, `tabIndex={-1}`) — the name carries the accessible identity, so the
 * image link is skipped by assistive tech. Reproduces each card's previous markup: the horizontal card
 * wraps the bare image in a centering `<div>` (`fallbackClassName`); the vertical / restricted cards
 * render the image bare inside their own positioning wrapper.
 */
export function CardImage({
  picture,
  productUrl,
  onClick,
  linkComponent: Link,
  className,
  fallbackClassName,
}: CardImageProps) {
  if (productUrl) {
    return (
      <Link href={productUrl} onClick={onClick} aria-hidden tabIndex={-1} className={className}>
        {picture}
      </Link>
    )
  }

  if (fallbackClassName) {
    return <div className={fallbackClassName}>{picture}</div>
  }

  return <>{picture}</>
}
