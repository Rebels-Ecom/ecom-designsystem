import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { OrderConfirmationPage } from './OrderConfirmationPage'
import { OrderConfirmation } from '../OrderConfirmation'
import { confirmationContent } from '../OrderConfirmation/OrderConfirmation.stories'

const meta = {
  title: 'Design System/Organisms/OrderConfirmationPage',
  component: OrderConfirmationPage,
} satisfies Meta<typeof OrderConfirmationPage>

export default meta
type Story = StoryObj<typeof meta>

// The confirmation card on the page backdrop — the full OrderConfirmation content (reusing the exact
// fragment the OrderConfirmation stories render, incl. the now-migrated CartProduct list).
const pageContent = <OrderConfirmation>{confirmationContent}</OrderConfirmation>

/** The page shell wrapping a confirmation card. The play test confirms the heading and status banner. */
export const Default: Story = {
  args: { children: pageContent },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'Grattis' })).toBeInTheDocument()
    expect(canvas.getByRole('status')).toBeInTheDocument()
  },
}

// reviewOnly (baseline-map.ts): reproduces the full legacy `order-confirmation-page-template-story`
// scene now that CartProduct has landed (page frame + the full OrderConfirmation card). Same CartProduct
// image/font divergence + full-page height as OrderConfirmation, so it's paired for review, not gated.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: pageContent },
  parameters: { layout: 'fullscreen' },
}
