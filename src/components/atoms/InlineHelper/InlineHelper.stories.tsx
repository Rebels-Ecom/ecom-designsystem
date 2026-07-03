import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { InlineHelper } from './InlineHelper'

const meta = {
  title: 'Design System/Atoms/InlineHelper',
  component: InlineHelper,
} satisfies Meta<typeof InlineHelper>

export default meta
type Story = StoryObj<typeof meta>

const helperText = 'Vi använder denna e-postadress om vi behöver kontakta dig'

export const Default: Story = {
  args: { children: helperText },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText(helperText)).toBeVisible()
  },
}

// Demonstrates the association contract: a field references the helper via
// `aria-describedby`, so the hint is read together with the field (3.3.2 / 1.3.1).
export const DescribesAField: Story = {
  args: { children: helperText },
  render: () => (
    <div>
      <label htmlFor="email">E-post</label>
      <input id="email" type="email" aria-describedby="email-help" className="font-primary" />
      <InlineHelper id="email-help">{helperText}</InlineHelper>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByLabelText('E-post')
    await expect(field).toHaveAccessibleDescription(helperText)
  },
}

// Reproduces the legacy `inline-helper-text-story` frame: the hint in a 616px column.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: helperText },
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ maxWidth: '616px', marginBottom: '1rem' }}>
      <InlineHelper>{helperText}</InlineHelper>
    </div>
  ),
}
