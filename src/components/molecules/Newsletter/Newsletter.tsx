import { useRef, useState, type FormEvent, type Ref } from 'react'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { InputText } from '../InputText'
import { Button } from '../Button'
import { InlineError } from '../InlineError'

export interface NewsletterLabels {
  /** Submit button label. @default 'Newsletter' */
  button: string
  /** Accessible name for the email field (it has no visible label). @default 'Email address' */
  input: string
  /** Validation message shown when the email is invalid. @default 'Please enter a valid email address.' */
  error: string
}

export interface NewsletterProps {
  /** Id of the email `<input>`. */
  id: string
  /** Placeholder hint (never a substitute for a label — the label is `labels.input`). */
  placeholder?: string
  /** Called with the email once it validates. */
  onSubmit: (email: string) => void
  /** Initial field value. @default '' */
  defaultValue?: string
  /** Overridable UI strings (English defaults) — see {@link NewsletterLabels}. */
  labels?: Partial<NewsletterLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the email `<input>`. */
  ref?: Ref<HTMLInputElement>
}

const defaultNewsletterLabels: NewsletterLabels = {
  button: 'Newsletter',
  input: 'Email address',
  error: 'Please enter a valid email address.',
}

const EMAIL_RE = /^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/

/**
 * Newsletter email sign-up (molecule): a joined email {@link InputText} + tertiary submit
 * {@link Button} in a real `<form>` (so Enter submits, 2.1.1). The field is named via `labels.input`
 * (it has no visible label — legacy relied on the placeholder, 3.3.2). On an invalid email it renders
 * a `role="alert"` {@link InlineError} wired to the field with `aria-invalid` + `aria-describedby`
 * (3.3.1) — the legacy component signalled the error with a red border only (1.4.1). On success it
 * calls `onSubmit`, clears the field, and returns focus to it. All copy is localisable via `labels`.
 */
function Newsletter({ id, placeholder, onSubmit, defaultValue = '', labels, className, ref }: NewsletterProps) {
  const t = { ...defaultNewsletterLabels, ...labels }
  const [value, setValue] = useState(defaultValue)
  const [isErroneous, setIsErroneous] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const errorId = `${id}-error`

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_RE.test(value)) {
      setIsErroneous(true)
      return
    }
    setIsErroneous(false)
    onSubmit(value)
    setValue('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={handleSubmit} className={cn('w-full max-w-80', className)} noValidate>
      <div className="flex">
        <InputText
          ref={mergeRefs<HTMLInputElement>(inputRef, ref)}
          id={id}
          type="email"
          value={value}
          placeholder={placeholder}
          ariaLabel={t.input}
          isErroneous={isErroneous}
          ariaDescribedBy={isErroneous ? errorId : undefined}
          autoComplete="email"
          fullWidth
          wrapperClassName="flex-1"
          className="rounded-r-none"
          onChange={(event) => {
            setValue(event.target.value)
            setIsErroneous(false)
          }}
        />
        <Button type="submit" surface="tertiary" size="large" className="rounded-l-none">
          {t.button}
        </Button>
      </div>
      {isErroneous && (
        <InlineError id={errorId} className="mt-1">
          {t.error}
        </InlineError>
      )}
    </form>
  )
}

export { Newsletter }
