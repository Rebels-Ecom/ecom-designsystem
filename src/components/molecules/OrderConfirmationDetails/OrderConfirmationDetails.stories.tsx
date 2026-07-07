import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { OrderConfirmationDetails } from './OrderConfirmationDetails'

const meta = {
  title: 'Design System/Molecules/OrderConfirmationDetails',
  component: OrderConfirmationDetails,
} satisfies Meta<typeof OrderConfirmationDetails>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Delivery details. The play test proves the rows form a description list — each value is exposed
 * against its term.
 */
export const Delivery: Story = {
  args: {
    label: 'Leveransuppgifter',
    detailItems: [
      { label: 'Postnummer', value: '135 44' },
      { label: 'Adress', value: 'Granängsringen 3' },
      { label: 'Ort', value: 'Tyresö' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Postnummer').tagName).toBe('DT')
    await expect(canvas.getByText('135 44').tagName).toBe('DD')
  },
}

/** Pricing breakdown, no title. */
export const Pricing: Story = {
  args: {
    detailItems: [
      { label: 'Summa produkter', value: '420,70' },
      { label: 'Avdrag', value: '10%' },
      { label: 'Frakt', value: 'Gratis' },
    ],
  },
}

/** Payment total on the highlight background — the `isTotal` row is large + bold. */
export const TotalPayment: Story = {
  args: {
    label: 'Totalt',
    withBackground: true,
    detailItems: [
      { label: 'Inklusive moms', value: '378,70 kr', isTotal: true },
      { label: 'Betalning', value: 'Faktura' },
    ],
  },
}

// Reproduces the legacy `order-confirmation-details-story-delivery` frame.
export const Visual: Story = {
  tags: ['visual'],
  args: {
    label: 'Leveransuppgifter',
    detailItems: [
      { label: 'Postnummer', value: '135 44' },
      { label: 'Adress', value: 'Granängsringen 3' },
      { label: 'Ort', value: 'Tyresö' },
    ],
  },
  parameters: { layout: 'fullscreen' },
  render: (args) => <OrderConfirmationDetails {...args} />,
}

// Reproduces the legacy `order-confirmation-details-story-pricing` frame.
export const VisualPricing: Story = {
  tags: ['visual'],
  args: {
    detailItems: [
      { label: 'Summa produkter', value: '420,70' },
      { label: 'Avdrag', value: '10%' },
      { label: 'Frakt', value: 'Gratis' },
    ],
  },
  parameters: { layout: 'fullscreen' },
  render: (args) => <OrderConfirmationDetails {...args} />,
}

// Reproduces the legacy `order-confirmation-details-story-total-payment` frame (cream bg + total row).
export const VisualTotalPayment: Story = {
  tags: ['visual'],
  args: {
    label: 'Totalt',
    withBackground: true,
    detailItems: [
      { label: 'Inklusive moms', value: '378,70 kr', isTotal: true },
      { label: 'Betalning', value: 'Faktura' },
    ],
  },
  parameters: { layout: 'fullscreen' },
  render: (args) => <OrderConfirmationDetails {...args} />,
}
