import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ButtonProps } from '../Button'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Form, type FormField } from './Form'

const meta = {
  title: 'Design System/Molecules/Form',
  component: Form,
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

// Reproduces the legacy `Standard_Form`: a name + email field and a "Save" submit.
const standardFields: FormField[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Namn Namnsson',
    required: true,
    error: 'This field is required',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'email@email.com',
    required: true,
    pattern: 'email',
    autoComplete: 'email',
    error: 'Email is required, e.g. mail@mail.com',
  },
]

// Reproduces the legacy `Compare_Two_Fields`: two password fields that must match.
const compareFields: FormField[] = [
  {
    name: 'new-password',
    label: 'Nytt lösenord',
    type: 'password',
    placeholder: '*',
    required: true,
    pattern: 'password',
    error: 'Du måste ange ett lösenord',
  },
  {
    name: 'confirm-password',
    label: 'Upprepa lösenord',
    type: 'password',
    placeholder: '*',
    required: true,
    matchField: 'new-password',
    error: 'Lösenord matchar inte',
  },
]

const saveAction: ButtonProps = { children: 'Save', surface: 'primary', type: 'submit' }

/**
 * Canonical form. The play test proves submit is gated on validity: it starts disabled with the
 * required fields empty, and enables once a name and a valid email are entered.
 */
export const Default: Story = {
  args: {
    formTitle: 'Form Title',
    fields: standardFields,
    actions: [saveAction],
    onSubmit: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const submit = canvas.getByRole('button', { name: 'Save' })
    await expect(submit).toBeDisabled()
    await userEvent.type(canvas.getByLabelText('Name'), 'Anna')
    await userEvent.type(canvas.getByLabelText('Email'), 'anna@example.com')
    await expect(submit).toBeEnabled()
  },
}

/**
 * Two fields compared (confirm-password). The play test proves a mismatch keeps submit disabled and
 * surfaces the inline error, and that matching values enable submission.
 */
export const CompareTwoFields: Story = {
  args: {
    formTitle: 'Form Title',
    fields: compareFields,
    actions: [saveAction],
    onSubmit: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const submit = canvas.getByRole('button', { name: 'Save' })
    await userEvent.type(canvas.getByLabelText('Nytt lösenord'), 'secret123')
    await userEvent.type(canvas.getByLabelText('Upprepa lösenord'), 'different')
    await expect(submit).toBeDisabled()
    await expect(canvas.getByRole('alert')).toHaveTextContent('Lösenord matchar inte')
    await userEvent.clear(canvas.getByLabelText('Upprepa lösenord'))
    await userEvent.type(canvas.getByLabelText('Upprepa lösenord'), 'secret123')
    await expect(submit).toBeEnabled()
  },
}

/** A form-level error renders as a `role="alert"` above the actions. */
export const GeneralError: Story = {
  args: {
    formTitle: 'Form Title',
    fields: standardFields,
    actions: [saveAction],
    isLogin: true,
    generalError: 'Something went wrong. Please try again.',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('alert')).toHaveTextContent('Something went wrong')
  },
}

/** After a successful submit the form is replaced by a `role="status"` success panel. */
export const Success: Story = {
  args: {
    formTitle: 'Form Title',
    fields: [],
    responseMessage: {
      title: 'Thank you!',
      message: 'Your details were saved.',
      icon: 'icon-check-circle',
      onClose: fn(),
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
    await expect(canvas.getByRole('heading', { name: 'Thank you!' })).toBeInTheDocument()
  },
}

/** The success close-button label is overridable (English default `Close`) for localisation. */
export const Localized: Story = {
  args: {
    formTitle: 'Formulär',
    fields: [],
    labels: { close: 'Stäng' },
    responseMessage: {
      title: 'Tack!',
      message: 'Dina uppgifter sparades.',
      onClose: fn(),
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Stäng' })).toBeInTheDocument()
  },
}

// ── Visual parity frames (reproduce the legacy Form stories) ──

/** Legacy `Standard_Form` frame: title, name + email fields, centred "Save". */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    formTitle: 'Form Title',
    fields: standardFields,
    actions: [saveAction],
    alignActions: 'center',
  },
}

/** Legacy `Compare_Two_Fields` frame: title, two password fields, centred "Save". */
export const VisualCompareTwoFields: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    formTitle: 'Form Title',
    fields: compareFields,
    actions: [saveAction],
    alignActions: 'center',
  },
}
