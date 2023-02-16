import styles from './table.module.css'

export interface ITable {
  children: React.ReactNode
}

const Table = ({ children }: ITable) => {
  return (
    <div className={styles.outerWrapper}>
      <table className={styles.table}>{children}</table>
    </div>
  )
}

export { Table }
