import type { Ref } from 'react'
import { cn } from '../../../lib/cn'

export type OrderConfirmationPadding = 'sm' | 'md' | 'lg'

export interface OrderConfirmationItem {
  /** Row label (the term). */
  label: string
  /** Row value (the description). */
  value: string
  /** Renders the value large + bold as the summary total. @default false */
  isTotal?: boolean
}

export interface OrderConfirmationDetailsProps {
  /** Label→value rows, rendered as a description list. */
  detailItems: OrderConfirmationItem[]
  /** Optional bold group title above the list. */
  label?: string
  /** Fill with the highlight (cream) background. @default false */
  withBackground?: boolean
  /** Draw a rounded hairline border. @default false */
  withBorder?: boolean
  /** Horizontal padding step at `md`+. @default 'md' */
  padding?: OrderConfirmationPadding
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const paddingClasses: Record<OrderConfirmationPadding, string> = {
  sm: 'md:px-4',
  md: 'md:px-12',
  lg: 'md:px-16',
}

/**
 * An order-summary details panel (molecule): an optional title over a list of label→value rows. The
 * rows are a real description list (`<dl>`/`<dt>`/`<dd>`), so assistive tech announces each value against
 * its term (1.3.1) — the legacy markup used generic `<p><span>` pairs with no term/description
 * relationship. An `isTotal` row renders its value large and bold as the summary figure. Purely
 * presentational otherwise; content comes from `detailItems`.
 */
function OrderConfirmationDetails({
  detailItems,
  label,
  withBackground,
  withBorder,
  padding = 'md',
  className,
  ref,
}: OrderConfirmationDetailsProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex w-full flex-col p-4 text-body md:py-2',
        paddingClasses[padding],
        withBackground && 'bg-surface-cream',
        withBorder && 'rounded border border-border-grey',
        className,
      )}
    >
      {label && <p className="my-wrapper-xs flex justify-between font-bold">{label}</p>}
      <dl className="m-0">
        {detailItems.map((item, index) => (
          <div key={`${item.label}-${index}`} className="my-wrapper-xs flex justify-between">
            <dt>{item.label}</dt>
            {/* `leading-5` keeps the big total on the compact body line-box (legacy inherited the
                1.25rem `.body` line-height), so the total row doesn't inflate its neighbours' spacing. */}
            <dd className={cn('m-0', item.isTotal && 'text-h-l font-bold leading-5')}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export { OrderConfirmationDetails }
