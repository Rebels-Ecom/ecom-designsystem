import styles from './icon-button.module.css'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { LinkComponent } from '../ui-link/ui-link'
import { Icon, TIcon } from '../icon/icon'

export type TIconButtonSize = 'small' | 'medium' | 'large'

type TWithLink = {
    type: 'link';
    linkUrl: string;
    linkComponent?: any;
    isExternal?: boolean;
}
type TWithoutLink = {
    type: 'button';
    onClick: (data?: any) => void;
}

export type TIconButton = {
    type: 'link' | 'button';
    icon: TIcon;
    size?: TIconButtonSize
    isTransparent?: boolean
    className?: string
    noPadding?: boolean;
    noBorder?: boolean;
    /**
     * If a positive number (1-99) has been provided a number  will be displayed in a notification format
     * @default undefined
     */
    notification?: number;
} & (TWithLink | TWithoutLink); 

export function getIconButtonSize(surface: TIconButtonSize, hasChildren: boolean) {
    if(hasChildren)
        return 'buttonRectangular'
    switch (surface) {
      case 'medium':
        return 'buttonMedium'
      case 'large':
        return 'buttonLarge'
      case 'small':
      default:
        return 'buttonSmall'
    }
  }

const IconButton = (props: TIconButton) => {
  if (!props.type) {
    throw new Error("type must be assigned");
  }

  const renderLink = () => {
    if (props.type === 'button') {
      return;
    }

    if (props.isExternal) {
      return (
        <a
          className={cx(styles.iconButton, props.className, styles[props.size ?? 'small'], {
            [styles.noPadding]: props.noPadding,
            [styles.transparent]: props.isTransparent,
            [styles.noBorder]: props.noBorder,
          })}
          href={props.linkUrl}
          target='_blank'
        >
          <Icon icon={props.icon} />
          {props.notification && props.notification < 100 && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className={styles.notification}>{props.notification}</motion.span>}
        </a>
      )
    } else {
      const Link = props.linkComponent ?? LinkComponent;

      return (
        <Link
          to={props.linkUrl}
          className={cx(styles.iconButton, props.className, styles[props.size ?? 'small'], {
            [styles.noPadding]: props.noPadding,
            [styles.transparent]: props.isTransparent,
            [styles.noBorder]: props.noBorder,
          })}
        >
          <Icon icon={props.icon} />
          {props.notification && props.notification < 100 && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className={styles.notification}>{props.notification}</motion.span>}
        </Link>
      )
    }
  }

  const renderButton = () => {
    if (props.type === 'link') {
      return;
    }

    return (
      <button
        className={cx(styles.iconButton, props.className, styles[props.size ?? 'small'], {
          [styles.noPadding]: props.noPadding,
          [styles.transparent]: props.isTransparent,
          [styles.noBorder]: props.noBorder,
        })}
        onClick={props.onClick}
      >
        <Icon icon={props.icon} />
        {!!props.notification && props.notification < 100 && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className={styles.notification}>{props.notification}</motion.span>}
      </button>
    )
  }

  return (
    <>
      {props.type === 'link' ? renderLink() : renderButton()}
    </>
  )
}

export { IconButton }
