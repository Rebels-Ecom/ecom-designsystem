import { forwardRef } from 'react'
import cx from 'classnames'
import { TButtonSize, TButtonSurface } from '../../../../types/button'
import { Icon, IIcon } from '../icon/icon'

export type TButtonType = 'submit' | 'button'
export interface IButton {
  children?: React.ReactNode
  type: TButtonType
  surface: TButtonSurface
  iconLeft?: IIcon
  iconRight?: IIcon
  size?: TButtonSize
  fullWidth?: boolean
  rounded?: boolean
  className?: string
  disabled?: boolean
  id?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const defaultButtonClasses = 'flex justify-center items-center font-secondaryBold disabled:cursor-not-allowed rounded'
export const primaryButtonClasses = 'text-cta-primary bg-cta-primary hover:bg-cta-primary-hover disabled:bg-cta-primary-disabled disabled:text-cta-primary-disabled border-transparent'  
export const secondaryButtonClasses = 'text-cta-secondary bg-cta-secondary border-1 border-cta-secondary hover:text-cta-secondary-hover hover:border-cta-secondary-hover disabled:bg-cta-secondary-disabled disabled:text-cta-secondary-disabled disabled:border-cta-secondary-disabled'  
export const tertiaryButtonClasses = 'text-cta-tertiary bg-cta-tertiary hover:bg-cta-tertiary-hover disabled:bg-cta-tertiary-disabled disabled:text-cta-tertiary-disabled border-transparent' 


export function getButtonSurfaceClasses(surface: TButtonSurface) {
  switch (surface) {
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
  const largeClasses = `h-48 px-32 p-16 text-cta-lg`
  const smallClasses = `h-40 px-32 py-10 text-cta-sm`
  switch (size) {
    case 'small':
      return smallClasses
    case 'large':
    default:
      return largeClasses
  }
}

const Button = forwardRef<HTMLButtonElement, IButton>(({ className, surface = 'primary', size = 'large', type = 'button', children, iconLeft, iconRight, fullWidth, rounded, disabled, onClick, id }, ref ) => (
  <button
    ref={ref}
    id={id ? id : undefined}
    type={type}
    className={cx(defaultButtonClasses, getSizeClasses(size), getButtonSurfaceClasses(surface), fullWidth && 'w-full', rounded && 'rounded-full', disabled && 'disabled', className)}
    disabled={disabled}
    onClick={onClick}
  >
    {iconLeft && <Icon icon={iconLeft.icon}></Icon>}
    {children && <span className={ cx(iconLeft && 'ml-10', iconRight && 'mr-10')}>{children}</span>}
    {iconRight && <Icon icon={iconRight.icon}></Icon>}
  </button>
  )
)

export { Button }