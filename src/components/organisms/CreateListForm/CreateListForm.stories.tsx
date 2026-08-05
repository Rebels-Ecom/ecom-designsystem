import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { CreateListForm } from './CreateListForm'

const meta = {
  title: 'Design System/Deprecated/CreateListForm',
  component: CreateListForm,
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Skapa upp inköpslista',
    description: 'Fyll i dina uppgifter här nedanför',
    nameLabel: 'Namn',
    name: '',
    commentLabel: 'Kommentar',
    comment: '',
    submitLabel: 'Spara',
    cancelLabel: 'Avbryt & stäng ner fönster',
    offerLinkLabel: 'Läs mer om hur listor fungerar och dess fördelar',
    onSubmit: () => {},
    onCancel: () => {},
    onNameChange: () => {},
    onCommentChange: () => {},
  },
} satisfies Meta<typeof CreateListForm>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical: a controlled form — typing updates the named field; submit is a real submit button. */
export const Default: Story = {
  render: (args) => {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    return (
      <div style={{ maxWidth: '1254px', margin: '0 auto' }}>
        <CreateListForm
          {...args}
          name={name}
          comment={comment}
          onNameChange={(e) => setName(e.currentTarget.value)}
          onCommentChange={(e) => setComment(e.currentTarget.value)}
        />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const nameField = canvas.getByLabelText('Namn')
    await userEvent.type(nameField, 'Vårfesten')
    await expect(nameField).toHaveValue('Vårfesten')
    await expect(canvas.getByRole('button', { name: 'Spara' })).toHaveAttribute('type', 'submit')
    // The "read more" link is an accessible, underlined link (not the legacy orange text).
    await expect(canvas.getByRole('link', { name: /Läs mer/ })).toBeVisible()
  },
}

/** A form-level error is announced as an alert and does not rely on colour alone. */
export const WithError: Story = {
  args: { errorMessage: 'Något gick fel. Försök igen.' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('alert')).toHaveTextContent('Något gick fel. Försök igen.')
  },
}

/** Visual parity — the legacy `create-list-form-story` frame (empty controlled fields). */
export const Visual: Story = {
  tags: ['visual'],
  render: (args) => (
    <div style={{ maxWidth: '1254px', margin: '0 auto' }}>
      <CreateListForm {...args} />
    </div>
  ),
}

/** Visual parity — the legacy `create-list-form-story-loading` frame (blocking overlay). */
export const VisualLoading: Story = {
  tags: ['visual'],
  args: { loading: true },
  render: (args) => (
    <div style={{ maxWidth: '1254px', margin: '0 auto' }}>
      <CreateListForm {...args} />
    </div>
  ),
}
