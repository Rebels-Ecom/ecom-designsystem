import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import type { ButtonProps } from '../../molecules/Button'
import { Form, type FormField, type FormResponseMessage } from '../../molecules/Form'
import { Logotype, type LogotypeVariant } from '../../molecules/Logotype'

/** Field name of the new-password input (also its `id` and the key in the submitted value map). */
const PASSWORD_FIELD = 'reset-new-password'
/** Field name of the confirm-password input, compared against {@link PASSWORD_FIELD}. */
const CONFIRM_FIELD = 'reset-confirm-password'

export interface ResetPasswordFormLabels {
  /** Heading above the fields; also names the `<form>` region (4.1.2). @default 'Reset your password' */
  title: string
  /** Intro paragraph under the title; pass `''` to hide it. @default 'Enter and confirm your new password below.' */
  subtitle: string
  /** Visible label for the new-password field. @default 'New password' */
  passwordLabel: string
  /** Placeholder hint for the new-password field (never a label substitute, 3.3.2). @default 'Enter new password' */
  passwordPlaceholder: string
  /** Instructional hint under the new-password label; pass `''` to hide it. @default 'Use at least 8 characters.' */
  passwordHelperText: string
  /** Error announced when the new-password field is empty/invalid. @default 'Please enter a new password.' */
  passwordError: string
  /** Visible label for the confirm-password field. @default 'Confirm new password' */
  confirmPasswordLabel: string
  /** Placeholder hint for the confirm-password field. @default 'Re-enter new password' */
  confirmPasswordPlaceholder: string
  /** Error announced when the two passwords differ. @default 'The passwords do not match.' */
  mismatchError: string
  /** Submit button label. @default 'Reset password' */
  submitLabel: string
  /** Heading of the success confirmation panel. @default 'Password updated' */
  successTitle: string
  /** Body copy of the success confirmation panel. @default 'Your password has been reset. You can now sign in with your new password.' */
  successMessage: string
  /** Close-button label in the success panel. @default 'Close' */
  closeLabel: string
}

const defaultResetPasswordFormLabels: ResetPasswordFormLabels = {
  title: 'Reset your password',
  subtitle: 'Enter and confirm your new password below.',
  passwordLabel: 'New password',
  passwordPlaceholder: 'Enter new password',
  passwordHelperText: 'Use at least 8 characters.',
  passwordError: 'Please enter a new password.',
  confirmPasswordLabel: 'Confirm new password',
  confirmPasswordPlaceholder: 'Re-enter new password',
  mismatchError: 'The passwords do not match.',
  submitLabel: 'Reset password',
  successTitle: 'Password updated',
  successMessage: 'Your password has been reset. You can now sign in with your new password.',
  closeLabel: 'Close',
}

export interface ResetPasswordFormProps {
  /** Called with the new password once both fields are non-empty and match. */
  onSubmit?: (password: string) => void
  /** Show the Spendrups wordmark above the title. @default true */
  showLogo?: boolean
  /** Which brand mark to render when the logo is shown. @default 'horizontal' */
  logoVariant?: LogotypeVariant
  /** Replace the form with a `role="status"` success panel (4.1.3). @default false */
  success?: boolean
  /** Close handler for the success panel; omit to hide the close button. */
  onSuccessClose?: () => void
  /** Disable every control while the request is in flight; the submit button shows a spinner. @default false */
  loading?: boolean
  /** Form-level error, announced as a `role="alert"` above the submit button (3.3.1). */
  errorMessage?: ReactNode
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<ResetPasswordFormLabels>
  /** Extra classes, merged onto the card wrapper via `cn()`. */
  className?: string
  /** Forwarded to the card wrapper `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Reset-password form (organism): a branded card that lets a signed-out user set a new password by
 * entering it twice. Composes the {@link Logotype} and {@link Form} molecules — `Form` renders a real
 * `<form>` region named by its `title` heading (4.1.2), a new-password field and a confirm-password
 * field wired with `matchField` so the confirm input is invalid (and submit stays disabled) until the
 * two values match, its mismatch message announced via `aria-describedby`/`aria-invalid` and never by
 * colour alone (3.3.1 / 1.4.1). Both inputs are `type="password"` with `autoComplete="new-password"`.
 *
 * Accessibility (generated fresh, not ported): the fields carry real `<label>`s via `FormGroup`
 * (1.3.1 / 3.3.2); `errorMessage` renders as a `role="alert"` (3.3.1); `success` swaps the form for a
 * `role="status"` confirmation panel (4.1.3) without stealing focus. The submit button is a native
 * `type="submit"` control with the canonical focus ring, gated on validity. `onSubmit` reports the
 * new password once both fields match.
 */
function ResetPasswordForm({
  onSubmit,
  showLogo = true,
  logoVariant = 'horizontal',
  success = false,
  onSuccessClose,
  loading = false,
  errorMessage,
  labels,
  className,
  ref,
}: ResetPasswordFormProps) {
  const t = { ...defaultResetPasswordFormLabels, ...labels }

  const fields: FormField[] = [
    {
      name: PASSWORD_FIELD,
      label: t.passwordLabel,
      type: 'password',
      placeholder: t.passwordPlaceholder,
      helperText: t.passwordHelperText || undefined,
      required: true,
      pattern: 'password',
      autoComplete: 'new-password',
      error: t.passwordError,
      size: 'full',
    },
    {
      name: CONFIRM_FIELD,
      label: t.confirmPasswordLabel,
      type: 'password',
      placeholder: t.confirmPasswordPlaceholder,
      required: true,
      matchField: PASSWORD_FIELD,
      autoComplete: 'new-password',
      error: t.mismatchError,
      size: 'full',
    },
  ]

  const actions: ButtonProps[] = [{ children: t.submitLabel, type: 'submit', surface: 'primary' }]

  const responseMessage: FormResponseMessage | undefined = success
    ? {
        title: t.successTitle,
        message: t.successMessage,
        icon: 'icon-check-circle',
        onClose: onSuccessClose,
        closeLabel: t.closeLabel,
      }
    : undefined

  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full max-w-content-text rounded-lg bg-white p-4 pb-8 md:p-12',
        className,
      )}
    >
      {showLogo && <Logotype variant={logoVariant} className="mb-4" />}
      <Form
        formTitle={t.title}
        formSubtitle={t.subtitle || undefined}
        fields={fields}
        actions={actions}
        loading={loading}
        generalError={errorMessage}
        responseMessage={responseMessage}
        onSubmit={(values) => onSubmit?.(values[PASSWORD_FIELD] ?? '')}
      />
    </div>
  )
}

export { ResetPasswordForm }
