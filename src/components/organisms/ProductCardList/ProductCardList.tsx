import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { ProductCard, type ProductCardProps, type ProductCardProduct } from '../ProductCard'

export interface ProductCardListProps {
  /** The product cards to render. Each is a full {@link ProductCard} config (typically vertical). */
  productCards: ProductCardProps[]
  /**
   * Add-to-cart handler applied to **every** card, overriding each card's own `addToCart` — the list
   * owns the cart interaction (e.g. to show a toast) uniformly across its items.
   */
  addToCart: (product: ProductCardProduct) => void
  /** Accessible name for the list, announced by assistive tech (e.g. "Search results"). */
  ariaLabel?: string
  /** Extra classes, merged onto the list via `cn()`. */
  className?: string
  /** Forwarded to the root `<ul>`. */
  ref?: Ref<HTMLUListElement>
}

/**
 * Product card list (organism) — a responsive grid of {@link ProductCard}s (1 → 2 → 3 → 4 columns as
 * the viewport widens), used for search results, category listings and recommendation grids.
 *
 * Accessibility: rendered as a real `<ul role="list">` of `<li>` items (the explicit `role="list"`
 * keeps the list semantics that `list-style: none` otherwise strips in some browsers, 1.3.1), optionally
 * named via `ariaLabel`. Each card owns its own `<article>` semantics and controls. The legacy
 * `framer-motion` opacity fade is dropped (a decorative entrance with no meaning); the responsive
 * columns come from CSS grid rather than the legacy per-item `calc()` widths.
 */
function ProductCardList({
  productCards,
  addToCart,
  ariaLabel,
  className,
  ref,
}: ProductCardListProps) {
  return (
    <ul
      ref={ref}
      role="list"
      aria-label={ariaLabel}
      className={cn(
        'grid w-full list-none grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        className,
      )}
    >
      {productCards.map((card, index) => (
        <li key={`${card.product.partNo}-${index}`}>
          <ProductCard {...card} addToCart={addToCart} />
        </li>
      ))}
    </ul>
  )
}

export { ProductCardList }
