import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export type ContentMaxWidth = 'narrow' | 'wide' | 'text'

export interface MaxWidthProps {
  /** Content to constrain and centre. */
  children: ReactNode
  /**
   * Max-width preset: `narrow` (73rem), `wide` (103rem), or `text` (52rem, a comfortable measure
   * for long-form reading).
   */
  contentMaxWidth: ContentMaxWidth
  /** Remove the default 1rem horizontal padding. */
  noPadding?: boolean
  /** Remove the default `auto` horizontal centring margin. */
  noMargin?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const maxWidthClasses: Record<ContentMaxWidth, string> = {
  narrow: 'max-w-content-narrow',
  wide: 'max-w-content-wide',
  text: 'max-w-content-text',
}

/**
 * Max-width layout container (atom): full-width up to a preset cap, centred with `mx-auto`. Renders
 * a presentational `<div>` with no role or semantics (1.3.1) — it only constrains line length /
 * content width, so wrap it around content that supplies its own structure. `noPadding` and
 * `noMargin` drop the default gutters/centring for nesting inside another constrained layout.
 */
function MaxWidth({ children, contentMaxWidth, noPadding, noMargin, className, ref }: MaxWidthProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'mx-auto w-full px-4',
        maxWidthClasses[contentMaxWidth],
        noPadding && 'px-0',
        noMargin && 'mx-0',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { MaxWidth }
