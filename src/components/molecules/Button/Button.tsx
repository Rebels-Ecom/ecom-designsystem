import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconName } from '../../atoms/Icon'
import { Loader } from '../../atoms/Loader'

export type ButtonType = 'button' | 'submit'
export type ButtonSurface = 'primary' | 'secondary' | 'tertiary' | 'x' | 'link'
export type ButtonSize = 'large' | 'small' | 'x-small' | 'xx-small'
export type ButtonWeight = 'normal' | 'bold'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'color'> {
  /** Visible label — this is the button's accessible name, so it must describe the action. */
  children: ReactNode
  /** Native button behaviour. @default 'button' */
  type?: ButtonType
  /** Visual emphasis / role. @default 'primary' */
  surface?: ButtonSurface
  /** Size preset (height + type scale + min-width). @default 'small' */
  size?: ButtonSize
  /** Decorative icon before the label (rendered `aria-hidden`; the label carries the meaning). */
  iconLeft?: IconName
  /** Decorative icon after the label (rendered `aria-hidden`). */
  iconRight?: IconName
  /** Stretch to the full width of the container. @default false */
  fullWidth?: boolean
  /** Fully rounded (pill) corners. @default false */
  rounded?: boolean
  /** Show a spinner and disable the button; exposes `aria-busy`. @default false */
  loading?: boolean
  /** Label weight. @default 'normal' */
  weight?: ButtonWeight
  /** Transparent background (overrides the surface fill). @default false */
  isTransparent?: boolean
  /** Remove the visible border. @default false */
  noBorder?: boolean
  /**
   * Extra classes, merged with the component's own via `cn()`.
   *
   * All standard `<button>` attributes (`id`, `name`, `onClick`, `disabled`, `aria-*`, `data-*`, …)
   * are also accepted and forwarded to the underlying element — so this button composes into wrappers
   * that inject ARIA (e.g. a tooltip's `aria-describedby`, a disclosure's `aria-expanded`).
   */
  className?: string
  /** Forwarded to the underlying `<button>`. */
  ref?: Ref<HTMLButtonElement>
}

const surfaceClasses: Record<ButtonSurface, string> = {
  primary:
    'bg-action-primary text-text-on-primary hover:bg-action-primary-hover disabled:bg-action-primary-disabled disabled:text-text-on-primary-disabled',
  secondary:
    'bg-action-secondary border-border-on-secondary text-text-on-secondary hover:border-border-on-secondary-hover hover:text-text-on-secondary-hover disabled:border-border-on-secondary-disabled disabled:text-text-on-secondary-disabled',
  tertiary:
    'bg-action-tertiary text-text-on-tertiary hover:bg-action-tertiary-hover disabled:bg-action-tertiary-disabled disabled:text-text-on-tertiary-disabled',
  x: 'md:bg-action-x md:border-border-on-x',
  link: 'h-auto w-auto min-w-0 bg-transparent p-0 text-action-primary hover:text-action-primary-hover hover:underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  large: 'h-12 min-w-button-min-l px-8 text-cta-l',
  small: 'h-10 w-55 min-w-30 px-8 text-cta-s',
  'x-small': 'h-10 w-max min-w-10 px-4 text-cta-s',
  'xx-small': 'h-9 w-auto justify-start px-3 text-cta-s',
}

/**
 * Primary interactive control (molecule). Renders a native `<button>` — so role, keyboard
 * activation (Enter/Space) and focus are free — with a visible `focus-visible` ring (2.4.7) and a
 * text label that serves as its accessible name (4.1.2); pass a meaningful `children`. Icons are
 * decorative (`aria-hidden`) and never the sole label — for an icon-only control use `IconButton`.
 * While `loading` the button is disabled and exposes `aria-busy`. Only `size="large"` meets the
 * 44px target (2.5.5†); the smaller presets rely on the WCAG 2.5.8 ≥24px-spacing exception, so keep
 * neighbouring targets spaced.
 */
function Button({
  children,
  type = 'button',
  surface = 'primary',
  size = 'small',
  iconLeft,
  iconRight,
  fullWidth,
  rounded,
  disabled,
  loading,
  weight = 'normal',
  isTransparent,
  noBorder,
  className,
  ref,
  ...rest
}: ButtonProps) {
  const hasIcon = Boolean(iconLeft || iconRight)
  const showLoader = loading && size !== 'xx-small'

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        'relative inline-flex cursor-pointer items-center justify-center rounded border border-transparent font-primary text-text-default',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        'disabled:cursor-not-allowed',
        sizeClasses[size],
        surfaceClasses[surface],
        weight === 'bold' && 'font-bold',
        hasIcon && 'gap-2.5',
        fullWidth && 'w-full',
        rounded && 'rounded-full',
        isTransparent && 'bg-transparent',
        noBorder && 'border-transparent',
        className,
      )}
    >
      {showLoader ? (
        <>
          {/* Keep the label for assistive tech (and as the accessible name) while the
              spinner replaces it visually; paired with aria-busy above. */}
          <span className="sr-only">{children}</span>
          <Loader position="relative" visible size="xs" />
        </>
      ) : (
        <>
          {iconLeft && <Icon icon={iconLeft} />}
          {children}
          {iconRight && <Icon icon={iconRight} />}
        </>
      )}
    </button>
  )
}

export { Button }
