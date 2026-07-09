import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Newsletter } from './Newsletter'

const meta = {
  title: 'Design System/Molecules/Newsletter',
  component: Newsletter,
  args: { id: 'newsletter', placeholder: 'Enter your email address', onSubmit: fn() },
} satisfies Meta<typeof Newsletter>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical sign-up. The `play` proves the field is named (`getByLabelText`), a valid email submits
 * (calling `onSubmit`), and the field then clears — all via the real form/button (2.1.1).
 */
export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText<HTMLInputElement>('Email address')
    await userEvent.type(input, 'fan@spendrups.se')
    await userEvent.click(canvas.getByRole('button', { name: 'Newsletter' }))
    await expect(args.onSubmit).toHaveBeenCalledWith('fan@spendrups.se')
    await expect(input.value).toBe('')
  },
}

/**
 * Invalid email — the `play` proves the error is exposed, not colour-only: the field gets
 * `aria-invalid="true"`, a `role="alert"` message appears, and `onSubmit` is not called (3.3.1).
 */
export const InvalidEmail: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByLabelText('Email address')
    await userEvent.type(input, 'not-an-email')
    await userEvent.click(canvas.getByRole('button', { name: 'Newsletter' }))
    await expect(input).toHaveAttribute('aria-invalid', 'true')
    await expect(canvas.getByRole('alert')).toHaveTextContent(/valid email/)
    await expect(args.onSubmit).not.toHaveBeenCalled()
  },
}

/*
 * Visual-regression frame — reproduces `newsletter-story`: the empty email field (placeholder
 * "Skriv din email address") joined to the orange "Nyhetsbrev" button. No `play`,
 * `layout: 'fullscreen'`. Button carries the same `font-primary` divergence, under the 2% gate.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'newsletter-visual',
    placeholder: 'Skriv din email address',
    labels: { button: 'Nyhetsbrev' },
  },
}
