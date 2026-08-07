import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, waitFor, within } from 'storybook/test'
import { PopUp } from './PopUp'
import { GroupWrapper } from '../../atoms/GroupWrapper'
import { Heading } from '../../atoms/Heading'
import { Button } from '../Button'

const meta = {
  title: 'Design System/Molecules/PopUp',
  component: PopUp,
  // `children` is supplied per-story (via `render` or `args`); this placeholder satisfies the required prop.
  args: { open: false, children: null },
} satisfies Meta<typeof PopUp>

export default meta
type Story = StoryObj<typeof meta>

const confirmContent = (onClose: () => void) => (
  <GroupWrapper direction="column" align="center">
    <Heading order={4}>Vill du spara dina ändringar?</Heading>
    {/* align (cross-axis) centres the stacked buttons on mobile; position (main-axis) centres the
        button row on desktop — both are needed since the group is column→row across the breakpoint. */}
    <GroupWrapper align="center" position="center">
      <Button type="button" surface="primary" onClick={onClose}>
        Spara
      </Button>
      <Button type="button" surface="secondary" onClick={onClose}>
        Ångra
      </Button>
    </GroupWrapper>
  </GroupWrapper>
)

/**
 * Trigger-driven panel. The play test opens the panel and asserts its content becomes reachable.
 */
export const Default: Story = {
  args: { open: false },
  render: (args) => {
    const [open, setOpen] = useState(args.open)
    return (
      <div>
        <Button type="button" surface="primary" onClick={() => setOpen(true)}>
          Öppna popup
        </Button>
        <PopUp {...args} open={open}>
          {confirmContent(() => setOpen(false))}
        </PopUp>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Öppna popup' }))
    await expect(canvas.getByRole('heading', { name: 'Vill du spara dina ändringar?' })).toBeInTheDocument()
    // Wait for the slide-in to settle before the a11y scan (afterEach). Mid-fade the panel is
    // partially transparent, which blends its buttons below the contrast threshold and fails axe on
    // a transient frame; once opacity hits 1 the (accessible) colours are scanned correctly.
    await waitFor(() => {
      const panel = canvasElement.querySelector<HTMLElement>('.fixed')
      expect(panel).not.toBeNull()
      expect(getComputedStyle(panel as HTMLElement).opacity).toBe('1')
    })
  },
}

// Gallery-only (NOT baseline-mapped): the legacy `pop-up-story` frame captures the *closed* state (just
// its trigger button), so there is no legacy image of the open panel to diff against. This shows the
// open panel for the review gallery; the harness emulates `prefers-reduced-motion`, so the slide-in
// entrance is suppressed and the panel renders settled.
export const Visual: Story = {
  tags: ['visual'],
  args: { open: true, contentPosition: 'center' },
  parameters: { layout: 'fullscreen' },
  render: (args) => <PopUp {...args}>{confirmContent(() => {})}</PopUp>,
}
