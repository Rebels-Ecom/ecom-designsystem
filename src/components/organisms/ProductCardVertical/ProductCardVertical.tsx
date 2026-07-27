import type { ChangeEvent, Ref } from 'react'
import defaultFallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'
import { cn } from '../../../lib/cn'
import { DefaultLink } from '../../../lib/link'
import { type HeadingOrder } from '../../atoms/Heading'
import { Picture } from '../../atoms/Picture'
import { Placeholder } from '../../atoms/Placeholder'
import { Button } from '../../molecules/Button'
import { ButtonWithTooltip } from '../../molecules/ButtonWithTooltip'
import { ProductQuantityInput } from '../../molecules/ProductQuantityInput'
import { CardActions } from '../ProductCard/CardActions'
import { CardImage } from '../ProductCard/CardImage'
import { CardMarkers } from '../ProductCard/CardMarkers'
import { CardName } from '../ProductCard/CardName'
import { CardRibbon, type RibbonDescriptor } from '../ProductCard/CardRibbon'
import { VariantPicker } from '../ProductCard/VariantPicker'
import {
  defaultProductCardLabels,
  type ProductCardChildProps,
  type ProductCardVerticalExtras,
} from '../ProductCard/types'

export interface ProductCardVerticalProps
  extends ProductCardChildProps,
    ProductCardVerticalExtras {
  /**
   * Heading level for the product name — set it so the name fits the surrounding document outline.
   * @default 3
   */
  headingLevel?: HeadingOrder
  /** Image URL swapped in when the product image is missing or broken. */
  fallbackImageUrl?: string
  /** Forwarded to the root `<article>`. */
  ref?: Ref<HTMLElement>
}

const cardClasses =
  'relative mx-auto flex h-product-card-v w-full flex-col justify-between gap-3 bg-white p-4 transition-shadow hover:shadow-lg focus-within:shadow-lg'

/**
 * Vertical product card (organism) — a status-marker row, thumbnail, name, pricing, a packaging
 * variant picker, a quantity field and an add-to-cart button. Rendered by {@link ProductCard} for a
 * standard (non-restricted) vertical layout. Composes the shared card shells ({@link CardMarkers},
 * {@link CardImage}, {@link CardName}, {@link CardRibbon}, {@link CardActions}, {@link VariantPicker})
 * plus {@link Button}, {@link ButtonWithTooltip} and {@link ProductQuantityInput}.
 *
 * Accessibility: the card is an `<article>` named by its product name (1.3.1) so assistive tech can
 * navigate card-by-card; the name becomes a real `<a href>` when `product.productUrl` is set (4.1.2,
 * visible focus ring 2.4.7). The seller-only / accessory-pot markers are named `role="img"` graphics —
 * never colour-only (1.4.1). The packaging button is a disclosure that opens a
 * {@link ProductVariantList} (a `<fieldset>` radio group) covering the card; `Escape` / an outside
 * pointer press dismiss it. While `loading`, the body is a decorative skeleton. All built-in copy is
 * localisable via `labels`.
 */
