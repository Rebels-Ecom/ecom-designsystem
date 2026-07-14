import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { FaqHero } from './FaqHero'

const meta = {
  title: 'Design System/Molecules/FaqHero',
  component: FaqHero,
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'How can we help?',
    subtitle: 'Search our frequently asked questions',
    placeholder: 'Search…',
    onQueryChange: fn(),
  },
} satisfies Meta<typeof FaqHero>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical hero. The `play` proves typing reports via `onQueryChange`, the clear button then appears
 * and clears the field, reporting an empty query.
 */
export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByRole('textbox', { name: 'Search FAQ' })
    await userEvent.type(field, 'delivery')
    await expect(args.onQueryChange).toHaveBeenLastCalledWith('delivery')
    await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }))
    await expect(args.onQueryChange).toHaveBeenLastCalledWith('')
  },
}

/** Loading — the `role="status"` spinner shows in place of the clear button. */
export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
  },
}

/** Localised control names via `labels`. */
export const Localized: Story = {
  args: { labels: { search: 'Sök i vanliga frågor', clear: 'Rensa sökning' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('textbox', { name: 'Sök i vanliga frågor' })).toBeInTheDocument()
  },
}

/*
 * Gallery-only Visual (no legacy baseline exists for faq-hero — it was never captured as a standalone
 * story). Rendered at rest for human review; behaviour is covered by the play tests above.
 */
export const Visual: Story = {
  tags: ['visual'],
}
