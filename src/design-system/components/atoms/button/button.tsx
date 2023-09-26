import { forwardRef } from 'react'
import cx from 'classnames'
import { TButtonSize, TButtonSurface } from '../../../../types/button'
import { Icon, IIcon } from '../icon/icon'
import styles from './button.module.css'

export type TButtonType = 'submit' | 'button'
export interface IButton {
  children: React.ReactNode
  type: TButtonType
  /**
   * Decides the style of the button
   * @default 'primary'
   */
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

export function getButtonSurface(surface: TButtonSurface) {
  switch (surface) {
    case 'secondary':
      return 'secondaryButton'
    case 'tertiary':
      return 'tertiaryButton'
    case 'primary':
    default:
      return 'primaryButton'
  }
}

export function getButtonSize(size: TButtonSize) {
  switch (size) {
    case 'xx-small':
      return 'cta-xxs'
    case 'x-small':
      return 'cta-xs'
    case 'large':
      return 'cta-l'
    case 'small':
    default:
      return 'cta-s'
  }
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    { surface='primary', size='small', type='button', children, iconLeft, iconRight, fullWidth, rounded, disabled, onClick, id, className },
    ref
  ) => {
    if(!children)
      return null;

    return(
      <button
        ref={ref}
        id={id ? id : undefined}
        type={type}
        className={cx(
          styles.buttonDefault,
          getButtonSize(size),
          styles[surface],
          fullWidth && styles.fullWidth,
          rounded && styles.rounded,
          className
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {iconLeft && <Icon icon={iconLeft.icon}></Icon>}
        {children && <span className={ cx(styles.buttonContent, iconLeft && styles.contentRight, iconRight && styles.contentLeft)}>{children}</span>}
        {iconRight && <Icon icon={iconRight.icon}></Icon>}
      </button>
    )
  }
)

export { Button }
