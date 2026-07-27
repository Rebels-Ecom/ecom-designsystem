import { useEffect } from 'react'
import type { Ref } from 'react'
import type { AlertBoxProps } from '../../molecules/AlertBox'
import type { HeadingOrder } from '../../atoms/Heading'
import { ProductCardHorizontal } from '../ProductCardHorizontal'
import { ProductCardRestricted } from '../ProductCardRestricted'
import { ProductCardVertical } from '../ProductCardVertical'
import { productPicture } from './productPicture'
import { useProductCardState } from './useProductCardState'
import type {
  CardDisplayType,
  ProductCardArea,
  ProductCardChildProps,
  ProductCardImagePriority,
  ProductCardLabels,
  ProductCardLinkComponent,
  ProductCardProduct,
  ProductCardTooltips,
} from './types'

/**
 * Relative luminance of a `#rgb` / `#rrggbb` colour (WCAG 1.4.3), or `null` when unparseable. Used only
 * by the dev-only campaign-contrast warning below.
 */
function relativeLuminance(hex: string): number | null {
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex.trim())
  if (!match) return null
  const h =
    match[1].length === 3
      ? match[1]
          .split('')
          .map((c) => c + c)
          .join('')
      : match[1]
  const channel = (value: number) =>
    value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
  const r = channel(parseInt(h.slice(0, 2), 16) / 255)
  const g = channel(parseInt(h.slice(2, 4), 16) / 255)
  const b = channel(parseInt(h.slice(4, 6), 16) / 255)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export interface ProductCardProps {
  /** Which layout to render — `'vertical'` (grid card) or `'horizontal'` (row card). */
  cardDisplay: CardDisplayType
  /** The product to render. */
  product: ProductCardProduct
  /** Replace the body with a skeleton + polite status region. */
  loading: boolean
  /** Visible add-to-cart label — also the control's accessible name (2.5.3), so it is required. */
  addToCartBtnLabel: string
  /** Add-to-cart handler (receives the current, internally-updated product). */
  addToCart: (product: ProductCardProduct) => void
  /**
   * Restricted user — for a vertical card renders the trimmed {@link ProductCardRestricted} (no
   * pricing/quantity); for a horizontal card hides pricing and shows a labelled add-to-cart button
   * instead of the cart icon. @default false
   */
  isRestrictedUser?: boolean
  /** Show the add-to-cart control in a busy state. @default false */
  buttonLoading?: boolean
  /** Disable the add-to-cart control. @default false */
  disabled?: boolean
  /** Hide all price copy. @default false */
  hidePrice?: boolean
  /** Hide the add-to-cart control entirely. @default false */
  hideCartButton?: boolean
  /**
   * Fires with the updated product whenever the quantity changes. When omitted, the card keeps the
   * quantity in its own internal state (uncontrolled).
   */
  onChangeQuantity?: (product: ProductCardProduct) => void
  /** Present the quantity as read-only text. @default false */
  productQuantityDisabled?: boolean
  /** Starting quantity for the field. @default '0' */
  defaultQuantity?: string
  /** Upper bound for the quantity — larger values are rejected. */
  maxQuantity?: number
  /** Allow negative quantities (drops the clamp to 0). @default false */
  allowNegative?: boolean
  /** Fires when the remove button is pressed (horizontal card), with the part number. */
  onRemoveProduct?: (id: string) => void
  /** Hide the remove button (horizontal card). @default false */
  hideRemoveButton?: boolean
  /** Show the favourite toggle. @default false */
  showFavoriteIcon?: boolean
  /** Ids of the user's favourite products (drives the toggle state). */
  favoriteProductsIds?: string[]
  /** Fires when the favourite toggle is activated (part number, current state, total). */
  onFavoriteIconClick?: (partNo: string, isFavorite: boolean, totalPrice: string) => void
  /** Pulse the favourite icon to signal a pending request. @default false */
  isAddingToFavorites?: boolean
  /** Show the add-to-purchase-list icon. @default false */
  showAddToPurchaseListIcon?: boolean
  /** Fires when the add-to-purchase-list icon is pressed (part number + total). */
  onSaveToPurchaseListClick?: (partNo: string, totalPrice: string) => void
  /** Draw a card border (horizontal card). @default false */
  border?: boolean
  /** Render the smaller product image (horizontal card). @default false */
  displaySmallImage?: boolean
  /** Optional alert box — a "change product" affordance (horizontal card). */
  alertBox?: AlertBoxProps
  /** Show the packaging line (horizontal card). @default false */
  showPackaging?: boolean
  /** Fires when the variant-picker button is opened (analytics / lazy-load hook). */
  onVariantsButtonClick?: () => void
  /** Fires when a packaging variant is applied, with the newly-merged product. */
  onVariantChange?: (product: ProductCardProduct) => void
  /** Optional tooltip strings for the icon actions and markers. */
  tooltips?: ProductCardTooltips
  /** Native `<img>` priority hints forwarded to the derived `Picture`. */
  imagePriority?: ProductCardImagePriority
  /** Debounce (ms) for reporting quantity changes (horizontal card); when set, uses the debounced field. */
  debounceQuantityVal?: number
  /** Product-area key mixed into the quantity field id. */
  productArea?: ProductCardArea
  /** Analytics hook fired when the product name/image link is activated. */
  onClick?: () => void
  /** Component (or the intrinsic `'a'` tag) used to render the product links. Defaults to a semantic `<a>`. */
  linkComponent?: ProductCardLinkComponent
  /** Overridable UI strings (English defaults) — see {@link ProductCardLabels}. */
  labels?: Partial<ProductCardLabels>
  /**
   * Heading level for the product name, forwarded to the rendered card so the name fits the surrounding
   * document outline. @default 3
   */
  headingLevel?: HeadingOrder
  /** Image URL swapped in when the product image is missing or broken. */
  fallbackImageUrl?: string
  /** Extra classes, merged onto the card via `cn()`. */
  className?: string
  /** Forwarded to the rendered card's root element. */
  ref?: Ref<HTMLElement>

  // --- Accepted-but-ignored (v1.6.6 parity) -------------------------------------------------------
  // The app passes these; v1.6.6 ignored them at the dispatcher, so V2 accepts them (to keep the app's
  // TS migration compiling) and likewise ignores them — behaviour is unchanged. They are `@deprecated`
  // to guide the team to drop them.
  /** @deprecated Ignored — the remove action is wired via {@link ProductCardProps.onRemoveProduct}. */
  onClickRemoveProduct?: (id: string) => void
  /** @deprecated Ignored — variant-in-cart state is not read by the card. */
  variantsInCart?: unknown
  /** @deprecated Ignored — borderless quantity styling is not exposed. */
  disabledNoBorder?: boolean
  /** @deprecated Ignored — the add-to-cart control style is fixed per layout. */
  iconButton?: boolean
  /** @deprecated Ignored — use {@link ProductCardProps.buttonLoading} for the busy state. */
  isAddingToCart?: boolean
}

