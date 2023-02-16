import styles from './divider-lines.module.css'

const DividerLines = () => (
    <div className={styles.dividerWrapper}>
      <div className={styles.divLeft}></div>
      <div className={styles.divCenter}></div>
      <div className={styles.divRight}></div>
    </div>
)

export { DividerLines }
