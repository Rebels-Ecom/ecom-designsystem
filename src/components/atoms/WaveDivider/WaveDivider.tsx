import type { Ref } from 'react'
import { cn } from '../../../lib/cn'

export type WaveDividerSize = 'sm' | 'md' | 'lg' | 'xl'

export interface WaveDividerProps {
  /**
   * Stroke colour of the wave. Defaults to the decorative-orange token
   * (`--color-icon-decorative-orange`). Pass any CSS colour to override — applied inline, since a
   * consumer-chosen colour is a runtime value.
   * @default decorative orange
   */
  color?: string
  /**
   * Width of the wave on desktop (≥64rem): `sm` = 20% · `md` = 30% · `lg` = 40% · `xl` = 50%.
   * Below 64rem the divider is always 50% wide.
   * @default 'md'
   */
  size?: WaveDividerSize
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<svg>`. */
  ref?: Ref<SVGSVGElement>
}

const sizeClasses: Record<WaveDividerSize, string> = {
  sm: 'lg:wave-w-sm',
  md: 'lg:wave-w-md',
  lg: 'lg:wave-w-lg',
  xl: 'lg:wave-w-xl',
}

/**
 * Purely decorative wavy divider (atom). Rendered as an `<svg>` that is hidden from assistive tech
 * (`aria-hidden` + `focusable="false"`) so it never reaches the accessibility tree (1.1.1) — it
 * conveys no information and must not be announced. It is a static graphic with no animation, so it
 * raises no motion (2.2.2 / 2.3.3) concerns. Consumers who need a labelled separator should use a
 * semantic element instead; this is chrome only.
 */
function WaveDivider({ color, size = 'md', className, ref }: WaveDividerProps) {
  return (
    <svg
      ref={ref}
      aria-hidden="true"
      focusable="false"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 782 52"
      className={cn('mx-auto my-8 block w-1/2', sizeClasses[size], className)}
    >
      <path
        className={cn('fill-none', !color && 'stroke-icon-decorative-orange')}
        style={color ? { stroke: color } : undefined}
        strokeWidth={12}
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M6,6c48.1,0,48.1,40,96.2,40c48.1,0,48.1-40,96.2-40c48.1,0,48.1,40,96.2,40c48.1,0,48.1-40,96.2-40
        c48.1,0,48.1,40,96.2,40c48.1,0,48.1-40,96.3-40c48.1,0,48.1,40,96.3,40S727.9,6,776,6"
      />
    </svg>
  )
}

export { WaveDivider }
