import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, CSSProperties, Ref } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import defaultFallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'
import { cn } from '../../../lib/cn'
import { DefaultLink } from '../../../lib/link'
import { useBreakpoint } from '../../atoms/Breakpoints'
import { DebounceInput } from '../../atoms/DebounceInput'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { Picture } from '../../atoms/Picture'
import { Placeholder } from '../../atoms/Placeholder'
import { AlertBox } from '../../molecules/AlertBox'
import { Button } from '../../molecules/Button'
import { ButtonWithTooltip } from '../../molecules/ButtonWithTooltip'
import { ComponentWithTooltip } from '../../atoms/ComponentWithTooltip'
import { IconButton } from '../../molecules/IconButton'
import { IconWithTooltip } from '../../molecules/IconWithTooltip'
import { ProductQuantityInput } from '../../molecules/ProductQuantityInput'
import { HorizontalVariants } from '../HorizontalVariants'
import { TagsList } from '../../molecules/TagsList'
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
  handlePackageChange,
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

  function handleSelectVariant(variantId: string | undefined) {
    const variant = productVariantList?.find(
      (item) => item.variantId === variantId,
    )
    if (variant) handlePackageChange(variant)
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

  const hasIconAndTags = Boolean(sellerOnly || isAccessoryPotItem || tags?.length)
  const isFavorite = Boolean(favoriteProductsIds?.includes(partNo))
  const isCampaignCard = Boolean(activeCampaign?.title)
  const isLimitedCard = Boolean(!activeCampaign && isLimitedProduct && limitedLabel)
  const isOutOfStockCard = Boolean(!activeCampaign && outOfStock && outOfStockLabel)
  const isSpecialCard = isCampaignCard || isLimitedCard || isOutOfStockCard

  // Campaign ribbons carry a runtime brand colour (consumer ensures ≥4.5:1 against white); limited /
  // out-of-stock use an accessible grey — never the legacy white-on-orange, which fails AA.
  const ribbon: {
    text: string
    className: string
    style?: CSSProperties
    borderStyle?: CSSProperties
    borderClass?: string
    tooltip?: string
  } | null =
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

  const nameHeading = (
    <Heading
      order={headingLevel}
      noMargin
      className={cn(
        'font-secondary text-h-xs md:text-h-xs',
        !hasIconAndTags && !hideRemoveButton && !isSpecialCard && 'pr-9 md:pr-0',
      )}
    >
      {productName}
    </Heading>
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
        isSpecialCard && !loading && cn('rounded-lg border-2 pt-10', ribbon?.borderClass),
        className,
      )}
    >
      {ribbon &&
        (ribbon.tooltip ? (
          <ComponentWithTooltip
            content={ribbon.tooltip}
            wrapperClassName={cn(
              'absolute top-0 right-0 z-10 rounded-bl-lg font-secondary',
              hideRemoveButton ? 'pr-4' : 'pr-12',
            )}
            element={
              <span
                style={ribbon.style}
                className={cn('block rounded-bl-lg py-2 pl-4', ribbon.className)}
              >
                {ribbon.text}
              </span>
            }
          />
        ) : (
          <span
            style={ribbon.style}
            className={cn(
              'absolute top-0 right-0 z-10 rounded-bl-lg py-2 pl-4 font-secondary',
              hideRemoveButton ? 'pr-4' : 'pr-12',
              ribbon.className,
            )}
          >
            {ribbon.text}
          </span>
        ))}

      {!hideRemoveButton && onClickRemoveProduct && !loading && (
        <div className='absolute top-5 right-4 z-10'>
          <IconButton
            type='button'
            icon='icon-x-circle'
            label={t.removeProduct}
            onClick={() => onClickRemoveProduct(partNo)}
            isTransparent
            noBorder
            noPadding
            size='large'
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
          {productUrl ? (
            <Link
              href={productUrl}
              onClick={onClick}
              aria-hidden
              tabIndex={-1}
              className='flex items-center justify-center self-center'
            >
              {picture}
            </Link>
          ) : (
            <div className='flex items-center justify-center self-center'>
              {picture}
            </div>
          )}

          <div className='flex flex-1 flex-col gap-1 overflow-hidden'>
            {hasIconAndTags && (
              <div className='flex min-h-9 items-center gap-2'>
                {sellerOnly &&
                  (tooltips?.sellerOnly ? (
                    <IconWithTooltip content={tooltips.sellerOnly} icon='icon-eye' />
                  ) : (
                    <Icon icon='icon-eye' size='large' label={t.sellerOnly} />
                  ))}
                {isAccessoryPotItem &&
                  (tooltips?.accessoryPotItem ? (
                    <IconWithTooltip content={tooltips.accessoryPotItem} text='S' />
                  ) : (
                    <span
                      role='img'
                      aria-label={t.accessoryPotItem}
                      className='flex size-5 items-center justify-center rounded-full bg-tag-orange font-secondary text-body-s text-text-default'
                    >
                      S
                    </span>
                  ))}
                {Array.isArray(tags) && tags.length ? (
                  <TagsList tags={tags} />
                ) : null}
              </div>
            )}

            {productUrl ? (
              <Link
                href={productUrl}
                onClick={onClick}
                className='text-text-default no-underline hover:text-text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'
              >
                {nameHeading}
              </Link>
            ) : (
              nameHeading
            )}

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
                    {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
                      <ComponentWithTooltip
                        content={tooltips?.addToPurchaseList}
                        element={
                          <IconButton
                            type='button'
                            icon='icon-file-plus'
                            label={tooltips?.addToPurchaseList ?? t.addToPurchaseList}
                            onClick={() =>
                              onSaveToPurchaseListClick(partNo, totalPrice ?? '')
                            }
                            noBorder
                            isTransparent
                            size='medium'
                            noPadding
                          />
                        }
                      />
                    )}
                    {showFavoriteIcon && onFavoriteIconClick && (
                      <ComponentWithTooltip
                        content={
                          isFavorite
                            ? tooltips?.removeFromFavorites
                            : tooltips?.addToFavorites
                        }
                        element={
                          <IconButton
                            type='button'
                            icon={isFavorite ? 'icon-heart1' : 'icon-heart-o'}
                            label={
                              isFavorite
                                ? tooltips?.removeFromFavorites ?? t.removeFromFavorites
                                : tooltips?.addToFavorites ?? t.addToFavorites
                            }
                            onClick={() =>
                              onFavoriteIconClick(partNo, isFavorite, totalPrice ?? '')
                            }
                            noBorder
                            isTransparent
                            className={cn(isFavorite && 'text-action-tertiary')}
                            size='medium'
                            noPadding
                            busy={isAddingToFavorites}
                          />
                        }
                      />
                    )}
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

      {selectedVariantId && (
        <HorizontalVariants
          open={variantsOpen}
          variants={productVariantList ?? []}
          onVariantSelect={(variant) => handleSelectVariant(variant?.variantId)}
          onClose={onCloseVariants}
          selectedVariantId={selectedVariantId}
          sellerOnlyTooltipText={tooltips?.sellerOnly}
        />
      )}

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
