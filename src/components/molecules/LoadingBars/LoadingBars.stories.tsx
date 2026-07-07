import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { LoadingBars } from './LoadingBars'
import type { LoadingBarProps } from '../../atoms/LoadingBar'

const meta = {
  title: 'Design System/Molecules/LoadingBars',
  component: LoadingBars,
} satisfies Meta<typeof LoadingBars>

export default meta
type Story = StoryObj<typeof meta>

// A taste profile: four distinctly-named meters so each is individually announced.
const tasteProfile: LoadingBarProps[] = [
  { name: 'Beska', value: '6', color: 'orange' },
  { name: 'Sötma', value: '9', color: 'purple' },
  { name: 'Fyllighet', value: '4', color: 'orange' },
  { name: 'Syra', value: '11', color: 'purple' },
]

/** Canonical stack. Verifies every bar is exposed as its own labelled meter. */
export const Default: Story = {
  args: { loadingBars: tasteProfile },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getAllByRole('meter')).toHaveLength(4)
    await expect(canvas.getByRole('meter', { name: 'Beska' })).toHaveAttribute('aria-valuenow', '6')
  },
}

// Reproduces the legacy `loading-bars-story` frame: four identical "Beska" bars (value 6, orange).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    loadingBars: [
      { name: 'Beska', value: '6', color: 'orange' },
      { name: 'Beska', value: '6', color: 'orange' },
      { name: 'Beska', value: '6', color: 'orange' },
      { name: 'Beska', value: '6', color: 'orange' },
    ],
  },
}
