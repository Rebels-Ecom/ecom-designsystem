import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { expect, userEvent, within } from 'storybook/test'
import { MenuButton } from './MenuButton'

const meta = {
  title: 'Design System/Atoms/MenuButton',
  component: MenuButton,
} satisfies Meta<typeof MenuButton>

export default meta
type Story = StoryObj<typeof meta>

export const Interactive: Story = {
  args: { isOpen: false, onClick: () => {} },
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <MenuButton {...args} isOpen={open} onClick={() => setOpen((v) => !v)} />
        <nav id="navigation-menu" aria-label="Main" hidden={!open}>
          <ul>
            <li>
              <a href="#products">Products</a>
            </li>
          </ul>
        </nav>
      </>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'Menu' })
    // Keyboard reachable with a visible focus ring (2.1.1 / 2.4.7).
    await userEvent.tab()
    await expect(button).toHaveFocus()
    // Enter toggles the disclosure state, kept in sync with ARIA (4.1.2).
    await expect(button).toHaveAttribute('aria-expanded', 'false')
    await userEvent.keyboard('{Enter}')
    await expect(button).toHaveAttribute('aria-expanded', 'true')
  },
}

// Open state rendered (with its controlled menu) for the a11y addon to scan.
export const Open: Story = {
  args: { isOpen: true, onClick: () => {} },
  render: (args) => (
    <>
      <MenuButton {...args} />
      <nav id="navigation-menu" aria-label="Main">
        <ul>
          <li>
            <a href="#products">Products</a>
          </li>
        </ul>
      </nav>
    </>
  ),
}

// Reproduces the legacy `menu-button-story` frame: the closed hamburger, no play so the
// captured frame is static.
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { isOpen: false, onClick: () => {} },
}
