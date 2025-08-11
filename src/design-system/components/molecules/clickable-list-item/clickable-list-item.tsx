import { Icon, TIcon } from '../../atoms/icon/icon'
import styles from './clickable-list-item.module.css'
import cx from 'classnames'

type TClickableListItem = {
  onClick: () => void
  label: string
  icon?: TIcon
  weight?: 'normal' | 'bold'
  color?: 'default' | 'blue' | 'orange'
  align?: 'start' | 'center' | 'end' | 'space-between'
  size?: 'small' | 'medium'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ClickableListItem = ({
  onClick,
  label,
  icon,
  weight,
  color = 'default',
  align = 'space-between',
  size = 'medium',
  ...rest
}: TClickableListItem) => {
  return (
    <button
      type="button"
      className={cx(styles.clickableListItem, styles[color], styles[align], styles[size], {
        [styles.bold]: weight === 'bold',
      })}
      onClick={onClick}
      {...rest}
    >
      <span className={styles.label}>{label}</span>
      {icon && <Icon className={styles.icon} icon={icon} aria-hidden="true" />}
    </button>
  )
}

export { ClickableListItem }
