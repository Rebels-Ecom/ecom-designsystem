import React, { useCallback, useRef } from 'react'
import styles from './newsletter.module.css'
import { InputText } from '../../atoms/inputs/input-text/input-text'
import { Button } from '../../atoms/button/button'
import cx from 'classnames'

export interface INewsletter {
  id: string
  inputValue: string
  setInputValue: (inputValue:string) => void
  setIsFocused: (isFocused: boolean) => void
  isErroneous: boolean
  setIsErroneous: (isErroneous: boolean) => void
  placeholder?: string
  className?: string
  signupForNewsletter: (inputValue:string) => void
}

function Newsletter({ className, id, inputValue, setInputValue, setIsFocused, isErroneous, setIsErroneous, placeholder, signupForNewsletter }: INewsletter) {
  const newsletterWrapperElement = useRef<HTMLDivElement | null>(null)
  const newsletterInputField = useRef<HTMLInputElement | null>(null)

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [setIsFocused])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [setIsFocused])

  const onChange = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
      setIsErroneous(false)
    },
    [setInputValue]
  )

  function onClear() {
    setInputValue('')
    return newsletterInputField?.current && newsletterInputField.current.focus()
  }

  function handleSubmit() {
    const error = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(inputValue);
    if (error) {
      setIsErroneous(true);
    } else {
      signupForNewsletter(inputValue);
      onClear();
    }
  }

  return (
    <div ref={newsletterWrapperElement} className={cx(styles.newsletter, className)}>
      <InputText
        ref={newsletterInputField}
        type="text"
        id={id}
        value={inputValue}
        className={styles.newsletterInputField}
        onChange={onChange}
        onBlur={onBlur}
        isErroneous={isErroneous}
        other={{ autoComplete: 'off' }}
        placeholder={placeholder}
      />
      <Button className={styles.submitButton} type='submit' surface='tertiary' size='large' onClick={handleSubmit}>Nyhetsbrev</Button>
    </div>
  )
}

export { Newsletter }
