import cx from 'classnames'
import { Card_16_9, ICard_16_9 } from '../../atoms/card-16-9/card-16-9'
import styles from './card-16-9-list.module.css'

export type TMaxColumns = 3 | 4

export interface ICard_16_9_List {
  list: Array<ICard_16_9>
  maxColumns: TMaxColumns
}

function getListItemMaxColumns(maxColumns: TMaxColumns) {
  return maxColumns === 4 ? styles.maxColumnsFour : styles.maxColumnsThree
}
const Card_16_9_List = ({ list = [], maxColumns }: ICard_16_9_List) => {
  return (
    <ul className={styles.list}>
      {list.map((li: ICard_16_9, i: number) => (
        <li key={i} className={cx(styles.listItem, getListItemMaxColumns(maxColumns))}>
          <Card_16_9 {...li} />
        </li>
      ))}
    </ul>
  )
}

export { Card_16_9_List }
