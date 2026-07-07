import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconName } from '../../atoms/Icon'

export type ClickableListItemColor = 'default' | 'blue' | 'orange'
export type ClickableListItemAlign = 'start' | 'center' | 'end' | 'space-between'
export type ClickableListItemSize = 'small' | 'medium'
export type ClickableListItemWeight = 'normal' | 'bold'

export interface ClickableListItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /** Visible label — also the button's accessible name. */
  label: ReactNode
  /** Optional trailing glyph (decorative — the label carries the meaning). */
  icon?: IconName
  /** Label weight. @default 'normal' */
  weight?: ClickableListItemWeight
  /** Text colour token. @default 'default' */
  color?: ClickableListItemColor
  /** Horizontal distribution of label + icon. @default 'space-between' */
  align?: ClickableListItemAlign
  /** Label size step. @default 'medium' */
  size?: ClickableListItemSize
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<button>`. */
  ref?: Ref<HTMLButtonElement>
}

const colorClasses: Record<ClickableListItemColor, string> = {
  default: 'text-text-default',
  blue: 'text-text-blue',
  // NOTE: `orange` (orange-600) is ~3:1 on white and fails AA for normal-weight text (1.4.3).
  // Kept for design parity but flagged for design review — don't use it for essential labels,
  // and it is intentionally never rendered in an axe-scanned story.
  orange: 'text-orange-600',
}

const alignClasses: Record<ClickableListItemAlign, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  'space-between': 'justify-between',
}

const sizeClasses: Record<ClickableListItemSize, string> = {
  small: 'text-body-s',
  medium: 'text-body',
}

/**
 * A full-width, keyboard-operable list row rendered as a real `<button>` (molecule) — role and
 * keyboard activation come for free. The visible `label` is the accessible name; the optional
 * trailing `icon` is decorative (`aria-hidden`). Adds a visible `focus-visible` ring the legacy
 * control lacked (2.4.7) and a 24px minimum target height (2.5.8). Being a form control it sets
 * `font-primary` explicitly (controls don't inherit the document font).
 */
function ClickableListItem({
  label,
  icon,
  weight = 'normal',
  color = 'default',
  align = 'space-between',
  size = 'medium',
  className,
  ref,
  ...rest
}: ClickableListItemProps) {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'flex min-h-6 w-full cursor-pointer items-center gap-2 text-left font-primary disabled:cursor-default',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        alignClasses[align],
        sizeClasses[size],
        colorClasses[color],
        weight === 'bold' && 'font-bold',
        className,
      )}
      {...rest}
    >
      <span>{label}</span>
      {icon && <Icon icon={icon} />}
    </button>
  )
}

export { ClickableListItem }
