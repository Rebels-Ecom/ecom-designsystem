import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { UserInfoSummary } from './UserInfoSummary'

const meta = {
  title: 'Design System/Molecules/UserInfoSummary',
  component: UserInfoSummary,
} satisfies Meta<typeof UserInfoSummary>

export default meta
type Story = StoryObj<typeof meta>

const infoSummary = {
  userName: 'Jon Johnsson',
  companyName: 'Gustav Grill & Bar',
  customerNumber: 'Kundnr: 186922',
  role: 'Roller: Sales',
}

/**
 * Full summary. The play test asserts the name is exposed to AT in its original casing (the
 * uppercase look is CSS-only), so screen readers don't spell it out letter by letter.
 */
export const Default: Story = {
  args: { label: 'Inloggat som:', infoSummary },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Accessible name keeps original casing even though it renders as "JON JOHNSSON".
    expect(canvas.getByRole('heading', { name: 'Jon Johnsson' })).toBeInTheDocument()
    expect(canvas.getByText('Inloggat som:')).toBeInTheDocument()
    expect(canvas.getByText('Gustav Grill & Bar')).toBeInTheDocument()
  },
}

/** Minimal summary — only the required name + company, no caption or extra lines. */
export const Minimal: Story = {
  args: { infoSummary: { userName: 'Jon Johnsson', companyName: 'Gustav Grill & Bar' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'Jon Johnsson' })).toBeInTheDocument()
    expect(canvas.queryByText('Inloggat som:')).not.toBeInTheDocument()
  },
}

// Reproduces the legacy `user-info-summary-story` frame (label + name + company + customer + role).
export const Visual: Story = {
  tags: ['visual'],
  args: { label: 'Inloggat som:', infoSummary },
  parameters: { layout: 'fullscreen' },
}
