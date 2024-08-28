import styles from './icon-button.module.css'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { LinkComponent } from '../ui-link/ui-link'
import { Icon, TIcon } from '../icon/icon'

export type TIconButtonSize = 'x-small' | 'small' | 'medium' | 'large'

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
  type: 'link' | 'button' // TODO: remove link option
  icon: TIcon
  name?: string;
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
  weight?: 'normal' | 'bold'
  surface?: 'primary' | 'white'
  animate?: 'default' | 'loading' | 'updated';
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
          className={
            cx(
              styles.iconButton,
              styles[props.size ?? 'small'],
              {
                [styles.noPadding]: props.noPadding,
                [styles.transparent]: props.isTransparent,
                [styles.noBorder]: props.noBorder,
                [styles.round]: props.round,
                [styles.disabled]: props.disabled,
              },
              props.className,
            )
          }
          href={props.linkUrl}
          target="_blank"
        >
          <Icon
            icon={props.icon}
            className={cx({
              [styles.iconDisabled]: props.disabled,
              [styles.bold]: props.weight === 'bold',
            })}
          />
          {(props.notification && props.notification < 100) && (
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
          className={
            cx(styles.iconButton, styles[props.size ?? 'small'], styles[props.surface ?? 'white'], {
              [styles.noPadding]: props.noPadding,
              [styles.transparent]: props.isTransparent,
              [styles.noBorder]: props.noBorder,
              [styles.round]: props.round,
              [styles.disabled]: props.disabled,
            }, props.className)
          }
        >
          <Icon
            icon={props.icon}
            className={cx({
              [styles.iconDisabled]: props.disabled,
              [styles.bold]: props.weight === 'bold',
            })}
          />
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

    const variants = {
      loading: {
          scale: [1, 1.05, 1],
          transition: {
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
          },
      },
      updated: {
          scale: [1, 0.9, 1.2, 1],
          transition: {
              duration: 0.5,
              ease: 'easeInOut',
          },
      },
      default: {
          scale: 1,
          transition: {
              duration: 0.2,
          },
      },
    };

    return (
      <button
        className={
          cx(styles.iconButton, styles[props.size ?? 'small'], styles[props.surface ?? 'white'], {
            [styles.noPadding]: props.noPadding,
            [styles.transparent]: props.isTransparent,
            [styles.noBorder]: props.noBorder,
            [styles.round]: props.round,
            [styles.disabled]: props.disabled,
          }, props.className)
        }
        onClick={props.onClick}
        aria-label={props.name}
      >
        <motion.span
          variants={variants}
          initial='default'
          animate={props.animate}
        >
          <Icon
            icon={props.icon}
            className={cx({
              [styles.iconDisabled]: props.disabled,
              [styles.bold]: props.weight === 'bold',
            })}
          />
        </motion.span>
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
