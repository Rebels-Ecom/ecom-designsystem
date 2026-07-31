import type { Ref } from 'react'
import beerGlass from '../../assets/product-images/beer-glass.jpg'
import { cn } from '../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../lib/link'
import { Heading } from '../../components/atoms/Heading'
import { Text } from '../../components/atoms/Text'
import { FlexContainer } from '../../components/atoms/FlexContainer'
import { GroupWrapper } from '../../components/atoms/GroupWrapper'
import { Button } from '../../components/molecules/Button'
import { IconButton } from '../../components/molecules/IconButton'
import { LinkButton } from '../../components/molecules/LinkButton'
import { DrawerSidebar } from '../../components/molecules/DrawerSidebar'
import { CartSidebar } from '../../components/organisms/CartSidebar'
import { MiniProductToast } from '../../components/organisms/MiniProductToast'
import { ProductCard } from '../../components/organisms/ProductCard'
import { productCardLineLabels, toProductCardProduct, type CartLine } from '../_shared/cartModel'

export interface MiniCartDrawerProps {
  /** Whether the slide-in cart drawer is open (`cartMachine` `Open`/`Closed`). */
  open: boolean
  /** The cart lines. */
  lines: CartLine[]
  /** The most-recently added line — surfaced by the "added to cart" toast. `null` = no toast. */
  recentItem: CartLine | null
  /** Whether the "added to cart" toast is slid in. */
  toastOpen: boolean
  /** `partNo`s currently marked as favourites. */
  favoriteIds: string[]
  /** Toggle the drawer open (the header cart button — `TOGGLE_CART`). */
  onToggleOpen: () => void
  /** Close the drawer (close button / backdrop / `Escape` — `TOGGLE_CART`). */
  onClose: () => void
  /** Remove a line (`REMOVE_FROM_CART`). */
  onRemoveLine: (partNo: string) => void
  /** Toggle a line's favourite state. */
  onToggleFavorite: (partNo: string) => void
  /** Empty the whole cart (`CLEAR_CART`). */
  onClearCart: () => void
  /** Proceed to the full checkout (`GO_TO_CHECKOUT`) — a router navigation in the app. */
  onGoToCheckout: () => void
  /** The toast's cart-shortcut button (navigate to the cart). */
  onToastCartClick: () => void
  linkComponent?: LinkComponentType
  className?: string
  ref?: Ref<HTMLDivElement>
}

/**
 * **MiniCartDrawer** section template (Storybook-only) — mirrors the app's `CartToolbar`: a header cart
 * {@link IconButton} with a live count badge, the "added to cart" {@link MiniProductToast}, and a
 * {@link DrawerSidebar} whose body (the app's `components/cart` → {@link CartSidebar}) is the "Varukorg"
 * heading, a "Till kassan" {@link LinkButton}, a product-count row with a "Töm varukorg" {@link Button},
 * and the cart lines as price-less, quantity-locked horizontal {@link ProductCard}s (remove + favourite +
 * save-to-list, exactly as the real mini-cart). Stateless — the story harness holds the `cartReducer`
 * plus the drawer-open / recent-item UI state.
 */
function MiniCartDrawer({
  open,
  lines,
  recentItem,
  toastOpen,
  favoriteIds,
  onToggleOpen,
  onClose,
  onRemoveLine,
  onToggleFavorite,
  onClearCart,
  onGoToCheckout,
  onToastCartClick,
  linkComponent = DefaultLink,
  className,
  ref,
}: MiniCartDrawerProps) {
  const quantity = lines.reduce((sum, line) => sum + line.quantity, 0)

  return (
    <div ref={ref} className={cn('relative', className)}>
      <IconButton
        type="button"
        icon="icon-shopping-cart"
        label={`Varukorg, ${quantity} varor`}
        notification={quantity}
        size="medium"
        isTransparent
        noBorder
        onClick={onToggleOpen}
      />

      <MiniProductToast
        open={toastOpen}
        cartProducts={recentItem ? [{ product: toProductCardProduct(recentItem) }] : []}
        notification={{ quantity, onClick: onToastCartClick }}
        fallbackImageUrl={beerGlass}
        labels={{ cart: (n) => `Visa varukorg, ${n} varor` }}
      />

      <DrawerSidebar
        isOpen={open}
        onClose={onClose}
        ariaLabel="Varukorg"
        from="right"
        labels={{ close: 'Stäng varukorg' }}
      >
        <CartSidebar>
          <GroupWrapper position="apart" spacing="sm">
            <Heading order={3} margin={[0.5, 0]}>
              Varukorg
            </Heading>
          </GroupWrapper>

          {lines.length > 0 && (
            <LinkButton
              surface="primary"
              href="/varukorg"
              isExternal={false}
              linkComponent={linkComponent}
              size="small"
              onClick={onGoToCheckout}
            >
              Till kassan
            </LinkButton>
          )}

          <FlexContainer flexDirection="column">
            <FlexContainer justifyContent="space-between" alignItems="center" stretch>
              <Text>{quantity} produkter i varukorgen</Text>
              {lines.length > 0 && (
                <Button
                  type="button"
                  surface="link"
                  isTransparent
                  size="large"
                  iconRight="icon-trash-2"
                  onClick={onClearCart}
                >
                  Töm varukorg
                </Button>
              )}
            </FlexContainer>

            {lines.length === 0 ? (
              <Text>Din varukorg är tom.</Text>
            ) : (
              lines.map((line) => (
                <ProductCard
                  key={line.partNo}
                  cardDisplay="horizontal"
                  showPackaging
                  hidePrice
                  productQuantityDisabled
                  hideCartButton
                  product={toProductCardProduct(line)}
                  loading={false}
                  headingLevel={4}
                  showFavoriteIcon
                  favoriteProductsIds={favoriteIds}
                  onFavoriteIconClick={() => onToggleFavorite(line.partNo)}
                  showAddToPurchaseListIcon
                  onSaveToPurchaseListClick={() => {}}
                  addToCart={() => {}}
                  addToCartBtnLabel="Lägg i varukorg"
                  onRemoveProduct={onRemoveLine}
                  linkComponent={linkComponent}
                  fallbackImageUrl={beerGlass}
                  labels={productCardLineLabels}
                  tooltips={{
                    addToFavorites: 'Spara som favorit',
                    removeFromFavorites: 'Ta bort favorit',
                    addToPurchaseList: 'Spara i inköpslista',
                    accessoryPotItem: 'Tillbehör (pott)',
                  }}
                />
              ))
            )}
          </FlexContainer>
        </CartSidebar>
      </DrawerSidebar>
    </div>
  )
}

export { MiniCartDrawer }
