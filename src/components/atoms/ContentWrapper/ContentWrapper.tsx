import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface ContentWrapperProps {
  /** Optional id forwarded to the wrapper element. */
  id?: string
  /**
   * Padding in `rem`. A single number applies to all sides (`1` → `1rem`); an array maps to the CSS
   * shorthand (`[1, 0]` → `1rem 0`, `[1, 0, 0, 1]` → top/right/bottom/left). Applied inline because
   * it is a runtime value. Omit to keep the responsive default padding.
   * @default undefined
   */
  padding?: number | number[]
  /** Content to constrain and centre. */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

function toPaddingValue(padding: ContentWrapperProps['padding']): string | undefined {
  if (padding === undefined) return undefined
  if (typeof padding === 'number') return `${padding}rem`
  return padding.map((p) => `${p}rem`).join(' ')
}

/**
 * Responsive content container (atom): full-width and centred (`mx-auto`), with side gutters that
 * grow at `md` (2rem fluid gutters via `max-w-container-content-fluid`) and a hard max-width cap at
 * `3xl` (`--container-content-lg`). Renders a presentational `<div>` — it carries no role or
 * semantics (1.3.1), so wrap it around content that provides its own structure. The optional
 * `padding` prop overrides the built-in padding inline without affecting the max-width gutters.
 */
function ContentWrapper({ id, padding, children, className, ref }: ContentWrapperProps) {
  const paddingValue = toPaddingValue(padding)

  return (
    <div
      ref={ref}
      id={id}
      style={paddingValue ? { padding: paddingValue } : undefined}
      className={cn(
        'mx-auto h-full w-full p-4',
        'md:max-w-content-fluid md:px-0 md:py-4',
        '3xl:max-w-content-lg',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { ContentWrapper }
