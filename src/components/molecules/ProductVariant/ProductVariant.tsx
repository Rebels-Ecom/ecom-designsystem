import type { ChangeEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'
import { Picture, type PictureProps } from '../../atoms/Picture'
import { RadioButton } from '../../atoms/RadioButton'
import { IconWithTooltip } from '../IconWithTooltip'

export interface ProductVariantProps {
  /** Product this variant belongs to — used only to build the radio group `name`. */
  productName: string
  /** Variant display name (e.g. "50cl Returglas") — the radio's accessible name. */
  variantName: string
  /** Variant id — the radio `id`/`value` and the article number shown in the meta row. */
  variantId: string
  /** Pre-formatted price string (e.g. "22,68"). */
  priceStr: string
  /** Product image props (forwarded to `Picture`); the thumbnail is decorative by default. */
  image: PictureProps
  /** Controlled selected state — drive it from `onChange`. */
  checked: boolean
  /** Fires when this variant is selected (native radio change event). */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** Also fires on selection, with the `variantId` (mirrors the legacy `onClick`). */
  onSelect?: (variantId: string) => void
  /** Localised prefix for the article-number line (e.g. "Art no"). */
  partNoLabel: string
  /** Localised currency suffix (e.g. "kr"). */
  currencyLabel: string
  /** Localised sales-unit suffix (e.g. "st"). */
  unitLabel: string
  /** Show the "seller only" marker. @default false */
  sellerOnly?: boolean
  /** Tooltip text for the seller-only marker; when set, the marker becomes a hoverable tooltip. */
  sellerOnlyTooltipText?: string
  /** Accessible name for the seller-only marker when it has no tooltip. @default 'Seller only' */
  sellerOnlyLabel?: string
  /** Hide the article-number and price rows (restricted users). @default false */
  isRestrictedUser?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying radio `<input>`. */
  ref?: Ref<HTMLInputElement>
}

/**
 * Selectable product-variant card (molecule). The whole card is the clickable label of a single
 * native radio `<input>` — one interactive control, not a button wrapping a radio (the legacy markup
 * nested two controls, which is invalid and fails axe `nested-interactive`). Selecting fires
 * `onChange` (and `onSelect`); the radio's accessible name is `variantName` (4.1.2) and it shows the
 * standard `focus-visible` ring (2.4.7). The thumbnail is decorative (empty `alt`) since the name is
 * adjacent text. Render sibling variants inside a `<fieldset>`/`<legend>` (1.3.1) so the group is named.
 */
function ProductVariant({
  productName,
  variantName,
  variantId,
  priceStr,
  image,
  checked,
  onChange,
  onSelect,
  partNoLabel,
  currencyLabel,
  unitLabel,
  sellerOnly,
  sellerOnlyTooltipText,
  sellerOnlyLabel = 'Seller only',
  isRestrictedUser,
  className,
  ref,
}: ProductVariantProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
    onSelect?.(variantId)
  }

  return (
    <label
      htmlFor={variantId}
      className={cn(
        'relative flex w-full cursor-pointer flex-col items-center text-left font-primary',
        className,
      )}
    >
      <div className="flex min-h-5 w-full shrink-0 items-center justify-end gap-2 pr-4 md:pr-0">
        {sellerOnly &&
          (sellerOnlyTooltipText ? (
            <IconWithTooltip content={sellerOnlyTooltipText} icon="icon-eye" />
          ) : (
            <Icon icon="icon-eye" size="large" label={sellerOnlyLabel} />
          ))}
        <RadioButton
          ref={ref}
          id={variantId}
          name={`variant-radio-${productName}`}
          value={variantId}
          checked={checked}
          onChange={handleChange}
          ariaLabel={variantName}
        />
      </div>

      <div className="flex w-full min-h-0 flex-1 items-center">
        <div className="flex h-32 max-h-full w-1/4 items-center justify-center">
          <Picture
            {...image}
            classNamePicture={cn('h-full w-full', image.classNamePicture)}
            classNameImg={cn('h-full w-full object-contain p-2', image.classNameImg)}
          />
        </div>
        <div className="w-3/5">
          <p className="mb-2 text-body-s font-bold text-text-default">{variantName}</p>
          {!isRestrictedUser && (
            <>
              <p className="mb-1 text-body-s text-text-decorative-grey">{`${partNoLabel} ${variantId}`}</p>
              <p className="text-body-s text-text-decorative-purple">{`${priceStr} ${currencyLabel}/${unitLabel}`}</p>
            </>
          )}
        </div>
      </div>
    </label>
  )
}

export { ProductVariant }
