import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { IconButton } from '../../molecules/IconButton'
import { Carousel, CarouselItem } from '../Carousel'
import { HorizontalVariant } from '../HorizontalVariant'
import type { ProductVariantListItem } from '../ProductVariantList'

export interface HorizontalVariantsLabels {
  /** Accessible name for the variant radio group and the carousel region. @default 'Choose a variant' */
  legend?: string
  /** Accessible name for the close button. @default 'Close' */
  close?: string
  /** Article-number prefix passed to each variant. @default 'Art no' */
  partNo?: string
  /** Currency suffix passed to each variant. @default 'kr' */
  currency?: string
  /** Sales-unit suffix passed to each variant. @default 'pcs' */
  unit?: string
}

const defaultHorizontalVariantsLabels: Required<HorizontalVariantsLabels> = {
  legend: 'Choose a variant',
  close: 'Close',
  partNo: 'Art no',
  currency: 'kr',
  unit: 'pcs',
}

export interface HorizontalVariantsProps {
  /** Variants to choose from — one native radio group, so every item must share one `productName`. */
  variants: ProductVariantListItem[]
  /** Currently-selected variant id (controlled — drive it from `onVariantSelect`). */
  selectedVariantId: string
  /** Whether the panel is shown; when false the component renders nothing. */
  open: boolean
  /** Fires on selection with the chosen variant and the full list (mirrors the legacy signature). */
  onVariantSelect: (variant: ProductVariantListItem | undefined, variants: ProductVariantListItem[]) => void
  /** Called when the panel requests to close (close button, `Escape`, or an outside pointer press). */
  onClose: () => void
  /** Tooltip text for the "seller only" marker, applied to any variant that sets `sellerOnly`. */
  sellerOnlyTooltipText?: string
  /** Hide the article-number and price rows for restricted users. @default false */
  isRestrictedUser?: boolean
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: HorizontalVariantsLabels
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * A dismissible variant picker laid out as a horizontal carousel (organism). Each slide is a
 * {@link HorizontalVariant} card; together they form ONE native radio group inside a
 * `<fieldset>`/`<legend>` (1.3.1) named by `labels.legend`, so arrow keys move the selection natively
 * (2.1.1). It is a **non-modal** region — it does not trap focus, but `Escape`, an outside pointer
 * press, and a close {@link IconButton} all dismiss it. Rendered only while `open`, so a closed picker
 * leaves the accessibility tree entirely (the legacy panel stayed mounted, translated off-screen).
 * Selection is controlled via `selectedVariantId` + `onVariantSelect`; all copy is overridable via
 * `labels`.
 */
function HorizontalVariants({
  variants,
  selectedVariantId,
  open,
  onVariantSelect,
  onClose,
  sellerOnlyTooltipText,
  isRestrictedUser,
  labels,
  className,
  ref,
}: HorizontalVariantsProps) {
  const t = { ...defaultHorizontalVariantsLabels, ...labels }
  const rootRef = useRef<HTMLDivElement>(null)
  const [selectedId, setSelectedId] = useState(selectedVariantId)

  useEffect(() => {
    setSelectedId(selectedVariantId)
  }, [selectedVariantId])

  useEffect(() => {
    if (!open) return
    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) onClose()
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [open, onClose])

  if (!open) return null

  const handleSelect = (variantId: string) => {
    setSelectedId(variantId)
    onVariantSelect(
      variants.find((variant) => variant.variantId === variantId),
      variants,
    )
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onClose()
    }
  }

  return (
    <div
      ref={mergeRefs<HTMLDivElement>(rootRef, ref)}
      onKeyDown={handleKeyDown}
      className={cn('rounded-2xl bg-surface-default p-2', className)}
    >
      {/* Close sits in its own header row (not absolutely overlaid) so it never covers the first
          variant card's controls. */}
      <div className="mb-1 flex justify-end">
        <IconButton
          type="button"
          icon="icon-x"
          label={t.close}
          size="large"
          onClick={onClose}
          isTransparent
          noBorder
          noPadding
        />
      </div>
      <Carousel
        ariaLabel={t.legend}
        gap="0.25rem"
        breakpoints={{ sm: { perPage: 1 }, md: { perPage: 2, perMove: 2 }, lg: { perPage: 2, perMove: 2 } }}
      >
        {variants.map((variant) => (
          <CarouselItem key={variant.variantId}>
            <HorizontalVariant
              {...variant}
              checked={variant.variantId === selectedId}
              onSelect={handleSelect}
              sellerOnlyTooltipText={sellerOnlyTooltipText}
              isRestrictedUser={isRestrictedUser}
              partNoLabel={t.partNo}
              currencyLabel={t.currency}
              unitLabel={t.unit}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  )
}

export { HorizontalVariants, defaultHorizontalVariantsLabels }
