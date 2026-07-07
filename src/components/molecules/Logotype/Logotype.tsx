import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
// NOTE: these official logos embed a ~33KB PNG raster (the "1897" gradient), so they add notable
// bundle weight and are inlined by Vite lib mode. Accepted for now (see src/assets/logos/README.md
// for the tradeoff + future options to slim them down).
import horizontalLogo from '../../../assets/logos/spendrups-logo-horizontal.svg'
import verticalLogo from '../../../assets/logos/spendrups-logo-vertical.svg'

/** Which mark to render. `responsive` shows the compact mark below `md` and the wordmark from `md` up. */
export type LogotypeVariant = 'responsive' | 'horizontal' | 'vertical'

export interface LogotypeProps {
  /**
   * Accessible name for the logo (1.1.1). Pass `''` to mark it decorative (e.g. when a visible text
   * brand name sits beside it). @default 'Spendrups'
   */
  ariaLabel?: string
  /** Which Spendrups mark to show. @default 'responsive' */
  variant?: LogotypeVariant
  /** Extra classes, merged onto the `<picture>`/`<img>` via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<img>`. */
  ref?: Ref<HTMLImageElement>
}

/**
 * Spendrups brand logotype (molecule). Renders the real brand mark from bundled **vector** SVGs.
 * `variant='responsive'` (default) renders a native `<picture>` that shows the compact vertical mark
 * below `md` (48rem) and the horizontal wordmark from `md` up; `'horizontal'`/`'vertical'` force one.
 * The mark is crisp at any size and scales to a 32px height (≈136px wordmark / ≈29px compact),
 * matching the legacy dimensions. Accessibility: the `<img>` carries `alt={ariaLabel}` as its
 * accessible name (1.1.1); pass `ariaLabel=''` to make it decorative when a visible brand name
 * already names it.
 */
function Logotype({ ariaLabel = 'Spendrups', variant = 'responsive', className, ref }: LogotypeProps) {
  if (variant === 'responsive') {
    return (
      <picture className={cn('inline-flex', className)}>
        <source media="(min-width: 48rem)" srcSet={horizontalLogo} />
        <img ref={ref} src={verticalLogo} alt={ariaLabel} className="h-8 w-auto" />
      </picture>
    )
  }

  return (
    <img
      ref={ref}
      src={variant === 'horizontal' ? horizontalLogo : verticalLogo}
      alt={ariaLabel}
      className={cn('h-8 w-auto', className)}
    />
  )
}

export { Logotype }
