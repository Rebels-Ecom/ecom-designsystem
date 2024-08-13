import { Icon, TIcon } from "../../atoms/icon/icon";
import styles from './clickable-list-item.module.css';
import cx from 'classnames';

type TClickableListItem = {
  onClick: () => void;
  label: string;
  icon?: TIcon;
  weight?: 'normal' | 'bold';
  color?: 'default' | 'blue' | 'orange',
  align?: 'start' | 'center' | 'end' | 'space-between',
  size?: 'small' | 'medium',
}
const ClickableListItem = ({
  onClick,
  label,
  icon,
  weight,
  color = 'default',
  align = 'space-between',
  size = 'medium'
}: TClickableListItem) => {
  return (
    <button
      className={cx(styles.clickableListItem,
        styles[color],
        styles[align],
        styles[size],
        {
          [styles.bold]: weight === 'bold',
        }
      )}
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
      {icon && <Icon className={styles.icon} icon={icon} />}
    </button>
  )
}

export {
  ClickableListItem
}
