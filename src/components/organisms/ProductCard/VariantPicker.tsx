import { HorizontalVariants } from '../HorizontalVariants'
import { ProductVariantList, type ProductVariantListItem } from '../ProductVariantList'

export interface VariantPickerProps {
  /**
   * Which variant list fills the overlay: `grid` (vertical / restricted cards) shows the
   * {@link ProductVariantList} radio group; `row` (horizontal card) shows the {@link HorizontalVariants}
   * carousel. Either way the overlay itself is the same slide-up cover.
   */
  display: 'grid' | 'row'
  /** Variants to choose from. */
  variants: ProductVariantListItem[]
  /** Currently-selected variant id (controlled). */
  selectedVariantId: string
  /** Whether the picker is open. */
  open: boolean
  /** Fires on selection with the chosen (narrow) variant — the dispatcher resolves the full one. */
  onVariantSelect: (variant: ProductVariantListItem | undefined) => void
  /** Called when the picker requests to close (close button, `Escape`, or an outside pointer press). */
  onClose: () => void
  /** Tooltip text for the seller-only marker inside the picker. */
  sellerOnlyTooltipText?: string
  /** Hide the article-number / price rows for restricted users. */
  isRestrictedUser?: boolean
}

/**
 * The single variant picker consumed by all three cards. It is an **absolute overlay that covers the
 * whole card and slides up from the bottom** (restoring the legacy `vertical-variants` /
 * `horizontal-variants` panels): the card root is `position: relative` + clips (`overflow-hidden`) while
 * open, so the overlay animates in over the card content rather than replacing it. The slide uses the
 * `animate-slide-up` keyframe — whose resting frame is `translateY(0)` (covering) — gated behind
 * `motion-reduce:animate-none` (2.3.3†), so a reduced-motion user (or a throttled/backgrounded tab) sees
 * it settled and covering, never stuck off-screen. The inner list fills the overlay edge-to-edge (so a
 * pointer press anywhere on the card counts as "inside") and owns dismissal (close button, `Escape`,
 * outside pointer) and the radio-group semantics. Rendered only while `open`.
 */
export function VariantPicker({
  display,
  variants,
  selectedVariantId,
  open,
  onVariantSelect,
  onClose,
  sellerOnlyTooltipText,
  isRestrictedUser,
}: VariantPickerProps) {
  if (!open) return null

  return (
    <div className='absolute inset-0 z-20 bg-white animate-slide-up motion-reduce:animate-none'>
      {display === 'row' ? (
        <HorizontalVariants
          open
          className='h-full w-full rounded-none bg-transparent p-0'
          variants={variants}
          selectedVariantId={selectedVariantId}
          onVariantSelect={onVariantSelect}
          onClose={onClose}
          sellerOnlyTooltipText={sellerOnlyTooltipText}
        />
      ) : (
        <ProductVariantList
          // `px-4` matches the card's own `p-4` content inset — the overlay is `inset-0` (edge to edge),
          // so without it the variant rows sit flush against the card border.
          className='h-full w-full px-4'
          variants={variants}
          selectedVariantId={selectedVariantId}
          onVariantSelect={onVariantSelect}
          onClose={onClose}
          sellerOnlyTooltipText={sellerOnlyTooltipText}
          isRestrictedUser={isRestrictedUser}
        />
      )}
    </div>
  )
}
