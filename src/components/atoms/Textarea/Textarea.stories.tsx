import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Textarea } from './Textarea'

const meta = {
  title: 'Design System/Atoms/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const WithLabel: Story = {
  args: { id: 'message' },
  render: (args) => (
    <div className="max-w-md">
      <label htmlFor={args.id} className="mb-1 block text-body-s text-text-default">
        Meddelande
      </label>
      <Textarea {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Associated label gives the field its accessible name (3.3.2 / 1.3.1).
    const field = canvas.getByLabelText('Meddelande')
    await userEvent.type(field, 'Hej!')
    await expect(field).toHaveValue('Hej!')
    await expect(field).toHaveFocus()
  },
}

export const Error: Story = {
  args: { id: 'comment', isErroneous: true, ariaDescribedBy: 'comment-error', defaultValue: 'x' },
  render: (args) => (
    <div className="max-w-md">
      <label htmlFor={args.id} className="mb-1 block text-body-s text-text-default">
        Kommentar
      </label>
      <Textarea {...args} />
      <span id="comment-error" className="mt-1 block text-body-s text-text-critical">
        Kommentaren måste vara minst 10 tecken.
      </span>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByLabelText('Kommentar')
    // Error is exposed programmatically, not by colour alone (3.3.1 / 1.4.1).
    await expect(field).toHaveAttribute('aria-invalid', 'true')
    await expect(field).toHaveAccessibleDescription(/minst 10 tecken/)
  },
}

export const Disabled: Story = {
  args: { id: 'disabled-area', disabled: true, defaultValue: 'Går inte att ändra', ariaLabel: 'Inaktiverat fält' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText('Inaktiverat fält')).toBeDisabled()
  },
}

// Reproduces the legacy `textarea-story` frame: five stacked fields (empty, filled, disabled,
// error, placeholder) in ~616px columns. Each carries an `ariaLabel` so the frame has no visible
// label (matching legacy) while still satisfying the a11y name requirement. Mapped in baseline-map.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { id: 'visual-textarea' },
  render: () => {
    const wrapper = { margin: '0 0 1rem 0', maxWidth: '616px' }
    return (
      <>
        <div style={wrapper}>
          <Textarea id="v1" ariaLabel="Fält 1" />
        </div>
        <div style={wrapper}>
          <Textarea id="v2" ariaLabel="Fält 2" defaultValue="Some text here" />
        </div>
        <div style={wrapper}>
          <Textarea id="v3" ariaLabel="Fält 3" defaultValue="Some text here" disabled />
        </div>
        <div style={wrapper}>
          <Textarea id="v4" ariaLabel="Fält 4" defaultValue="Some text here" isErroneous />
        </div>
        <div style={wrapper}>
          <Textarea id="v5" ariaLabel="Fält 5" placeholder="Placeholder text" />
        </div>
      </>
    )
  },
}
