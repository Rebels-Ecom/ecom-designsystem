import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Loader, type LoaderColor, type LoaderSize } from '../../atoms/Loader'

export type OverlayBackground = 'light' | 'dark' | 'transparent'
export type OverlayPosition = 'fixed' | 'absolute'

export interface LoadingOverlayProps {
  /** When false the overlay renders nothing (unmounts the spinner and live region). */
  isVisible: boolean
  /**
   * Positioning strategy: `fixed` covers the viewport; `absolute` covers the nearest positioned
   * ancestor. @default 'fixed'
   */
  position?: OverlayPosition
  /** Scrim tint laid over the content. @default 'light' */
  overlayBkgColor?: OverlayBackground
  /** Spinner size, forwarded to {@link Loader}. @default 'lg' */
  loaderSize?: LoaderSize
  /** Spinner colour, forwarded to {@link Loader}. @default 'orange' */
  loaderColor?: LoaderColor
  /** Optional label shown under the spinner and announced with the loading state. */
  text?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const positionClasses: Record<OverlayPosition, string> = {
  fixed: 'fixed',
  absolute: 'absolute',
}

const backgroundClasses: Record<OverlayBackground, string> = {
  // Ported from legacy rgba() scrims: light #f5f6f8 @ 95%, dark blue-500 (#003e51) @ 30%.
  light: 'bg-surface-overlay/95',
  dark: 'bg-blue-500/30',
  transparent: 'bg-transparent',
}

/**
 * Full-bleed loading scrim with a centred spinner (molecule). It wraps the {@link Loader} atom,
 * which supplies the `role="status"` live region so assistive tech announces the loading state
 * (4.1.3) and its `text` label; the scrim itself is presentational. The spinner's rotation is an
 * essential progress indicator (exempt from 2.3.3). NOTE: the overlay does not make the content
 * behind it inert — when it blocks a specific region, the consumer should disable/`inert` that
 * region so keyboard focus can't reach the hidden controls.
 */
function LoadingOverlay({
  isVisible,
  position = 'fixed',
  overlayBkgColor = 'light',
  loaderSize = 'lg',
  loaderColor = 'orange',
  text = '',
  className,
  ref,
}: LoadingOverlayProps) {
  if (!isVisible) return null

  return (
    <div
      ref={ref}
      className={cn(
        'inset-0 z-4',
        positionClasses[position],
        backgroundClasses[overlayBkgColor],
        className,
      )}
    >
      <Loader visible size={loaderSize} color={loaderColor} text={text} position="absolute" />
    </div>
  )
}

export { LoadingOverlay }
