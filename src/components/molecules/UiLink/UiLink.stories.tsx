import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { UiLink } from './UiLink'

const meta = {
  title: 'Design System/Molecules/UiLink',
  component: UiLink,
  args: { children: 'Read more here', href: 'https://example.com', isExternal: true },
  argTypes: {
    onSurface: {
      options: ['transparent', 'decorativeOne', 'decorativeTwo'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof UiLink>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default text link. The `play` function asserts it's exposed as a real link with the right
 * destination and accessible name, is keyboard-focusable, and carries the underline affordance
 * (1.4.1) rather than relying on colour alone.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: 'Read more here' })
    await expect(link).toHaveAttribute('href', 'https://example.com')
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    await userEvent.tab()
    await expect(link).toHaveFocus()
    // Underline is on the text span (the non-colour cue).
    await expect(link.querySelector('span')).toHaveClass('underline')
  },
}

/** With a trailing directional icon (decorative — the accessible name stays the text). */
export const WithIcon: Story = {
  args: { children: 'Läs mer', iconRight: 'icon-arrow-right' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('link', { name: 'Läs mer' })).toBeVisible()
  },
}

/**
 * Accessibility sweep — plain, icon-left and icon-right links rendered together so
 * `@storybook/addon-a11y` scans the link contrast and naming.
 */
export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <UiLink {...args} />
      <UiLink {...args} iconLeft="icon-arrow-right" />
      <UiLink {...args} iconRight="icon-arrow-right" />
    </div>
  ),
}

/**
 * Visual-regression frame — reproduces the legacy `ui-link-story`: three stacked links (plain,
 * icon-left, icon-right), "Read more here", `onSurface="transparent"`. No `play`,
 * `layout: 'fullscreen'`. Intentional divergence: the legacy link is orange (fails AA on white),
 * V2 uses accessible `text-text-blue` + `underline` (same call as the `Text` link). The colour
 * change is confined to the small link glyphs, so the diff stays under the 2% gate; mapping it lets
 * the review gallery surface the orange→blue divergence for sign-off. Icons are lucide vs the legacy
 * icomoon arrow.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <UiLink {...args} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <UiLink {...args} iconLeft="icon-arrow-right" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <UiLink {...args} iconRight="icon-arrow-right" />
      </div>
    </div>
  ),
}

/**
 * Reproduces the legacy `ui-link-blog-story`: same three-link layout, "Läs mer". Same intentional
 * orange→blue divergence as the base frame (confined to small glyphs, under the 2% gate).
 */
export const VisualBlog: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { children: 'Läs mer' },
  render: (args) => (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <UiLink {...args} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <UiLink {...args} iconLeft="icon-arrow-right" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <UiLink {...args} iconRight="icon-arrow-right" />
      </div>
    </div>
  ),
}
