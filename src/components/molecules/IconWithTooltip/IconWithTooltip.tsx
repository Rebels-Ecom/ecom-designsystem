import type { Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconName } from '../../atoms/Icon'
import { ComponentWithTooltip } from '../../atoms/ComponentWithTooltip'

export interface IconWithTooltipProps {
  /** Tooltip text — also the trigger button's accessible name (4.1.2). */
  content: string
  /** Icon-trigger variant. Provide either `icon` or `text`, not both. */
  icon?: IconName
  /** Text-badge-trigger variant (a short label in a circular badge). Provide either `text` or `icon`. */
  text?: string
  /** Extra classes, merged onto the wrapping `<span>` via `cn()`. */
  className?: string
  /** Forwarded to the wrapping `<span>`. */
  ref?: Ref<HTMLSpanElement>
}

/**
 * A hoverable/focusable trigger (an icon or a small text badge) that reveals a tooltip (molecule).
 * Built on the `ComponentWithTooltip` atom, so it inherits the WCAG 2.2 SC 1.4.13 contract: the tip
 * shows on hover **and** focus, is dismissible with `Escape`, stays open while the pointer travels
 * onto it, and is wired to the trigger via `aria-describedby`. The trigger is a real `<button>` whose
 * accessible name is `content` (4.1.2) with a visible `focus-visible` ring (2.4.7). The icon glyph
 * renders at a 24px target (2.5.8); the text badge is 20px and relies on the ≥24px-spacing exception,
 * so keep neighbouring targets spaced. The badge uses dark-on-orange text — legacy's white-on-orange
 * fails 1.4.3 (~2.3:1), so the label colour is flipped to the accessible pairing.
 */
function IconWithTooltip({ content, icon, text, className, ref }: IconWithTooltipProps) {
  const trigger = (
    <button
      type="button"
      aria-label={content}
      className={cn(
        'flex cursor-pointer items-center justify-center rounded border-none bg-transparent p-0 text-text-default',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
      )}
    >
      {icon ? (
        <Icon icon={icon} size="large" />
      ) : (
        <span className="flex size-5 items-center justify-center rounded-full bg-action-tertiary text-body-s font-bold text-text-default">
          {text}
        </span>
      )}
    </button>
  )

  return <ComponentWithTooltip ref={ref} element={trigger} content={content} wrapperClassName={className} />
}

export { IconWithTooltip }
