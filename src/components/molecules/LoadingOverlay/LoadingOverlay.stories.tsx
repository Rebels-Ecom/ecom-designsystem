import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { LoadingOverlay } from './LoadingOverlay'

const meta = {
  title: 'Design System/Molecules/LoadingOverlay',
  component: LoadingOverlay,
  // Stories render the overlay `absolute` inside a sized, positioned box so it stays contained in
  // the docs page (a `fixed` overlay would cover the whole page). The API default is `fixed`.
  args: { position: 'absolute' },
} satisfies Meta<typeof LoadingOverlay>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical overlay: the wrapped Loader exposes a `status` live region announcing the load. */
export const Default: Story = {
  args: { isVisible: true, overlayBkgColor: 'light', loaderColor: 'default' },
  render: (args) => (
    <div className="relative h-80 w-full bg-surface-subdued">
      <p className="p-4 text-body text-text-default">Innehåll som laddas …</p>
      <LoadingOverlay {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
  },
}

/** With a label — announced together with the loading state. */
export const WithText: Story = {
  args: {
    isVisible: true,
    overlayBkgColor: 'light',
    loaderColor: 'orange',
    text: 'Vi arbetar på det! Vänta …',
  },
  render: (args) => (
    <div className="relative h-80 w-full bg-surface-subdued">
      <p className="p-4 text-body text-text-default">Innehåll som laddas …</p>
      <LoadingOverlay {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Vi arbetar på det! Vänta …')).toBeVisible()
  },
}

/** When `isVisible` is false the overlay unmounts — no scrim, no live region. */
export const Hidden: Story = {
  args: { isVisible: false },
  render: (args) => (
    <div className="relative h-80 w-full bg-surface-subdued">
      <p className="p-4 text-body text-text-default">Innehåll som laddas …</p>
      <LoadingOverlay {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('status')).not.toBeInTheDocument()
  },
}

// ── Visual parity: one static frame per legacy `loading-overlay-story-*` baseline. The overlay is
// `absolute` inside a full-viewport box, reproducing the legacy full-screen scrim's pixels without a
// page-covering `fixed` layer. Legacy `loaderColor: 'blue'` maps to V2 'default'. ──
export const VisualLight: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { isVisible: true, overlayBkgColor: 'light', loaderSize: 'lg', loaderColor: 'default' },
  render: (args) => (
    <div className="relative h-screen w-full">
      <LoadingOverlay {...args} />
    </div>
  ),
}

export const VisualDark: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { isVisible: true, overlayBkgColor: 'dark', loaderSize: 'lg', loaderColor: 'orange' },
  render: (args) => (
    <div className="relative h-screen w-full">
      <LoadingOverlay {...args} />
    </div>
  ),
}

export const VisualWithText: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    isVisible: true,
    overlayBkgColor: 'light',
    loaderSize: 'lg',
    loaderColor: 'orange',
    text: `We're working on it! Please wait ...`,
  },
  render: (args) => (
    <div className="relative h-screen w-full">
      <LoadingOverlay {...args} />
    </div>
  ),
}

export const VisualSmall: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    isVisible: true,
    overlayBkgColor: 'light',
    loaderSize: 'sm',
    loaderColor: 'orange',
    text: `We're working on it! Please wait ...`,
  },
  render: (args) => (
    <div className="relative h-screen w-full">
      <LoadingOverlay {...args} />
    </div>
  ),
}
