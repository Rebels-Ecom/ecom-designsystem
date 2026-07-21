import { useEffect, useState } from 'react'
import type { Ref } from 'react'
import type { LinkComponentType } from '../../../lib/link'
import type { PictureProps } from '../../atoms/Picture'
import type { AlertBoxProps } from '../../molecules/AlertBox'
import { ProductCardHorizontal } from '../ProductCardHorizontal'
import { ProductCardRestricted } from '../ProductCardRestricted'
import { ProductCardVertical } from '../ProductCardVertical'
import type {
  CardDisplayType,
  ProductCardChildProps,
  ProductCardImagePriority,
  ProductCardLabels,
  ProductCardProduct,
  ProductCardTooltips,
  ProductCardVariant,
} from './types'

/** Legacy `convertNumToStr`: fixed to two decimals with a comma decimal separator. */
function convertNumToStr(value: number): string {
  return value.toFixed(2).toString().replace('.', ',')
}

/**
 * Legacy `getProductPicture`: builds a `Picture` payload from the raw image URL. The image is
 * decorative (`alt=''`) — the product name carries the accessible identity (legacy hard-coded a
 * "Placholder" alt, a bug).
 */
function getProductPicture(
  partNo: string,
  primaryImageUrl: string,
  imagePriority?: ProductCardImagePriority,
): PictureProps {
  const width = '120'
  const src = primaryImageUrl ? `${primaryImageUrl}?w=${width}` : primaryImageUrl
  return {
    id: `product_${partNo}`,
    src,
    alt: '',
    loading: imagePriority?.loading ?? 'lazy',
    decoding: 'auto',
    fetchPriority: imagePriority?.fetchPriority ?? 'low',
    width,
    height: '200',
    sources: [
      { srcset: src, media: '(max-width: 767px)' },
      { srcset: src, media: '(min-width: 768px)' },
    ],
  }
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
  productArea?: 'category' | 'recommended' | 'details' | 'cart' | 'inspiration'
  /** Analytics hook fired when the product name/image link is activated. */
  onClick?: () => void
  /** Component used to render the product links. Defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** Overridable UI strings (English defaults) — see {@link ProductCardLabels}. */
  labels?: Partial<ProductCardLabels>
  /** Image URL swapped in when the product image is missing or broken. */
  fallbackImageUrl?: string
  /** Extra classes, merged onto the card via `cn()`. */
  className?: string
  /** Forwarded to the rendered card's root element. */
  ref?: Ref<HTMLElement>
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
  fallbackImageUrl,
  ref,
}: ProductCardProps) {
  if (!cardDisplay) {
    throw new Error('cardDisplay must be assigned')
  }

  const {
    partNo,
    primaryImageUrl,
    pricePerUnit,
    itemNumberPerSalesUnit,
    quantity,
    priceStr,
    activeCampaign,
    outOfStock,
  } = product

  function getQuantity(value: string): string {
    const parsedQuantity = parseInt(value)
    if (!value || isNaN(parsedQuantity)) return '1'
    if (parsedQuantity < 0 && !allowNegative) return '0'
    return value
  }

  function computeTotalPrice(): string {
    const safePrice = pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0
    const chosen = defaultQuantity ?? getQuantity(quantity)
    const qty = chosen ? parseInt(chosen) : 0
    return convertNumToStr(safePrice * itemNumberPerSalesUnit * qty)
  }

  const [variantsListOpen, setVariantsListOpen] = useState(false)
  const [myProduct, setProduct] = useState<ProductCardProduct>({
    ...product,
    productImage: getProductPicture(partNo, primaryImageUrl, imagePriority),
    quantity: getQuantity(quantity),
    pricePerUnit: pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0,
    totalPrice: computeTotalPrice(),
    selectedVariantId: partNo,
  })

  useEffect(() => {
    setProduct((prevState) => ({
      ...prevState,
      quantity: getQuantity(quantity),
      priceStr,
      pricePerUnit: pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0,
      totalPrice: computeTotalPrice(),
      activeCampaign,
      outOfStock,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, priceStr, pricePerUnit, activeCampaign, outOfStock])

  function handleOnChangeQuantity(productQuantity: number) {
    if (maxQuantity && productQuantity > maxQuantity) {
      return
    }
    const newProduct: ProductCardProduct = {
      ...myProduct,
      quantity: productQuantity.toString(),
      totalPrice: convertNumToStr(
        (myProduct.pricePerUnit ?? 0) * myProduct.itemNumberPerSalesUnit * productQuantity,
      ),
    }
    if (onChangeQuantity) {
      onChangeQuantity(newProduct)
    } else {
      setProduct(newProduct)
    }
  }

  function handleVariantsButtonClick() {
    setVariantsListOpen(true)
    onVariantsButtonClick?.()
  }

  function handleCloseVariants() {
    setVariantsListOpen(false)
  }

  function handleRemoveProduct(id: string) {
    onRemoveProduct?.(id)
  }

  function handlePackageChange(selectedVariant: ProductCardVariant) {
    const q =
      myProduct.partNo === selectedVariant.variantId ? parseInt(myProduct.quantity) : 1

    setProduct((prevState) => {
      const updatedProduct: ProductCardProduct = {
        ...prevState,
        partNo: selectedVariant.variantId,
        productImage: selectedVariant.image ?? prevState.productImage,
        packaging: selectedVariant.variantName,
        price: selectedVariant.price,
        priceStr: selectedVariant.priceStr,
        pricePerUnit:
          selectedVariant.pricePerUnit && isFinite(selectedVariant.pricePerUnit)
            ? selectedVariant.pricePerUnit
            : 0,
        pricePerUnitString: selectedVariant.pricePerUnitString,
        salesUnit: selectedVariant.salesUnit,
        itemNumberPerSalesUnit:
          selectedVariant.itemNumberPerSalesUnit ?? prevState.itemNumberPerSalesUnit,
        totalPrice: convertNumToStr(
          (selectedVariant.price ?? 0) * (selectedVariant.itemNumberPerSalesUnit ?? 0) * q,
        ),
        quantity: q.toString(),
        selectedVariantId: selectedVariant.variantId,
        sellerOnly: selectedVariant.sellerOnly,
        activeCampaign: selectedVariant.activeCampaign,
        productUrl: `/Product/${selectedVariant.variantId}`,
        outOfStock: selectedVariant.outOfStock,
        isAccessoryPotItem: selectedVariant.isAccessoryPotItem,
        tags: selectedVariant.tags,
      }
      onVariantChange?.(updatedProduct)
      return updatedProduct
    })
    setVariantsListOpen(false)
  }

  const commonProps: ProductCardChildProps = {
    product: myProduct,
    productImage: myProduct.productImage ?? getProductPicture(partNo, primaryImageUrl, imagePriority),
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
    variantsOpen: variantsListOpen,
    onVariantsButtonClick: handleVariantsButtonClick,
    handlePackageChange,
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
        isRestrictedUser={isRestrictedUser}
        onChangeQuantity={handleOnChangeQuantity}
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
          fallbackImageUrl={fallbackImageUrl}
        />
      )
    }

    return (
      <ProductCardVertical
        {...commonProps}
        ref={ref}
        onChangeQuantity={handleOnChangeQuantity}
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
