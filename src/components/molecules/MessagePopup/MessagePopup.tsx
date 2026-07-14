import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconName } from '../../atoms/Icon'
import { IconButton } from '../IconButton'

export type MessagePopupPosition = 'relative' | 'absolute'
export type MessagePopupArrowPosition = 'left' | 'right' | 'center'

export interface MessagePopupLabels {
  /** Accessible name for the dismiss button. @default 'Close message' */
  close: string
}

export const defaultMessagePopupLabels: MessagePopupLabels = {
  close: 'Close message',
}

/** Horizontal placement of the downward speech-bubble tail. */
const arrowPositionClasses: Record<MessagePopupArrowPosition, string> = {
  left: 'left-12',
  right: 'right-12',
  center: 'left-1/2 -translate-x-1/2',
}

export interface MessagePopupProps {
  /** The message content. */
  children: ReactNode
  /** When false the component renders nothing. */
  isOpen: boolean
  /** Fires when the dismiss button is pressed. */
  onClose: () => void
  /**
   * CSS positioning of the bubble. `absolute` takes it out of flow so a consumer can anchor it over
   * a target (the consumer owns the offsets); `relative` keeps it in flow. @default 'relative'
   */
  position?: MessagePopupPosition
  /** Optional decorative leading glyph (the message text carries the meaning). */
  icon?: IconName
  /** Horizontal placement of the downward tail. @default 'left' */
  arrowPosition?: MessagePopupArrowPosition
  /** Overridable control names (English defaults) for localisation. */
  labels?: Partial<MessagePopupLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying bubble `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Dismissible message bubble (molecule) — a non-modal informational callout with a downward tail,
 * rendered as a polite live region (`role="status"`) so assistive tech announces it on appearance
 * (4.1.3) without stealing focus. It is deliberately **not** a dialog: it doesn't trap focus or block
 * the page. Any leading `icon` is decorative (`aria-hidden`) because the text conveys the meaning
 * (1.4.1); the dark-blue surface pairs white text well past AA (1.4.3). The dismiss control is an
 * icon-only button whose action is named via `labels.close` (overridable for localisation) with the
 * standard focus ring (2.4.7) and a 44px target (2.5.5†). `children` is consumer-supplied.
 */
function MessagePopup({
  children,
  isOpen,
  onClose,
  position = 'relative',
  icon,
  arrowPosition = 'left',
  labels,
  className,
  ref,
}: MessagePopupProps) {
  if (!isOpen) return null

  const t = { ...defaultMessagePopupLabels, ...labels }

  return (
    <div
      ref={ref}
      role="status"
      className={cn(
        'flex items-start gap-6 bg-action-primary p-4 text-text-on-primary lg:p-5',
        position === 'absolute' ? 'absolute' : 'relative',
        className,
      )}
    >
      {/* Downward tail — a rotated square straddling the bottom edge; purely decorative. */}
      <span
        aria-hidden
        className={cn(
          'absolute -bottom-1.5 size-3 rotate-45 bg-action-primary',
          arrowPositionClasses[arrowPosition],
        )}
      />
      {icon && <Icon icon={icon} size="large" className="shrink-0" />}
      <div className="flex-1">{children}</div>
      <IconButton
        type="button"
        icon="icon-x"
        size="large"
        isTransparent
        noBorder
        label={t.close}
        onClick={onClose}
        className="shrink-0 text-text-on-primary"
      />
    </div>
  )
}

export { MessagePopup }
