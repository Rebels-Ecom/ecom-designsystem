import type { Ref } from 'react'
import { cn } from '../../../lib/cn'

export type IconSize = 'small' | 'medium' | 'large' | 'xlarge'
export type IconColor = 'error' | 'success'

export type IconName =
  | 'icon-alert-circle'
  | 'icon-bell'
  | 'icon-arrow-right'
  | 'icon-mail'
  | 'icon-map-pin'
  | 'icon-menu'
  | 'icon-x'
  | 'icon-phone'
  | 'icon-refresh-cw'
  | 'icon-search'
  | 'icon-x-circle'
  | 'icon-plus-circle'
  | 'icon-plus'
  | 'icon-chevron-up'
  | 'icon-chevron-down'
  | 'icon-chevron-left'
  | 'icon-chevron-right'
  | 'icon-chevrons-left'
  | 'icon-chevrons-right'
  | 'icon-layers'
  | 'icon-check'
  | 'icon-check-circle'
  | 'icon-user'
  | 'icon-heart'
  | 'icon-shopping-cart'
  | 'icon-award'
  | 'icon-package'
  | 'icon-users'
  | 'icon-facebook'
  | 'icon-instagram'
  | 'icon-linkedin'
  | 'icon-clipboard'
  | 'icon-download'
  | 'icon-calendar'
  | 'icon-settings'
  | 'icon-info'
  | 'icon-play'
  | 'icon-archive'
  | 'icon-file'
  | 'icon-file-text'
  | 'icon-message-circle'
  | 'icon-share'
  | 'icon-arrow-down-circle'
  | 'icon-trash'
  | 'icon-trash-2'
  | 'icon-edit'
  | 'icon-truck'
  | 'icon-share-2'
  | 'icon-heart-o'
  | 'icon-heart1'
  | 'icon-file-plus'
  | 'icon-eye'
  | 'icon-save'
  | 'icon-alert-triangle'
  | 'icon-minus-circle'
  | 'icon-minus'

export interface IconProps {
  icon: IconName
  size?: IconSize
  color?: IconColor
  className?: string
  /**
   * Accessible name. Provide when the icon conveys meaning on its own;
   * omit for purely decorative icons (then rendered `aria-hidden`).
   */
  label?: string
  ref?: Ref<HTMLSpanElement>
}

const sizeClasses: Record<IconSize, string> = {
  small: 'text-base',
  medium: 'text-xl',
  large: 'text-2xl',
  xlarge: 'text-icon-xl',
}

const colorClasses: Record<IconColor, string> = {
  error: 'text-icon-critical',
  success: 'text-tag-green',
}

function Icon({ icon, size, color, className, label, ref }: IconProps) {
  const accessibility = label
    ? ({ role: 'img', 'aria-label': label } as const)
    : ({ 'aria-hidden': true } as const)

  return (
    <span
      ref={ref}
      className={cn(
        'icomoon flex text-inherit',
        icon,
        size && sizeClasses[size],
        color && colorClasses[color],
        className,
      )}
      {...accessibility}
    />
  )
}

export { Icon }
