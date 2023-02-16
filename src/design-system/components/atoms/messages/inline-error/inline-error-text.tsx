import cx from 'classnames'
import { Icon } from '../../icon/icon'
import styles from './inline-error-text.module.css'

export interface IInlineError {
  children: React.ReactNode
  className?: string
}

const InlineErrorText = ({ children, className }: IInlineError) => {
  return (
    <div className={cx('body', styles.validationError, className)}>
      <Icon icon="icon-x-circle" className={styles.icon} />
      <span className={styles.text}>{children}</span>
    </div>
  )
}

export { InlineErrorText }
