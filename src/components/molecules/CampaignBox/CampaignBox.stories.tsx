import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { CampaignBox } from './CampaignBox'
import { ContentWrapper } from '../../atoms/ContentWrapper'

const meta = {
  title: 'Design System/Molecules/CampaignBox',
  component: CampaignBox,
  // Legacy captured the card inside a ContentWrapper (its gutters set the side margins).
  decorators: [
    (Story) => (
      <ContentWrapper>
        <Story />
      </ContentWrapper>
    ),
  ],
  args: {
    title: 'Campaign Title',
    description: 'Campaign Description',
    subDescription: 'Campaign SubDescription',
    color: '#9A576F',
  },
} satisfies Meta<typeof CampaignBox>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical campaign card. The `play` proves the disclosure contract — the toggle is a button whose
 * `aria-expanded` flips false→true on activation (revealing the panel) — and that the select button
 * fires `onClick` (2.1.1).
 */
export const Default: Story = {
  args: { onClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button', { name: 'Toggle campaign details' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await userEvent.click(canvas.getByRole('button', { name: 'Select' }))
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/** Limited variant — no select button, tighter title padding; the expand toggle remains. */
export const Limited: Story = {
  args: { limited: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('button', { name: 'Select' })).toBeNull()
    await expect(canvas.getByRole('button', { name: 'Toggle campaign details' })).toBeInTheDocument()
  },
}

/** Loading skeleton. */
export const Loading: Story = {
  args: { loading: true },
}

/*
 * Visual-regression frames — reproduce `campaign-box-story` (with select button) and
 * `campaign-box-story-limited`, both collapsed, with the Swedish "Välj" label. No `play`,
 * `layout: 'fullscreen'`. White text on the purple campaign colour clears AA (~5.3:1).
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { btnLabel: 'Välj', onClick: fn() },
}

export const VisualLimited: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { limited: true, btnLabel: 'Välj', onClick: fn() },
}
