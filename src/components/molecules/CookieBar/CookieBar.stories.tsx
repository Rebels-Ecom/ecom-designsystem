import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { CookieBar } from './CookieBar'

const meta = {
  title: 'Design System/Deprecated/CookieBar',
  component: CookieBar,
  args: {
    buttonLabel: 'Jag förstår',
    text: 'Cookies används för att ge en bättre upplevelse av vår webbplats. Läs mer om våra cookies och om hur du kan avböja cookies',
    linkComponent: (
      <a href="#" className="text-text-blue underline">
        här.
      </a>
    ),
    onClick: fn(),
  },
} satisfies Meta<typeof CookieBar>

export default meta
type Story = StoryObj<typeof meta>

/** Canonical banner: message, inline link and an accept button pinned to the bottom of the viewport. */
export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    // The bar is exposed as a named landmark region so AT users can find/skip it.
    const region = canvas.getByRole('region', { name: 'Cookie consent' })
    await expect(region).toBeInTheDocument()

    // The accept button is keyboard-reachable and its label is its accessible name.
    const button = canvas.getByRole('button', { name: 'Jag förstår' })
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}

/** `Escape` inside the bar dismisses it (a convenience that does not trap focus). */
export const EscapeDismisses: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Jag förstår' })
    button.focus()
    await userEvent.keyboard('{Escape}')
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/** The region name is overridable for localisation; here it becomes Swedish. */
export const Localized: Story = {
  args: {
    labels: { region: 'Cookie-samtycke' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('region', { name: 'Cookie-samtycke' })).toBeInTheDocument()
  },
}

/** Static frame reproducing the legacy `cookie-bar-story` baseline (fixed to the viewport bottom). */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
}
