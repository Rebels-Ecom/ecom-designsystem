import { LoginForm } from '../../organisms'
import styles from './login-page.module.css'
import { ILoginForm } from '../../organisms/login-form/login-form'

const LoginPage = (props: ILoginForm) => {
  return (
    <div className={styles.pageLayout}>
      <LoginForm {...props} />
    </div>
  )
}

export { LoginPage }
