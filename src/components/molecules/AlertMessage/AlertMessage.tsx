import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconName } from '../../atoms/Icon'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { IconButton } from '../IconButton'

export type AlertMessageType = 'info' | 'warning' | 'error'

export interface AlertMessageLabels {
  /** Accessible name for the dismiss button. @default 'Close alert message' */
  close: string
  /** Accessible name for the info severity icon. @default 'Information' */
  info: string
  /** Accessible name for the warning severity icon. @default 'Warning' */
  warning: string
  /** Accessible name for the error severity icon. @default 'Error' */
  error: string
}

export const defaultAlertMessageLabels: AlertMessageLabels = {
  close: 'Close alert message',
  info: 'Information',
  warning: 'Warning',
  error: 'Error',
}

/**
 * Per-type visual treatment. Colours come from the `--color-alert-*` tokens. `ink` is the text/icon
 * colour, chosen for contrast (1.4.3/1.4.11) — the legacy scheme put white on the `error` pink
 * (~2.6:1, fails AA), so `error` and `warning` use dark ink; only the dark-green `info` keeps white.
 * The severity glyph and the close X both inherit `ink` (no coloured chip), so severity is conveyed by
 * a distinct glyph, never by colour alone (1.4.1).
 */
const typeConfig: Record<AlertMessageType, { container: string; icon: IconName; ink: string }> = {
  info: { container: 'bg-alert-info-bg', icon: 'icon-info', ink: 'text-text-white' },
  warning: { container: 'bg-alert-warning-bg', icon: 'icon-alert-triangle', ink: 'text-text-default' },
  error: { container: 'bg-alert-error-bg', icon: 'icon-alert-circle', ink: 'text-text-default' },
}

export interface AlertMessageProps {
  /** The message content. */
  children: ReactNode
  /** Severity — drives the colour treatment, the severity glyph, and the live-region politeness. */
  type: AlertMessageType
  /** When false the component renders nothing. */
  isOpen: boolean
  /** Fires when the dismiss button is pressed. */
  onClose: () => void
  /** Overridable control/severity names (English defaults) for localisation. */
  labels?: Partial<AlertMessageLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying banner `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Dismissible full-width alert banner (molecule). Rendered as a live region so assistive tech
 * announces it on appearance (4.1.3): `error` is assertive (`role="alert"`), `info`/`warning` are
 * polite (`role="status"`). Severity is conveyed by a distinct leading glyph with a text label — never
 * by colour alone (1.4.1) — and every text/icon pairing meets AA contrast (1.4.3/1.4.11). The dismiss
 * control is an icon-only button with an action `aria-label` and the standard focus ring (2.4.7). All
 * built-in names default to English and are overridable via `labels`; `children` is consumer-supplied.
 */
function AlertMessage({ children, type, isOpen, onClose, labels, className, ref }: AlertMessageProps) {
  if (!isOpen) return null

  const t = { ...defaultAlertMessageLabels, ...labels }
  const config = typeConfig[type]

  return (
    <div
      ref={ref}
      role={type === 'error' ? 'alert' : 'status'}
      className={cn('relative flex justify-center', config.container, config.ink, className)}
    >
      <ContentWrapper>
        <div className="flex items-center gap-2">
          <Icon icon={config.icon} label={t[type]} />
          <span className="flex-1 text-center">{children}</span>
          <IconButton
            type="button"
            icon="icon-x"
            size="small"
            isTransparent
            noBorder
            label={t.close}
            onClick={onClose}
            className={config.ink}
          />
        </div>
      </ContentWrapper>
    </div>
  )
}

export { AlertMessage }
