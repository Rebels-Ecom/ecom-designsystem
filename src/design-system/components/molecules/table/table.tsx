import { useEffect, useState } from 'react';
import { Heading, Loader } from '../../atoms';
import { IconButton, TIconButton } from '../../atoms/icon-button/icon-button';
import styles from './table.module.css'
import cx from 'classnames'
import { Button, IButton } from '../../atoms/button/button';

type TListItem = {[key: string]: string | TIconButton};
type TListItems = Array<TListItem>;

export interface ITable {
  listItems: TListItems
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
  /**
   * What column title to sort by initially
   * @default 'first column title'
   */
  initialSortBy?: string;
  /**
   * loading contacts indicator
   * @default undefined
  */
  loading?: boolean;
  /**
   * Title to display on top of table
   * @default undefined
   */
  title?: string;
  action?: IButton;
}

const Table = ({
  listItems,
  hideColumnTitles = false,
  equalWidthColumns = false,
  listGap = 0,
  loading,
  initialSortBy,
  title,
  action
}: ITable) => {
  const [sortBy, setSortBy] = useState<{ by: string, dir: 'asc' | 'desc'}>();
  const listItem = listItems?.sort((a,b) => Object.keys(b).length - Object.keys(a).length)[0];
  const columnTitles = listItems.length ? Object.keys(listItem) : []

  useEffect(() => {
    setSortBy({ by: initialSortBy ?? columnTitles[0], dir: 'asc' })
  }, [])

  const handleSort = (a: TListItem,b: TListItem) => {
    if (sortBy?.dir === 'asc') {
      return a[sortBy?.by ?? columnTitles[0]] > b[sortBy?.by ?? columnTitles[0]] ? 1 : -1
    }
    if (sortBy?.dir === 'desc') {
      return a[sortBy?.by ?? columnTitles[0]] > b[sortBy?.by ?? columnTitles[0]] ? -1 : 1
    }

    return 0
  }
  
  const renderIcon = (obj: TIconButton, i: string) => {
    return <IconButton key={i} {...obj} size='medium' noPadding isTransparent noBorder />
  }
  
  const renderList = (columnTitle: string) => {
    return listItems.sort((a: TListItem,b: TListItem) => handleSort(a,b)).map((item, i) => {
      return typeof item[columnTitle] === 'object' ? <div key={`${item[columnTitle]}-${i}`} className={cx(styles.item, styles.icon)}>{renderIcon(item[columnTitle] as TIconButton, i.toString())}</div> : <span key={`${item[columnTitle]}-${i}`} className={styles.item}>{item[columnTitle]}</span>
    })
  }
  
  const style: { [key: string]: string } = ({
    '--list-gap': `${listGap}rem`,
  })

  return loading ? <Loader visible size='md' /> : (
    <div className={styles.table} style={style}>
      <div className={styles.top}>
        {title && <Heading className={styles.heading} order={5} children={title} />}
        {action && <Button {...action} />}
      </div>
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
        {columnTitles?.map((columnTitle, i) => {
          const noIcons = columnTitles?.filter(col => !col.includes('icon'))
          return (
            <div key={`${columnTitle}-${i}`} className={cx(styles.column, {
              [styles.equalWidthColumn]: equalWidthColumns,
              [styles.textColumn]: !columnTitle.includes('icon'),
              [styles.iconColumn]: columnTitle.includes('icon'),
              [styles.lastTextColumn]: noIcons[noIcons?.length - 1] === columnTitle
            })}
            >
              {!hideColumnTitles && (
                <span
                  className={cx(styles.item, styles.columnTitle, {[styles.icon]: columnTitle.includes('icon')})}
                >
                  {!columnTitle.includes('icon') && (
                    <>
                      {columnTitle}
                      <IconButton
                        icon={sortBy?.by === columnTitle && sortBy?.dir === 'asc' ? 'icon-chevron-down' : 'icon-chevron-up'}
                        type='button'
                        onClick={() => setSortBy({ by: columnTitle, dir: sortBy?.by === columnTitle && sortBy?.dir === 'asc' ? 'desc' : 'asc'})}
                        isTransparent
                        noBorder
                      />
                    </>
                  )}
                </span>
              )}
              {renderList(columnTitle)}
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