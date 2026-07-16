import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ResetPasswordForm } from './ResetPasswordForm'

const meta = {
  title: 'Design System/Organisms/ResetPasswordForm',
  component: ResetPasswordForm,
} satisfies Meta<typeof ResetPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical flow. The play test proves the confirm-password gate: a mismatch surfaces the inline
 * error (`role="alert"`) and keeps submit disabled, and matching values enable submission and report
 * the new password to `onSubmit`.
 */
export const Default: Story = {
  args: {
    onSubmit: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const password = canvas.getByLabelText('New password')
    const confirm = canvas.getByLabelText('Confirm new password')
    const submit = canvas.getByRole('button', { name: 'Reset password' })

    // A mismatch surfaces the error and blocks submit.
    await userEvent.type(password, 'sup3rSecret')
    await userEvent.type(confirm, 'different')
    await expect(submit).toBeDisabled()
    await expect(canvas.getByRole('alert')).toHaveTextContent('The passwords do not match.')
    await expect(args.onSubmit).not.toHaveBeenCalled()

    // Correcting the confirm field enables submit and reports the password.
    await userEvent.clear(confirm)
    await userEvent.type(confirm, 'sup3rSecret')
    await expect(submit).toBeEnabled()
    await userEvent.click(submit)
    await expect(args.onSubmit).toHaveBeenCalledWith('sup3rSecret')
  },
}

/**
 * Error state: a form-level failure (e.g. an expired reset link) is announced via `role="alert"`,
 * scanned by axe alongside the empty fields.
 */
export const ErrorState: Story = {
  args: {
    onSubmit: fn(),
    errorMessage: 'This reset link has expired. Please request a new one.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('alert')).toHaveTextContent('This reset link has expired')
  },
}

/**
 * Success state: after a successful reset the form is replaced by a `role="status"` confirmation
 * panel with a heading and a close button, scanned by axe.
 */
export const SuccessState: Story = {
  args: {
    success: true,
    onSuccessClose: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { name: 'Password updated' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  },
}

/**
 * Every built-in string is overridable for localisation (English defaults). The play test overrides
 * `labels` with Swedish copy and asserts the translated field label, submit label and mismatch error.
 */
export const Localized: Story = {
  args: {
    onSubmit: fn(),
    labels: {
      title: 'Återställ ditt lösenord',
      subtitle: 'Ange och bekräfta ditt nya lösenord nedan.',
      passwordLabel: 'Nytt lösenord',
      passwordPlaceholder: 'Ange nytt lösenord',
      passwordHelperText: 'Använd minst 8 tecken.',
      passwordError: 'Du måste ange ett lösenord.',
      confirmPasswordLabel: 'Upprepa lösenord',
      confirmPasswordPlaceholder: 'Ange lösenordet igen',
      mismatchError: 'Lösenorden matchar inte.',
      submitLabel: 'Återställ lösenord',
      successTitle: 'Lösenordet uppdaterat',
      successMessage: 'Ditt lösenord har återställts.',
      closeLabel: 'Stäng',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Återställ lösenord' })).toBeInTheDocument()
    const password = canvas.getByLabelText('Nytt lösenord')
    const confirm = canvas.getByLabelText('Upprepa lösenord')
    await userEvent.type(password, 'lösenord1')
    await userEvent.type(confirm, 'lösenord2')
    await expect(canvas.getByRole('alert')).toHaveTextContent('Lösenorden matchar inte.')
  },
}

/**
 * Visual parity frame — reproduces the primary reset-password scene (logo, title, the two password
 * fields and the centred submit) in the branded card. No legacy baseline exists for this component,
 * so it feeds the review gallery current-only. No `play` (the captured frame must not mutate).
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {},
}
