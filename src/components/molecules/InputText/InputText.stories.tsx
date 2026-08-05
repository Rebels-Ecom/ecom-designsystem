import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { InputText } from './InputText'

const meta = {
  title: 'Design System/Molecules/InputText',
  component: InputText,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof InputText>

export default meta
type Story = StoryObj<typeof meta>

/**
 * **Legacy drop-in shape (v1.6.6).** The app supplies the form-field `name` via `other={{ name }}` and
 * the lowercase `autocomplete`. Locks that both reach the `<input>` — V2 had no `other` and renamed the
 * prop to `autoComplete`, so both were silently dropped.
 */
export const LegacyOtherAndAutocomplete: Story = {
  args: { id: 'legacy-email', ariaLabel: 'E-post', other: { name: 'user-email' }, autocomplete: 'email' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox', { name: 'E-post' })
    await expect(input).toHaveAttribute('name', 'user-email')
    await expect(input).toHaveAttribute('autocomplete', 'email')
  },
}

/** Canonical usage: an external `<label htmlFor>` supplies the accessible name. */
export const WithLabel: Story = {
  args: { id: 'email', type: 'email', autoComplete: 'email' },
  render: (args) => (
    <div className="max-w-md">
      <label htmlFor={args.id} className="mb-1 block font-primary text-body">
        E-post
      </label>
      <InputText {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('E-post')
    await userEvent.type(input, 'hej@exempel.se')
    await expect(input).toHaveValue('hej@exempel.se')
    await expect(input).toHaveFocus()
  },
}

/** Placeholder is a hint only — the label still names the field. */
export const WithPlaceholder: Story = {
  args: { id: 'name', ariaLabel: 'Namn', placeholder: 'Skriv vad du vill' },
  render: (args) => (
    <div className="max-w-md">
      <InputText {...args} />
    </div>
  ),
}

/** Invalid state: `aria-invalid` plus a described-by error message (never colour alone). */
export const Error: Story = {
  args: {
    id: 'email-error',
    ariaLabel: 'E-post',
    isErroneous: true,
    ariaDescribedBy: 'email-error-msg',
  },
  render: (args) => (
    <div className="max-w-md">
      <InputText {...args} />
      <p id="email-error-msg" className="mt-1 font-primary text-body-s text-text-critical">
        Ange en giltig e-postadress
      </p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('E-post')
    await expect(input).toHaveAttribute('aria-invalid', 'true')
    await expect(input).toHaveAccessibleDescription(/giltig e-postadress/)
  },
}

/** Disabled state is exposed to assistive tech via the native attribute. */
export const Disabled: Story = {
  args: {
    id: 'disabled-field',
    ariaLabel: 'Inaktiverat fält',
    disabled: true,
    defaultValue: 'Kan inte ändras',
  },
  render: (args) => (
    <div className="max-w-md">
      <InputText {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByLabelText('Inaktiverat fält')).toBeDisabled()
  },
}

/** Decorative trailing icon (rendered `aria-hidden`; the value carries the meaning). */
export const CheckIcon: Story = {
  args: {
    id: 'valid-field',
    ariaLabel: 'Bekräftat fält',
    iconRight: 'icon-check',
    defaultValue: 'Giltigt värde',
  },
  render: (args) => (
    <div className="max-w-md">
      <InputText {...args} />
    </div>
  ),
}

// ── Visual-regression frames — each reproduces one legacy `input-text-story-*` baseline in the
// legacy 616px wrapper. ariaLabel supplies the accessible name the legacy field lacked (invisible, so
// pixel-neutral). Same brand font as legacy → no divergence. ──

/** Reproduces the legacy `input-text-story` (empty field, 616px wrapper). */
export const Visual: Story = {
  args: { id: 'input_1', ariaLabel: 'Exempelfält' },
  parameters: { layout: 'fullscreen' },
  tags: ['visual'],
  render: (args) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <InputText {...args} />
    </div>
  ),
}

/** Reproduces `input-text-story-place-holder`. */
export const VisualPlaceholder: Story = {
  args: { id: 'input-visual-placeholder', ariaLabel: 'Exempelfält', placeholder: 'Write anything you like' },
  parameters: { layout: 'fullscreen' },
  tags: ['visual'],
  render: (args) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <InputText {...args} />
    </div>
  ),
}

/** Reproduces `input-text-story-error` (red border, no message — as the legacy frame). */
export const VisualError: Story = {
  args: { id: 'input-visual-error', ariaLabel: 'Exempelfält', isErroneous: true },
  parameters: { layout: 'fullscreen' },
  tags: ['visual'],
  render: (args) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <InputText {...args} />
    </div>
  ),
}

/** Reproduces `input-text-story-disabled` (empty disabled field). */
export const VisualDisabled: Story = {
  args: { id: 'input-visual-disabled', ariaLabel: 'Exempelfält', disabled: true },
  parameters: { layout: 'fullscreen' },
  tags: ['visual'],
  render: (args) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <InputText {...args} />
    </div>
  ),
}

/** Reproduces `input-text-story-check-icon` (empty field, decorative trailing check). */
export const VisualCheckIcon: Story = {
  args: { id: 'input-visual-check', ariaLabel: 'Exempelfält', iconRight: 'icon-check' },
  parameters: { layout: 'fullscreen' },
  tags: ['visual'],
  render: (args) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <InputText {...args} />
    </div>
  ),
}
