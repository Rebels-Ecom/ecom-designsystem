import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, Ref } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import defaultFallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'
import { cn } from '../../../lib/cn'
import { DefaultLink } from '../../../lib/link'
import { useBreakpoint } from '../../atoms/Breakpoints'
import { DebounceInput } from '../../atoms/DebounceInput'
import { type HeadingOrder } from '../../atoms/Heading'
import { Picture } from '../../atoms/Picture'
import { Placeholder } from '../../atoms/Placeholder'
import { AlertBox } from '../../molecules/AlertBox'
import { Button } from '../../molecules/Button'
import { ButtonWithTooltip } from '../../molecules/ButtonWithTooltip'
import { ComponentWithTooltip } from '../../atoms/ComponentWithTooltip'
import { IconButton } from '../../molecules/IconButton'
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
  type ProductCardHorizontalExtras,
} from '../ProductCard/types'

export interface ProductCardHorizontalProps
  extends ProductCardChildProps,
    ProductCardHorizontalExtras {
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
  'relative flex w-full max-w-container-content-text items-end gap-6 overflow-hidden bg-white p-4'

/**
 * Horizontal product card (organism) — a compact row: a small thumbnail beside a content column with
 * status markers, name, packaging/price/article-number meta, a quantity field and cart / variant /
 * favourite / purchase-list actions. Rendered by {@link ProductCard} for `cardDisplay="horizontal"`.
 * Composes {@link Picture}, {@link TagsList}, {@link ProductQuantityInput} (or {@link DebounceInput}),
 * {@link IconButton}, {@link Button}, {@link AlertBox} and {@link HorizontalVariants}.
 *
 * Accessibility: an `<article>` named by its product name (1.3.1); the name is a real `<a href>` when
 * `product.productUrl` is set (4.1.2, focus ring 2.4.7). Every icon-only control (remove, open-variants,
 * add-to-purchase-list, favourite, cart) carries an explicit accessible name via `label` (4.1.2), with
 * an optional descriptive tooltip. Seller-only / accessory-pot markers are named `role="img"` graphics
 * (never colour-only, 1.4.1). The mobile alert-box affordance opens a non-modal slide-up panel gated on
 * `prefers-reduced-motion` (2.3.3†), dismissed by `Escape` or an outside pointer press. All built-in
 * copy is localisable via `labels`.
 */
function ProductCardHorizontal({
  product,
  productImage,
  loading = false,
  addToCart,
  addToCartBtnLabel,
  hideCartButton,
  hidePrice,
  onClickRemoveProduct,
  hideRemoveButton,
  border,
  onChangeQuantity,
  productQuantityDisabled,
  linkComponent,
  className,
  defaultQuantity,
  buttonLoading,
  disabled,
  displaySmallImage = false,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  maxQuantity,
  isRestrictedUser,
  alertBox,
  onClick,
  debounceQuantityVal,
  productArea,
  onVariantsButtonClick,
  variantsOpen,
  onCloseVariants,
  selectedVariantId,
  onVariantSelect,
  showPackaging = false,
  favoriteProductsIds,
  showFavoriteIcon,
  onFavoriteIconClick,
  tooltips,
  isAddingToFavorites,
  allowNegative,
  labels,
  headingLevel = 3,
  fallbackImageUrl = defaultFallbackImage,
  ref,
}: ProductCardHorizontalProps) {
  const t = { ...defaultProductCardLabels, ...labels }
  const Link = linkComponent ?? DefaultLink
  const { isMobile } = useBreakpoint()
  const reduceMotion = useReducedMotion()
  const alertBoxRef = useRef<HTMLDivElement>(null)
  const [alertBoxOpen, setAlertBoxOpen] = useState(false)

  const {
    activeCampaign,
    campaignTitle = '',
    partNo,
    partNoLabel,
    productName,
    productUrl,
    tags,
    isLimitedProduct,
    country,
    totalPrice,
    quantity,
    outOfStock,
    salesUnit,
    itemNumberPerSalesUnit,
    pricePerUnitString,
    currencyLabel,
    unitLabel,
    outOfStockLabel,
    limitedLabel,
    sellerOnly,
    isAccessoryPotItem,
    pricePerUnit,
    aLabel,
    productVariantList,
    packaging,
  } = product

  function handleOnChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
    const nextQuantity = parseInt(event.target.value) || 0
    onChangeQuantity?.(nextQuantity)
  }

  function handleOnDebounceChangeQuantity(value: string) {
    onChangeQuantity?.(parseInt(value))
  }

  // Non-modal alert-box drawer (mobile): dismiss on Escape or an outside pointer press. Wired at the
  // document level, active only while open (mirrors the legacy `useOnClickOutside`).
  useEffect(() => {
    if (!alertBoxOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAlertBoxOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      if (
        alertBoxRef.current &&
        !alertBoxRef.current.contains(event.target as Node)
      ) {
        setAlertBoxOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [alertBoxOpen])

  const isFavorite = Boolean(favoriteProductsIds?.includes(partNo))
  const isCampaignCard = Boolean(activeCampaign?.title)
  const isLimitedCard = Boolean(!activeCampaign && isLimitedProduct && limitedLabel)
  const isOutOfStockCard = Boolean(!activeCampaign && outOfStock && outOfStockLabel)
  const isSpecialCard = isCampaignCard || isLimitedCard || isOutOfStockCard

  // Campaign ribbons carry a runtime brand colour (consumer ensures ≥4.5:1 against white); limited /
  // out-of-stock use an accessible grey — never the legacy white-on-orange, which fails AA.
  const ribbon: RibbonDescriptor | null =
    !loading && !outOfStock && isCampaignCard && activeCampaign?.title
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
      : !loading && isLimitedCard && limitedLabel
        ? {
            text: limitedLabel,
            className: 'bg-tag-grey text-text-default',
            borderClass: 'border-tag-grey',
          }
        : !loading && isOutOfStockCard && outOfStockLabel
          ? {
              text: outOfStockLabel,
              className: 'bg-tag-grey text-text-default',
              borderClass: 'border-tag-grey',
              tooltip: tooltips?.stockShortage ?? tooltips?.outOfStock,
            }
          : null

  function getQuantityLabel(): string {
    const unitSuffix = unitLabel === 'Kolli' ? `/${unitLabel.toLocaleLowerCase()}` : ''
    const baseLabel = `${t.quantity}${unitSuffix}`
    if (!itemNumberPerSalesUnit) {
      return baseLabel
    }
    const separationLabel = aLabel ?? t.priceSeparator
    const currency = currencyLabel ?? ''
    return `${baseLabel} ${itemNumberPerSalesUnit} ${t.pieces} ${separationLabel} ${pricePerUnitString ?? ''} ${currency}`.trim()
  }

  const picture = (
    <Picture
      {...productImage}
      alt={productImage.alt ?? ''}
      classNamePicture='flex items-center justify-center'
      classNameImg={cn(
        'h-36 w-full object-contain',
        displaySmallImage ? 'max-w-12' : 'max-w-12 lg:max-w-16',
      )}
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
        border && !isSpecialCard && 'rounded-lg border border-border-grey',
        // Campaign/limited/out-of-stock: coloured border + ribbon. No extra top padding — the
        // always-reserved markers row is the ribbon's clearance, so toggling a campaign between
        // variants doesn't resize the card.
        isSpecialCard && !loading && cn('rounded-lg border-2', ribbon?.borderClass),
        // While the variant picker is open, floor the (content-height) row card to the picker's own
        // intrinsic height (close row + one carousel variant card ≈ 200px) so a genuinely short card
        // can't clip the carousel. It is deliberately the picker's *minimum*, not larger: every real
        // horizontal card is already ≥200px (the h-36 image alone forces it), so the floor never grows
        // them — opening the picker leaves the card height unchanged.
        variantsOpen && 'min-h-50',
        className,
      )}
    >
      <CardRibbon ribbon={ribbon} layout='horizontal' hideRemoveButton={hideRemoveButton} />

      {!hideRemoveButton && onClickRemoveProduct && !loading && (
        // On a special card the remove button sits inside the ribbon band, so lift it (`top-2`) to
        // centre it in the banner instead of the default `top-5`; on a campaign card the band is the
        // brand colour, so the glyph is recoloured white for contrast (≥4.5:1) — restoring the legacy
        // `.specialCard .iconLink` / `.campaign .iconLink button` rules dropped in the migration.
        <div className={cn('absolute right-4 z-10', isSpecialCard ? 'top-2' : 'top-5')}>
          <IconButton
            type='button'
            icon='icon-x-circle'
            label={t.removeProduct}
            onClick={() => onClickRemoveProduct(partNo)}
            isTransparent
            noBorder
            noPadding
            size='large'
            className={isCampaignCard ? 'text-white' : undefined}
          />
        </div>
      )}

      {loading ? (
        <>
          <div className='block h-28 w-24'>
            <Placeholder type='image' noMargin />
          </div>
          <div className='w-full'>
            <Placeholder type='heading' />
            <Placeholder type='p_long' />
            <Placeholder type='p_short' />
            <Placeholder type='p_short' />
          </div>
        </>
      ) : (
        <>
          <CardImage
            picture={picture}
            productUrl={productUrl}
            onClick={onClick}
            linkComponent={Link}
            className='flex items-center justify-center self-center'
            fallbackClassName='flex items-center justify-center self-center'
          />

          {/* `min-w-0` (not `overflow-hidden`) lets this flex-1 column shrink below its content so the
              name/tags wrap — same shrink behaviour, but without an `overflow` clip that would crop the
              `outline-offset` focus ring of the edge-hugging quantity field and cart button (2.4.7 /
              2.4.11). Nothing here overflows horizontally anyway (TagsList wraps, the name wraps), and
              the card's own `p-4` gives the rings 12px of clearance from the card edge. */}
          <div className='flex flex-1 flex-col gap-1 min-w-0'>
            {/* Always rendered (not gated on `hasIconAndTags`) so the row's height is reserved even
                for a variant with no tags/markers — switching variants never resizes the card. */}
            <CardMarkers
              className='flex min-h-9 items-center gap-2'
              sellerOnly={sellerOnly}
              isAccessoryPotItem={isAccessoryPotItem}
              tags={tags}
              tooltips={tooltips}
              labels={t}
            />

            <CardName
              productName={productName}
              productUrl={productUrl}
              onClick={onClick}
              linkComponent={Link}
              headingLevel={headingLevel}
              className='font-secondary text-h-xs md:text-h-xs'
            />

            <div className='flex flex-col gap-3 self-stretch md:flex-row md:justify-between md:gap-4'>
              <div>
                {showPackaging && packaging && (
                  <p className='m-0 mb-1 text-body-s'>{packaging}</p>
                )}
                {!hidePrice && !isRestrictedUser && (
                  <p className='m-0 mb-1 text-body-s'>{getQuantityLabel()}</p>
                )}
                {(country !== '' || partNo !== '') && !isRestrictedUser && (
                  <p className='m-0 mb-2 cursor-text text-body-s select-text md:mb-4'>{`${partNo ? `${partNoLabel ?? ''} ${partNo}` : ''} ${country ? `- ${country}` : ''}`.trim()}</p>
                )}
                {/* Dual quantity field: a truthy `debounceQuantityVal` uses the self-debouncing
                    field; `0` (the checkout escape hatch) is falsy, so the immediate
                    `ProductQuantityInput` is used and the app runs its own debounce. */}
                {!isRestrictedUser &&
                  (debounceQuantityVal ? (
                    <DebounceInput
                      debounceVal={debounceQuantityVal}
                      debouncedEvent={handleOnDebounceChangeQuantity}
                      salesUnit={salesUnit ?? ''}
                      itemNumberPerSalesUnit={itemNumberPerSalesUnit}
                      totalPrice={totalPrice ?? ''}
                      quantity={defaultQuantity ?? quantity}
                      quantityInputId={`${partNo}-${productArea}`}
                      maxQuantity={maxQuantity}
                      disabled={productQuantityDisabled}
                      hidePrice={hidePrice}
                      ariaLabel={t.quantity}
                      pricePerUnitText={`${aLabel ?? t.priceSeparator} ${pricePerUnit?.toFixed(2)?.replace('.', ',') ?? ''} ${currencyLabel ?? ''}`}
                      isGift={campaignTitle === 'Gåva'}
                    />
                  ) : (
                    <ProductQuantityInput
                      salesUnit={salesUnit ?? ''}
                      itemNumberPerSalesUnit={itemNumberPerSalesUnit}
                      totalPrice={totalPrice ?? ''}
                      quantity={defaultQuantity ?? quantity}
                      quantityInputId={`${partNo}-${productArea}`}
                      onChange={handleOnChangeQuantity}
                      disabled={productQuantityDisabled}
                      maxQuantity={maxQuantity}
                      hidePrice={hidePrice}
                      allowNegative={allowNegative}
                    />
                  ))}
              </div>

              <div className='flex w-full items-center gap-4 self-end md:w-auto md:justify-between'>
                {(Boolean(productVariantList?.length) ||
                  (showAddToPurchaseListIcon && onSaveToPurchaseListClick) ||
                  (showFavoriteIcon && onFavoriteIconClick)) && (
                  <div className='flex items-center justify-end gap-2'>
                    {productVariantList && productVariantList.length > 1 && (
                      <ComponentWithTooltip
                        content={tooltips?.changeVariant}
                        element={
                          <IconButton
                            type='button'
                            icon='icon-layers'
                            label={tooltips?.changeVariant ?? t.openVariants}
                            onClick={() => onVariantsButtonClick()}
                            noBorder
                            isTransparent
                            size='medium'
                            noPadding
                            aria-haspopup='dialog'
                            aria-expanded={variantsOpen}
                          />
                        }
                      />
                    )}
                    <CardActions
                      size='medium'
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
                    {alertBox &&
                      (isMobile ? (
                        <Button
                          type='button'
                          onClick={() => setAlertBoxOpen(true)}
                          className='ml-2'
                          surface='primary'
                          iconRight='icon-alert-circle'
                          size='x-small'
                        >
                          {alertBox.buttonText ?? t.changeProduct}
                        </Button>
                      ) : (
                        <ButtonWithTooltip
                          type='button'
                          onClick={alertBox.onClick}
                          content={alertBox.title}
                          className='ml-2'
                          surface='primary'
                          iconRight='icon-alert-circle'
                          size='x-small'
                        >
                          {alertBox.buttonText ?? t.changeProduct}
                        </ButtonWithTooltip>
                      ))}
                  </div>
                )}

                {/* `quantity <= '0'` is a legacy LEXICOGRAPHIC string comparison, kept byte-for-byte
                    (e.g. '' and '0' disable; '10' does not). Do NOT "fix" it to a numeric compare —
                    that would change v1.6.6 observable behaviour. */}
                {!hideCartButton &&
                  (isRestrictedUser ? (
                    <Button
                      type='button'
                      onClick={() => addToCart(product)}
                      surface='primary'
                      disabled={buttonLoading || loading || disabled || quantity <= '0'}
                    >
                      {addToCartBtnLabel}
                    </Button>
                  ) : (
                    <IconButton
                      type='button'
                      icon='icon-shopping-cart'
                      label={addToCartBtnLabel}
                      onClick={() => addToCart(product)}
                      surface='primary'
                      noBorder
                      disabled={buttonLoading || loading || disabled || quantity <= '0'}
                      size='medium'
                    />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}

      <VariantPicker
        display='row'
        open={variantsOpen}
        variants={productVariantList ?? []}
        onVariantSelect={onVariantSelect}
        onClose={onCloseVariants}
        selectedVariantId={selectedVariantId ?? ''}
        sellerOnlyTooltipText={tooltips?.sellerOnly}
      />

      {alertBox && isMobile && alertBoxOpen && (
        <motion.div
          ref={alertBoxRef}
          className='absolute inset-0 bg-white p-2'
          initial={reduceMotion ? false : { y: '100%' }}
          animate={{ y: '0%' }}
          transition={{ type: 'tween', duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <AlertBox className='h-full w-full' {...alertBox} />
        </motion.div>
      )}
    </article>
  )
}

export { ProductCardHorizontal }
