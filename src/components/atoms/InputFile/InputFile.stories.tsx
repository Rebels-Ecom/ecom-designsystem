import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { InputFile } from './InputFile'

const meta = {
  title: 'Design System/Deprecated/InputFile',
  component: InputFile,
} satisfies Meta<typeof InputFile>

export default meta
type Story = StoryObj<typeof meta>

export const PicksFile: Story = {
  args: {
    id: 'upload',
    label: 'Välj fil',
    placeholder: 'Ingen fil har valts',
    onChange: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText<HTMLInputElement>(/Välj fil/)

    // The visually hidden input must stay keyboard-reachable (WCAG 2.1.1).
    await userEvent.tab()
    await expect(input).toHaveFocus()

    await userEvent.upload(input, new File(['menu'], 'menu.pdf', { type: 'application/pdf' }))
    await expect(args.onChange).toHaveBeenCalled()
    await expect(input.files).toHaveLength(1)
  },
}

export const Disabled: Story = {
  args: {
    id: 'upload-disabled',
    label: 'Välj fil',
    placeholder: 'Ingen fil har valts',
    disabled: true,
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText<HTMLInputElement>(/Välj fil/)).toBeDisabled()
    await expect(canvas.getByText('Ingen fil har valts')).toBeVisible()
  },
}

// Reproduces the legacy `inputs-inputfile--input-file-story` frame: label 'Välj fil' with
// the empty-value placeholder, inside the story wrapper div. Mapped in
// tests/visual/baseline-map.ts.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'input_1',
    label: 'Välj fil',
    placeholder: 'Ingen fil har valts',
    value: '',
    onChange: fn(),
  },
  render: (args) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <InputFile {...args} />
    </div>
  ),
}

// Reproduces `input-file-story-disabled`. Mapped desktop-only, like the base frame (the legacy
// mobile PNG is structurally incomparable — see the base entry in baseline-map.ts).
export const VisualDisabled: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'input-file-visual-disabled',
    label: 'Välj fil',
    placeholder: 'Ingen fil har valts',
    value: '',
    disabled: true,
    onChange: fn(),
  },
  render: (args) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <InputFile {...args} />
    </div>
  ),
}
