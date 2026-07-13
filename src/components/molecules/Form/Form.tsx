import { useId, useState } from 'react'
import type { FormEvent, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon, type IconName } from '../../atoms/Icon'
import { Button, type ButtonProps } from '../Button'
import { FormGroup } from '../FormGroup'
import { InputText, type InputTextType } from '../InputText'
import { LinkButton, type LinkButtonProps } from '../LinkButton'
import { UiLink } from '../UiLink'

export type FormPattern = 'email' | 'password' | 'age-verification'
export type FormFieldSize = 'half' | 'full'
export type FormAlign = 'start' | 'center' | 'end'

export interface FormField {
  /** Field name — the input `id`, the `<label htmlFor>` target, and the key in the submitted values. */
  name: string
  /** Visible label (the field's accessible name via `FormGroup`). */
  label?: string
  /** Input type. @default 'text' */
  type?: InputTextType
  /** Placeholder hint — never a substitute for the label (3.3.2). */
  placeholder?: string
  /** Require a value for the form to be submittable. @default false */
  required?: boolean
  /** Error message shown once the field is dirty and invalid (linked via `aria-describedby`, 3.3.1). */
  error?: string
  /** Instructional hint shown under the label. */
  helperText?: string
  /** Built-in validation rule. */
  pattern?: FormPattern
  /** Column span — `full` spans the whole row, `half` shares a row on `lg`. @default 'half' */
  size?: FormFieldSize
  /** Prefilled value. */
  defaultValue?: string
  /** `autocomplete` token so browsers/AT can identify the field's purpose (1.3.5). */
  autoComplete?: string
  /** Render the field read-only. @default false */
  readOnly?: boolean
  /** Name of another field whose value this one must equal (e.g. confirm-password → new-password). */
  matchField?: string
  /** Notified with the new value on every change (per-field controlled hook). */
  onValueChange?: (value: string) => void
}

export interface FormLink {
  /** Visible link text (its accessible name). */
  name: string
  /** Destination URL. */
  href: string
  /** Open in a new tab (adds `rel="noopener noreferrer"`). @default false */
  isExternal?: boolean
  /** Activation handler (analytics etc.). */
  onClick?: () => void
}

export interface FormResponseMessage {
  /** Body copy of the success message. */
  message: string
  /** Optional heading. */
  title?: string
  /** Optional decorative status glyph. */
  icon?: IconName
  /** When set, renders a close button that calls this. */
  onClose?: () => void
  /** Close-button label; falls back to `labels.close`. */
  closeLabel?: string
}

export interface FormLabels {
  /** Default close-button label in the success message. @default 'Close' */
  close: string
}

const defaultFormLabels: FormLabels = {
  close: 'Close',
}

export interface FormProps {
  /** Heading rendered above the fields; also names the `<form>` region (4.1.2). */
  formTitle: string
  /** Sub-heading under the title. */
  formSubtitle?: string
  /** Field configuration, rendered in order. */
  fields: FormField[]
  /** Primary action buttons (a `type="submit"` action is gated on validity). */
  actions?: ButtonProps[]
  /** Link-styled actions rendered beside the buttons. */
  linkActions?: LinkButtonProps[]
  /** Plain inline links (e.g. "Forgot password?"). */
  links?: FormLink[]
  /** Called on submit with the current `{ name: value }` map. */
  onSubmit?: (values: Record<string, string>) => void
  /** Called on submit with the raw form event (for consumers driving submission themselves). */
  onControlledSubmit?: (event: FormEvent<HTMLFormElement>) => void
  /** Disable every control while a request is in flight; the submit button shows a spinner. @default false */
  loading?: boolean
  /** Form-level error, shown as a `role="alert"` above the actions. */
  generalError?: ReactNode
  /** When set, the form is replaced by a success message (a `role="status"` region). */
  responseMessage?: FormResponseMessage
  /** Optional captcha node, centred above the actions. */
  captcha?: ReactNode
  /** Horizontal alignment of the action row. @default 'center' */
  alignActions?: FormAlign
  /** Login mode — keep the submit button enabled regardless of validity. @default false */
  isLogin?: boolean
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<FormLabels>
  /** Extra classes, merged onto the `<form>` via `cn()`. */
  className?: string
  /** Forwarded to the `<form>`. */
  ref?: Ref<HTMLFormElement>
}

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/

function validatePattern(pattern: FormPattern, value: string): boolean {
  switch (pattern) {
    case 'email':
      return emailRegex.test(value)
    case 'password':
      return value.length > 0
    case 'age-verification':
      return Number(value) > 19
    default:
      return true
  }
}

/** Validity of one field given the whole current value map (matchField compares two fields). */
function isFieldValid(field: FormField, values: Record<string, string>): boolean {
  const value = values[field.name] ?? ''
  if (field.matchField) {
    if (value !== (values[field.matchField] ?? '')) return false
    return field.required ? value.length > 0 : true
  }
  if (field.pattern) {
    if (value === '') return !field.required
    return validatePattern(field.pattern, value)
  }
  return field.required ? value.length > 0 : true
}

const alignClasses: Record<FormAlign, string> = {
  start: 'md:justify-start',
  center: 'md:justify-center',
  end: 'md:justify-end',
}

