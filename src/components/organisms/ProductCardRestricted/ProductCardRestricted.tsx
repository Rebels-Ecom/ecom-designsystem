import type { Ref } from 'react'
import defaultFallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'
import { cn } from '../../../lib/cn'
import { resolveLink } from '../../../lib/link'
import { type HeadingOrder } from '../../atoms/Heading'
import { Picture } from '../../atoms/Picture'
import { Placeholder } from '../../atoms/Placeholder'
import { Button } from '../../molecules/Button'
import { CardImage } from '../ProductCard/CardImage'
import { CardMarkers } from '../ProductCard/CardMarkers'
import { CardName } from '../ProductCard/CardName'
import { VariantPicker } from '../ProductCard/VariantPicker'
import {
  defaultProductCardLabels,
  type ProductCardChildProps,
} from '../ProductCard/types'

export interface ProductCardRestrictedProps extends ProductCardChildProps {
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
  'relative mx-auto flex h-104 w-75 flex-col justify-between gap-3 bg-white p-4 transition-shadow hover:shadow-lg focus-within:shadow-lg'

/**
 * Restricted-user vertical product card (organism) — the trimmed vertical card shown to users who may
 * not see pricing or a quantity field: status markers, thumbnail, name, country, a packaging variant
 * picker and an add-to-cart button. Rendered by {@link ProductCard} when `isRestrictedUser` is set on
 * a vertical card. Composes the shared card shells ({@link CardMarkers}, {@link CardImage},
 * {@link CardName}, {@link VariantPicker}).
 *
 * Accessibility: an `<article>` named by its product name (1.3.1); the name is a real `<a href>` when
 * `product.productUrl` is set (4.1.2). Seller-only / accessory-pot markers are named `role="img"`
 * graphics (never colour-only, 1.4.1). The packaging button opens a {@link ProductVariantList}
 * (`isRestrictedUser`, so it too hides the article-number and price rows). All built-in copy is
 * localisable via `labels`.
 */
function ProductCardRestricted({
  product,
  productImage,
  loading = false,
  hideCartButton,
  addToCart,
  addToCartBtnLabel,
  linkComponent,
  variantsOpen,
  onVariantSelect,
  selectedVariantId,
  onVariantsButtonClick,
  className,
  disabled,
  buttonLoading,
  onCloseVariants,
  onClick,
  tooltips,
  labels,
  headingLevel = 3,
  fallbackImageUrl = defaultFallbackImage,
  ref,
}: ProductCardRestrictedProps) {
  const t = { ...defaultProductCardLabels, ...labels }
  const Link = resolveLink(linkComponent)
  const {
    productName,
    productUrl,
    productVariantList,
    country,
    packaging,
    quantity,
    tags,
    sellerOnly,
    isAccessoryPotItem,
  } = product

  const packageBtnDisabled = !productVariantList || productVariantList.length <= 1

  const thumbnail = (
    <Picture
      {...productImage}
      alt={productImage.alt ?? ''}
      classNamePicture='flex h-full w-full items-center justify-center'
      classNameImg='mx-auto h-full w-full object-contain px-4 py-2'
      fallbackImageUrl={fallbackImageUrl}
    />
  )

  return (
    <article
      ref={ref}
      aria-label={productName}
      aria-busy={loading || undefined}
      className={cn(
        cardClasses,
        // Clip the slide-up variant overlay to the card box while it animates in.
        variantsOpen && 'overflow-hidden',
        className,
      )}
    >
      <CardMarkers
        className='flex min-h-6 items-center gap-2'
        sellerOnly={sellerOnly}
        isAccessoryPotItem={isAccessoryPotItem}
        tags={tags}
        tooltips={tooltips}
        labels={t}
        loading={loading}
      />

      {loading ? (
        <div className='flex h-2/5 items-center justify-center'>
          <Placeholder type='image' noMargin />
        </div>
      ) : (
        <div className='relative flex h-2/5 items-center justify-center'>
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
          {country && (
            <p className='m-0 text-body-s text-text-decorative-grey'>{country}</p>
          )}
        </div>
      )}

      <Button
        type='button'
        surface='secondary'
        size='small'
        iconRight={packageBtnDisabled ? undefined : 'icon-layers'}
        rounded
        fullWidth
        aria-haspopup='dialog'
        aria-expanded={variantsOpen}
        onClick={onVariantsButtonClick}
        disabled={loading || packageBtnDisabled}
      >
        {packaging || t.selectPackaging}
      </Button>

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
        isRestrictedUser
      />
    </article>
  )
}

export { ProductCardRestricted }
