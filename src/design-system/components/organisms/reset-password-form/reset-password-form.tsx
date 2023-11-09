import { useMemo } from 'react'
import { Form } from '../../molecules'
import { Logotype, TLogotype } from '../../molecules/logotype/logotype'
import { IButton } from '../../atoms/button/button'
import { validateField } from '../../molecules/form/helpers'
import { TFormFieldType } from '../../molecules/form/types'
import styles from './reset-password-form.module.css'

type ILink = {
  name: string;
  href: string;
}

export interface ILoginForm {
  title: string;
  description?: string;
  usernameLabel: string;
  username?: string;
  primarySubmitLabel: string;
  errorMessage?: any;
  usernameError?: string;
  onSubmit: (data: TFormFieldType[]) => void;
  loading?: boolean;
  logo: TLogotype;
  success?: boolean;
  becomeClient?: {
    name: string;
    link: string;
  }
}

const ResetPasswordForm = ({
  title,
  description,
  usernameLabel,
  username,
  onSubmit,
  primarySubmitLabel,
  errorMessage,
  usernameError,
  loading,
  logo,
  success,
  becomeClient
}: ILoginForm) => {
  const actions: IButton[] = useMemo(() => {
    const x: IButton[] = [{
      children: primarySubmitLabel,
      surface: 'primary',
      type: 'submit',
      size: 'small'
    }];

    return x;
  }, [primarySubmitLabel])

  const links: ILink[] = useMemo(() => {
    const x: ILink[] = [];
    
    if (becomeClient) {
      x.push({
        name: becomeClient.name,
        href: becomeClient.link
      })
    }
    return x;
  }, [becomeClient])

  const fields: TFormFieldType[] = useMemo(() => [{
    fieldType: 'input',
    name: 'email',
    label: usernameLabel,
    originalValue: username ?? '',
    type: 'text',
    pattern: 'email',
    required: true,
    error: usernameError ?? 'Ange en korrekt e-post e.g. mail@mail.com', // TODO: store backup copy somewhere?
    size: 'full'
  }], [])

  return (
    <div className={styles.resetPasswordForm}>
      {logo && <Logotype {...logo} classNamePicture={styles.logo} />}
      <Form
        formTitle={title}
        formSubtitle={description}
        fields={fields.map(field => ({...field, valid: validateField(field)}))}
        loading={!!loading}
        onSubmit={onSubmit}
        actions={actions}
        generalErrorMessage={errorMessage}
        success={success}
        links={links}
      />
    </div>
  )
}

export { ResetPasswordForm }
