import cx from 'classnames'
import styles from './inline-helper-text.module.css'

export interface IInlineHelper {
  children: React.ReactNode
  className?: string
}

const InlineHelperText = ({ children, className }: IInlineHelper) => {
  return <div className={cx('body', styles.inlineHelper, className)}>{children}</div>
}

export { InlineHelperText }
