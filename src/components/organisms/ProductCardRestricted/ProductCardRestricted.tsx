import type { Ref } from 'react'
import defaultFallbackImage from '../../../assets/placeholders/defaultFallbackImage.svg'
import { cn } from '../../../lib/cn'
import { DefaultLink } from '../../../lib/link'
import { Heading, type HeadingOrder } from '../../atoms/Heading'
import { Icon } from '../../atoms/Icon'
import { Picture } from '../../atoms/Picture'
import { Placeholder } from '../../atoms/Placeholder'
import { Button } from '../../molecules/Button'
import { IconWithTooltip } from '../../molecules/IconWithTooltip'
import { ProductVariantList } from '../ProductVariantList'
import { TagsList } from '../../molecules/TagsList'
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
 * a vertical card.
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
  handlePackageChange,
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
  const Link = linkComponent ?? DefaultLink
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

  function handleSelectVariant(variantId: string | undefined) {
    const variant = productVariantList?.find(
      (item) => item.variantId === variantId,
    )
    if (variant) handlePackageChange(variant)
  }

  if (variantsOpen && selectedVariantId) {
    return (
      <ProductVariantList
        ref={ref as Ref<HTMLDivElement>}
        className={cn(cardClasses, className)}
        variants={productVariantList ?? []}
        selectedVariantId={selectedVariantId}
        onVariantSelect={(variant) => handleSelectVariant(variant?.variantId)}
        onClose={onCloseVariants}
        sellerOnlyTooltipText={tooltips?.sellerOnly}
        isRestrictedUser
      />
    )
  }

  const thumbnail = (
    <Picture
      {...productImage}
      alt={productImage.alt ?? ''}
      classNamePicture='flex h-full w-full items-center justify-center'
      classNameImg='mx-auto h-full w-full object-contain px-4 py-2'
      fallbackImageUrl={fallbackImageUrl}
    />
  )

  const nameHeading = (
    <Heading
      order={headingLevel}
      noMargin
      align='center'
      className='line-clamp-2 text-h-xs md:text-h-xs'
    >
      {productName}
    </Heading>
  )

  return (
    <article
      ref={ref}
      aria-label={productName}
      aria-busy={loading || undefined}
      className={cn(cardClasses, className)}
    >
      <div className='flex min-h-6 items-center gap-2'>
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
        {loading ? (
          <Placeholder type='tags' noMargin />
        ) : Array.isArray(tags) && tags.length ? (
          <TagsList tags={tags} />
        ) : null}
      </div>

      {loading ? (
        <div className='flex h-2/5 items-center justify-center'>
          <Placeholder type='image' noMargin />
        </div>
      ) : (
        <div className='relative flex h-2/5 items-center justify-center'>
          {productUrl ? (
            <Link
              href={productUrl}
              onClick={onClick}
              aria-hidden
              tabIndex={-1}
              className='flex h-full w-full items-center justify-center'
            >
              {thumbnail}
            </Link>
          ) : (
            thumbnail
          )}
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
    </article>
  )
}

export { ProductCardRestricted }
