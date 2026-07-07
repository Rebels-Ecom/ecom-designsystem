import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconName } from '../../atoms/Icon'

export type MessageBannerType = 'success' | 'information' | 'link' | 'update'

export interface MessageBannerProps {
  /** Banner message. */
  children: ReactNode
  /** Semantic accent — picks the leading icon. Omit for an icon-less banner. */
  type?: MessageBannerType
  /**
   * Custom background colour (any CSS colour string, applied inline as a runtime value). When set,
   * the text switches to white — the consumer is responsible for keeping it ≥4.5:1 against `color`.
   */
  color?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the banner's root `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const iconByType: Record<MessageBannerType, IconName> = {
  success: 'icon-check-circle',
  information: 'icon-alert-circle',
  link: 'icon-arrow-right',
  update: 'icon-refresh-cw',
}

/**
 * A full-width message banner (molecule) — e.g. an order-confirmation notice. Renders a polite live
 * region (`role="status"`) so a banner that appears after an action is announced without stealing focus;
 * the leading `type` icon is decorative (`aria-hidden`) since the message text carries the meaning. The
 * default neutral background pairs with dark text (AA); a custom `color` switches the text to white and
 * is the consumer's contrast responsibility.
 */
function MessageBanner({ children, type, color, className, ref }: MessageBannerProps) {
  return (
    <div
      ref={ref}
      role="status"
      style={color ? { backgroundColor: color } : undefined}
      className={cn(
        // Center the icon with the text on all viewports (legacy only centered at `md`, leaving the
        // glyph top-aligned on mobile). For a single-line banner this reads as aligned everywhere.
        'flex w-full flex-row items-center justify-center gap-4 p-4',
        color ? 'text-text-white' : 'bg-surface-banner text-text-default',
        className,
      )}
    >
      {type && <Icon icon={iconByType[type]} />}
      <span>{children}</span>
    </div>
  )
}

export { MessageBanner }
