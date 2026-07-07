import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Pagination } from './Pagination'

const meta = {
  title: 'Design System/Molecules/Pagination',
  component: Pagination,
  args: {
    itemsCount: 100,
    pageSize: 25,
    currentPage: 1,
    onPageChange: fn(),
    onPreviousClick: fn(),
    onNextClick: fn(),
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

/**
 * First page of four. The play test proves the previous control is disabled at the start, the active
 * page carries `aria-current`, and activating a page/next reports through the callbacks.
 */
export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Föregående sida' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Gå till sida 1' })).toHaveAttribute('aria-current', 'page')
    await userEvent.click(canvas.getByRole('button', { name: 'Gå till sida 3' }))
    await expect(args.onPageChange).toHaveBeenCalledWith(3)
    await userEvent.click(canvas.getByRole('button', { name: 'Nästa sida' }))
    await expect(args.onNextClick).toHaveBeenCalled()
  },
}

/** A middle page of many — leading/trailing ellipses appear and the last page stays reachable. */
export const MiddlePage: Story = {
  args: { itemsCount: 500, pageSize: 25, currentPage: 10 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Gå till sida 10' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('button', { name: 'Gå till sida 20' })).toBeInTheDocument()
  },
}

// Reproduces the legacy `pagination-story` frame (100 items / 25 per page = 4 pages, on page 1).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => <Pagination {...args} />,
}
