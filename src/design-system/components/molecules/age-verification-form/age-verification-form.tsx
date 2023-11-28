import { FormEvent, useState } from 'react';
import { Button, Heading, Text } from '../../atoms';
import { FlexContainer } from '../../layouts';
import { InputField } from '../form/components/input-field';
import styles from './age-verification-form.module.css';
import { Form } from '../form/form';
import { IFormTemplateProps, TFormFieldType } from '../form/types';

type TAgeVerificationForm = {
  open: boolean;
  onSubmit?: () => void;
  title: string;
  description: string;
} & Pick<IFormTemplateProps, 'responseMessage'>;

const AgeVerificationForm = ({ open, onSubmit, title, description, responseMessage }: TAgeVerificationForm) => {
  const [verified, setVerified] = useState(false);
  const [age, setAge] = useState<number | undefined>();
  const handleSubmit = (data: TFormFieldType[]) => {
    // e?.preventDefault();
    console.log('SUBMITTED: ', data[0]?.value)
    if (Number(data[0]?.value ?? 0) > 19) {
      console.log('VERIFIED AND SUBMITTED')
      onSubmit?.();
    }
  }
  const handleChange = (val: string) => {
    if (!val) {
      return;
    }
    if (Number(val) > 19 && !verified) {
      setVerified(true);
    }
    if (Number(val) <= 19 && verified) {
      setVerified(false);
    }
  }
  return (
    <FlexContainer flexDirection='column' justifyContent='center' alignItems='center'>
      {title && !responseMessage && <Heading order={3} noMargin align='center'>{title}</Heading>}
      {description && !responseMessage && <Text align='center'>{description}</Text>}
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
          loading={false}
          actions={[
            {
              children: 'OK',
              surface: 'primary',
              type: 'submit',
              size: 'large',
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
