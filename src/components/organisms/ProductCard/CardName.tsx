import { Heading, type HeadingAlignment, type HeadingOrder } from '../../atoms/Heading'
import type { ProductCardLinkComponent } from './types'

export interface CardNameProps {
  /** Product display name — the card heading text. */
  productName: string
  /** Product page URL — turns the name into a real link when set. */
  productUrl?: string
  /** Analytics hook fired when the name link is activated. */
  onClick?: () => void
  /** Component (or `'a'`) used to render the link (resolved by the caller). */
  linkComponent: ProductCardLinkComponent
  /** Heading level so the name fits the surrounding document outline. */
  headingLevel: HeadingOrder
  /** Heading alignment. */
  align?: HeadingAlignment
  /** Extra heading classes (each card sets its own). */
  className?: string
}

/**
 * The product name shared by the three cards: a {@link Heading} that becomes a real, focusable `<a href>`
 * (4.1.2, focus ring 2.4.7) when `productUrl` is set. The link wrapper classes are identical across the
 * cards; the heading alignment/classes differ and are passed in, so the rendered markup is unchanged.
 */
export function CardName({
  productName,
  productUrl,
  onClick,
  linkComponent: Link,
  headingLevel,
  align,
  className,
}: CardNameProps) {
  const heading = (
    <Heading order={headingLevel} noMargin align={align} className={className}>
      {productName}
    </Heading>
  )

  if (!productUrl) return heading

  return (
    <Link
      href={productUrl}
      onClick={onClick}
      className='text-text-default no-underline hover:text-text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'
    >
      {heading}
    </Link>
  )
}
