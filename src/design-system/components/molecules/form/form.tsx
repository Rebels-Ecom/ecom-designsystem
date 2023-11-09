import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button, ExpandableWrapper, Heading, Icon, Loader } from '../../atoms';
import styles from './form.module.css';
import { FlexContainer } from '../../layouts';
import { IFormTemplateProps, TFormFieldType } from './types';
import { InputField } from './components/input-field';
import { validateField } from './helpers';
import cx from 'classnames';

const Form = ({ onSubmit, onControlledSubmit, formTitle, formSubtitle, loading, success, ...props }: IFormTemplateProps) => {
  const [fields, setFields] = useState<Array<TFormFieldType>>(props.fields)
  const [isValid, setIsValid] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!formRef.current) {
      return
    }
    const isValid = fields.some((field) => field.required && !field.valid) ? false : true

    setIsValid(isValid)
  }, [fields])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      onSubmit?.(fields)
      onControlledSubmit?.(event)
    },
    [fields, onSubmit]
  )

  const handleChange = useCallback((value: string, fieldName: string) => {
    const fieldToUpdate = fields.find((field) => field.name === fieldName)

    if (!fieldToUpdate) {
      return
    }

    setFields((prevFields) => {
      const updatedFields = prevFields.map((field) => {
        if (field.name === fieldName) {
          return {
            ...field,
            dirty: true,
            valid: validateField({ ...field, value }),
            value,
          }
        } else {
          return field
        }
      })

      return updatedFields
    })
  }, [])

  return success ? (
    <div className={styles.loaderContainer}>
      <motion.div initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: success ? 1 : 0, scale: success ? 1 : 0.2  }}>
        <Icon icon='icon-check' className={styles.successIcon} />
      </motion.div>
    </div>
    ) : (
    <form ref={formRef} className={cx(styles.form, props.alignSubmitButtonHorizontally ? styles.formDirectionRow : '')} onSubmit={handleSubmit}>
      <div>
        {formTitle && (
          <Heading order={3} className={styles.formTitle}>
            {formTitle}
          </Heading>
        )}
        {formSubtitle && <p className={styles.formSubtitle}>{formSubtitle}</p>}
        <FlexContainer wrap>
          {fields?.map((field, i) => {
            return (
              <div key={field.name} className={cx(styles.field, styles[field.size ?? 'half'])}>
                {field.fieldType === 'input' && (
                  <InputField
                    {...field}
                    value={field.value ?? field.originalValue}
                    onChange={(val, name) => {
                      handleChange(val, name)
                    }}
                    onControlledChange={(e) => {
                      field.onControlledChange?.(e)
                    }}
                    focusOnRender={i === 0}
                    readonly={field.blocked}
                    disabled={loading}
                  />
                )}
              </div>
            )
          })}
        </FlexContainer>
        <ExpandableWrapper open={!!props.generalErrorMessage}>
          <FlexContainer alignItems="center" justifyContent="center">
            {props.generalErrorMessage && <p className={cx(styles.generalErrorMessage, {[styles.generalErrorMessageDisabled]: loading})} dangerouslySetInnerHTML={{ __html: props.generalErrorMessage }}></p>}
          </FlexContainer>
        </ExpandableWrapper>
      </div>
      {props.actions && (
        <FlexContainer justifyContent={props.alignActions ?? 'center'}>
          {props.actions.map((action, i) => (
            <Button
              key={`${action.type}-${i}`}
              {...action}
              disabled={action.type === 'submit' ? !isValid : loading}
              loading={action.type === 'submit' && loading}
            />
          ))}
        </FlexContainer>
      )}
      {props.links && (
        <FlexContainer alignItems={props.alignActions ?? 'center'} flexDirection='column'>
          {props.links.map((link, i) => (
            <a className={cx(styles.link, {[styles.linkDisabled]: loading})} key={`${link.name}-${i}`} href={link.href} target="_blank">
              {link.name}
            </a>
          ))}
        </FlexContainer>
      )}
    </form>
  )
}

export { Form }
