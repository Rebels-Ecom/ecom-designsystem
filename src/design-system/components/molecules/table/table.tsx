import { IconButton, TIconButton } from '../../atoms/icon-button/icon-button';
import styles from './table.module.css'
import cx from 'classnames'

export interface ITable {
  listItems: Array<{[key: string]: string | TIconButton}>
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
  const renderIcon = (obj: TIconButton, i: string) => {
    return <IconButton key={i} {...obj} size='medium' noPadding isTransparent noBorder />
  }
  const listItem = listItems?.sort((a,b) => Object.keys(b).length - Object.keys(a).length)[0];
  const columnNames = listItems.length ? Object.keys(listItem) : []
  const style: { [key: string]: string } = ({
    '--list-gap': `${listGap}rem`,
  })

  return (
    <div className={styles.table} style={style}>
      <div className={styles.mobile}>
        {listItems.map((item, i) => {
          const entries = Object.entries(item);
          const nonIcons = entries?.filter(([key]) => !key.includes('icon'))
          const icons = entries?.filter(([key]) => key.includes('icon'));
          return (
            <div key={i} className={styles.group}>
              {nonIcons?.length ? nonIcons.map(([key, value]) => (
                <div key={`${key}-${i}`} className={styles.row}>
                {!hideColumnTitles && !key.includes('icon') ? <span className={styles.columnTitle}>{`${key}: `}</span> : ''}
                <span className={styles.item}>{typeof value === 'object' ? renderIcon(value, `${key}-${i}`) : value}</span></div>
              )) : null}
              {icons?.length ? <div className={styles.icons}>
                {icons.map(([key, value]) => typeof value === 'object' && renderIcon(value, `${key}-${i}`))}
              </div> : null}
            </div>
          )
        })}
      </div>

      <div className={styles.desktop}>
        {columnNames?.map((item, i) => {
          const noIcons = columnNames?.filter(col => !col.includes('icon'))
          return (
            <div key={`${item}-${i}`} className={cx(styles.column, {
              [styles.equalWidthColumn]: equalWidthColumns,
              [styles.textColumn]: !item.includes('icon'),
              [styles.iconColumn]: item.includes('icon'),
              [styles.lastTextColumn]: noIcons[noIcons?.length - 1] === item
            })}
            >
              {!hideColumnTitles && <span className={cx(styles.item, styles.columnTitle, {[styles.icon]: item.includes('icon')})}>{item.includes('icon') ? '' : item}</span>}
              {listItems.map((x, i) => {
                return typeof x[item] === 'object' ? <div key={i} className={cx(styles.item, styles.icon)}>{renderIcon(x[item] as TIconButton, i.toString())}</div> : <span key={i} className={styles.item}>{x[item]}</span>
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export {
  Table
}