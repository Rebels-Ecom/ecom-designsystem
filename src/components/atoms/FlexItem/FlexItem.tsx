import type { CSSProperties, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

/** Per-breakpoint `flex` shorthand values (e.g. `'1'`, `'2'`, `'1 0 auto'`). */
export interface FlexItemFlex {
  /** `flex` from the smallest viewport up. @default '1' */
  sm?: string
  /** `flex` from the `md` breakpoint (48rem) up. @default '1' */
  md?: string
  /** `flex` from the `lg` breakpoint (64rem) up. @default '1' */
  lg?: string
}

/** Inline style carrying the three responsive `flex` custom properties. */
interface FlexItemStyle extends CSSProperties {
  '--flex-sm': string
  '--flex-md': string
  '--flex-lg': string
}

export interface FlexItemProps {
  /**
   * Responsive `flex` shorthand, one value per breakpoint; each defaults to `'1'`. Applied as
   * inline CSS custom properties consumed by the `flex-responsive` utility, because a runtime
   * value can't be a build-time Tailwind class.
   */
  flex?: FlexItemFlex
  /** Items to lay out. */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Responsive flex-child primitive (atom). Renders a presentational `<div>` that sets its own
 * `flex` shorthand per breakpoint — place it inside a flex parent (e.g. `FlexContainer`) to control
 * how each child grows/shrinks at `sm`/`md`/`lg`. It carries no role or semantics (1.3.1) and
 * preserves DOM order (1.3.2), so it never disturbs the accessibility tree of its content.
 */
function FlexItem({ flex, children, className, ref }: FlexItemProps) {
  const style: FlexItemStyle = {
    '--flex-sm': flex?.sm ?? '1',
    '--flex-md': flex?.md ?? '1',
    '--flex-lg': flex?.lg ?? '1',
  }

  return (
    <div ref={ref} style={style} className={cn('flex-responsive', className)}>
      {children}
    </div>
  )
}

export { FlexItem }
