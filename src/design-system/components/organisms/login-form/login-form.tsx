import styles from './login-form.module.css'
import cx from 'classnames'
import { FormGroup } from '../../molecules'
import { Button, Icon, InputText, Loader, UILink } from '../../atoms'
import { LoadingOverlay } from '../../molecules/loading-overlay/loading-overlay'

export interface ILoginForm {
  title: string
  description?: string
  usernameLabel: string
  username?: string
  passwordLabel: string
  password?: string
  forgotPasswordLabel: string
  primarySubmitLabel: string
  secondarySubmitLabel?: string
  offerLinkLabel?: string
  errorMessage?: string
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  loading?: boolean 
}

const LoginForm = ({
  title,
  description,
  usernameLabel,
  username,
  passwordLabel,
  password,
  forgotPasswordLabel,
  onSubmit,
  primarySubmitLabel,
  secondarySubmitLabel,
  offerLinkLabel,
  errorMessage,
  onPasswordChange,
  onUsernameChange,
  loading
}: ILoginForm) => {
  return (
    <form className={styles.loginForm} onSubmit={onSubmit}>
      {loading && <LoadingOverlay isVisible={loading} position='absolute' className={styles.overlay} loaderSize='md'></LoadingOverlay>}
      <h1 className="h3">{title}</h1>
      {description && <p>{description}</p>}
      <FormGroup label={usernameLabel} formElementId="email">
        <InputText id="email" value={username} autocomplete="username" onChange={onUsernameChange} />
      </FormGroup>
      <FormGroup label={passwordLabel} formElementId="password">
        <InputText id="password" type="password" autocomplete="current-password" value={password} onChange={onPasswordChange} />
      </FormGroup>
      {errorMessage && <div className={cx(styles.errorMessage)}>{errorMessage}</div>}
      <UILink onSurface="transparent" size="default" href="#">
        {forgotPasswordLabel}
      </UILink>
      <Button type="submit" surface="primary" size="small" fullWidth>
        {primarySubmitLabel}
      </Button>
      {secondarySubmitLabel && (
        <Button type="submit" surface="secondary" size="small" fullWidth>
          {secondarySubmitLabel}
        </Button>
      )}
      {offerLinkLabel && (
        <UILink onSurface="transparent" size="default" href="#">
          {offerLinkLabel}
        </UILink>
      )}
    </form>
  )
}

export { LoginForm }
