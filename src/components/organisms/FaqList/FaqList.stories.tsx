import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { FaqList } from './FaqList'

const items = [
  { question: 'How do I place an ==order==?', answer: <p>Add products to your cart and go to checkout.</p> },
  { question: 'What are the delivery days?', answer: <p>Deliveries run Tuesdays and Fridays.</p> },
  { question: 'How do I change my account details?', answer: <p>Open your profile and edit your details.</p> },
]

const meta = {
  title: 'Design System/Organisms/FaqList',
  component: FaqList,
  args: { items },
} satisfies Meta<typeof FaqList>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical accordion. The `play` proves the disclosure contract: each question is a button with
 * `aria-expanded="false"`; activating it flips to `true` and reveals the answer as a labelled
 * `role="region"` (which is absent from the a11y tree while collapsed).
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const first = canvas.getByRole('button', { name: /How do I place an order/ })
    await expect(first).toHaveAttribute('aria-expanded', 'false')
    await expect(canvas.queryByRole('region', { name: /How do I place an order/ })).toBeNull()
    await userEvent.click(first)
    await expect(first).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByRole('region', { name: /How do I place an order/ })).toBeInTheDocument()
  },
}

/** Bold questions in the card layout. */
export const Cards: Story = {
  args: { isCard: true, bold: true },
}

/** `limit` caps how many entries render. */
export const Limited: Story = {
  args: { limit: 1 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getAllByRole('button')).toHaveLength(1)
  },
}

/*
 * Gallery-only Visual (no baseline — legacy shipped no story/snapshot). Shows the card layout with a
 * highlighted keyword for human review; behaviour is covered by the play tests above.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { isCard: true, bold: true },
}
