import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fireEvent, fn, userEvent, within } from 'storybook/test'
import { Slider } from './Slider'

const meta = {
  title: 'Design System/Organisms/Slider',
  component: Slider,
  args: {
    min: 0,
    max: 20,
    step: 1,
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical range with both thumbs keyboard-focusable; moving one reports the new range. */
export const Default: Story = {
  args: { min: 0, max: 20, defaultMinVal: 5, defaultMaxVal: 15, onChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const minThumb = canvas.getByRole('slider', { name: 'Minimum value' })
    const maxThumb = canvas.getByRole('slider', { name: 'Maximum value' })

    await expect(minThumb).toHaveValue('5')
    await expect(maxThumb).toHaveValue('15')

    // both thumbs are reachable by keyboard focus
    minThumb.focus()
    await expect(minThumb).toHaveFocus()
    maxThumb.focus()
    await expect(maxThumb).toHaveFocus()

    // moving the lower thumb reports the new range and keeps it below the upper thumb
    fireEvent.change(minThumb, { target: { value: '8' } })
    await expect(minThumb).toHaveValue('8')
    await expect(args.onChange).toHaveBeenCalledWith({ min: 8, max: 15 })

    // it cannot cross the upper thumb — clamped to `max - step`
    fireEvent.change(minThumb, { target: { value: '20' } })
    await expect(minThumb).toHaveValue('14')
  },
}

/** Numeric entry fields wired two-way to the thumbs; each field carries a visible label. */
export const WithFields: Story = {
  args: {
    min: 0,
    max: 100,
    defaultMinVal: 20,
    defaultMaxVal: 80,
    withFields: true,
    minLabel: 'From',
    maxLabel: 'To',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const from = canvas.getByLabelText('From')
    await expect(from).toHaveValue(20)
    await userEvent.clear(from)
    await userEvent.type(from, '30')
    await expect(from).toHaveValue(30)

    // Regression: a multi-digit value must type through without each keystroke being clamped to the
    // other thumb — entering "50" in the max field must stay 50, not jump to 100.
    const to = canvas.getByLabelText('To')
    await userEvent.clear(to)
    await userEvent.type(to, '50')
    await expect(to).toHaveValue(50)
    // On blur the range stays valid and ordered (30 ≤ 50).
    await userEvent.tab()
    await expect(from).toHaveValue(30)
    await expect(to).toHaveValue(50)
  },
}

/** Disabled state — both thumbs are non-interactive and styled as disabled. */
export const Disabled: Story = {
  args: { min: 0, max: 20, defaultMinVal: 4, defaultMaxVal: 16, disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('slider', { name: 'Minimum value' })).toBeDisabled()
    await expect(canvas.getByRole('slider', { name: 'Maximum value' })).toBeDisabled()
  },
}

/** The thumb accessible names are overridable for non-English consumers. */
export const Localized: Story = {
  args: {
    min: 0,
    max: 20,
    labels: { minThumb: 'Lägsta värde', maxThumb: 'Högsta värde' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('slider', { name: 'Lägsta värde' })).toBeInTheDocument()
    await expect(canvas.getByRole('slider', { name: 'Högsta värde' })).toBeInTheDocument()
  },
}

/**
 * Visual-parity frame — reproduces the legacy `SliderStory`: a full-width range from 0–20 with both
 * thumbs at the extremes (so the whole track reads as the teal active segment) and no fields/labels.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { min: 0, max: 20, defaultMinVal: 0, defaultMaxVal: 20, withFields: false },
}
