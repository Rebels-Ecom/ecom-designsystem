import { useId, useState } from 'react'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'
import { Picture, type PictureProps } from '../../atoms/Picture'
import { IconButton } from '../../molecules/IconButton'
import { IconWithTooltip } from '../../molecules/IconWithTooltip'
import type { ProductSearchResult } from '../ProductSearch'

export interface ProductSearchResultItemLabels {
  /** Accessible name for the variant disclosure toggle while collapsed. @default 'Show variants' */
  showVariants: string
  /** Accessible name for the variant disclosure toggle while expanded. @default 'Hide variants' */
  hideVariants: string
  /** Accessible name for an add control, built from the product/variant name. @default `Add ${name}` */
  add: (name: string) => string
  /** Accessible name for the seller-only marker when it has no tooltip. @default 'Seller only' */
  sellerOnly: string
}

export const defaultProductSearchResultItemLabels: ProductSearchResultItemLabels = {
  showVariants: 'Show variants',
  hideVariants: 'Hide variants',
  add: (name) => `Add ${name}`,
  sellerOnly: 'Seller only',
}

export interface ProductSearchResultItemProps extends ProductSearchResult {
  /** Fires with the product's `partNo` (or a variant's `variantId`) when its add control is pressed. */
  onSelect: (id: string) => void
  /** Overridable control names (English defaults) for localisation. */
  labels?: Partial<ProductSearchResultItemLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
}

/** One product thumbnail + name row, shared by the product and its variant rows. */
function ResultRow({ name, image }: { name: string; image: PictureProps }) {
  return (
    <div className="flex h-15 min-w-0 flex-1 items-center">
      <div className="relative flex h-full w-12 shrink-0 items-center">
        <Picture
          {...image}
          classNamePicture={cn('h-full', image.classNamePicture)}
          classNameImg={cn('mx-auto block h-full w-8 object-contain py-2 pr-4', image.classNameImg)}
        />
      </div>
      <span className="truncate font-bold text-text-default">{name}</span>
    </div>
  )
}

/** Seller-only marker: a hoverable tooltip when text is supplied, otherwise a named eye icon. */
function SellerMarker({ tooltip, label }: { tooltip?: string; label: string }) {
  return tooltip ? (
    <IconWithTooltip content={tooltip} icon="icon-eye" />
  ) : (
    <Icon icon="icon-eye" size="large" label={label} />
  )
}

/**
 * A single product-search result row (organism). Shows the product thumbnail and name, an optional
 * seller-only marker, and a trailing control: products with multiple variants get a **disclosure
 * toggle** (`aria-expanded`/`aria-controls`, 4.1.2) that reveals a nested variant list next in the
 * focus order (2.4.3); products without variants get an add button. Every trailing control is an
 * icon-only control with an action `aria-label` (4.1.2) — the add label is built from the item name so
 * it is unique in the list. All built-in names default to English and are overridable via `labels`.
 * The result data model (`ProductSearchResult`) is owned by `ProductSearch`, which renders these rows.
 */
function ProductSearchResultItem({
  partNo,
  productName,
  image,
  productVariantList,
  isSeller,
  sellerTooltip,
  onSelect,
  labels,
  className,
}: ProductSearchResultItemProps) {
  const t = { ...defaultProductSearchResultItemLabels, ...labels }
  const [showVariants, setShowVariants] = useState(false)
  const variantsId = useId()
  const hasVariants = (productVariantList?.length ?? 0) > 1

  return (
    <div className={cn('font-primary', className)}>
      <div className="flex h-16 items-center gap-2">
        <ResultRow name={productName} image={image} />
        {isSeller && <SellerMarker tooltip={sellerTooltip} label={t.sellerOnly} />}
        {hasVariants ? (
          <button
            type="button"
            aria-expanded={showVariants}
            aria-controls={variantsId}
            aria-label={showVariants ? t.hideVariants : t.showVariants}
            onClick={() => setShowVariants((open) => !open)}
            className={cn(
              'inline-flex size-11 shrink-0 cursor-pointer items-center justify-center bg-transparent text-text-default',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
            )}
          >
            <Icon icon={showVariants ? 'icon-chevron-up' : 'icon-chevron-down'} />
          </button>
        ) : (
          <IconButton
            type="button"
            icon="icon-plus"
            label={t.add(productName)}
            onClick={() => onSelect(partNo)}
            size="large"
            isTransparent
            noBorder
            noPadding
          />
        )}
      </div>

      {showVariants && hasVariants && (
        <ul id={variantsId} className="m-0 list-none p-0">
          {productVariantList?.map((variant) => (
            <li key={variant.variantId} className="flex h-16 items-center gap-2">
              <ResultRow name={variant.variantName} image={variant.image} />
              <div className="flex items-center gap-2">
                {variant.sellerOnly && (
                  <SellerMarker tooltip={variant.sellerOnlyTooltipText} label={t.sellerOnly} />
                )}
                <IconButton
                  type="button"
                  icon="icon-plus"
                  label={t.add(variant.variantName)}
                  onClick={() => onSelect(variant.variantId)}
                  size="large"
                  isTransparent
                  noBorder
                  noPadding
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { ProductSearchResultItem }
