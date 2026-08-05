import { useEffect, useRef } from 'react'
import type { ReactNode, Ref } from 'react'
import { useBreakpoint } from '../../atoms/Breakpoints'
import { Carousel } from '../Carousel'
import { CarouselItem } from '../Carousel/CarouselItem'
import {
  ProductCardMiniVertical,
  type ProductCardMiniVerticalProps,
} from '../ProductCardMiniVertical'
import { ProductCard } from '../ProductCard'
import type {
  ProductCardArea,
  ProductCardImagePriority,
  ProductCardProduct,
  ProductCardProps,
} from '../ProductCard'

export interface ProductCarouselProps {
  /** The product cards for the carousel. Each is a full {@link ProductCard} config. */
  productCards: ProductCardProps[]
  /** Add-to-cart handler applied to every card, receiving the product and its carousel index. */
  addToCart: (product: ProductCardProduct, index: number) => void
  /** Slides per page on mobile (`< md`). @default 1 */
  productsPerPageMobile?: number
  /** Slides per page on tablet (`md`). @default 2 */
  productsPerPageTablet?: number
  /** Slides per page on desktop (`lg+`). @default 4 */
  productsPerPageDesktop?: number
  /** Anchor the arrows to the trailing edge instead of centring them. @default false */
  arrowsBottom?: boolean
  /** Push the arrows out to the very edges of the region. @default false */
  offsetArrows?: boolean
  /** Drop the mobile peek padding. @default false */
  noPadding?: boolean
  /** Product-area key forwarded to each card (namespaces its quantity-field id). */
  productArea?: ProductCardArea
  /** Called with the active slide index whenever navigation changes it (arrow, dot, key, swipe). */
  onNavigation?: (index: number) => void
  /**
   * Fires once per card when it first scrolls ≥50% into view (analytics / impression tracking). May be a
   * flat handler, or the legacy **curried** form `(product, index) => () => track(...)` — the returned
   * function is invoked on entry (v1.6.6 handed that return to framer-motion's viewport hook). Both work.
   */
  onViewportEnter?: (product: ProductCardProduct, index: number) => void | (() => void)
  /** Accessible name for the carousel region (4.1.2). @default 'Products' */
  ariaLabel?: string
  /** Extra classes, merged onto the carousel region via `cn()`. */
  className?: string
  /** Forwarded to the carousel scroll track. */
  ref?: Ref<HTMLDivElement>
}

/** Native `<img>` priority: eager/high for the first row of cards, lazy/low after (legacy heuristic). */
function priorityForIndex(index: number): ProductCardImagePriority {
  const eager = index < 4
  return { loading: eager ? 'eager' : 'lazy', fetchPriority: eager ? 'high' : 'low' }
}

/**
 * Map a card config + the carousel's add-to-cart to the {@link ProductCardMiniVertical} props (mobile).
 * The mini now consumes the shared {@link ProductCardProduct} shape directly, so this is a thin wiring of
 * the carousel's callbacks: `addToCart` (restricted no-arg / normal bump) and the debounced
 * `onChangeQuantity` both route to the carousel's add-to-cart with this card's index.
 */
function toMiniProps(
  card: ProductCardProps,
  index: number,
  addToCart: ProductCarouselProps['addToCart'],
  imagePriority: ProductCardImagePriority,
): ProductCardMiniVerticalProps {
  return {
    product: card.product,
    addToCartBtnLabel: card.addToCartBtnLabel,
    addToCart: () => addToCart(card.product, index),
    onChangeQuantity: (product) => addToCart(product, index),
    onVariantChange: card.onVariantChange,
    onVariantsButtonClick: card.onVariantsButtonClick,
    loading: card.loading,
    disabled: card.disabled,
    buttonLoading: card.buttonLoading,
    hidePrice: card.hidePrice,
    isRestrictedUser: card.isRestrictedUser,
    headingLevel: card.headingLevel,
    maxQuantity: card.maxQuantity,
    productArea: card.productArea,
    imagePriority,
    linkComponent: card.linkComponent === 'a' ? undefined : card.linkComponent,
    fallbackImageUrl: card.fallbackImageUrl,
    onProductClick: card.onClick,
    tooltips: card.tooltips,
    showFavoriteIcon: card.showFavoriteIcon,
    favoriteProductsIds: card.favoriteProductsIds,
    isAddingToFavorites: card.isAddingToFavorites,
    onFavoriteIconClick: card.onFavoriteIconClick,
    showAddToPurchaseListIcon: card.showAddToPurchaseListIcon,
    onSaveToPurchaseListClick: card.onSaveToPurchaseListClick,
  }
}