/**
 * Configuration-driven form (molecule) composing {@link FormGroup} + {@link InputText} per field, with
 * {@link Button}/{@link LinkButton} actions and inline {@link UiLink}s. The `<form>` is a region named
 * by its `formTitle` heading (4.1.2); each field gets a real `<label>` and — via FormGroup — an
 * `aria-describedby`/`aria-invalid` wired error that is announced as it appears, never signalled by
 * colour alone (3.3.1 / 1.4.1). A `type="submit"` action is disabled until every required (and every
 * `matchField`-compared) field is valid, unless `isLogin` keeps it enabled. `generalError` renders as a
 * `role="alert"`; a `responseMessage` replaces the form with a `role="status"` success panel. `loading`
 * disables the fields and spins the submit button. Native `outline`/browser validation bubbles are
 * suppressed (`noValidate`) in favour of the accessible inline messages; nothing auto-focuses on mount
 * (no focus theft, unlike the legacy `focusOnRender`). Submission reports a `{ name: value }` map.
 */
function Form({
  formTitle,
  formSubtitle,
  fields,
  actions,
  linkActions,
  links,
  onSubmit,
  onControlledSubmit,
  loading = false,
  generalError,
  responseMessage,
  captcha,
  alignActions = 'center',
  isLogin = false,
  labels,
  className,
  ref,
}: FormProps) {
  const t = { ...defaultFormLabels, ...labels }
  const titleId = useId()
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((field) => [field.name, field.defaultValue ?? ''])),
  )
  const [dirty, setDirty] = useState<Record<string, boolean>>({})

  const handleChange = (field: FormField, value: string) => {
    setValues((prev) => ({ ...prev, [field.name]: value }))
    setDirty((prev) => ({ ...prev, [field.name]: true }))
    field.onValueChange?.(value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.(values)
    onControlledSubmit?.(event)
  }

  const isValid = fields.every(
    (field) => (!field.required && !field.matchField) || isFieldValid(field, values),
  )

  if (responseMessage) {
    return (
      <div
        role="status"
        className="flex min-h-96 w-full flex-col items-center justify-center gap-4 text-center"
      >
        {responseMessage.icon && (
          <Icon icon={responseMessage.icon} className="text-icon-2xl text-icon-decorative-orange" />
        )}
        {responseMessage.title && (
          <h3 className="text-h-m font-bold lg:text-h-m-lg">{responseMessage.title}</h3>
        )}
        <p className="text-body text-text-default">{responseMessage.message}</p>
        {responseMessage.onClose && (
          <Button type="button" surface="primary" onClick={responseMessage.onClose}>
            {responseMessage.closeLabel ?? t.close}
          </Button>
        )}
      </div>
    )
  }

  return (
    <form
      ref={ref}
      aria-labelledby={titleId}
      onSubmit={handleSubmit}
      autoComplete="on"
      noValidate
      className={cn('flex flex-col gap-4', className)}
    >
      <div className="flex flex-col">
        <h3 id={titleId} className="mb-4 text-h-m font-bold lg:text-h-m-lg">
          {formTitle}
        </h3>
        {formSubtitle && <p className="mb-4 text-body text-text-subdued">{formSubtitle}</p>}

        <div className="grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2">
          {fields.map((field) => {
            const value = values[field.name] ?? ''
            const showError =
              Boolean(field.error) && dirty[field.name] && !isFieldValid(field, values)
            return (
              <FormGroup
                key={field.name}
                label={field.label}
                formElementId={field.name}
                helperText={field.helperText}
                errorText={showError ? field.error : undefined}
                reserveErrorSpace
                fullWidth
                className={field.size === 'full' ? 'lg:col-span-2' : undefined}
              >
                <InputText
                  id={field.name}
                  name={field.name}
                  type={field.type ?? 'text'}
                  value={value}
                  placeholder={field.placeholder}
                  required={field.required}
                  readOnly={field.readOnly}
                  disabled={loading}
                  autoComplete={field.autoComplete}
                  fullWidth
                  onChange={(event) => handleChange(field, event.target.value)}
                />
              </FormGroup>
            )
          })}
        </div>

        {generalError && (
          <p className="mt-2 text-center text-body text-text-critical" role="alert">
            {generalError}
          </p>
        )}
      </div>

      {captcha && <div className="flex justify-center">{captcha}</div>}

      {(actions || linkActions) && (
        <div className={cn('flex flex-col items-center gap-4 md:flex-row', alignClasses[alignActions])}>
          {actions?.map((action, index) => {
            const isSubmit = action.type === 'submit'
            const disabled = isSubmit
              ? (!isLogin && !isValid) || action.disabled || loading
              : action.disabled || loading
            return (
              <Button
                key={`action-${index}`}
                {...action}
                disabled={disabled}
                loading={isSubmit ? loading : action.loading}
              />
            )
          })}
          {linkActions?.map((action, index) => (
            <LinkButton key={`link-action-${index}`} {...action} />
          ))}
        </div>
      )}

      {links && (
        <div className="flex flex-col items-center gap-2">
          {links.map((link) => (
            <UiLink key={link.name} href={link.href} isExternal={link.isExternal} onClick={link.onClick}>
              {link.name}
            </UiLink>
          ))}
        </div>
      )}
    </form>
  )
}

export { Form }
