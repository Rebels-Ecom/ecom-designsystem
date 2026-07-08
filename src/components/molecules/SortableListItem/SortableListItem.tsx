import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'

export interface SortableListItemProps {
  /**
   * Row content — up to three cells (a wide primary column plus two meta columns) laid out on the
   * row grid. Keep it **non-interactive** (headings/text): the whole row is the click target, so a
   * nested link/button would sit under the overlay and be unreachable.
   */
  children: ReactNode
  /**
   * Accessible name for the row action (what activating the row does / which item it opens). Required
   * whenever `onClick` is set, since the visible content is not the button's label.
   */
  name: string
  /** Row activation handler. When omitted the row is a static, non-interactive layout container. */
  onClick?: () => void
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Clickable list row (molecule) — a rich row (e.g. a heading + metadata) that acts as a single
 * control opening a detail view. When `onClick` is set the whole row is covered by a stretched
 * `<button aria-label={name}>` (2.5.5† — a large target — with a visible `focus-visible` ring),
 * rather than wrapping the content in the button: that keeps the content's own semantics valid
 * (a `<button>` may not contain a heading). A decorative chevron (`aria-hidden`) appears at `lg`,
 * matching the extra grid column. Without `onClick` the row is a plain, non-interactive layout.
 */
function SortableListItem({ children, name, onClick, className, ref }: SortableListItemProps) {
  if (!children) return null

  return (
    <div ref={ref} className={cn('relative w-full text-text-default', className)}>
      <div className="sortable-item-cols grid items-baseline gap-2 lg:items-center">
        {children}
        {onClick && <Icon icon="icon-chevrons-right" className="hidden lg:flex" />}
      </div>
      {onClick && (
        <button
          type="button"
          onClick={onClick}
          aria-label={name}
          className="absolute inset-0 cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
        />
      )}
    </div>
  )
}

export { SortableListItem }
