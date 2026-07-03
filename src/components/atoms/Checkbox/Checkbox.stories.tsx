import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Checkbox } from './Checkbox'
import type { CheckboxProps } from './Checkbox'

const meta = {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// Controlled wrapper with an associated visible label (WCAG 1.3.1 / 3.3.2 — the atom is a
// bare input; consumers pair it with a `<label htmlFor>`).
function LabelledCheckbox({ labelText, ...props }: CheckboxProps & { labelText: string }) {
  const [checked, setChecked] = useState(props.checked)
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        {...props}
        checked={checked}
        onChange={(event) => {
          setChecked(event.currentTarget.checked)
          props.onChange?.(event)
        }}
      />
      <label htmlFor={props.id} className="text-body text-text-default">
        {labelText}
      </label>
    </div>
  )
}

export const KeyboardToggle: Story = {
  args: { id: 'terms', name: 'terms', checked: false, onChange: fn() },
  render: (args) => <LabelledCheckbox {...args} labelText="Accept terms" />,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'Accept terms' })

    await userEvent.tab()
    await expect(checkbox).toHaveFocus()
    await userEvent.keyboard(' ')
    await expect(checkbox).toBeChecked()
    await expect(args.onChange).toHaveBeenCalled()
  },
}

export const Erroneous: Story = {
  args: {
    id: 'newsletter',
    name: 'newsletter',
    checked: false,
    isErroneous: true,
    ariaDescribedBy: 'newsletter-error',
    onChange: fn(),
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} />
      <label htmlFor={args.id} className="text-body text-text-default">
        Subscribe
      </label>
      <p id="newsletter-error" className="m-0 text-body-s text-text-critical">
        Tick the box to continue.
      </p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'Subscribe' })

    await expect(checkbox).toHaveAttribute('aria-invalid', 'true')
    await expect(checkbox).toHaveAccessibleDescription('Tick the box to continue.')
  },
}

export const Disabled: Story = {
  args: {
    id: 'disabled-option',
    name: 'disabled-option',
    checked: true,
    disabled: true,
    ariaLabel: 'Disabled option',
    onChange: fn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('checkbox', { name: 'Disabled option' })).toBeDisabled()
  },
}

// Reproduces the legacy `inputs-checkbox--checkbox-story` frame: a single UNCHECKED
// checkbox (the legacy render ignored `args.checked` and started from unchecked state)
// inside the story wrapper div. Mapped in tests/visual/baseline-map.ts.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'input_1',
    name: 'group',
    value: 'input_1',
    checked: false,
    ariaLabel: 'Checkbox',
    onChange: fn(),
  },
  render: (args) => (
    <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
      <Checkbox {...args} />
    </div>
  ),
}
