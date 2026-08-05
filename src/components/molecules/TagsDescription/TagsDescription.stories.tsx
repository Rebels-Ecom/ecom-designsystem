import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { TagsDescription } from './TagsDescription'

const meta = {
  title: 'Design System/Deprecated/TagsDescription',
  component: TagsDescription,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TagsDescription>

export default meta
type Story = StoryObj<typeof meta>

const tags = [
  { id: 'new', color: 'green', text: 'Nyhet' },
  { id: 'sale', color: 'orange', text: 'Kampanj' },
  { id: 'eco', color: 'mint', text: 'Ekologisk' },
  { id: 'local', color: 'blue', text: 'Närproducerat' },
] as const

/**
 * Canonical legend: four colour → meaning entries. The `play` asserts every entry's text is
 * present and that the colour swatches are hidden from assistive tech (meaning lives in the text).
 */
export const Default: Story = {
  args: { tags: [...tags] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Each entry's meaning is exposed as text (colour is never the sole cue, 1.4.1).
    for (const { text } of tags) {
      await expect(canvas.getByText(text)).toBeInTheDocument()
    }
    // Swatches are decorative — no accessible name leaks into the a11y tree.
    const list = canvas.getByRole('list')
    const swatches = list.querySelectorAll('[aria-hidden="true"]')
    await expect(swatches).toHaveLength(tags.length)
  },
}

/** Empty input renders nothing (guard against a stray empty legend row). */
export const Empty: Story = {
  args: { tags: [] },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).queryByRole('list')).toBeNull()
  },
}

/** Gallery-only visual frame (no legacy baseline — legacy shipped no snapshot). */
export const Visual: Story = {
  args: { tags: [...tags] },
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}
