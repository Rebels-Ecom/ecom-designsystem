import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface CartOrderDetailsProps {
  /** The order-summary content (headings, action buttons, product list). */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Order-summary panel (organism).
 *
 * @deprecated Retained for parity with the legacy cart. Prefer composing the order summary directly.
 *
 * A presentational white surface that stacks its children vertically in DOM order (1.3.1/1.3.2). It
 * carries no landmark of its own; the heading and product-list structure comes from the children.
 */
function CartOrderDetails({ children, className, ref }: CartOrderDetailsProps) {
  return (
    <div ref={ref} className={cn('flex flex-col gap-8 bg-surface-default', className)}>
      {children}
    </div>
  )
}

export { CartOrderDetails }
