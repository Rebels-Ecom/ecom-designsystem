import styles from './ordered-list.module.css'

export interface IOrderedList {
  children: React.ReactNode
}

const OrderedList = ({ children }: IOrderedList) => <ol className={styles.list}>{children}</ol>

export { OrderedList }
