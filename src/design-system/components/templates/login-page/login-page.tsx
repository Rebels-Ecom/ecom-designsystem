import styles from './login-page.module.css'
interface ILoginPage {
  children: React.ReactElement
}
const LoginPage: React.FunctionComponent<ILoginPage> = ({ children }) => {
  return <div className={styles.pageLayout}>{children}</div>
}

export { LoginPage }
