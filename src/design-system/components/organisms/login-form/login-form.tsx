import styles from './login-form.module.css'
import { Form } from '../../molecules'
import { Logotype, TLogotype } from '../../molecules/logotype/logotype'
import { useMemo } from 'react'
import { IButton } from '../../atoms/button/button'
import { validateField } from '../../molecules/form/helpers'
import { IFormTemplateProps, TFormFieldType } from '../../molecules/form/types'
import { ILinkButton } from '../../atoms/link-button/link-button'

type ILink = {
  name: string;
  href: string;
}

export interface ILoginForm extends Pick<IFormTemplateProps, 'responseMessage'> {
  title: string;
  description?: string;
  usernameLabel: string;
  username?: string;
  passwordLabel: string;
  password?: string;
  actions: IButton[];
  linkActions?: ILinkButton[];
  forgotPassword: {
    name: string;
    href: string;
  };
  primarySubmitLabel: string;
  secondarySubmitLabel?: string;
  offerLink?: {
    name: string;
    href: string;
  };
  errorMessage?: any;
  usernameError?: string;
  passwordError?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading?: boolean;
  logo: TLogotype;
  captcha?: JSX.Element;
  submitDisabled?: boolean;
}

const LoginForm = ({
  title,
  description,
  usernameLabel,
  username,
  passwordLabel,
  password,
  forgotPassword,
  onSubmit,
  offerLink,
  errorMessage,
  usernameError,
  passwordError,
  onPasswordChange,
  onUsernameChange,
  loading,
  logo,
  responseMessage,
  captcha,
  actions,
  linkActions
}: ILoginForm) => {
  const links: ILink[] = useMemo(() => {
    const x: ILink[] = [];
    
    if (forgotPassword) {
      x.push(forgotPassword)
    }

    if (offerLink) {
      x.push(offerLink)
    }

    return x;
  }, [forgotPassword, offerLink])

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
        linkActions={linkActions}
        generalErrorMessage={errorMessage}
        links={links}
        responseMessage={responseMessage}
        captcha={captcha}
      />
    </div>
  )
}

export { LoginForm }
