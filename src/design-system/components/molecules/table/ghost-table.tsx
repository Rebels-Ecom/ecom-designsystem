import cx from 'classnames'
import { Heading, Placeholder } from '../../atoms'
import styles from './table.module.css'

const GHOST_ROWS = 3
const GHOST_COLS = 5

const GhostTable = ({ title }: { title?: string }) => {
  return (
    <div className={styles.table}>
      {title && (
        <div className={styles.top}>
          <Heading className={styles.heading} order={5} children={title} />
        </div>
      )}
      <div className={styles.mobile}>
        {Array.from({ length: GHOST_ROWS }).map((_, i) => (
          <div key={i} className={styles.group}>
            {Array.from({ length: GHOST_COLS }).map((_, j) => (
              <div key={j} className={styles.row}>
                <Placeholder type={j % 2 === 0 ? 'p_short' : 'p_long'} noMargin />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.desktop}>
        {Array.from({ length: GHOST_COLS }).map((_, i) => (
          <div key={i} className={cx(styles.column, styles.lastTextColumn)}>
            <div className={cx(styles.item, styles.columnTitle)}>
              <Placeholder type="p_short" noMargin />
            </div>
            {Array.from({ length: GHOST_ROWS }).map((_, j) => (
              <div key={j} className={styles.item}>
                <Placeholder type={j % 2 === 0 ? 'p_short' : 'p_long'} noMargin />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export { GhostTable }
