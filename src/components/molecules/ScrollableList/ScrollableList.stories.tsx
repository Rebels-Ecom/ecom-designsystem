import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { ScrollableList } from './ScrollableList'

const meta = {
  title: 'Design System/Molecules/ScrollableList',
  component: ScrollableList,
} satisfies Meta<typeof ScrollableList>

export default meta
type Story = StoryObj<typeof meta>

const products = [
  'Norrlands Guld',
  'Mariestads',
  'Loka Naturell',
  'Heineken',
  'Briska Päron',
  'Spendrups Old Gold',
  'Schweppes Tonic',
]

const demoItems = products.map((name) => (
  <div key={name} className="flex items-center justify-between">
    <span className="font-bold">{name}</span>
    <span className="text-text-subdued">1 st</span>
  </div>
))

/**
 * Canonical capped list (3 visible of 7). The `play` tabs to the scroll region and asserts it is
 * focusable and named — so keyboard users can reach and scroll it (2.1.1 / 4.1.2).
 */
export const Default: Story = {
  args: { children: demoItems, visibleItemsNumber: 3, ariaLabel: 'Inköpslista' },
  render: (args) => (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      <ScrollableList {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const region = canvas.getByRole('list', { name: 'Inköpslista' })
    await userEvent.tab()
    await expect(region).toHaveFocus()
  },
}

/** Loading state: renders the `Loader` (a `role="status"` live region) instead of the list. */
export const Loading: Story = {
  args: { children: demoItems, visibleItemsNumber: 3, loading: true },
  render: (args) => (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      <ScrollableList {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
    await expect(canvas.queryByRole('list')).toBeNull()
  },
}

/**
 * Gallery-only visual frame. No legacy baseline is mapped: every legacy `scrollable-list-*` frame
 * composes `CartProduct` / `LinkListItem` children that aren't migrated yet, so a faithful parity
 * frame can't be reproduced (see baseline-map note). Re-map when those children land.
 */
export const Visual: Story = {
  args: { children: demoItems, visibleItemsNumber: 4, ariaLabel: 'Inköpslista' },
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ maxWidth: '480px', margin: '0 auto' }}>
      <ScrollableList {...args} />
    </div>
  ),
}
