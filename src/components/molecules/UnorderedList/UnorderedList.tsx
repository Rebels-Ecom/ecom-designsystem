import { Children, type ReactNode, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Loader } from '../../atoms/Loader'

export type UnorderedListSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface UnorderedListProps {
  /** List rows — each is wrapped in an `<li>`. Renders nothing when empty (legacy guard). */
  children: ReactNode
  /** Replace the list with a centred spinner while data loads. @default false */
  loading?: boolean
  /** Draw a hairline divider under every row except the last. @default false */
  withSeparatingLines?: boolean
  /** Vertical padding applied to each row. @default 'md' */
  spacing?: UnorderedListSpacing
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>` wrapper. */
  ref?: Ref<HTMLDivElement>
}

const spacingClasses: Record<UnorderedListSpacing, string> = {
  none: 'py-0',
  xs: 'py-1',
  sm: 'py-2',
  md: 'py-4',
  lg: 'py-6',
  xl: 'py-8',
}

/**
 * Vertical list container (molecule). Renders its children as a semantic `<ul role="list">` of
 * `<li>` rows (1.3.1) in DOM order (1.3.2), with configurable per-row `spacing` and optional
 * hairline separators. `role="list"` is set explicitly because the CSS reset removes list markers,
 * which makes some screen readers drop list semantics. While `loading`, the list is swapped for the
 * `Loader` atom (a `role="status"` live region). Interactive rows keep their own semantics and
 * keyboard behaviour — this container adds none. Renders nothing when there are no children.
 */
function UnorderedList({
  children,
  loading = false,
  withSeparatingLines = false,
  spacing = 'md',
  className,
  ref,
}: UnorderedListProps) {
  const items = Children.toArray(children)
  if (items.length === 0) return null

  return (
    <div ref={ref} className={cn('relative w-full', className)}>
      {loading ? (
        <Loader visible size="sm" position="relative" color="orange" />
      ) : (
        <ul role="list" className="relative w-full list-none">
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                'relative first:pt-0 last:pb-0',
                spacingClasses[spacing],
                withSeparatingLines && 'border-b border-b-grey-300 last:border-b-0',
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { UnorderedList }
