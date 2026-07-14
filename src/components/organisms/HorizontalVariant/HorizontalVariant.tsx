import type { ChangeEvent } from 'react'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'
import { Picture } from '../../atoms/Picture'
import { IconWithTooltip } from '../../molecules/IconWithTooltip'
import type { ProductVariantProps } from '../../molecules/ProductVariant'

/**
 * HorizontalVariant shares ProductVariant's data/selection model exactly — the difference is layout
 * (a wide selectable card, not the vertical variant tile). ProductVariant owns the type; this organism
 * imports it so the two stay in lockstep.
 */
export type HorizontalVariantProps = ProductVariantProps

/**
 * Selectable product-variant card in a horizontal layout (organism). Like `ProductVariant`, the whole
 * card is the clickable label of one native radio `<input>` — a single control, never a `<button>`
 * wrapping a radio (the legacy markup nested two interactive elements, which fails axe
 * `nested-interactive`). The radio is visually hidden; selection is conveyed by the radio's programmatic
 * `checked` state **and** a check glyph (not colour alone, 1.4.1), with the card's `focus-visible` ring
 * driven off the hidden input (2.4.7). The radio's accessible name is `variantName` (4.1.2); the
 * thumbnail is decorative. Render sibling variants inside a `<fieldset>`/`<legend>` (1.3.1) so the
 * single-select group is named, and pass a shared `productName` so the radios form one group.
 */
function HorizontalVariant({
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
}: HorizontalVariantProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
    onSelect?.(variantId)
  }

  return (
    <label
      htmlFor={variantId}
      className={cn(
        'relative m-0.5 flex w-full cursor-pointer flex-col justify-center overflow-hidden rounded-2xl border bg-surface-default p-4 text-left font-primary transition-transform',
        'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-action-primary',
        checked ? 'border-tag-green' : 'border-border-grey',
        className,
      )}
    >
      <input
        ref={ref}
        type="radio"
        id={variantId}
        name={`horizontal-variant-${productName}`}
        value={variantId}
        checked={checked}
        onChange={handleChange}
        aria-label={variantName}
        className="sr-only"
      />

      <div className="flex min-h-4 items-center justify-end">
        {sellerOnly &&
          (sellerOnlyTooltipText ? (
            <IconWithTooltip content={sellerOnlyTooltipText} icon="icon-eye" />
          ) : (
            <Icon icon="icon-eye" size="large" label={sellerOnlyLabel} />
          ))}
      </div>

      <div className="flex items-center gap-4 self-stretch">
        <div className="h-28 w-14 shrink-0">
          <Picture
            {...image}
            classNamePicture={cn('h-full', image.classNamePicture)}
            classNameImg={cn('h-full w-full object-contain', image.classNameImg)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-body-s font-bold text-text-default">{variantName}</p>
          {!isRestrictedUser && (
            <>
              <p className="text-body-s text-text-decorative-grey">{`${partNoLabel} ${variantId}`}</p>
              <p className="text-body-s text-text-decorative-purple">{`${priceStr} ${currencyLabel}/${unitLabel}`}</p>
            </>
          )}
        </div>
      </div>

      {checked && (
        <Icon icon="icon-check" size="large" className="absolute bottom-2 right-2 text-tag-green" />
      )}
    </label>
  )
}

export { HorizontalVariant }
