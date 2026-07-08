import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface OrderConfirmationProps {
  /** The confirmation content (heading, status banner, order details, product list, actions). */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Order confirmation panel (organism). A centred content card (capped at the
 * `max-w-order-confirmation` measure) that stacks the confirmation heading, status banner, order
 * details and product list vertically and centred (1.3.2). It is presentational and sets no landmark
 * of its own; the heading and status semantics come from the children (e.g. a `role="status"`
 * MessageBanner).
 */
function OrderConfirmation({ children, className, ref }: OrderConfirmationProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex w-full max-w-order-confirmation flex-col items-center gap-4 bg-background px-6 py-4 md:px-24 md:py-20',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { OrderConfirmation }
