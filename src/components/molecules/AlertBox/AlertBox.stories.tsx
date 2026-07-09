import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { AlertBox } from './AlertBox'

const meta = {
  title: 'Design System/Molecules/AlertBox',
  component: AlertBox,
  args: {
    title: 'Reduce the quantity or remove the item from your cart to complete the order.',
    color: 'error',
  },
  argTypes: {
    color: { options: ['error', 'warning', 'information'], control: { type: 'inline-radio' } },
  },
} satisfies Meta<typeof AlertBox>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical error alert with an action. The `play` proves it is an assertive live region
 * (`role="alert"`) and that its action button is a real, keyboard-operable button (2.1.1).
 */
export const Error: Story = {
  args: { buttonText: 'Swap product', onClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('alert')).toHaveTextContent(/Reduce the quantity/)
    const button = canvas.getByRole('button', { name: 'Swap product' })
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/** Warning — a polite `role="status"` region, no action button. */
export const Warning: Story = {
  args: { color: 'warning', title: 'Reduce the quantity or choose a new product to complete the order.' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
    await expect(canvas.queryByRole('button')).toBeNull()
  },
}

/** Information — dark surface with white text/icon, polite `role="status"`. */
export const Information: Story = {
  args: {
    color: 'information',
    title: 'Reduce the quantity or choose a new product to complete the order.',
    buttonText: 'Swap product',
    onClick: fn(),
  },
}

/**
 * Loading — the message is replaced by a decorative skeleton and the region exposes `aria-busy`
 * so assistive tech announces the pending state (4.1.3).
 */
export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('alert')).toHaveAttribute('aria-busy', 'true')
  },
}

/*
 * Visual-regression frames — reproduce the three legacy `alert-box-box-story-*` baselines with the
 * exact Swedish copy. No `play`, `layout: 'fullscreen'`. The action button carries the same
 * `font-primary` divergence as Button (under the 2% gate); the icon is lucide vs legacy icomoon.
 */

/** Reproduces `alert-box-box-story-with-button-error`. */
export const VisualError: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    color: 'error',
    title: 'Minska antal eller ta bort artikeln från varukorgen för att slutföra beställningen.',
    buttonText: 'Byt produkt',
    onClick: fn(),
  },
}

/** Reproduces `alert-box-box-story-no-button-warning`. */
export const VisualWarning: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    color: 'warning',
    title: 'Minska antal eller välj en ny produkt för att slutföra beställningen.',
  },
}

/** Reproduces `alert-box-box-story-no-button-information` (which does render its "Byt produkt" button). */
export const VisualInformation: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    color: 'information',
    title: 'Minska antal eller välj en ny produkt för att slutföra beställningen.',
    buttonText: 'Byt produkt',
    onClick: fn(),
  },
}
