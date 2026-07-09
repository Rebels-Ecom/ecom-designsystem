import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'
import { Placeholder } from '../../atoms/Placeholder'
import { Button } from '../Button'

export type AlertBoxColor = 'error' | 'warning' | 'information'

export interface AlertBoxProps {
  /** The alert message — the region's text content. */
  title: string
  /** Optional action label; the button renders only when both `buttonText` and `onClick` are set. */
  buttonText?: string
  /** Severity, driving the surface + icon. @default 'error' */
  color?: AlertBoxColor
  /** Action handler; paired with `buttonText` to render the button. */
  onClick?: () => void
  /** Show the loading skeleton instead of the message. @default false */
  loading?: boolean
  /** Reserve a minimum height (10rem). @default false */
  minHeight?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const boxClasses: Record<AlertBoxColor, string> = {
  error: 'bg-alert-error-bg text-text-default',
  warning: 'bg-alert-warning-bg text-text-default',
  information: 'bg-alert-info-bg text-text-white',
}

const iconColorClasses: Record<AlertBoxColor, string> = {
  error: 'text-text-blue',
  warning: 'text-text-blue',
  information: 'text-text-white',
}

/**
 * Alert / feedback panel (molecule). Renders a live region so assistive tech is notified when it
 * appears (4.1.3): `role="alert"` (assertive) for `error`, `role="status"` (polite) for `warning`/
 * `information`; while `loading` it exposes `aria-busy` over a decorative skeleton. Severity is never
 * signalled by colour alone (1.4.1) — a shape-distinct icon (`alert-circle` vs `info`) plus the text
 * message carry it. Contrast: the text/icon tokens all clear 4.5:1 on their surfaces. When an action
 * is supplied it is a real {@link Button} (full-width on mobile, auto on desktop).
 */
function AlertBox({
  title,
  buttonText,
  color = 'error',
  onClick,
  loading,
  minHeight,
  className,
  ref,
}: AlertBoxProps) {
  const role = color === 'error' ? 'alert' : 'status'

  return (
    <div
      ref={ref}
      role={role}
      aria-busy={loading || undefined}
      className={cn(
        'flex flex-col items-center justify-center gap-6 rounded p-4 text-center md:gap-2',
        boxClasses[color],
        minHeight && 'min-h-40',
        className,
      )}
    >
      {loading ? (
        <>
          <Placeholder type="p_short" />
          <Placeholder type="heading" />
          <Placeholder type="p_long" />
        </>
      ) : (
        <>
          <Icon
            icon={color === 'information' ? 'icon-info' : 'icon-alert-circle'}
            size="xlarge"
            className={iconColorClasses[color]}
          />
          <p className="text-left text-xl leading-6 md:text-base">{title}</p>
          {buttonText && onClick && (
            <Button
              surface="primary"
              size="xx-small"
              onClick={onClick}
              className="w-full justify-center md:w-auto"
            >
              {buttonText}
            </Button>
          )}
        </>
      )}
    </div>
  )
}

export { AlertBox }
