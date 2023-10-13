import styles from './table.module.css'
import cx from 'classnames'

export interface ITable {
  listItems: Array<{[key: string]: string}>
  /**
   * If true, no column titles will be display
   * @default false
   */
  hideColumnTitles?: boolean;
  /**
   * If true, each column will get equal width
   * @default false
   */
  equalWidthColumns?: boolean;
  /**
   * Adds a gap (in rem) between the columns
   * @default 0
   */
  listGap?: number;
}

const Table = ({
  listItems,
  hideColumnTitles = false,
  equalWidthColumns = false,
  listGap = 0
}: ITable) => {
  const columnNames = Object.keys(listItems[0])
  const style: { [key: string]: string } = ({
    '--list-gap': `${listGap}rem`,
  })
  return (
    <div className={styles.table} style={style}>
      {columnNames?.map(item => {
        return (
          <div className={cx(styles.column, {[styles.equalWidthColumn]: equalWidthColumns})}>
            {!hideColumnTitles && <span className={cx(styles.item, styles.columnTitle)}>{item}</span>}
            {listItems.map(x => <span className={styles.item}>{x[item]}</span>)}
          </div>
        )
      })}
    </div>
  )
}

export {
  Table
}