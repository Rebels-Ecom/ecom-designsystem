import cx from 'classnames';
import styles from './ui-date-picker.module.css';
import { Placeholder } from '../placeholder/placeholder';
import { Icon } from '../icon/icon';

const GhostUiDatePicker = () => {
  return (
    <div className={cx(styles.datePickerWrapper, styles.ghost)}>
      <span className={styles.buttonLabelWrapper}>
        <Placeholder type='heading' noMargin />
        <span className={styles.buttonIconWrapper}>
          <Icon className={styles.icon} icon={'icon-calendar'}></Icon>
        </span>
      </span>
    </div>  
  )
}

export { GhostUiDatePicker };