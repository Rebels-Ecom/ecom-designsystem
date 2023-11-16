import styles from './login-form.module.css'
import cx from 'classnames'
import { Form, FormGroup } from '../../molecules'
import { Button, Icon, InputText, Loader, UILink } from '../../atoms'
import { LoadingOverlay } from '../../molecules/loading-overlay/loading-overlay'
import { Logotype, TLogotype } from '../../molecules/logotype/logotype'
import { useMemo } from 'react'
import { IButton, TButtonType } from '../../atoms/button/button'
import { validateField } from '../../molecules/form/helpers'
import { TFormFieldType } from '../../molecules/form/types'

export interface ILoginForm {
  title: string;
  description?: string;
  usernameLabel: string;
  username?: string;
  passwordLabel: string;
  password?: string;
  forgotPasswordLabel: string;
  primarySubmitLabel: string;
  secondarySubmitLabel?: string;
  offerLinkLabel?: string;
  errorMessage?: any;
  usernameError?: string;
  passwordError?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading?: boolean;
  logo: TLogotype;
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
  usernameError,
  passwordError,
  onPasswordChange,
  onUsernameChange,
  loading,
  logo
}: ILoginForm) => {
  const actions: IButton[] = useMemo(() => {
    const x: IButton[] = [{
      children: primarySubmitLabel,
      surface: 'primary',
      type: 'submit',
      size: 'small'
    }];

    if (secondarySubmitLabel) {
      x.push({
        children: secondarySubmitLabel,
        surface: 'secondary',
        type: 'button',
        size: 'small'
      })
    }

    return x;
  }, [secondarySubmitLabel])

  const fields: TFormFieldType[] = useMemo(() => [{
    fieldType: 'input',
    name: 'email',
    label: usernameLabel,
    originalValue: username ?? '',
    type: 'text',
    pattern: 'email',
    onControlledChange: onUsernameChange,
    required: true,
    error: usernameError ?? 'Ange en korrekt e-post e.g. mail@mail.com', // TODO: store backup copy somewhere?
    size: 'full'
  }, {
    fieldType: 'input',
    name: 'password',
    label: passwordLabel,
    originalValue: password ?? '',
    type: 'password',
    pattern: 'password',
    onControlledChange: onPasswordChange,
    required: true,
    error: passwordError ?? 'Lösenord måste vara minst x tecken...', // TODO: store backup copy somewhere?
    size: 'full'
  }], [])

  // TODO: remove second part of ternary when tested properly
  return 1 > 0 ? (
    <div className={styles.loginForm}>
      {logo && <Logotype {...logo} classNamePicture={styles.logo} />}
      <Form
        formTitle={title}
        formSubtitle={description}
        fields={fields.map(field => {
          return ({...field, valid: validateField(field)})})}
        loading={!!loading}
        onControlledSubmit={onSubmit}
        actions={actions}
        generalErrorMessage={errorMessage}
        links={forgotPasswordLabel ? [{ name: forgotPasswordLabel, href: '#' }] : undefined}
      />
    </div>
  ) : (
    <form className={styles.loginForm} onSubmit={onSubmit}>
      {loading && <LoadingOverlay isVisible={loading} position='absolute' className={styles.overlay} loaderSize='md'></LoadingOverlay>}
      {logo && <Logotype {...logo} classNamePicture={styles.logo} />}
      <h1 className="h3">{title}</h1>
      {description && <p>{description}</p>}
      <FormGroup label={usernameLabel} formElementId="email" errorText={usernameError}>
        <InputText id="email" value={username} autocomplete="username" onChange={onUsernameChange} />
      </FormGroup>
      <FormGroup label={passwordLabel} formElementId="password" errorText={passwordError}>
        <InputText id="password" type="password" autocomplete="current-password" value={password} onChange={onPasswordChange} />
      </FormGroup>
      <UILink onSurface="transparent" href="#">
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
        <UILink onSurface="transparent" href="#">
          {offerLinkLabel}
        </UILink>
      )}
    </form>
  )
}

export { LoginForm }
