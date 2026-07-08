import { Children, useEffect, useRef, useState } from 'react'
import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Loader } from '../../atoms/Loader'

export interface ScrollableListProps {
  /** Items to render — each is wrapped in an `<li>`. */
  children: ReactNode
  /** Show a spinner instead of the list while data loads. @default false */
  loading?: boolean
  /**
   * Cap the visible height to roughly this many items (measured from the first item), turning the
   * list into an internal scroll region. Omit to render every item at full height.
   */
  visibleItemsNumber?: number
  /** Accessible name for the scroll region (2.1.1 / 4.1.2). @default 'Scrollable list' */
  ariaLabel?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Height-capped scroll list (molecule). Renders a real `<ul role="list">` (1.3.1); when
 * `visibleItemsNumber` is set it caps the height to that many items and the list becomes an internal
 * scroll region. That region is keyboard-operable and named: it is focusable (`tabIndex={0}`, so
 * arrow/Page keys scroll it — 2.1.1, satisfying axe `scrollable-region-focusable`) with an
 * `aria-label`, and shows a visible `focus-visible` ring. While `loading` it renders the `Loader`
 * atom (a `role="status"` live region). Consumers pass a descriptive `ariaLabel` for the region.
 */
function ScrollableList({
  children,
  loading = false,
  visibleItemsNumber,
  ariaLabel = 'Scrollable list',
  className,
  ref,
}: ScrollableListProps) {
  const listRef = useRef<HTMLUListElement>(null)
  const [itemHeight, setItemHeight] = useState(0)
  const items = Children.toArray(children)

  useEffect(() => {
    const first = listRef.current?.firstElementChild as HTMLElement | null
    if (first) setItemHeight(first.clientHeight)
  }, [children])

  if (!items.length) return null

  const maxHeight = visibleItemsNumber && itemHeight ? itemHeight * visibleItemsNumber : undefined

  return (
    <div ref={ref} className={cn('relative', className)}>
      {loading ? (
        <Loader visible size="sm" position="relative" color="orange" />
      ) : (
        <ul
          ref={listRef}
          role="list"
          tabIndex={0}
          aria-label={ariaLabel}
          style={{ maxHeight }}
          className="m-0 list-none overflow-y-auto p-0 pr-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="relative border-b border-b-grey-300 py-4 last:border-b-0"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { ScrollableList }
