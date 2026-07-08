import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface CartDeliveryDetailsProps {
  /** The delivery-step content (heading, form, terms, submit button). */
  children: ReactNode
  /** Dim the panel behind a scrim and lock its content while the order is submitting. @default false */
  loading?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Delivery-step panel (organism). A presentational container for the cart's delivery form that can
 * enter a busy state: while `loading` it lays a decorative scrim (`aria-hidden`) over the content,
 * marks the region `aria-busy` so assistive tech announces the update (4.1.3), and sets the content
 * `inert` so the dimmed controls are genuinely non-interactive rather than merely greyed out — the
 * legacy overlay left them focusable underneath. It carries no landmark of its own (1.3.1); the
 * heading/form structure comes from the children.
 */
function CartDeliveryDetails({ children, loading = false, className, ref }: CartDeliveryDetailsProps) {
  return (
    <div ref={ref} aria-busy={loading || undefined} className={cn('relative p-0 lg:p-4', className)}>
      {loading && <div aria-hidden="true" className="absolute inset-0 z-4 bg-surface-overlay/80" />}
      <div inert={loading} className="m-auto flex w-full flex-col gap-8">
        {children}
      </div>
    </div>
  )
}

export { CartDeliveryDetails }
