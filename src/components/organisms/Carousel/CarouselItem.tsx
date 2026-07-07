import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface CarouselItemProps {
  /** The slide's content. */
  children: ReactNode
  /** Extra classes, merged onto the slide `<div>` via `cn()`. */
  className?: string
  /** Forwarded to the slide `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * A single carousel slide. Presentational (no role, preserves DOM order — 1.3.1/1.3.2): it applies
 * the responsive `carousel-slide` width (driven by the parent `Carousel`'s per-breakpoint custom
 * properties) plus the scroll-snap alignment. Always render slides through this so they size and
 * snap consistently.
 */
function CarouselItem({ children, className, ref }: CarouselItemProps) {
  return (
    <div ref={ref} className={cn('carousel-slide flex min-w-0 shrink-0 snap-start', className)}>
      {children}
    </div>
  )
}

export { CarouselItem }
