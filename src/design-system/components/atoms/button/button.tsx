import { forwardRef } from 'react'
import cx from 'classnames'
import { TButtonSize, TButtonSurface, TButtonSurfaceVariant } from '../../../../types/button'
import styles from './button.module.css'

export type TButtonType = 'submit' | 'button'
export interface IButton {
  children: React.ReactNode
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

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    { className, surface = 'primary', surfaceVariant = 'orange', size = 'large', type = 'button', children, fullWidth, rounded, disabled, onClick, id },
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
          styles.button,
          styles[size],
          surface === 'primary' && surfaceVariant ? styles[`${surface}-${surfaceVariant}`] : styles[surface],
          fullWidth && styles.fullWidth,
          rounded && styles.rounded,
          className
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
)

export { Button }
