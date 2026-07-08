import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface OrderConfirmationPageProps {
  /** The centred confirmation card (typically an `OrderConfirmation`). */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Order confirmation page shell (organism). A centred layout on the brand-blue backdrop that holds
 * the confirmation card. It is presentational: it centres and pads its child and preserves DOM order
 * (1.3.1/1.3.2), but sets no landmark — the consumer's app shell owns `<main>`, and the heading/status
 * semantics come from the card placed inside.
 */
function OrderConfirmationPage({ children, className, ref }: OrderConfirmationPageProps) {
  return (
    <div ref={ref} className={cn('flex w-full items-center justify-center bg-blue-500 p-4', className)}>
      {children}
    </div>
  )
}

export { OrderConfirmationPage }
