import { cn } from '../../../lib/cn'
import { ComponentWithTooltip } from '../../atoms/ComponentWithTooltip'
import { IconButton } from '../../molecules/IconButton'
import type { ProductCardLabels, ProductCardTooltips } from './types'

export interface CardActionsProps {
  /** Icon-button size — the horizontal card uses `medium`, the vertical card `large`. */
  size: 'medium' | 'large'
  /** Article number, forwarded to the action callbacks. */
  partNo: string
  /** Running total, forwarded to the action callbacks. */
  totalPrice?: string
  /** Optional tooltip strings for the actions. */
  tooltips?: ProductCardTooltips
  /** Resolved labels (defaults merged) — the control accessible names. */
  labels: ProductCardLabels
  /** Show the add-to-purchase-list icon. */
  showAddToPurchaseListIcon?: boolean
  /** Fires when the add-to-purchase-list icon is pressed (part number + total). */
  onSaveToPurchaseListClick?: (partNo: string, totalPrice: string) => void
  /** Show the favourite toggle. */
  showFavoriteIcon?: boolean
  /** Fires when the favourite toggle is activated (part number, current state, total). */
  onFavoriteIconClick?: (partNo: string, isFavorite: boolean, totalPrice: string) => void
  /** Whether this product is currently a favourite (drives the icon + colour). */
  isFavorite: boolean
  /** Pulse the favourite icon to signal a pending request. */
  isAddingToFavorites?: boolean
}

/**
 * The favourite + add-to-purchase-list icon actions shared by the horizontal and vertical cards. Each
 * icon-only control carries an explicit accessible name via `label` (4.1.2) with an optional descriptive
 * tooltip. Rendered byte-identically to the previous inline markup; only the icon `size` differs per card.
 */
export function CardActions({
  size,
  partNo,
  totalPrice,
  tooltips,
  labels,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  showFavoriteIcon,
  onFavoriteIconClick,
  isFavorite,
  isAddingToFavorites,
}: CardActionsProps) {
  return (
    <>
      {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
        <ComponentWithTooltip
          content={tooltips?.addToPurchaseList}
          element={
            <IconButton
              type='button'
              icon='icon-file-plus'
              label={tooltips?.addToPurchaseList ?? labels.addToPurchaseList}
              onClick={() => onSaveToPurchaseListClick(partNo, totalPrice ?? '')}
              noBorder
              isTransparent
              size={size}
              noPadding
            />
          }
        />
      )}
      {showFavoriteIcon && onFavoriteIconClick && (
        <ComponentWithTooltip
          content={isFavorite ? tooltips?.removeFromFavorites : tooltips?.addToFavorites}
          element={
            <IconButton
              type='button'
              icon={isFavorite ? 'icon-heart1' : 'icon-heart-o'}
              label={
                isFavorite
                  ? tooltips?.removeFromFavorites ?? labels.removeFromFavorites
                  : tooltips?.addToFavorites ?? labels.addToFavorites
              }
              onClick={() => onFavoriteIconClick(partNo, isFavorite, totalPrice ?? '')}
              noBorder
              isTransparent
              className={cn(isFavorite && 'text-action-tertiary')}
              size={size}
              noPadding
              busy={isAddingToFavorites}
            />
          }
        />
      )}
    </>
  )
}
