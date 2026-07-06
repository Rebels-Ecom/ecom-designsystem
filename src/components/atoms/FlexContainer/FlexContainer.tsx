import type { CSSProperties, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export type FlexDirection = 'row' | 'column'
export type FlexAlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch'
export type FlexJustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between'

export interface FlexContainerProps {
  /**
   * Main-axis direction.
   * @default 'row'
   */
  flexDirection?: FlexDirection
  /**
   * `flex` shorthand, e.g. `'1'` or `'1 0 auto'`. Applied inline (runtime value).
   * @default '1'
   */
  flex?: string
  /**
   * Gap between children, in `rem`. Applied inline (runtime value).
   * @default 1
   */
  gap?: number
  /**
   * Allow children to wrap onto multiple lines.
   * @default false
   */
  wrap?: boolean
  /**
   * Cross-axis alignment (`align-items`).
   * @default 'flex-start'
   */
  alignItems?: FlexAlignItems
  /**
   * Main-axis distribution (`justify-content`).
   * @default 'flex-start'
   */
  justifyContent?: FlexJustifyContent
  /** Apply `align-self: stretch` so the container fills its own flex parent's cross axis. */
  stretch?: boolean
  /**
   * Minimum height, in `rem`. Applied inline (runtime value).
   * @default 0
   */
  minHeight?: number
  /** Items to lay out. */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const directionClasses: Record<FlexDirection, string> = {
  row: 'flex-row',
  column: 'flex-col',
}

const alignItemsClasses: Record<FlexAlignItems, string> = {
  'flex-start': 'items-start',
  center: 'items-center',
  'flex-end': 'items-end',
  stretch: 'items-stretch',
}

const justifyContentClasses: Record<FlexJustifyContent, string> = {
  'flex-start': 'justify-start',
  center: 'justify-center',
  'flex-end': 'justify-end',
  'space-between': 'justify-between',
}

/**
 * Flexbox layout primitive (atom). Renders a presentational `<div>` with `display: flex` — it
 * carries no role or semantics (1.3.1), so it never disturbs the accessibility tree of the content
 * it lays out; DOM order (which drives both reading and tab order) is preserved, so avoid reversing
 * it visually in a way that breaks the logical sequence (1.3.2). Enum props (direction, alignment,
 * justification, wrap, stretch) map to Tailwind utilities; the free-form numeric/string knobs
 * (`flex`, `gap`, `minHeight`) are applied inline as runtime values.
 */
function FlexContainer({
  flexDirection = 'row',
  flex = '1',
  gap = 1,
  wrap,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  stretch,
  minHeight = 0,
  children,
  className,
  ref,
}: FlexContainerProps) {
  const style: CSSProperties = {
    flex,
    gap: `${gap}rem`,
    minHeight: `${minHeight}rem`,
  }

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        'flex',
        directionClasses[flexDirection],
        alignItemsClasses[alignItems],
        justifyContentClasses[justifyContent],
        wrap && 'flex-wrap',
        stretch && 'self-stretch',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { FlexContainer }