/** Fires `onEnter` once when its slide first scrolls ≥50% into view (impression tracking). */
function SlideImpression({ onEnter, children }: { onEnter?: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const firedRef = useRef(false)

  useEffect(() => {
    if (!onEnter || firedRef.current) return
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true
            onEnter()
            observer.disconnect()
          }
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [onEnter])

  return (
    <div ref={ref} className="w-full">
      {children}
    </div>
  )
}

/**
 * Product carousel (organism) — a horizontally-paged {@link Carousel} of product cards. It shows the
 * full {@link ProductCard} on tablet/desktop and swaps to the compact {@link ProductCardMiniVertical}
 * on mobile (adapting each card config to the mini shape). Slides-per-page is responsive
 * (`mobile → tablet → desktop`), and an impression callback fires once as each card scrolls into view.
 *
 * Accessibility: the carousel region is named via `ariaLabel` (4.1.2) and provides accessible arrow /
 * dot / keyboard navigation from {@link Carousel}; each slide's card owns its own `<article>` semantics
 * and controls. The legacy Splide `autoplay` is dropped (no auto-advance → nothing to pause, 2.2.2, and
 * no motion to suppress), and the broken legacy `onViewportEnter` (fired during render) is replaced with
 * a correct `IntersectionObserver` impression hook.
 */
function ProductCarousel({
  productCards,
  addToCart,
  productsPerPageMobile = 1,
  productsPerPageTablet = 2,
  productsPerPageDesktop = 4,
  arrowsBottom,
  offsetArrows,
  noPadding,
  productArea,
  onNavigation,
  onViewportEnter,
  ariaLabel = 'Products',
  className,
  ref,
}: ProductCarouselProps) {
  const { isMobile } = useBreakpoint()

  if (!productCards.length) return null

  return (
    <Carousel
      ref={ref}
      ariaLabel={ariaLabel}
      className={className}
      gap={isMobile ? '0.5rem' : '1rem'}
      peek={isMobile && !noPadding ? '1rem' : undefined}
      // On mobile the prev/next arrows sit inline on the pagination row (level with the dots), matching
      // the legacy bottom-arrow layout; on larger viewports they overlay the track edges.
      arrowsWithDots={isMobile}
      arrowsBottom={arrowsBottom}
      offsetArrows={offsetArrows}
      // Legacy hid the dots on mobile when the peek padding was on and there were many items
      // (`padding && noOfChildren > 14`) — too many dots for a narrow screen; the arrows still page it.
      hidePagination={isMobile && !noPadding && productCards.length > 14}
      onNavigation={onNavigation}
      onSlideChange={onNavigation}
      breakpoints={{
        sm: { perPage: productsPerPageMobile, perMove: productsPerPageMobile },
        md: { perPage: productsPerPageTablet, perMove: productsPerPageTablet },
        lg: { perPage: productsPerPageDesktop, perMove: productsPerPageDesktop },
      }}
    >
      {productCards.map((card, index) => {
        const imagePriority = priorityForIndex(index)
        return (
          <CarouselItem key={`${card.product.partNo}-${index}`}>
            <SlideImpression
              onEnter={
                onViewportEnter
                  ? () => {
                      // Support the legacy curried form: `(product, index) => () => track(...)` returns
                      // the tracker, which fires on entry. A flat handler returns void → nothing extra.
                      const tracker = onViewportEnter(card.product, index)
                      if (typeof tracker === 'function') tracker()
                    }
                  : undefined
              }
            >
              {isMobile ? (
                <ProductCardMiniVertical {...toMiniProps(card, index, addToCart, imagePriority)} />
              ) : (
                <ProductCard
                  {...card}
                  addToCart={(product) => addToCart(product, index)}
                  productArea={productArea ?? card.productArea}
                  imagePriority={imagePriority}
                />
              )}
            </SlideImpression>
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}

export { ProductCarousel }
