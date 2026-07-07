import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Button } from './Button'

const meta = {
  title: 'Design System/Molecules/Button',
  component: Button,
  args: { children: 'Add to cart', onClick: fn() },
  argTypes: {
    surface: {
      options: ['primary', 'secondary', 'tertiary', 'x', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'small', 'x-small', 'xx-small'],
      control: { type: 'select' },
    },
    iconLeft: { control: { type: 'text' } },
    iconRight: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical primary button. The `play` function drives real keyboard interaction: Tab moves focus
 * to the button, Enter activates it, and the click handler fires — proving native button semantics
 * and keyboard operability (2.1.1).
 */
export const Primary: Story = {
  args: { surface: 'primary', size: 'small' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Add to cart' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/** Secondary (outlined) surface. */
export const Secondary: Story = {
  args: { surface: 'secondary', children: 'Back' },
}

/** Tertiary (orange) surface. */
export const Tertiary: Story = {
  args: { surface: 'tertiary', children: 'Explore' },
}

/**
 * With leading and trailing decorative icons. The icons are `aria-hidden`, so the accessible name
 * stays exactly the visible label — asserted here.
 */
export const WithIcons: Story = {
  args: { iconLeft: 'icon-shopping-cart', iconRight: 'icon-arrow-right', children: 'Checkout' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Icons are decorative: the accessible name is just the label text.
    await expect(canvas.getByRole('button', { name: 'Checkout' })).toBeVisible()
  },
}

/**
 * Loading state: the spinner replaces the label visually, but the button stays named (`sr-only`
 * label), is disabled, and exposes `aria-busy` — verified below.
 */
export const Loading: Story = {
  args: { loading: true, children: 'Saving' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Saving' })
    await expect(button).toBeDisabled()
    await expect(button).toHaveAttribute('aria-busy', 'true')
  },
}

/** Disabled state. */
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Add to cart' })).toBeDisabled()
  },
}

/**
 * Accessibility sweep — every surface × the size range rendered together so `@storybook/addon-a11y`
 * scans each combination's contrast and naming in one pass.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['primary', 'secondary', 'tertiary', 'link'] as const).map((surface) => (
        <div key={surface} className="flex flex-wrap items-center gap-4">
          {(['large', 'small', 'x-small', 'xx-small'] as const).map((size) => (
            <Button key={size} surface={surface} size={size}>
              {surface}/{size}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}

/*
 * Visual-regression frames — each reproduces one legacy `Buttons` baseline (single primary button,
 * exact size + label). No `play`, `layout: 'fullscreen'`. These carry an intentional font divergence:
 * legacy referenced an undefined `--font-family-secondaryBold`, so its baselines rendered in the UA
 * font, whereas V2 applies the brand `font-primary`. The label is a tiny fraction of the full-screen
 * canvas, so the diff stays well under the 2% gate — mapping it means the review gallery pairs it
 * against the legacy PNG so a human can eyeball the (expected) type difference, rather than the button
 * silently escaping review. Icon frames additionally show lucide vs the legacy icomoon glyph.
 */

/** Reproduces `button-small` — primary, small, "Button primary". */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'small', children: 'Button primary' },
}

/** Reproduces `button-small-icon-left`. */
export const VisualIconLeft: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'small', children: 'Button primary', iconLeft: 'icon-users' },
}

/** Reproduces `button-small-icon-right`. */
export const VisualIconRight: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'small', children: 'Button primary', iconRight: 'icon-users' },
}

/** Reproduces `button-large` — primary, large, "Button secondary" (legacy's label for this frame). */
export const VisualLarge: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'large', children: 'Button secondary' },
}

/** Reproduces `button-large-icon-left`. */
export const VisualLargeIconLeft: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'large', children: 'Button secondary', iconLeft: 'icon-users' },
}

/** Reproduces `button-large-icon-right`. */
export const VisualLargeIconRight: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'large', children: 'Button secondary', iconRight: 'icon-users' },
}

/** Reproduces `button-x-small`. */
export const VisualXSmall: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'x-small', children: 'Button secondary' },
}

/** Reproduces `button-x-small-icon-left`. */
export const VisualXSmallIconLeft: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'x-small', children: 'Button secondary', iconLeft: 'icon-users' },
}

/** Reproduces `button-x-small-icon-right`. */
export const VisualXSmallIconRight: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'x-small', children: 'Button secondary', iconRight: 'icon-users' },
}

/** Reproduces `button-xx-small`. */
export const VisualXxSmall: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'xx-small', children: 'Button secondary' },
}

/** Reproduces `button-xx-small-icon-left`. */
export const VisualXxSmallIconLeft: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'xx-small', children: 'Button secondary', iconLeft: 'icon-users' },
}

/** Reproduces `button-xx-small-icon-right`. */
export const VisualXxSmallIconRight: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { surface: 'primary', size: 'xx-small', children: 'Button secondary', iconRight: 'icon-users' },
}
