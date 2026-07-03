import type { Ref } from 'react'
import { cn } from '../../../lib/cn'

export type LoaderSize = 'xs' | 'sm' | 'md' | 'lg'
export type LoaderColor = 'default' | 'orange'
export type LoaderPosition = 'absolute' | 'relative'

export interface LoaderProps {
  visible: boolean
  position?: LoaderPosition
  size?: LoaderSize
  text?: string
  color?: LoaderColor
  className?: string
  ref?: Ref<HTMLDivElement>
}

const sizeClasses: Record<LoaderSize, string> = {
  xs: 'size-6 border-2',
  sm: 'size-14 border-4',
  md: 'size-34 border-6',
  lg: 'size-40 border-8 lg:size-66',
}

const colorClasses: Record<LoaderColor, string> = {
  default: 'border-grey-300 border-t-text-blue',
  orange: 'border-grey-300 border-t-border-orange',
}

/**
 * Spinner with optional label. The container is a `role="status"` live region so
 * assistive tech announces the loading state (WCAG 4.1.3); the spinning ring itself is
 * decorative (`aria-hidden`). The rotation is an essential progress indicator, which
 * WCAG 2.3.3 exempts from `prefers-reduced-motion` suppression.
 */
function Loader({
  visible,
  position = 'absolute',
  size = 'sm',
  text,
  color = 'default',
  className,
  ref,
}: LoaderProps) {
  if (!visible) return null

  return (
    <div
      ref={ref}
      role="status"
      className={cn(
        'z-3 flex flex-col items-center justify-center gap-4 transition-opacity duration-500 lg:gap-8',
        position === 'absolute' ? 'absolute inset-0' : 'relative',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn('block animate-spin rounded-full', sizeClasses[size], colorClasses[color])}
      />
      {text && <div className="max-w-66 font-bold text-text-blue">{text}</div>}
    </div>
  )
}

export { Loader }