/**
 * Product card (organism) — the stateful dispatcher for the product-card family. It owns the active
 * product (image, quantity, running total and selected variant), keeps them in sync as the quantity
 * or packaging changes, and renders the layout that matches `cardDisplay` / `isRestrictedUser`:
 * {@link ProductCardHorizontal}, {@link ProductCardVertical} or {@link ProductCardRestricted}.
 *
 * The pricing/quantity/variant behaviour mirrors the legacy component exactly: the quantity clamps to
 * `[0, maxQuantity]` (negatives allowed only with `allowNegative`), the total is `pricePerUnit ×
 * itemNumberPerSalesUnit × quantity` (comma decimal), and choosing a packaging variant re-derives the
 * whole product from that variant. When `onChangeQuantity` is supplied the card is controlled; without
 * it, quantity is kept internally.
 *
 * Accessibility, focus and keyboard behaviour are owned by the rendered child card (each is an
 * `<article>` with accessible control names and a variant-picker disclosure).
 */
function ProductCard({
  cardDisplay,
  isRestrictedUser,
  product,
  loading,
  buttonLoading,
  disabled,
  addToCart,
  addToCartBtnLabel,
  hideCartButton,
  hidePrice,
  onChangeQuantity,
  productQuantityDisabled,
  defaultQuantity,
  onRemoveProduct,
  hideRemoveButton,
  showFavoriteIcon,
  favoriteProductsIds,
  onFavoriteIconClick,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  border,
  displaySmallImage,
  linkComponent,
  className,
  maxQuantity,
  alertBox,
  onClick,
  debounceQuantityVal,
  productArea,
  imagePriority,
  showPackaging,
  tooltips,
  isAddingToFavorites,
  onVariantsButtonClick,
  onVariantChange,
  allowNegative,
  labels,
  headingLevel,
  fallbackImageUrl,
  ref,
}: ProductCardProps) {
  if (!cardDisplay) {
    throw new Error('cardDisplay must be assigned')
  }

  // Dev-only: warn when a campaign ribbon's brand colour fails AA against the white ribbon text (1.4.3).
  // Stripped from the production library build (`import.meta.env.DEV` → `false`), so it never runs for
  // consumers and never changes behaviour.
  useEffect(() => {
    if (!import.meta.env.DEV) return
    const color = product.activeCampaign?.color
    if (!color) return
    const luminance = relativeLuminance(color)
    if (luminance === null) return
    const contrast = 1.05 / (luminance + 0.05)
    if (contrast < 4.5) {
      console.warn(
        `[ProductCard] campaign ribbon colour "${color}" clears only ${contrast.toFixed(2)}:1 against white text — below the WCAG AA 4.5:1 minimum (1.4.3).`,
      )
    }
  }, [product.activeCampaign?.color])

  // All price / quantity / variant state math lives in the hook so it has one home and is covered by
  // the ProductCard contract stories; the dispatcher just wires it to the layout.
  const {
    product: myProduct,
    variantsOpen,
    handleChangeQuantity,
    handleVariantsButtonClick,
    handleCloseVariants,
    handleVariantSelect,
  } = useProductCardState({
    product,
    imagePriority,
    defaultQuantity,
    maxQuantity,
    allowNegative,
    onChangeQuantity,
    onVariantChange,
    onVariantsButtonClick,
  })

  function handleRemoveProduct(id: string) {
    onRemoveProduct?.(id)
  }

  const commonProps: ProductCardChildProps = {
    product: myProduct,
    productImage:
      myProduct.productImage ??
      productPicture(product.partNo, product.primaryImageUrl, imagePriority),
    loading,
    buttonLoading,
    disabled,
    addToCart,
    addToCartBtnLabel,
    hideCartButton,
    hidePrice,
    linkComponent,
    className,
    onClick,
    variantsOpen,
    onVariantsButtonClick: handleVariantsButtonClick,
    onVariantSelect: handleVariantSelect,
    selectedVariantId: myProduct.selectedVariantId,
    onCloseVariants: handleCloseVariants,
    tooltips,
    showFavoriteIcon,
    favoriteProductsIds,
    onFavoriteIconClick,
    isAddingToFavorites,
    allowNegative,
    labels,
  }

  if (cardDisplay === 'horizontal') {
    return (
      <ProductCardHorizontal
        {...commonProps}
        ref={ref}
        headingLevel={headingLevel}
        isRestrictedUser={isRestrictedUser}
        onChangeQuantity={handleChangeQuantity}
        productQuantityDisabled={productQuantityDisabled}
        defaultQuantity={defaultQuantity}
        onClickRemoveProduct={handleRemoveProduct}
        hideRemoveButton={hideRemoveButton}
        showAddToPurchaseListIcon={showAddToPurchaseListIcon}
        onSaveToPurchaseListClick={onSaveToPurchaseListClick}
        border={border}
        displaySmallImage={displaySmallImage}
        maxQuantity={maxQuantity}
        alertBox={alertBox}
        debounceQuantityVal={debounceQuantityVal}
        productArea={productArea}
        showPackaging={showPackaging}
        fallbackImageUrl={fallbackImageUrl}
      />
    )
  }

  if (cardDisplay === 'vertical') {
    if (isRestrictedUser) {
      return (
        <ProductCardRestricted
          {...commonProps}
          ref={ref}
          headingLevel={headingLevel}
          fallbackImageUrl={fallbackImageUrl}
        />
      )
    }

    return (
      <ProductCardVertical
        {...commonProps}
        ref={ref}
        headingLevel={headingLevel}
        onChangeQuantity={handleChangeQuantity}
        productQuantityDisabled={productQuantityDisabled}
        defaultQuantity={defaultQuantity}
        showAddToPurchaseListIcon={showAddToPurchaseListIcon}
        onSaveToPurchaseListClick={onSaveToPurchaseListClick}
        productArea={productArea}
        fallbackImageUrl={fallbackImageUrl}
      />
    )
  }

  return null
}

export { ProductCard }
