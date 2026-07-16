import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, within } from 'storybook/test'
import { RangeInput } from './RangeInput'

const meta = {
  title: 'Design System/Organisms/RangeInput',
  component: RangeInput,
  args: {
    steps: [0, 100, 250, 500, 1000],
    formatLabel: 'kr',
    onChange: fn(),
  },
} satisfies Meta<typeof RangeInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical stepped range. The `play` proves both thumbs are keyboard-focusable native sliders, the
 * end labels show the real bounds, and moving a thumb reports a range snapped to the nearest step
 * (240 → 250). (`fireEvent.change` drives the range input; arrow-key stepping isn't emulated in the
 * vitest-browser env.)
 */
export const Default: Story = {
  args: { defaultMinVal: 100, defaultMaxVal: 500 },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const minThumb = canvas.getByRole('slider', { name: 'Minimum value' })
    const maxThumb = canvas.getByRole('slider', { name: 'Maximum value' })

    await expect(minThumb).toHaveValue('100')
    await expect(maxThumb).toHaveValue('500')

    // End labels carry the real bounds + suffix.
    await expect(canvas.getByText('0 kr')).toBeInTheDocument()
    await expect(canvas.getByText('1000 kr')).toBeInTheDocument()

    // Both thumbs are reachable by keyboard focus.
    minThumb.focus()
    await expect(minThumb).toHaveFocus()
    maxThumb.focus()
    await expect(maxThumb).toHaveFocus()

    // Moving the lower thumb reports a range snapped to the nearest step.
    fireEvent.change(minThumb, { target: { value: '240' } })
    await expect(args.onChange).toHaveBeenCalledWith({ min: 250, max: 500 })
  },
}

/** Numeric entry fields (from the composed Slider) wired two-way to the thumbs; each field is labelled. */
export const WithFields: Story = {
  args: {
    defaultMinVal: 100,
    defaultMaxVal: 500,
    withFields: true,
    minLabel: 'Min price',
    maxLabel: 'Max price',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const from = canvas.getByLabelText('Min price')
    await expect(from).toHaveValue(100)
    await userEvent.clear(from)
    await userEvent.type(from, '250')
    await expect(from).toHaveValue(250)
    await expect(canvas.getByLabelText('Max price')).toHaveValue(500)
  },
}

/** Disabled state — both thumbs are non-interactive. */
export const Disabled: Story = {
  args: { defaultMinVal: 100, defaultMaxVal: 500, disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('slider', { name: 'Minimum value' })).toBeDisabled()
    await expect(canvas.getByRole('slider', { name: 'Maximum value' })).toBeDisabled()
  },
}

/** Thumb accessible names are overridable for non-English consumers. */
export const Localized: Story = {
  args: {
    defaultMinVal: 100,
    defaultMaxVal: 500,
    labels: { minThumb: 'Lägsta värde', maxThumb: 'Högsta värde' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('slider', { name: 'Lägsta värde' })).toBeInTheDocument()
    await expect(canvas.getByRole('slider', { name: 'Högsta värde' })).toBeInTheDocument()
  },
}

/*
 * Gallery-only Visual (no legacy baseline — the legacy `range-input` shipped no story or snapshot). A
 * price range with entry fields for human review; behaviour is covered by the play tests.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    defaultMinVal: 100,
    defaultMaxVal: 500,
    withFields: true,
    minLabel: 'Min price',
    maxLabel: 'Max price',
  },
}
