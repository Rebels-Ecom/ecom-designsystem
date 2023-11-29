import { Heading, Text } from '../../atoms';
import { FlexContainer } from '../../layouts';
import styles from './age-verification-form.module.css';
import { Form } from '../form/form';
import { IFormTemplateProps, TFormFieldType } from '../form/types';

type TAgeVerificationForm = {
  open: boolean;
  onSubmit?: () => void;
  title: string;
  description: string;
  label: string;
  loading?: boolean;
} & Pick<IFormTemplateProps, 'responseMessage'>;

const AgeVerificationForm = ({ onSubmit, title, description, responseMessage, loading, label }: TAgeVerificationForm) => {
  const handleSubmit = (data: TFormFieldType[]) => {
    console.log('SUBMITTED: ', data[0]?.value)
    if (Number(data[0]?.value ?? 0) > 19) {
      console.log('VERIFIED AND SUBMITTED')
      onSubmit?.();
    }
  }
  return (
    <FlexContainer className={styles.ageVerificationForm} flexDirection='column' justifyContent='center' alignItems='center'>
      {title && !responseMessage && <Heading order={3} noMargin align='center'>{title}</Heading>}
      {description && !responseMessage && <Text className={styles.description} align='center'>{description}</Text>}
      {label && !responseMessage && <Text className={styles.description} align='center'>{label}</Text>}
      <FlexContainer>
        <Form
          fields={[{
            name: 'age',
            fieldType: 'input',
            originalValue: '',
            type: 'number',
            placeholder: '– –',
            focusOnRender: true,
            required: true,
            pattern: 'age-verification',
          }]}
          formTitle=''
          loading={!!loading}
          actions={[
            {
              children: 'OK',
              surface: 'primary',
              type: 'submit',
              size: 'large',
              disabled: loading
            }
          ]}
          onSubmit={handleSubmit}
          alignSubmitButtonHorizontally
          responseMessage={responseMessage}
        />
      </FlexContainer>
    </FlexContainer>
  )
}

export {
  AgeVerificationForm,
}
