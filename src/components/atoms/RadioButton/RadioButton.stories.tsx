import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { RadioButton } from './RadioButton'

const meta = {
  title: 'Design System/Atoms/RadioButton',
  component: RadioButton,
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

// Controlled radio group with `<fieldset>`/`<legend>` semantics (WCAG 1.3.1) and
// visible `<label htmlFor>` per option (3.3.2).
function DrinksGroup() {
  const [selected, setSelected] = useState('beer')
  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className="text-body text-text-default">Choose a drink</legend>
      <div className="flex items-center gap-2 py-2">
        <RadioButton
          id="drink-beer"
          name="drinks"
          value="beer"
          checked={selected === 'beer'}
          onChange={(event) => setSelected(event.currentTarget.value)}
        />
        <label htmlFor="drink-beer" className="text-body text-text-default">
          Beer
        </label>
      </div>
      <div className="flex items-center gap-2 py-2">
        <RadioButton
          id="drink-soda"
          name="drinks"
          value="soda"
          checked={selected === 'soda'}
          onChange={(event) => setSelected(event.currentTarget.value)}
        />
        <label htmlFor="drink-soda" className="text-body text-text-default">
          Soda
        </label>
      </div>
    </fieldset>
  )
}

export const Group: Story = {
  args: { id: 'drink-beer', name: 'drinks', checked: true },
  render: () => <DrinksGroup />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const beer = canvas.getByRole('radio', { name: 'Beer' })
    const soda = canvas.getByRole('radio', { name: 'Soda' })

    await expect(beer).toBeChecked()
    await userEvent.click(soda)
    await expect(soda).toBeChecked()
    await expect(beer).not.toBeChecked()

    // The checked radio is the group's single tab stop.
    soda.blur()
    await userEvent.tab()
    await expect(soda).toHaveFocus()
  },
}

export const Erroneous: Story = {
  args: {
    id: 'consent',
    name: 'consent',
    checked: false,
    isErroneous: true,
    ariaDescribedBy: 'consent-error',
    onChange: fn(),
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <RadioButton {...args} />
      <label htmlFor={args.id} className="text-body text-text-default">
        I agree
      </label>
      <p id="consent-error" className="m-0 text-body-s text-text-critical">
        Select an option to continue.
      </p>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const radio = canvas.getByRole('radio', { name: 'I agree' })

    await expect(radio).toHaveAttribute('aria-invalid', 'true')
    await expect(radio).toHaveAccessibleDescription('Select an option to continue.')
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
    await expect(canvas.getByRole('radio', { name: 'Disabled option' })).toBeDisabled()
  },
}

// Reproduces the legacy `inputs-radio-button--radio-button-story` frame: one checked
// radio inside the story wrapper div. Mapped in tests/visual/baseline-map.ts.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'input_1',
    name: 'group_1',
    value: 'input_1',
    checked: true,
    ariaLabel: 'Radio button',
    onChange: fn(),
  },
  render: (args) => (
    <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
      <RadioButton {...args} />
    </div>
  ),
}

// Reproduces `radio-button-story-error`: a checked radio in the error state. Mapped in baseline-map.ts.
export const VisualError: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'radio-visual-error',
    name: 'group_1',
    value: 'input_1',
    checked: true,
    isErroneous: true,
    ariaLabel: 'Radio button',
    onChange: fn(),
  },
  render: (args) => (
    <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
      <RadioButton {...args} />
    </div>
  ),
}

// Reproduces `radio-button-story-disabled`: a checked, disabled radio. Mapped in baseline-map.ts.
export const VisualDisabled: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'radio-visual-disabled',
    name: 'group_1',
    value: 'input_1',
    checked: true,
    disabled: true,
    ariaLabel: 'Radio button',
    onChange: fn(),
  },
  render: (args) => (
    <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
      <RadioButton {...args} />
    </div>
  ),
}
