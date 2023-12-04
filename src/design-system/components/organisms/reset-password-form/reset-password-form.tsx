import { useMemo } from 'react'
import { Form } from '../../molecules'
import { Logotype, TLogotype } from '../../molecules/logotype/logotype'
import { IButton } from '../../atoms/button/button'
import { validateField } from '../../molecules/form/helpers'
import { IFormTemplateProps, TFormFieldType } from '../../molecules/form/types'
import styles from './reset-password-form.module.css'

export interface IResetPasswordForm extends IFormTemplateProps {
  logo: TLogotype;
}

const ResetPasswordForm = ({
  logo,
  ...props
}: IResetPasswordForm) => {
  return (
    <div className={styles.resetPasswordForm}>
      {logo && <Logotype {...logo} classNamePicture={styles.logo} />}
      <Form {...props} />
    </div>
  )
}

export { ResetPasswordForm }
