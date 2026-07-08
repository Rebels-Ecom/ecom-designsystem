import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface CartProps {
  /** The two cart columns — the first fills 60% at desktop, the second 40%. */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Cart page layout (organism). A presentational two-column shell: the columns stack on small
 * screens and split 60/40 at `lg` (delivery column left, order summary right). It sets no role or
 * landmark (1.3.1) and preserves DOM/reading order (1.3.2); landmarks and headings come from the
 * children placed inside it.
 */
function Cart({ children, className, ref }: CartProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex w-full flex-col gap-4 lg:flex-row',
        '[&>*:first-child]:lg:w-3/5 [&>*:nth-child(2)]:lg:w-2/5',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { Cart }
