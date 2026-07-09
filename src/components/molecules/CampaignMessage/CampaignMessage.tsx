import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconColor, type IconName } from '../../atoms/Icon'
import { Button } from '../Button'

export interface CampaignMessageProps {
  /** The campaign message (rendered uppercase via CSS, so assistive tech still reads it normally). */
  message: string
  /** Call-to-action button label — its accessible name. */
  ctaText: string
  /** Optional decorative leading icon. */
  icon?: IconName
  /** Semantic colour for the icon. */
  iconColor?: IconColor
  /** Fired when the CTA button is activated. */
  onClick?: () => void
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Campaign message box (molecule): an optional decorative icon, an uppercased message, and a primary
 * CTA {@link Button}. Presentational — the icon is decorative (`aria-hidden`, the message carries the
 * meaning) and the only interactive part is the button (its accessible name is `ctaText`). The message
 * is uppercased with the `uppercase` utility (not `String.toUpperCase()`) so screen readers read it
 * naturally. Stacks centred on mobile; on `lg` the content left-aligns and the button moves to the end.
 */
function CampaignMessage({ message, ctaText, icon, iconColor, onClick, className, ref }: CampaignMessageProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex w-fit max-w-content-text flex-col items-center gap-5 border border-border-grey p-4 lg:items-start',
        className,
      )}
    >
      {icon && <Icon icon={icon} color={iconColor} className="text-icon-xl lg:text-2xl" />}
      <span className="text-center uppercase lg:text-left">{message}</span>
      <Button surface="primary" size="x-small" onClick={onClick} className="lg:self-end">
        {ctaText}
      </Button>
    </div>
  )
}

export { CampaignMessage }
