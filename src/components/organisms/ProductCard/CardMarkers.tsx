import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'
import { Placeholder } from '../../atoms/Placeholder'
import type { TagProps } from '../../atoms/Tag'
import { IconWithTooltip } from '../../molecules/IconWithTooltip'
import { TagsList } from '../../molecules/TagsList'
import type { ProductCardLabels, ProductCardTooltips } from './types'

export interface CardMarkersProps {
  /** Full container classes (each card sets its own min-height + spacing). */
  className: string
  /** Show the seller-only marker (an eye glyph). */
  sellerOnly?: boolean
  /** Show the accessory-pot marker (an "S" badge). */
  isAccessoryPotItem?: boolean
  /** Decorative status tags (already sliced by the caller when a campaign is active). */
  tags?: TagProps[]
  /** Optional tooltip strings for the markers. */
  tooltips?: ProductCardTooltips
  /** Resolved labels (defaults merged) — supplies the marker accessible names. */
  labels: ProductCardLabels
  /** Show the tags loading placeholder instead of the tags. @default false */
  loading?: boolean
}

/**
 * Status-marker row shared by the three product cards: the seller-only / accessory-pot graphics (named
 * `role="img"`, never colour-only, 1.4.1) followed by the decorative tag list. Rendered byte-identically
 * to the previous inline markup in each card — only the container `className` and (for the vertical /
 * restricted cards) the `loading` placeholder differ, both passed in.
 */
export function CardMarkers({
  className,
  sellerOnly,
  isAccessoryPotItem,
  tags,
  tooltips,
  labels,
  loading = false,
}: CardMarkersProps) {
  return (
    <div className={cn(className)}>
      {sellerOnly &&
        (tooltips?.sellerOnly ? (
          <IconWithTooltip content={tooltips.sellerOnly} icon='icon-eye' />
        ) : (
          <Icon icon='icon-eye' size='large' label={labels.sellerOnly} />
        ))}
      {isAccessoryPotItem &&
        (tooltips?.accessoryPotItem ? (
          <IconWithTooltip content={tooltips.accessoryPotItem} text='S' />
        ) : (
          <span
            role='img'
            aria-label={labels.accessoryPotItem}
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
  )
}
