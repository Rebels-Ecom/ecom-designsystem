import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { LoadingBar, type LoadingBarProps } from '../../atoms/LoadingBar'

export interface LoadingBarsProps {
  /** The bars to render, top to bottom. Each is a self-labelled `role="meter"` (see {@link LoadingBar}). */
  loadingBars: LoadingBarProps[]
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Vertical stack of {@link LoadingBar} meters (molecule) — e.g. a beer's taste profile
 * (bitterness, sweetness…). Purely a layout wrapper: each child bar already exposes its own
 * `role="meter"` + accessible name and honours `prefers-reduced-motion`, so the group needs no
 * extra role. The stack is static (never reordered), so bars are keyed by position.
 */
function LoadingBars({ loadingBars, className, ref }: LoadingBarsProps) {
  return (
    <div ref={ref} className={cn('relative flex h-full flex-col gap-4', className)}>
      {loadingBars.map((bar, index) => (
        <LoadingBar key={`${bar.name}-${index}`} {...bar} />
      ))}
    </div>
  )
}

export { LoadingBars }
