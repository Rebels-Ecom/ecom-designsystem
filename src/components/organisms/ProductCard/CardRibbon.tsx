import type { CSSProperties } from 'react'
import { cn } from '../../../lib/cn'
import { ComponentWithTooltip } from '../../atoms/ComponentWithTooltip'

/**
 * A resolved ribbon: the campaign / limited / out-of-stock banner descriptor each card computes from
 * its product. Campaign ribbons carry a runtime brand colour (consumer ensures ≥4.5:1 against white);
 * limited / out-of-stock use an accessible grey — never the legacy white-on-orange, which fails AA.
 */
export interface RibbonDescriptor {
  /** Ribbon text. */
  text: string
  /** Ribbon colour classes. */
  className: string
  /** Inline background colour (campaign brand colour). */
  style?: CSSProperties
  /** Inline border colour applied to the card (campaign brand colour). */
  borderStyle?: CSSProperties
  /** Border colour class applied to the card. */
  borderClass?: string
  /** Optional descriptive tooltip (out-of-stock only, horizontal card). */
  tooltip?: string
}

export interface CardRibbonProps {
  /** The resolved ribbon, or `null` when there is nothing to show. */
  ribbon: RibbonDescriptor | null
  /** Which card renders it — the row and grid cards style the banner differently. */
  layout: 'horizontal' | 'vertical'
  /** Horizontal card only: reserve less right padding when the remove button is hidden. */
  hideRemoveButton?: boolean
}

/**
 * Renders the campaign / limited / out-of-stock ribbon banner. Presentation is shared here; each card
 * still computes its own {@link RibbonDescriptor} (the descriptor also drives the card's border/style,
 * and the horizontal and vertical guards genuinely differ). Reproduces the previous per-card markup:
 * the horizontal banner supports a descriptive tooltip and remove-button-aware padding; the vertical
 * banner is a truncated top-right badge.
 */
export function CardRibbon({ ribbon, layout, hideRemoveButton }: CardRibbonProps) {
  if (!ribbon) return null

  if (layout === 'vertical') {
    return (
      <span
        style={ribbon.style}
        className={cn(
          'absolute top-0 right-0 z-10 max-w-32 truncate rounded-bl-lg px-2 py-2 text-center font-secondary text-body-s',
          ribbon.className,
        )}
      >
        {ribbon.text}
      </span>
    )
  }

  if (ribbon.tooltip) {
    return (
      <ComponentWithTooltip
        content={ribbon.tooltip}
        wrapperClassName={cn(
          'absolute top-0 right-0 z-10 rounded-bl-lg font-secondary',
          hideRemoveButton ? 'pr-4' : 'pr-12',
        )}
        element={
          <span
            style={ribbon.style}
            className={cn('block rounded-bl-lg py-2 pl-4', ribbon.className)}
          >
            {ribbon.text}
          </span>
        }
      />
    )
  }

  return (
    <span
      style={ribbon.style}
      className={cn(
        'absolute top-0 right-0 z-10 rounded-bl-lg py-2 pl-4 font-secondary',
        hideRemoveButton ? 'pr-4' : 'pr-12',
        ribbon.className,
      )}
    >
      {ribbon.text}
    </span>
  )
}
