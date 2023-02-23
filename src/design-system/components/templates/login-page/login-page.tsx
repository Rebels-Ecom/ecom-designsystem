import styles from './login-page.module.css'

const LoginPage = ({ children }: any) => {
  return <div className={styles.pageLayout}>{children}</div>
}

export { LoginPage }
