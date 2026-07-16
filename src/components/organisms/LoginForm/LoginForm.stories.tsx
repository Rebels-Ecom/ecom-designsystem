import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { LoginForm } from './LoginForm'

const meta = {
  title: 'Design System/Organisms/LoginForm',
  component: LoginForm,
  parameters: { layout: 'fullscreen' },
  args: {
    logo: <span>Logo goes here</span>,
    title: 'Log in',
    description: 'Enter your details below',
    usernameLabel: 'Email address',
    passwordLabel: 'Password',
    primarySubmitLabel: 'Log in',
    forgotPassword: { name: 'Forgot your password?', href: '#' },
    onSubmit: fn(),
    onUsernameChange: fn(),
    onPasswordChange: fn(),
  },
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical: a controlled login form. Typing updates the fields; the primary button is a real
 * `type="submit"`, and submitting (with `preventDefault` handled internally) fires `onSubmit`.
 */
export const Default: Story = {
  render: (args) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
      <div style={{ maxWidth: '1254px', margin: '0 auto' }}>
        <LoginForm
          {...args}
          username={username}
          password={password}
          onUsernameChange={(event) => {
            setUsername(event.currentTarget.value)
            args.onUsernameChange?.(event)
          }}
          onPasswordChange={(event) => {
            setPassword(event.currentTarget.value)
            args.onPasswordChange?.(event)
          }}
        />
      </div>
    )
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getByLabelText('Email address')
    const pass = canvas.getByLabelText('Password')
    await userEvent.type(email, 'john@doe.se')
    await userEvent.type(pass, 'hunter2secret')
    await expect(email).toHaveValue('john@doe.se')
    await expect(pass).toHaveValue('hunter2secret')

    const submit = canvas.getByRole('button', { name: 'Log in' })
    await expect(submit).toHaveAttribute('type', 'submit')
    await userEvent.click(submit)
    await expect(args.onSubmit).toHaveBeenCalledTimes(1)
  },
}

/**
 * Error states: a field-level error links to its field (`aria-invalid` + accessible description),
 * and the form-level error is a centred `role="alert"` that never relies on colour alone.
 */
export const WithErrors: Story = {
  args: {
    username: 'not-an-email',
    password: 'x',
    usernameError: 'Enter a valid email address, e.g. name@example.com',
    passwordError: 'That password is incorrect',
    errorMessage: 'We could not sign you in. Check your details and try again.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getByLabelText('Email address')
    await expect(email).toHaveAttribute('aria-invalid', 'true')
    await expect(email).toHaveAccessibleDescription(/valid email address/i)
    await expect(canvas.getByLabelText('Password')).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByText('We could not sign you in. Check your details and try again.')).toBeVisible()
  },
}

/**
 * Loading (submitting) state: the fields and buttons are disabled, the submit button exposes
 * `aria-busy`, and a visually-hidden `role="status"` announces the submission.
 */
export const Loading: Story = {
  args: { loading: true, username: 'john@doe.se', password: 'hunter2secret' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText('Email address')).toBeDisabled()
    await expect(canvas.getByLabelText('Password')).toBeDisabled()
    const submit = canvas.getByRole('button', { name: 'Log in' })
    await expect(submit).toBeDisabled()
    await expect(submit).toHaveAttribute('aria-busy', 'true')
    await expect(canvas.getByText('Signing in…')).toBeInTheDocument()
  },
}

/** Localisation: `labels` overrides the loading status; the English default no longer appears. */
export const Localized: Story = {
  args: {
    loading: true,
    username: 'john@doe.se',
    password: 'hunter2secret',
    labels: { loadingStatus: 'Loggar in…' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Loggar in…')).toBeInTheDocument()
    await expect(canvas.queryByText('Signing in…')).not.toBeInTheDocument()
  },
}

/**
 * Visual parity — the legacy `login-form-story` frame. The legacy story passed `primarySubmitLabel`
 * but it was a dead prop (the legacy Form only rendered buttons from `actions`, which the story never
 * passed), so the faithful frame renders NO submit button. Orange links → accessible blue+underline.
 */
export const Visual: Story = {
  tags: ['visual'],
  args: {
    logo: <span>Logo goes here</span>,
    title: 'Logga in',
    description: 'Fyll i dina uppgifter här nedanför',
    usernameLabel: 'Mailadress',
    username: 'John@doe.se',
    passwordLabel: 'Lösenord',
    password: 'lösenord123',
    primarySubmitLabel: undefined,
    forgotPassword: { name: 'Glömt mitt lösenord?', href: '#' },
    offerLink: { name: 'Ny på Spendrups & vill veta mer om vårat erbjudande?', href: '#' },
    errorMessage: (
      <>
        Det verkar som att du fyllt i fel uppgifter.
        <br />
        Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på{' '}
        <a
          href="mailto:ehandel@spendrups.se"
          className="whitespace-nowrap text-text-blue underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
        >
          ehandel@spendrups.se
        </a>{' '}
        eller{' '}
        <a
          href="tel:+46771494910"
          className="whitespace-nowrap text-text-blue underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
        >
          0771-49 49 10
        </a>
        .
      </>
    ),
  },
  render: (args) => (
    <div style={{ maxWidth: '1254px', margin: '0 auto' }}>
      <LoginForm {...args} />
    </div>
  ),
}

/**
 * Visual parity — the legacy `login-form-story-loading` frame: title + description + two disabled
 * fields (no logo, error, links or button, matching the legacy loading story's args). V2 disables
 * the fields with the same tokens legacy used (`surface-disabled` / `border-disabled` / `text-subdued`).
 */
export const VisualLoading: Story = {
  tags: ['visual'],
  args: {
    logo: undefined,
    title: 'Logga in',
    description: 'Fyll i dina uppgifter här nedanför',
    usernameLabel: 'Mailadress',
    username: 'John@doe.se',
    passwordLabel: 'Lösenord',
    password: 'lösenord123',
    primarySubmitLabel: undefined,
    forgotPassword: undefined,
    loading: true,
  },
  render: (args) => (
    <div style={{ maxWidth: '1254px', margin: '0 auto' }}>
      <LoginForm {...args} />
    </div>
  ),
}
