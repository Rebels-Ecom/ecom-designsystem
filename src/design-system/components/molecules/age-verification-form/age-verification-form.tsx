import { Heading, Text } from '../../atoms';
import { FlexContainer } from '../../layouts';
import styles from './age-verification-form.module.css';
import { Form } from '../form/form';
import { IFormTemplateProps, TFormFieldType } from '../form/types';
import { useState } from 'react';
import { motion } from 'framer-motion';

type TAgeVerificationForm = {
  open: boolean;
  onSubmit?: () => void;
  title: string;
  description: string;
  label: string;
  loading?: boolean;
  errorMessage?: string;
} & Pick<IFormTemplateProps, 'responseMessage'>;

const AgeVerificationForm = ({ onSubmit, title, description, responseMessage, loading, label, errorMessage }: TAgeVerificationForm) => {
  const [showError, setShowError] = useState(false);
  const handleSubmit = (data: TFormFieldType[]) => {
    if (Number(data[0]?.value ?? 0) > 19) {
      onSubmit?.();
      setShowError(false);
    } else {
      setShowError(true);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowError(Number(event?.target?.value ?? 0) < 20)
  }

  return (
    <FlexContainer className={styles.ageVerificationForm} flexDirection='column' justifyContent='center' alignItems='center'>
      {title && !responseMessage && <Heading order={3} noMargin align='center'>{title}</Heading>}
      {description && !responseMessage && <Text className={styles.description} align='center'>{description}</Text>}
      {label && !responseMessage && <Text className={styles.description} align='center'>{label}</Text>}
      <FlexContainer flexDirection='column' alignItems='center' gap={0}>
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
            onControlledChange: handleChange
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
        <div style={{ height: '1.25rem' }}>
          {showError && errorMessage && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Text color='error'>{errorMessage}</Text>
            </motion.div>
          )}
        </div>
      </FlexContainer>
    </FlexContainer>
  )
}

export {
  AgeVerificationForm,
}
