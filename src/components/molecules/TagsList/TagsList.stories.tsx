import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { TagsList } from './TagsList'

const meta = {
  title: 'Design System/Molecules/TagsList',
  component: TagsList,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TagsList>

export default meta
type Story = StoryObj<typeof meta>

/** A typical set of product tags. Verifies the list/listitem semantics. */
export const Default: Story = {
  args: {
    tags: [
      { text: 'Nyhet', color: 'green' },
      { text: 'Ekologisk', color: 'mint' },
      { text: 'Alkoholfri', color: 'blue' },
      { text: 'Kampanj', color: 'purple' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const list = canvas.getByRole('list')
    await expect(within(list).getAllByRole('listitem')).toHaveLength(4)
    await expect(canvas.getByText('Ekologisk')).toBeInTheDocument()
  },
}

/** An empty list renders nothing (no stray `<ul>`). */
export const Empty: Story = {
  args: { tags: [] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('list')).not.toBeInTheDocument()
  },
}

/** Static frame for the review gallery (no legacy baseline — legacy shipped no snapshot). */
export const Visual: Story = {
  args: {
    tags: [
      { text: 'Nyhet', color: 'green' },
      { text: 'Ekologisk', color: 'mint' },
      { text: 'Alkoholfri', color: 'blue' },
    ],
  },
  parameters: { layout: 'fullscreen' },
  tags: ['visual'],
  render: (args) => (
    <div className="p-4">
      <TagsList {...args} />
    </div>
  ),
}
