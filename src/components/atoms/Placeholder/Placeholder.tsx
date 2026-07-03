import type { Ref } from 'react'
import { cn } from '../../../lib/cn'

export type PlaceholderType = 'image' | 'tags' | 'heading' | 'p_long' | 'p_short'

export interface PlaceholderProps {
  /** Skeleton shape/size preset matching the content it stands in for. @default 'heading' */
  type?: PlaceholderType
  /** Drop the bottom margin when stacking is handled by the parent. */
  noMargin?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const typeClasses: Record<PlaceholderType, string> = {
  image: 'h-full w-full',
  tags: 'relative h-6 w-11/12',
  heading: 'relative h-5 w-11/12',
  p_long: 'h-3.5 w-4/5',
  p_short: 'h-3.5 w-1/5',
}

/**
 * Shimmering skeleton block shown while real content loads. Purely decorative, so it is
 * hidden from assistive tech (`aria-hidden`) — the loading state itself should be
 * announced elsewhere (e.g. a `role="status"` region). The shimmer is suppressed under
 * `prefers-reduced-motion` (2.3.3†).
 */
function Placeholder({ type = 'heading', noMargin, className, ref }: PlaceholderProps) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'skeleton-shimmer animate-shimmer motion-reduce:animate-none',
        typeClasses[type],
        type !== 'image' && !noMargin && 'mb-2.5',
        className,
      )}
    />
  )
}

export { Placeholder }
