import styles from './login-page.module.css'

const LoginPage = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.pageLayout}>{children}</div>
}

export { LoginPage }
