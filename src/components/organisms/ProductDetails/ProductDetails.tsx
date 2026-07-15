import { useId, useState } from 'react'
import type { ChangeEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { Picture } from '../../atoms/Picture'
import { Tag, type TagProps } from '../../atoms/Tag'
import { AlertBox, type AlertBoxProps } from '../../molecules/AlertBox'
import { Button } from '../../molecules/Button'
import { CampaignBox, type CampaignBoxProps } from '../../molecules/CampaignBox'
import { IconButton } from '../../molecules/IconButton'
import { IconWithTooltip } from '../../molecules/IconWithTooltip'
import { LoadingBars } from '../../molecules/LoadingBars'
import type { LoadingBarProps } from '../../atoms/LoadingBar'
import { ProductQuantityInput } from '../../molecules/ProductQuantityInput'
import { ProductVariantList, type ProductVariantListItem } from '../ProductVariantList'

export interface ProductDetailsSpec {
  /** Spec name (e.g. "Producent"). */
  name: string
  /** Spec value; `"True"` renders the name alone as a flag, `"False"`/empty is hidden. */
  value: string
}

export interface ProductDetailsInfo {
  /** Specs shown in the visible spec list (name: value). */
  visibleSpecs?: ProductDetailsSpec[]
  /** Product tags (e.g. "New", "Organic"). */
  tags?: TagProps[]
  /** Taste/character meters (bitterness, sweetness…) shown beside the image. */
  loaderValues?: LoadingBarProps[]
}

export interface ProductDetailsVariant {
  /** Unique variant/article id. */
  variantId: string
  /** Variant display name. */
  variantName: string
  /** Pre-formatted per-unit price string. */
  priceStr: string
  /** Variant image URL (falls back to `fallbackImageUrl`). */
  imageUrl?: string
  /** Restricted to sellers only. */
  sellerOnly?: boolean
  /** Accessible label for the seller-only marker. */
  sellerOnlyLabel?: string
}

export interface ProductDetailsAddToCartContext {
  /** Selected variant/article id. */
  partNo: string
  /** Product name. */
  productName: string
  /** Selected packaging name. */
  packaging: string
  /** Current quantity. */
  quantity: number
}

export interface ProductDetailsTooltips {
  addToFavorites?: string
  removeFromFavorites?: string
  addToPurchaseList?: string
  sellerOnly?: string
  accessoryPotItem?: string
}

export interface ProductDetailsLabels {
  /** Add-to-cart button label. @default 'Add to cart' */
  addToCart: string
  /** Accessible name for the packaging/variant trigger. @default 'Choose variant' */
  chooseVariant: string
  /** Article-number prefix. @default 'Art no' */
  partNo: string
  /** List-price line prefix. @default 'List price' */
  price: string
  /** Quantity-per-package prefix. @default 'Qty/package' */
  quantityPerPackage: string
  /** Unit word on the per-unit price line. @default 'pcs' */
  unit: string
  /** Currency suffix. @default 'kr' */
  currency: string
  /** Per-unit connector ("à"). @default 'à' */
  each: string
  /** Accessible name for the quantity field. @default 'Quantity' */
  quantity: string
  /** Unit-count word in the quantity detail row. @default 'pcs' */
  pieces: string
  /** Multiplier symbol between quantity and sales unit. @default '×' */
  times: string
  /** Total-price prefix on the quantity row. @default 'Price' */
  totalPrice: string
  /** Accessible name for the add-to-favourites toggle. @default 'Add to favourites' */
  addToFavorites: string
  /** Accessible name for the remove-from-favourites toggle. @default 'Remove from favourites' */
  removeFromFavorites: string
  /** Accessible name for the add-to-purchase-list button. @default 'Add to purchase list' */
  addToPurchaseList: string
  /** Accessible name for the "seller only" marker. @default 'Visible to sellers only' */
  sellerOnly: string
  /** Accessible name for the "accessory / pot item" marker. @default 'Accessory / pot item' */
  accessoryPotItem: string
  /** Accessible loading message. @default 'Loading product…' */
  loading: string
}

export const defaultProductDetailsLabels: ProductDetailsLabels = {
  addToCart: 'Add to cart',
  chooseVariant: 'Choose variant',
  partNo: 'Art no',
  price: 'List price',
  quantityPerPackage: 'Qty/package',
  unit: 'pcs',
  currency: 'kr',
  each: 'à',
  quantity: 'Quantity',
  pieces: 'pcs',
  times: '×',
  totalPrice: 'Price',
  addToFavorites: 'Add to favourites',
  removeFromFavorites: 'Remove from favourites',
  addToPurchaseList: 'Add to purchase list',
  sellerOnly: 'Visible to sellers only',
  accessoryPotItem: 'Accessory / pot item',
  loading: 'Loading product…',
}

export interface ProductDetailsProps {
  /** Selected variant/article number. */
  partNo: string
  /** Product name (the accessible label for the region). */
  productName: string
  /** Main product image URL. */
  primaryImageUrl?: string
  /** Image swapped in when the primary/variant image fails to load. */
  fallbackImageUrl?: string
  /** Current packaging/variant name shown on the trigger. */
  packaging: string
  /** Price per unit (used to compute the total). */
  price: number
  /** Pre-formatted per-unit price string. */
  priceStr: string
  /** Pre-formatted package price string. */
  packagePriceString?: string
  /** Sales unit label (e.g. "Kolli"). */
  salesUnit: string
  /** Items per sales unit. */
  itemNumberPerSalesUnit: number
  /** Selectable variants; the packaging trigger is disabled when there is one or none. */
  productVariantList?: ProductDetailsVariant[]
  /** Specs, tags and taste meters. */
  productDetail: ProductDetailsInfo
  /** Free-text description below the specs. */
  productDescription?: string
  /** Semantic level for the product-name heading. @default 2 */
  headingLevel?: HeadingOrder
  /** Restricted user — hides prices and the quantity control. @default false */
  isRestrictedUser?: boolean
  /** Out of stock — disables adding to cart. @default false */
  outOfStock?: boolean
  /** Whether the product can be ordered — disables adding to cart when false. @default true */
  availableForOrder?: boolean
  /** Show the loading skeleton. @default false */
  loading?: boolean
  /** Optional alert message shown under the price info. */
  alertBox?: AlertBoxProps
  /** Active campaign card. */
  activeCampaign?: CampaignBoxProps
  /** Limited-product campaign card (compact). */
  limitedProduct?: CampaignBoxProps
  /** Mark the product as visible to sellers only (shows a marker icon). @default false */
  sellerOnly?: boolean
  /** Mark the product as an accessory / pot item (shows an "S" marker). @default false */
  isAccessoryPotItem?: boolean
  /** Upper bound for the quantity. */
  maxQuantity?: number
  /** Initial quantity. @default 1 */
  defaultQuantity?: number
  /** Show the add-to-favourites toggle. @default false */
  showFavoriteIcon?: boolean
  /** Ids of the user's favourite products (drives the favourite toggle state). */
  favoriteProductsIds?: string[]
  /** Called with the article number and its current favourite state. */
  onFavoriteIconClick?: (partNo: string, isFavorite: boolean) => void
  /** Show the add-to-purchase-list button. @default false */
  showAddToPurchaseListIcon?: boolean
  /** Called with the article number to add to a purchase list. */
  onSaveToPurchaseListClick?: (partNo: string) => void
  /** Called when the product is added to the cart. */
  addToCart: (context: ProductDetailsAddToCartContext) => void
  /** Called whenever the quantity changes. */
  onChangeQuantity?: (context: ProductDetailsAddToCartContext) => void
  /** Called with the chosen variant id when a different variant is selected. */
  onPackageChange?: (variantId: string) => void
  /** Free-text note about pack-per-pallet, shown under the actions. */
  packagePerPalletText?: string
  /** Formats a numeric total into a display string. @default (v) => v.toFixed(2) */
  formatPrice?: (value: number) => string
  /** Tooltip strings for the seller-only / accessory markers and favourite/purchase actions. */
  tooltips?: ProductDetailsTooltips
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<ProductDetailsLabels>
  /** Extra classes, merged onto the root `<article>` via `cn()`. */
  className?: string
  /** Forwarded to the root `<article>`. */
  ref?: Ref<HTMLDivElement>
}

const infoText = 'text-body-s text-text-default'

/**
 * Product detail panel (organism). A two-column layout: the product image with its taste meters
 * ({@link LoadingBars}) on one side, and on the other the product name, price info, campaign/alert
 * messages, specs, description and buy actions — the packaging/variant picker, a
 * {@link ProductQuantityInput} with a live total, an add-to-cart {@link Button} and favourite /
 * purchase-list {@link IconButton}s. Composes {@link Picture}, {@link Tag}, {@link CampaignBox},
 * {@link AlertBox}, {@link IconWithTooltip} and the {@link ProductVariantList}.
 *
 * Accessibility: rendered as an `<article>` named by its product heading (1.3.1). Prices and the
 * quantity control are hidden for `isRestrictedUser`. The add-to-cart button is disabled (not hidden)
 * when out of stock or unavailable, so the state reaches AT (4.1.2). The variant picker is a non-modal,
 * dismissible {@link ProductVariantList} rendered only while open (a closed picker leaves the
 * accessibility tree; the trigger exposes `aria-expanded` only — no dangling `aria-controls`).
 * Seller-only / accessory markers carry tooltip text, never colour alone (1.4.1). The legacy JS
 * media-query layout, the scroll-driven sticky mobile bar and the Framer transitions are dropped in
 * favour of a responsive flex layout. Every built-in string is an overridable label.
 */
function ProductDetails({
  partNo,
  productName,
  primaryImageUrl,
  fallbackImageUrl,
  packaging,
  price,
  priceStr,
  packagePriceString,
  salesUnit,
  itemNumberPerSalesUnit,
  productVariantList = [],
  productDetail,
  productDescription,
  headingLevel = 2,
  isRestrictedUser = false,
  outOfStock = false,
  availableForOrder = true,
  loading = false,
  alertBox,
  activeCampaign,
  limitedProduct,
  sellerOnly = false,
  isAccessoryPotItem = false,
  maxQuantity,
  defaultQuantity = 1,
  showFavoriteIcon = false,
  favoriteProductsIds,
  onFavoriteIconClick,
  showAddToPurchaseListIcon = false,
  onSaveToPurchaseListClick,
  addToCart,
  onChangeQuantity,
  onPackageChange,
  packagePerPalletText,
  formatPrice = (value) => value.toFixed(2),
  tooltips,
  labels,
  className,
  ref,
}: ProductDetailsProps) {
  const t = { ...defaultProductDetailsLabels, ...labels }
  const headingId = useId()
  const [quantity, setQuantity] = useState(defaultQuantity)
  const [variantsOpen, setVariantsOpen] = useState(false)

  const isFavorite = favoriteProductsIds?.includes(partNo) ?? false
  const hasVariants = productVariantList.length > 1
  const packagePrice = price * itemNumberPerSalesUnit
  const total = packagePrice * (quantity || 1)

  const context = (nextQuantity: number): ProductDetailsAddToCartContext => ({
    partNo,
    productName,
    packaging,
    quantity: nextQuantity,
  })

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = parseInt(event.target.value, 10) || 0
    setQuantity(next)
    onChangeQuantity?.(context(next))
  }

  const handleAdd = () => {
    const next = quantity === 0 ? 1 : quantity
    if (next !== quantity) setQuantity(next)
    addToCart(context(next))
  }

  const handleVariantSelect = (variant: ProductVariantListItem | undefined) => {
    if (variant) onPackageChange?.(variant.variantId)
    setVariantsOpen(false)
  }

  if (loading) {
    return (
      <div className={cn('flex flex-col gap-4 bg-surface-default p-4 lg:flex-row lg:gap-8', className)} aria-busy="true">
        <div className="h-64 w-full animate-pulse rounded bg-grey-300 lg:w-1/2" />
        <div className="flex w-full flex-col gap-3 lg:w-1/2">
          <div className="h-8 w-2/3 animate-pulse rounded bg-grey-300" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-grey-300" />
          <div className="h-11 w-full animate-pulse rounded bg-grey-300" />
        </div>
        <span role="status" className="sr-only">
          {t.loading}
        </span>
      </div>
    )
  }

  const variantListItems: ProductVariantListItem[] = productVariantList.map((variant) => ({
    productName,
    variantName: variant.variantName,
    variantId: variant.variantId,
    priceStr: variant.priceStr,
    image: {
      id: variant.variantId,
      src: variant.imageUrl ?? fallbackImageUrl ?? '',
      sources: [],
      alt: variant.variantName,
    },
    sellerOnly: variant.sellerOnly,
    sellerOnlyLabel: variant.sellerOnlyLabel,
  }))

  return (
    <article
      ref={ref}
      aria-labelledby={headingId}
      className={cn('flex flex-col gap-6 bg-surface-default p-4 pb-8 lg:flex-row lg:items-center lg:gap-0', className)}
    >
      {/* Image column: narrow taste-meter rail beside a product image that takes the remaining width. */}
      <div className="flex w-full flex-row items-center justify-center gap-4 lg:w-1/2 lg:pr-8">
        {productDetail.loaderValues && productDetail.loaderValues.length > 0 && (
          <LoadingBars loadingBars={productDetail.loaderValues} className="w-20 shrink-0 md:w-24" />
        )}
        <div className="min-w-0 flex-1">
          <Picture
            id={partNo}
            src={primaryImageUrl ?? fallbackImageUrl ?? ''}
            sources={[]}
            alt={productName}
            fallbackImageUrl={fallbackImageUrl}
            classNamePicture="block"
            classNameImg="mx-auto h-auto max-h-96 w-auto max-w-full object-contain"
          />
        </div>
      </div>

      {/* Content column (relative so the desktop variant overlay can cover it). */}
      <div className="relative flex w-full flex-col gap-3 lg:w-1/2">
        {(sellerOnly || isAccessoryPotItem) && (
          <div className="flex items-center gap-2">
            {sellerOnly && <IconWithTooltip content={tooltips?.sellerOnly ?? t.sellerOnly} icon="icon-eye" />}
            {isAccessoryPotItem && (
              <IconWithTooltip content={tooltips?.accessoryPotItem ?? t.accessoryPotItem} text="S" />
            )}
          </div>
        )}

        {productDetail.tags && productDetail.tags.length > 0 && (
          <ul className="flex list-none flex-wrap gap-2 p-0">
            {productDetail.tags.map((tag, index) => (
              <li key={`${tag.text}-${index}`}>
                <Tag {...tag} />
              </li>
            ))}
          </ul>
        )}

        <Heading order={headingLevel} noMargin className="font-secondary font-bold text-h-s md:text-h-l-lg">
          <span id={headingId}>{productName}</span>
        </Heading>

        {!isRestrictedUser && (
          <div className="flex flex-col gap-1">
            {packagePriceString && (
              <p className={cn(infoText, 'text-text-decorative-purple')}>
                {`${t.price}: ${packagePriceString} ${t.currency}/${salesUnit.toLowerCase()}`}
              </p>
            )}
            <p className={infoText}>{`${t.partNo} ${partNo}`}</p>
            <p className={infoText}>
              {`${t.quantityPerPackage} ${itemNumberPerSalesUnit} ${t.unit} ${t.each} ${priceStr} ${t.currency}`}
            </p>
          </div>
        )}

        {activeCampaign?.title && <CampaignBox {...activeCampaign} hideSelectBtn />}
        {limitedProduct && <CampaignBox {...limitedProduct} limited hideSelectBtn />}
        {alertBox && <AlertBox {...alertBox} />}

        {productDetail.visibleSpecs && productDetail.visibleSpecs.length > 0 && (
          <ul className="flex list-none flex-col gap-1 p-0">
            {productDetail.visibleSpecs
              .filter((spec) => spec.value && spec.value !== 'False')
              .map((spec, index) => (
                <li key={`${spec.name}-${index}`} className={infoText}>
                  {spec.value === 'True' ? <strong>{spec.name}</strong> : `${spec.name}: ${spec.value}`}
                </li>
              ))}
          </ul>
        )}

        {productDescription && <p className="text-body text-text-default">{productDescription}</p>}

        {/* Buy actions. */}
        <Button
          type="button"
          surface="secondary"
          rounded
          fullWidth
          iconRight={hasVariants ? 'icon-layers' : undefined}
          disabled={!hasVariants}
          aria-label={`${t.chooseVariant}: ${packaging}`}
          aria-expanded={variantsOpen}
          onClick={() => setVariantsOpen(true)}
        >
          {packaging}
        </Button>

        {!isRestrictedUser && (
          <ProductQuantityInput
            quantityInputId={partNo}
            quantity={String(quantity)}
            salesUnit={salesUnit}
            itemNumberPerSalesUnit={itemNumberPerSalesUnit}
            totalPrice={formatPrice(total)}
            maxQuantity={maxQuantity}
            onChange={handleQuantityChange}
            labels={{
              quantity: t.quantity,
              pieces: t.pieces,
              price: t.totalPrice,
              currency: t.currency,
              times: t.times,
            }}
          />
        )}

        <div className="flex items-center gap-2">
          <Button
            type="button"
            surface="primary"
            size="large"
            className="flex-1"
            disabled={outOfStock || !availableForOrder || quantity === 0}
            onClick={handleAdd}
          >
            {t.addToCart}
          </Button>
          {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
            <IconButton
              type="button"
              icon="icon-file-plus"
              label={tooltips?.addToPurchaseList ?? t.addToPurchaseList}
              size="large"
              isTransparent
              noBorder
              onClick={() => onSaveToPurchaseListClick(partNo)}
            />
          )}
          {showFavoriteIcon && onFavoriteIconClick && (
            <IconButton
              type="button"
              icon={isFavorite ? 'icon-heart1' : 'icon-heart-o'}
              label={isFavorite ? tooltips?.removeFromFavorites ?? t.removeFromFavorites : tooltips?.addToFavorites ?? t.addToFavorites}
              size="large"
              isTransparent
              noBorder
              onClick={() => onFavoriteIconClick(partNo, isFavorite)}
            />
          )}
        </div>

        {packagePerPalletText && !isRestrictedUser && (
          <p className="flex items-center gap-1 text-body-s text-text-subdued">
            <Icon icon="icon-info" />
            {packagePerPalletText}
          </p>
        )}

        {/* Variant picker overlay — a fixed bottom sheet on mobile, an absolute panel covering the
            content column on desktop (matches the legacy VariantSelector). Rendered only while open. */}
        {variantsOpen && (
          <div className="fixed inset-x-0 bottom-0 z-menu-icon max-h-screen overflow-y-auto bg-surface-default shadow-2xl lg:absolute lg:inset-0 lg:z-10 lg:max-h-full lg:overflow-hidden lg:shadow-none">
            <ProductVariantList
              variants={variantListItems}
              selectedVariantId={partNo}
              isRestrictedUser={isRestrictedUser}
              sellerOnlyTooltipText={tooltips?.sellerOnly}
              onVariantSelect={handleVariantSelect}
              onClose={() => setVariantsOpen(false)}
              labels={{ partNo: t.partNo, currency: t.currency, unit: t.unit }}
              className="h-full overflow-y-auto px-4 pt-10 pb-6"
            />
          </div>
        )}
      </div>
    </article>
  )
}

export { ProductDetails }