function ProductCardVertical({
  product,
  productImage,
  loading = false,
  hidePrice,
  hideCartButton,
  addToCart,
  addToCartBtnLabel,
  onChangeQuantity,
  productQuantityDisabled,
  linkComponent,
  variantsOpen,
  onVariantSelect,
  selectedVariantId,
  onVariantsButtonClick,
  className,
  defaultQuantity,
  disabled,
  buttonLoading,
  showFavoriteIcon,
  favoriteProductsIds,
  onFavoriteIconClick,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  onCloseVariants,
  onClick,
  productArea,
  tooltips,
  isAddingToFavorites,
  labels,
  headingLevel = 3,
  fallbackImageUrl = defaultFallbackImage,
  ref,
}: ProductCardVerticalProps) {
  const t = { ...defaultProductCardLabels, ...labels }
  const Link = linkComponent ?? DefaultLink
  const {
    activeCampaign,
    partNo,
    partNoLabel,
    productName,
    productUrl,
    productVariantList,
    country,
    packaging,
    priceStr,
    totalPrice,
    quantity,
    salesUnit,
    itemNumberPerSalesUnit,
    outOfStock,
    tags,
    isLimitedProduct,
    sellerOnly,
    isAccessoryPotItem,
    priceLabel,
    currencyLabel,
    unitLabel,
    outOfStockLabel,
    limitedLabel,
  } = product

  const packageBtnDisabled = !productVariantList || productVariantList.length <= 1

  function handleOnChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    const nextQuantity = parseInt(event.target.value) || 0
    onChangeQuantity?.(nextQuantity)
  }

  const isFavorite = Boolean(favoriteProductsIds?.includes(partNo))

  // Campaign takes precedence over limited/out-of-stock. Campaign ribbons carry a runtime brand colour
  // (consumer ensures ≥4.5:1 against white); limited/out-of-stock use an accessible grey — never the
  // legacy white-on-orange, which fails AA and would trip the axe hard gate.
  const ribbon: RibbonDescriptor | null =
    !loading && activeCampaign?.title
      ? {
          text: activeCampaign.title,
          className: activeCampaign.color
            ? 'text-white'
            : 'bg-action-primary text-text-on-primary',
          style: activeCampaign.color
            ? { backgroundColor: activeCampaign.color }
            : undefined,
          borderStyle: activeCampaign.color
            ? { borderColor: activeCampaign.color }
            : undefined,
          borderClass: activeCampaign.color ? undefined : 'border-action-primary',
        }
      : !loading && !activeCampaign && isLimitedProduct && limitedLabel
        ? {
            text: limitedLabel,
            className: 'bg-tag-grey text-text-default',
            borderClass: 'border-tag-grey',
          }
        : !loading && !activeCampaign && outOfStock && outOfStockLabel
          ? {
              text: outOfStockLabel,
              className: 'bg-tag-grey text-text-default',
              borderClass: 'border-tag-grey',
            }
          : null

  // When the picker is open the card is replaced by the variant list (legacy early-return), sized to
  // the same card box so the layout is unchanged.
  const thumbnail = (
    <Picture
      {...productImage}
      alt={productImage.alt ?? ''}
      classNamePicture='flex h-full w-full items-center justify-center'
      classNameImg='mx-auto h-full w-full max-w-30 object-contain py-2'
      fallbackImageUrl={fallbackImageUrl}
    />
  )

  return (
    <article
      ref={ref}
      aria-label={productName}
      aria-busy={loading || undefined}
      style={ribbon?.borderStyle}
      className={cn(
        cardClasses,
        ribbon && cn('overflow-hidden rounded-lg border-2', ribbon.borderClass),
        // Clip the slide-up variant overlay to the card box while it animates in.
        variantsOpen && 'overflow-hidden',
        className,
      )}
    >
      <CardRibbon ribbon={ribbon} layout='vertical' />

      <CardMarkers
        className='flex min-h-6 items-center gap-2'
        sellerOnly={sellerOnly}
        isAccessoryPotItem={isAccessoryPotItem}
        tags={activeCampaign ? tags?.slice(0, 3) : tags}
        tooltips={tooltips}
        labels={t}
        loading={loading}
      />

      {loading ? (
        <div className='flex min-h-0 flex-1 items-center justify-center'>
          <Placeholder type='image' noMargin />
        </div>
      ) : (
        <div className='relative flex min-h-0 flex-1 items-center justify-center'>
          <CardImage
            picture={thumbnail}
            productUrl={productUrl}
            onClick={onClick}
            linkComponent={Link}
            className='flex h-full w-full items-center justify-center'
          />
        </div>
      )}

      {loading ? (
        <div className='flex flex-col items-center gap-2'>
          <Placeholder type='heading' noMargin />
          <Placeholder type='heading' noMargin />
          <Placeholder type='p_long' noMargin />
          <Placeholder type='p_long' noMargin />
        </div>
      ) : (
        <div className='flex flex-col items-center gap-2'>
          <CardName
            productName={productName}
            productUrl={productUrl}
            onClick={onClick}
            linkComponent={Link}
            headingLevel={headingLevel}
            align='center'
            className='line-clamp-2 text-h-xs md:text-h-xs'
          />
          <p className='m-0 text-body-s text-text-decorative-grey'>{`${partNoLabel ?? ''} ${partNo} ${country ? `- ${country}` : ''}`.trim()}</p>
          {!hidePrice && (
            <p className='m-0 font-secondary text-body-s text-text-decorative-purple'>{`${priceLabel ?? ''}: ${priceStr ?? ''} ${currencyLabel ?? ''}/${unitLabel ? unitLabel.toLowerCase() : ''}`}</p>
          )}
        </div>
      )}

      <ButtonWithTooltip
        type='button'
        surface='secondary'
        size='small'
        iconRight={packageBtnDisabled ? undefined : 'icon-layers'}
        rounded
        fullWidth
        onClick={onVariantsButtonClick}
        disabled={loading || packageBtnDisabled}
        aria-haspopup='dialog'
        aria-expanded={variantsOpen}
        content={tooltips?.changeVariant ?? t.changeVariant}
      >
        {packaging || t.selectPackaging}
      </ButtonWithTooltip>

      {loading ? (
        <div className='flex flex-col gap-2'>
          <Placeholder type='p_long' noMargin />
          <Placeholder type='p_long' noMargin />
        </div>
      ) : (
        <ProductQuantityInput
          salesUnit={salesUnit ?? ''}
          itemNumberPerSalesUnit={itemNumberPerSalesUnit}
          totalPrice={totalPrice ?? ''}
          quantity={defaultQuantity ?? quantity}
          quantityInputId={`${partNo}-${productArea ?? 'category'}`}
          disabled={productQuantityDisabled}
          onChange={handleOnChangeQuantity}
          hidePrice={hidePrice}
        />
      )}

      {!hideCartButton && (
        <div className='flex items-center justify-between gap-2'>
          <Button
            type='button'
            surface='primary'
            fullWidth
            onClick={() => addToCart(product)}
            disabled={buttonLoading || loading || disabled || quantity === '0'}
            loading={buttonLoading}
          >
            {addToCartBtnLabel}
          </Button>
          <CardActions
            size='large'
            partNo={partNo}
            totalPrice={totalPrice}
            tooltips={tooltips}
            labels={t}
            showAddToPurchaseListIcon={showAddToPurchaseListIcon}
            onSaveToPurchaseListClick={onSaveToPurchaseListClick}
            showFavoriteIcon={showFavoriteIcon}
            onFavoriteIconClick={onFavoriteIconClick}
            isFavorite={isFavorite}
            isAddingToFavorites={isAddingToFavorites}
          />
        </div>
      )}

      <VariantPicker
        display='grid'
        open={variantsOpen}
        variants={productVariantList ?? []}
        selectedVariantId={selectedVariantId ?? ''}
        onVariantSelect={onVariantSelect}
        onClose={onCloseVariants}
        sellerOnlyTooltipText={tooltips?.sellerOnly}
      />
    </article>
  )
}

export { ProductCardVertical }
