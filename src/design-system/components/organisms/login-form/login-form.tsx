import styles from './login-form.module.css'
import { Form } from '../../molecules'
import { Logotype, TLogotype } from '../../molecules/logotype/logotype'
import { useMemo } from 'react'
import { IButton } from '../../atoms/button/button'
import { validateField } from '../../molecules/form/helpers'
import { TFormFieldType } from '../../molecules/form/types'

type ILink = {
  name: string;
  href: string;
}

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
  success?: boolean;
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
  logo,
  success
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
  }, [primarySubmitLabel, secondarySubmitLabel])

  const links: ILink[] = useMemo(() => {
    const x: ILink[] = [];
    
    if (forgotPasswordLabel) {
      x.push({
        name: forgotPasswordLabel,
        href: '#'
      })
    }

    if (offerLinkLabel) {
      x.push({
        name: offerLinkLabel,
        href: '#'
      })
    }

    return x;
  }, [forgotPasswordLabel, offerLinkLabel])

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

  return (
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
        links={links}
        success={success}
      />
    </div>
  )
}

export { LoginForm }
