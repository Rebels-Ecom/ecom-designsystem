import styles from './icon-button.module.css'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { LinkComponent } from '../ui-link/ui-link'
import { Icon, TIcon } from '../icon/icon'

export type TIconButtonSize = 'small' | 'medium' | 'large'

type TWithLink = {
  type: 'link'
  linkUrl: string
  linkComponent?: any
  isExternal?: boolean
}
type TWithoutLink = {
  type: 'button'
  onClick: (data?: any) => void
}

export type TIconButton = {
  type: 'link' | 'button'
  icon: TIcon
  size?: TIconButtonSize
  isTransparent?: boolean
  className?: string
  noPadding?: boolean
  noBorder?: boolean
  round?: boolean
  disabled?: boolean
  /**
   * If a positive number (1-99) has been provided a number  will be displayed in a notification format
   * @default undefined
   */
  notification?: number
} & (TWithLink | TWithoutLink)

const IconButton = (props: TIconButton) => {
  if (!props.type) {
    throw new Error('type must be assigned')
  }

  const renderLink = () => {
    if (props.type === 'button') {
      return
    }

    if (props.isExternal) {
      return (
        <a
          className={cx(styles.iconButton, props.className, styles[props.size ?? 'small'], {
            [styles.noPadding]: props.noPadding,
            [styles.transparent]: props.isTransparent,
            [styles.noBorder]: props.noBorder,
            [styles.round]: props.round,
            [styles.disabled]: props.disabled,
          })}
          href={props.linkUrl}
          target="_blank"
        >
          <Icon icon={props.icon} className={props.disabled ? styles.iconDisabled : ''} />
          {props.notification && props.notification < 100 && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className={styles.notification}>
              {props.notification < 100 ? props.notification : '99+'}
            </motion.span>
          )}
        </a>
      )
    } else {
      const Link = props.linkComponent ?? LinkComponent

      return (
        <Link
          to={props.linkUrl}
          className={cx(styles.iconButton, props.className, styles[props.size ?? 'small'], {
            [styles.noPadding]: props.noPadding,
            [styles.transparent]: props.isTransparent,
            [styles.noBorder]: props.noBorder,
            [styles.round]: props.round,
            [styles.disabled]: props.disabled,
          })}
        >
          <Icon icon={props.icon} className={props.disabled ? styles.iconDisabled : ''} />
          {props.notification && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className={styles.notification}>
              {props.notification < 100 ? props.notification : '99+'}
            </motion.span>
          )}
        </Link>
      )
    }
  }

  const renderButton = () => {
    if (props.type === 'link') {
      return
    }

    return (
      <button
        className={cx(styles.iconButton, props.className, styles[props.size ?? 'small'], {
          [styles.noPadding]: props.noPadding,
          [styles.transparent]: props.isTransparent,
          [styles.noBorder]: props.noBorder,
          [styles.round]: props.round,
          [styles.disabled]: props.disabled,
        })}
        onClick={props.onClick}
      >
        <Icon icon={props.icon} className={props.disabled ? styles.iconDisabled : ''} />
        {!!props.notification && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className={styles.notification}>
            {props.notification < 100 ? props.notification : '99+'}
          </motion.span>
        )}
      </button>
    )
  }

  return <>{props.type === 'link' ? renderLink() : renderButton()}</>
}

export { IconButton }
