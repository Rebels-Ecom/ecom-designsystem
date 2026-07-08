import { Children, type ReactNode, type Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface CartProductListProps {
  /** Cart product rows — each is wrapped in an `<li>`. Renders nothing when empty (legacy guard). */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<ul>`. */
  ref?: Ref<HTMLUListElement>
}

/**
 * Cart product list (organism). Wraps its children in a semantic `<ul role="list">` of `<li>` rows
 * (1.3.1) in DOM order (1.3.2) — restoring the list semantics the legacy component named but never
 * rendered (its `.list`/`.listItem` CSS was dead code). `role="list"` is explicit because the reset
 * strips list markers, which makes some screen readers drop list semantics. Renders nothing when
 * empty; each child (a cart product row) keeps its own semantics and controls.
 */
function CartProductList({ children, className, ref }: CartProductListProps) {
  const items = Children.toArray(children)
  if (items.length === 0) return null

  return (
    <ul
      ref={ref}
      role="list"
      className={cn('flex w-full list-none flex-col justify-center gap-4', className)}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export { CartProductList }
