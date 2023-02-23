import { forwardRef } from 'react'
import cx from 'classnames'
import { TButtonSize, TButtonSurface, TButtonSurfaceVariant } from '../../../../types/button'

export type TButtonType = 'submit' | 'button'
export interface IButton {
  children?: React.ReactNode
  type: TButtonType
  surface: TButtonSurface
  surfaceVariant?: TButtonSurfaceVariant
  size?: TButtonSize
  fullWidth?: boolean
  rounded?: boolean
  className?: string
  disabled?: boolean
  id?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const primaryButtonClasses =
  'bg-brand font-medium border-2 border-transparent text-button-primary hover:bg-brand-strong focus-visible:bg-brand focus-visible:ring-ring active:bg-brand-stronger active:text-button-primary-active disabled:bg-disabled disabled:text-disabled'

export const secondaryButtonClasses =
  'border-2 focus-visible:border-transparent text hover:border-strong hover:bg-weak focus-visible:bg-weak focus-visible:ring-ring active:bg disabled:bg-disabled disabled:text-disabled disabled:border-disabled'

export const tertiaryButtonClasses =
  'border-2 border-transparent font-bold text hover:border-strong hover:bg-weak focus-visible:border-transparent focus-visible:bg-weak focus-visible:ring-ring active:border-border active:bg disabled:bg-transparent disabled:text-disabled'

export const defaultButtonClasses = 'relative overflow-hidden rounded-full outline-none ring-offset-2 focus-visible:ring-2 disabled:cursor-not-allowed'

export function getVariantClasses(variant: TButtonSurface) {
  switch (variant) {
    case 'secondary':
      return secondaryButtonClasses
    case 'tertiary':
      return tertiaryButtonClasses
    case 'primary':
    default:
      return primaryButtonClasses
  }
}

export function getSizeClasses(size: TButtonSize) {
  const largeClasses = `h-48 text-md`
  const smallClasses = `h-32 text-xs`
  switch (size) {
    case 'small':
      return smallClasses
    case 'large':
    default:
      return largeClasses
  }
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    { className, surface = 'primary', surfaceVariant = 'orange', size = 'large', type = 'button', children, fullWidth, rounded, disabled, onClick, id },
    ref
  ) => (
    <button
      ref={ref}
      id={id ? id : undefined}
      type={type}
      className={cx(defaultButtonClasses, getSizeClasses(size), getVariantClasses(surface), fullWidth && 'w-full', className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
)

export { Button }
