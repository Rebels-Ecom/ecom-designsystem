import { useId, type ReactNode, type Ref } from 'react'
import { cn } from '../../../lib/cn'

export type InfoSummaryBoxBackground = 'yellow' | 'blue'

export interface InfoSummaryBoxProps {
  /** Optional group label shown above the box; also names the box for assistive tech. */
  label?: string
  /** Optional action label (e.g. "Hantera"); requires `onClick` to render. */
  linkLabel?: string
  /** Handler for the action button. */
  onClick?: () => void
  /** Fill the box with the light highlight background. @default false */
  withBackground?: boolean
  /** Explicit box fill — `yellow` (light highlight) or `blue` (pale grey-blue). Overrides `withBackground`. */
  backgroundColor?: InfoSummaryBoxBackground
  /** Box contents. */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const backgroundClasses: Record<InfoSummaryBoxBackground, string> = {
  yellow: 'bg-background-light-orange',
  blue: 'bg-border-grey',
}

/**
 * A labelled summary container (molecule): an optional title, an optional top-right action button, and a
 * bordered box wrapping arbitrary content. When `label` is set, the box is a `role="group"` named by the
 * label via `aria-labelledby` — a real association with a per-instance id (the legacy `<label htmlFor>`
 * pointed at a non-form `<div>`, which is invalid and non-unique). The action renders as a real
 * `<button>` with an accessible blue underlined treatment (the legacy orange failed 4.5:1 on white —
 * 1.4.1/1.4.3) and a visible focus ring (2.4.7). Consumers supply the box content via `children`.
 */
function InfoSummaryBox({
  label,
  linkLabel,
  onClick,
  withBackground,
  backgroundColor,
  children,
  className,
  ref,
}: InfoSummaryBoxProps) {
  const labelId = useId()
  const showAction = Boolean(linkLabel && onClick)
  // Default is transparent (legacy `--background` was undefined → the page surface shows through);
  // only `withBackground`/`backgroundColor` paint a fill.
  const boxBackground = backgroundColor
    ? backgroundClasses[backgroundColor]
    : withBackground
      ? backgroundClasses.yellow
      : ''

  return (
    <div ref={ref} className={cn('relative w-full', className)}>
      {showAction && (
        <button
          type="button"
          onClick={onClick}
          className={cn(
            'absolute top-0 right-0 z-10 cursor-pointer bg-transparent text-body text-text-blue underline',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          )}
        >
          {linkLabel}
        </button>
      )}
      {label && (
        <span id={labelId} className="mb-2 flex font-bold break-words">
          {label}
        </span>
      )}
      <div
        role={label ? 'group' : undefined}
        aria-labelledby={label ? labelId : undefined}
        className={cn('rounded border border-border-grey px-4.5 py-2 [&>*]:py-2', boxBackground)}
      >
        {children}
      </div>
    </div>
  )
}

export { InfoSummaryBox }
