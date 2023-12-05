import { forwardRef } from 'react'
import cx from 'classnames'
import { TButtonSize, TButtonSurface } from '../../../../types/button'
import { Icon, IIcon } from '../icon/icon'
import styles from './button.module.css'
import { Loader } from '../loader/loader'

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
  /**
   * If true, displays a loading spinner and disables the button
   * @default undefined
   */
  loading?: boolean;
  weight?: 'normal' | 'bold';
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
      return 'xxs'
    case 'x-small':
      return 'xs'
    case 'large':
      return 'l'
    case 'small':
    default:
      return 's'
  }
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      surface='primary',
      size='small',
      type='button',
      children,
      iconLeft,
      iconRight,
      fullWidth,
      rounded,
      disabled,
      onClick,
      id,
      className,
      loading,
      weight = 'normal'
    },
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
          styles[getButtonSize(size)],
          styles[surface],
          styles[weight],
          {
            [styles.fullWidth]: fullWidth,
            [styles.rounded]: rounded,
            [styles.iconRight]: !!iconRight?.icon,
            [styles.iconLeft]: !!iconLeft?.icon,
          },
          className
        )}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {loading && size !== 'xx-small' ? <Loader visible size='xs' /> : 
        <>
          {iconLeft && <Icon icon={iconLeft.icon}></Icon>}
          {children && <span className={ cx(styles.buttonContent, iconLeft && styles.contentRight, iconRight && styles.contentLeft)}>{children}</span>}
          {iconRight && <Icon icon={iconRight.icon}></Icon>}
        </>
        }
      </button>
    )
  }
)

export { Button }
