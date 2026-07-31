import type { Ref } from 'react'
import beerGlass from '../../assets/product-images/beer-glass.jpg'
import { cn } from '../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../lib/link'
import { Heading } from '../../components/atoms/Heading'
import { ContentWrapper } from '../../components/atoms/ContentWrapper'
import { ProductCarousel } from '../../components/organisms/ProductCarousel'
import type { ProductCardProps } from '../../components/organisms/ProductCard'
import { toProductCardProduct, type CartLine } from '../_shared/cartModel'

export interface CartRecommendationsProps {
  /** The recommended products ("you might also want"). */
  recommendations: CartLine[]
  /** Section heading. @default 'Du kanske även gillar' */
  title?: string
  /** Add a recommended product to the cart (`ADD_TO_CART`). */
  onAddToCart: (partNo: string) => void
  linkComponent?: LinkComponentType
  className?: string
  ref?: Ref<HTMLDivElement>
}

/**
 * **CartRecommendations** section template (Storybook-only) — mirrors the app's cart recommendations
 * markup (`sitecore-components/Cart` → `renderRecommendedProducts` → `ProductCarousel`): a
 * {@link ContentWrapper} with a centred `Heading order={3}` and a {@link ProductCarousel} of **vertical**
 * {@link ProductCard}s (`hideRemoveButton`, an "Lägg i varukorg" add button), paged 3-per-view on desktop
 * with `arrowsBottom`. Stateless — the story harness holds the cart the add button feeds.
 */
function CartRecommendations({
  recommendations,
  title = 'Du kanske även gillar',
  onAddToCart,
  linkComponent = DefaultLink,
  className,
  ref,
}: CartRecommendationsProps) {
  const productCards: ProductCardProps[] = recommendations.map((rec) => ({
    cardDisplay: 'vertical',
    hideRemoveButton: true,
    headingLevel: 4,
    loading: false,
    product: toProductCardProduct(rec),
    linkComponent,
    fallbackImageUrl: beerGlass,
    // Overridden by the carousel-level `addToCart`, but required by `ProductCardProps`.
    addToCart: () => onAddToCart(rec.partNo),
    addToCartBtnLabel: 'Lägg i varukorg',
    tooltips: {
      accessoryPotItem: 'Tillbehör (pott)',
      addToPurchaseList: 'Spara i inköpslista',
    },
  }))

  if (recommendations.length === 0) return null

  return (
    <ContentWrapper ref={ref} className={cn(className)}>
      <Heading order={3} align="center">
        {title}
      </Heading>
      <ProductCarousel
        ariaLabel={title}
        productCards={productCards}
        addToCart={(product) => onAddToCart(product.partNo)}
        productsPerPageDesktop={3}
        arrowsBottom
        noPadding
      />
    </ContentWrapper>
  )
}

export { CartRecommendations }
