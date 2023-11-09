import { useMemo } from 'react'
import { Form } from '../../molecules'
import { Logotype, TLogotype } from '../../molecules/logotype/logotype'
import { IButton } from '../../atoms/button/button'
import { validateField } from '../../molecules/form/helpers'
import { IFormTemplateProps, TFormFieldType } from '../../molecules/form/types'
import styles from './reset-password-form.module.css'

type ILink = {
  name: string;
  href: string;
}

export interface ILoginForm extends Pick<IFormTemplateProps, 'responseMessage'> {
  title: string;
  description?: string;
  fieldLabel: string;
  fieldName?: string;
  primarySubmitLabel: string;
  fieldError?: string;
  generalError?: string;
  onSubmit: (data: TFormFieldType[]) => void;
  loading?: boolean;
  logo: TLogotype;
  becomeClient?: {
    name: string;
    link: string;
  }
}

const ResetPasswordForm = ({
  title,
  description,
  fieldLabel,
  fieldName,
  onSubmit,
  primarySubmitLabel,
  generalError,
  fieldError,
  loading,
  logo,
  responseMessage,
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
    label: fieldLabel,
    originalValue: fieldName ?? '',
    type: 'text',
    pattern: 'email',
    required: true,
    error: fieldError ?? 'Ange en korrekt e-post e.g. mail@mail.com', // TODO: store backup copy somewhere?
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
        generalErrorMessage={generalError}
        responseMessage={responseMessage}
        links={links}
      />
    </div>
  )
}

export { ResetPasswordForm }
