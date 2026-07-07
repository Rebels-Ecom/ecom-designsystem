import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { InlineError } from './InlineError'

const meta = {
  title: 'Design System/Molecules/InlineError',
  component: InlineError,
} satisfies Meta<typeof InlineError>

export default meta
type Story = StoryObj<typeof meta>

const errorText = 'Fält är obligatorisk'

/** Canonical error: the message is exposed through an `alert` live region and rendered as text. */
export const Default: Story = {
  args: { children: errorText },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // The live region carries the message as text (not colour/icon alone), so axe + AT both get it.
    const alert = canvas.getByRole('alert')
    await expect(alert).toHaveTextContent(errorText)
  },
}

// Demonstrates the field-association contract: the input points at the error via
// `aria-describedby` and marks itself `aria-invalid`, so the error is read with the field (3.3.1).
export const DescribesAField: Story = {
  args: { children: errorText },
  render: () => (
    <div>
      <label htmlFor="email">E-post</label>
      <input
        id="email"
        type="email"
        aria-invalid="true"
        aria-describedby="email-error"
        className="font-primary"
      />
      <InlineError>
        <span id="email-error">{errorText}</span>
      </InlineError>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByLabelText('E-post')
    await expect(field).toBeInvalid()
    await expect(field).toHaveAccessibleDescription(errorText)
  },
}

// Reproduces the legacy `inline-error-text-story` frame: the error in a 616px column.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: errorText },
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ maxWidth: '616px', marginBottom: '1rem' }}>
      <InlineError>{errorText}</InlineError>
    </div>
  ),
}
