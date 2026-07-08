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
    // Control names default to English (overridable via `labels` — see Localized).
    await expect(canvas.getByRole('button', { name: 'Previous page' })).toBeDisabled()
    await expect(canvas.getByRole('button', { name: 'Go to page 1' })).toHaveAttribute('aria-current', 'page')
    await userEvent.click(canvas.getByRole('button', { name: 'Go to page 3' }))
    await expect(args.onPageChange).toHaveBeenCalledWith(3)
    await userEvent.click(canvas.getByRole('button', { name: 'Next page' }))
    await expect(args.onNextClick).toHaveBeenCalled()
  },
}

/** A middle page of many — leading/trailing ellipses appear and the last page stays reachable. */
export const MiddlePage: Story = {
  args: { itemsCount: 500, pageSize: 25, currentPage: 10 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Go to page 10' })).toHaveAttribute('aria-current', 'page')
    await expect(canvas.getByRole('button', { name: 'Go to page 20' })).toBeInTheDocument()
  },
}

/**
 * Localisation: landmark + control names default to English and are overridden via `labels`
 * (here, Swedish). Proves the i18n convention — the library bakes in no locale.
 */
export const Localized: Story = {
  args: {
    labels: {
      nav: 'Paginering',
      previous: 'Föregående sida',
      next: 'Nästa sida',
      goToPage: (page) => `Gå till sida ${page}`,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation', { name: 'Paginering' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Föregående sida' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Gå till sida 1' })).toHaveAttribute('aria-current', 'page')
  },
}

// Reproduces the legacy `pagination-story` frame (100 items / 25 per page = 4 pages, on page 1).
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => <Pagination {...args} />,
}
