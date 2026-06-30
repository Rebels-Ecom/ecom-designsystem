import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { Icon } from './Icon'

const meta = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: ['icon-search', 'icon-mail', 'icon-bell', 'icon-user', 'icon-heart', 'icon-shopping-cart'],
    },
    size: { control: 'radio', options: ['small', 'medium', 'large', 'xlarge'] },
    color: { control: 'radio', options: ['error', 'success'] },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Labelled: Story = {
  args: { icon: 'icon-search', size: 'large', label: 'Search' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img', { name: 'Search' })).toBeInTheDocument()
  },
}

export const Decorative: Story = {
  args: { icon: 'icon-heart', size: 'medium' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // No accessible role — purely decorative, hidden from assistive tech.
    await expect(canvas.queryByRole('img')).toBeNull()
  },
}
