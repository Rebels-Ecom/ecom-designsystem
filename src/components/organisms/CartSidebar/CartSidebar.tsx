import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface CartSidebarProps {
  /** The sidebar contents (heading, totals, action buttons, product list). */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Cart sidebar (organism). A presentational vertical stack on a white surface for the cart's
 * contents — typically rendered inside a drawer. It sets no role or landmark (1.3.1) and preserves
 * DOM/reading order (1.3.2); the heading, actions and product list come from the children. (Legacy's
 * non-idiomatic `classNames` string-array prop is replaced by the standard `className`, merged via
 * `cn()`.)
 */
function CartSidebar({ children, className, ref }: CartSidebarProps) {
  return (
    <div ref={ref} className={cn('flex flex-col gap-8 bg-surface-default py-4 lg:py-0', className)}>
      {children}
    </div>
  )
}

export { CartSidebar }
