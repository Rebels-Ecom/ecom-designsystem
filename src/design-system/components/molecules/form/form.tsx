import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button, ExpandableWrapper, Heading, Icon, LinkButton, Text } from '../../atoms'
import styles from './form.module.css'
import { FlexContainer } from '../../layouts'
import { IFormTemplateProps, TFormFieldType } from './types'
import { InputField } from './components/input-field'
import { validateField } from './helpers'
import cx from 'classnames'

const Form = ({ onSubmit, onControlledSubmit, formTitle, formSubtitle, loading, responseMessage, ...props }: IFormTemplateProps) => {
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
          if (field.alphaField) {
            const fieldToMatch = prevFields.find((x) => x.name === field.alphaField)
            return {
              ...field,
              dirty: true,
              valid: fieldToMatch?.value === value,
              value,
            }
          }

          return {
            ...field,
            dirty: true,
            valid: validateField({ ...field, value }),
            value,
          }
        } else {
          if (field.alphaField) {
            return {
              ...field,
              dirty: field.dirty,
              valid: field.value === value,
              value: field.name === fieldName ? value : field.value,
            }
          }
          return field
        }
      })

      return updatedFields
    })
  }, [])

  const handleValidateAutofill = (name: string) => {
    setFields((prevFields) => {
      const updatedFields = prevFields.map((field) => {
        if (field.name === name) {
          return {
            ...field,
            valid: true,
          }
        } else {
          return field
        }
      })

      return updatedFields
    })
  }

  // TODO: extract success message to separate component
  return responseMessage ? (
    <motion.div initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: responseMessage ? 1 : 0, scale: responseMessage ? 1 : 0.2 }}>
      <div className={styles.loaderContainer}>
        {responseMessage.icon && <Icon icon={responseMessage.icon} className={styles.successIcon} />}
        {responseMessage.title && (
          <Heading order={3} noMargin>
            {responseMessage.title}
          </Heading>
        )}
        <Text align="center">{responseMessage.message}</Text>
        {responseMessage.onClose && (
          <Button type="button" surface="primary" onClick={responseMessage.onClose}>
            {responseMessage.closeLabel ?? 'Stäng'}
          </Button>
        )}
      </div>
    </motion.div>
  ) : (
    <form
      ref={formRef}
      className={cx(styles.form, props.alignSubmitButtonHorizontally ? styles.formDirectionRow : '')}
      onSubmit={handleSubmit}
      autoComplete="on"
    >
      <div className={styles.fieldsWrapper}>
        {formTitle && (
          <Heading order={3} className={styles.formTitle}>
            {formTitle}
          </Heading>
        )}
        {formSubtitle && <p className={styles.formSubtitle}>{formSubtitle}</p>}
        <FlexContainer wrap>
          {fields?.map((field, i) => {
            return (
              <div
                key={field.name}
                className={cx(styles.field, props.alignSubmitButtonHorizontally ? styles.fieldDirectionRow : '', styles[field.size ?? 'half'])}
              >
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
                    validateAutofill={props.isLogin ? handleValidateAutofill : undefined}
                  />
                )}
              </div>
            )
          })}
        </FlexContainer>
        <ExpandableWrapper open={!!props.generalErrorMessage}>
          <FlexContainer alignItems="center" justifyContent="center">
            {props.generalErrorMessage && (
              <p
                className={cx(styles.generalErrorMessage, { [styles.generalErrorMessageDisabled]: loading })}
                dangerouslySetInnerHTML={{ __html: props.generalErrorMessage }}
              ></p>
            )}
          </FlexContainer>
        </ExpandableWrapper>
      </div>
      {props.captcha && (
        <FlexContainer justifyContent="center" alignItems="center">
          {props.captcha}
        </FlexContainer>
      )}
      {(props.actions || props.linkActions) && (
        <FlexContainer justifyContent={props.alignActions ?? 'center'} className={styles.actionsWrapper}>
          {props.actions?.map((action, i) => (
            <Button
              key={`${action.type}-${i}`}
              {...action}
              disabled={action.type === 'submit' ? !isValid || action.disabled : action.disabled || loading}
              loading={action.type === 'submit' && loading}
            />
          ))}
          {props.linkActions?.map((action, i) => (
            <LinkButton key={`${action.id ?? '0'}-${i}`} {...action} />
          ))}
        </FlexContainer>
      )}
      {props.links && (
        <FlexContainer alignItems={props.alignActions ?? 'center'} flexDirection="column">
          {props.links.map((link, i) => (
            <a className={cx(styles.link, { [styles.linkDisabled]: loading })} key={`${link.name}-${i}`} href={link.href} target="_blank">
              {link.name}
            </a>
          ))}
        </FlexContainer>
      )}
    </form>
  )
}

export { Form }
