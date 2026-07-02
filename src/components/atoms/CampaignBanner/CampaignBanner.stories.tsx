import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { CampaignBanner } from './CampaignBanner'

const meta = {
  title: 'Design System/Atoms/CampaignBanner',
  component: CampaignBanner,
} satisfies Meta<typeof CampaignBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    position: 'relative',
    animate: false,
    campaigns: [
      { title: 'Campaign Banner', color: '#9a576f', onClick: fn() },
      { title: 'Campaign Banner 2', color: '#3d5b49', onClick: fn() },
      { title: 'Campaign Banner 3', color: '#1d1d1d', onClick: fn() },
    ],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const firstBanner = canvas.getByRole('button', { name: 'Campaign Banner' })

    await expect(firstBanner).toBeVisible()
    await userEvent.click(firstBanner)
    await expect(args.campaigns[0]?.onClick).toHaveBeenCalledTimes(1)
  },
}

export const Disabled: Story = {
  args: {
    position: 'relative',
    campaigns: [{ title: 'Sold out', color: '#9a576f', disabled: true, onClick: fn() }],
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const banner = canvas.getByRole('button', { name: 'Sold out' })

    await expect(banner).toBeDisabled()
    await userEvent.click(banner)
    await expect(args.campaigns[0]?.onClick).not.toHaveBeenCalled()
  },
}

// Static frame diffed against the legacy baseline by `pnpm test:visual` (no `play`, no
// enter animation). Mapped in tests/visual/baseline-map.ts.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    position: 'relative',
    animate: false,
    campaigns: [
      { title: 'Campaign Banner', color: '#9a576f' },
      { title: 'Campaign Banner 2', color: '#3d5b49' },
      { title: 'Campaign Banner 3', color: '#1d1d1d' },
    ],
  },
}
