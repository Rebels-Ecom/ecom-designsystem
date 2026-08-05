import { useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { IconButton } from '../../molecules/IconButton'
import { ProductVariant, type ProductVariantProps } from '../../molecules/ProductVariant'

/**
 * One selectable variant — the content half of {@link ProductVariantProps}. The list owns the
 * selection state (`checked`/`onChange`/`onSelect`) and injects the shared localised labels
 * (`partNoLabel`/`currencyLabel`/`unitLabel`) + the restricted-user flag, so those are omitted here.
 */
export type ProductVariantListItem = Pick<
  ProductVariantProps,
  'productName' | 'variantName' | 'variantId' | 'priceStr' | 'image' | 'sellerOnly' | 'sellerOnlyLabel'
>

export interface ProductVariantListLabels {
  /** Accessible name for the close button. @default 'Close' */
  close: string
  /** Accessible name for the variant radio group (visually hidden `<legend>`). @default 'Choose a variant' */
  legend: string
  /** Accessible name for the scroll-to-bottom button. @default 'Show more variants' */
  scrollForMore: string
  /** Accessible name for the scroll-to-top button. @default 'Back to top' */
  scrollBack: string
  /** Article-number prefix passed to each variant (e.g. "Art no"). @default 'Art no' */
  partNo: string
  /** Currency suffix passed to each variant (e.g. "kr"). @default 'kr' */
  currency: string
  /** Sales-unit suffix passed to each variant (e.g. "st"). @default 'pcs' */
  unit: string
}

const defaultProductVariantListLabels: ProductVariantListLabels = {
  close: 'Close',
  legend: 'Choose a variant',
  scrollForMore: 'Show more variants',
  scrollBack: 'Back to top',
  partNo: 'Art no',
  currency: 'kr',
  unit: 'pcs',
}

export interface ProductVariantListProps {
  /** Variants to list, in order. */
  variants: ProductVariantListItem[]
  /** Currently-selected variant id (controlled — drive it from `onVariantSelect`). */
  selectedVariantId: string
  /** Fires on selection with the chosen variant and the full list (mirrors the legacy signature). */
  onVariantSelect: (
    variant: ProductVariantListItem | undefined,
    variants: ProductVariantListItem[],
  ) => void
  /** Called when the list requests to close (close button, `Escape`, or an outside click). */
  onClose: () => void
  /** Tooltip text for the "seller only" marker, applied to every variant that sets `sellerOnly`. */
  sellerOnlyTooltipText?: string
  /** Hide the article-number and price rows for restricted users. @default false */
  isRestrictedUser?: boolean
  /** Hide the scroll-to-more affordance even when the list overflows. @default false */
  hideScrollButton?: boolean
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<ProductVariantListLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Selectable list of product variants (organism) composing {@link ProductVariant}. The variants form
 * a single native radio group inside a `<fieldset>` named by a visually-hidden `<legend>` (1.3.1) —
 * so arrow keys move the selection natively (2.1.1) and the group is announced to AT. A close
 * {@link IconButton} dismisses it; it is a non-modal, dismissible region (not a focus-trapping
 * dialog), so `Escape` and an outside pointer press also close it, but focus is not trapped. When the
 * list overflows a single scroll-toggle button (a real `<button>`, `aria-label` from `labels`) jumps
 * to the bottom/top — a pointer convenience layered on top of the always-available keyboard radio
 * navigation; the legacy two-swapping-Framer-buttons are collapsed into this one toggle. The
 * scrollable list needs no `tabindex` because its radios are focusable descendants (axe
 * `scrollable-region-focusable`). Selection is controlled via `selectedVariantId` + `onVariantSelect`.
 */
function ProductVariantList({
  variants,
  selectedVariantId,
  onVariantSelect,
  onClose,
  sellerOnlyTooltipText,
  isRestrictedUser,
  hideScrollButton = false,
  labels,
  className,
  ref,
}: ProductVariantListProps) {
  const t = { ...defaultProductVariantListLabels, ...labels }
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const legendId = useId()
  const [selectedId, setSelectedId] = useState(selectedVariantId)
  const [atBottom, setAtBottom] = useState(false)

  // Keep internal selection in sync when the controlled prop changes.
  useEffect(() => {
    setSelectedId(selectedVariantId)
  }, [selectedVariantId])

  // Close on an outside pointer press (non-modal dismiss; the legacy `useOnClickOutside`, inlined).
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [onClose])

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

  const updateAtBottom = () => {
    const el = listRef.current
    if (!el) return
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 20)
  }

  const toggleScroll = () => {
    const el = listRef.current
    if (!el) return
    const top = atBottom ? 0 : el.scrollHeight
    el.scrollTo({ top, behavior: 'smooth' })
  }

  const showScrollButton = variants.length > 2 && !hideScrollButton

  return (
    <div
      ref={mergeRefs<HTMLDivElement>(rootRef, ref)}
      onKeyDown={handleKeyDown}
      className={cn('relative', className)}
    >
      <IconButton
        type="button"
        icon="icon-x"
        label={t.close}
        size="large"
        onClick={onClose}
        isTransparent
        noBorder
        noPadding
        className="absolute top-2 left-2 z-10"
      />

      <fieldset className="m-0 border-0 p-0">
        <legend id={legendId} className="sr-only">
          {t.legend}
        </legend>
        <ul
          ref={listRef}
          onScroll={updateAtBottom}
          className="scrollbar-none m-0 flex max-h-96 list-none flex-col gap-4 overflow-y-auto p-0 pt-8"
        >
          {variants.map((variant) => (
            <li
              key={variant.variantId}
              className="border-b border-border-orange pb-4 last:border-b-0 last:pb-0"
            >
              <ProductVariant
                {...variant}
                checked={variant.variantId === selectedId}
                onSelect={handleSelect}
                sellerOnlyTooltipText={sellerOnlyTooltipText}
                isRestrictedUser={isRestrictedUser}
                partNoLabel={t.partNo}
                currencyLabel={t.currency}
                unitLabel={t.unit}
              />
            </li>
          ))}
        </ul>
      </fieldset>

      {showScrollButton && (
        <div className="sticky bottom-0 flex justify-center bg-surface-default/95 py-2">
          <IconButton
            type="button"
            icon={atBottom ? 'icon-chevron-up' : 'icon-chevron-down'}
            label={atBottom ? t.scrollBack : t.scrollForMore}
            size="small"
            onClick={toggleScroll}
            round
            surface="white"
          />
        </div>
      )}
    </div>
  )
}

export { ProductVariantList }
