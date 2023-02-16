import styles from './unordered-list.module.css'

export interface IUnorderedList {
  children: React.ReactNode
}

const UnorderedList = ({ children }: IUnorderedList) => <ul className={styles.list}>{children}</ul>

export { UnorderedList }
