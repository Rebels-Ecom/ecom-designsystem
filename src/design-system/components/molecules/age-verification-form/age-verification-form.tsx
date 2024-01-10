import { Heading, Text } from '../../atoms';
import { FlexContainer } from '../../layouts';
import styles from './age-verification-form.module.css';
import { motion } from 'framer-motion';
import { Button, IButton } from '../../atoms/button/button';

type TAgeVerificationForm = {
  actions: IButton[];
  title: string;
  description: string;
  errorMessage?: string;
};

const AgeVerificationForm = ({
  title,
  description,
  errorMessage,
  actions
}: TAgeVerificationForm) => {
  return (
    <FlexContainer
      className={styles.ageVerificationForm}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      <Heading order={3} noMargin align='center'>{title}</Heading>
      <Text className={styles.description} align='center'>{description}</Text>
      <FlexContainer flexDirection='column' alignItems='center'>
        <FlexContainer>
          {actions.map((action, i) => <Button key={i} {...action} />)}
        </FlexContainer>
        <div className={styles.errorContainer}>
          {errorMessage && (
            <motion.div className={styles.errorMessage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Text color='error' align='center'>{errorMessage}</Text>
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
