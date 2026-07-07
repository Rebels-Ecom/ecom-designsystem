import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { InfoSummaryBox } from './InfoSummaryBox'
import { Text } from '../../atoms/Text'

const meta = {
  title: 'Design System/Molecules/InfoSummaryBox',
  component: InfoSummaryBox,
} satisfies Meta<typeof InfoSummaryBox>

export default meta
type Story = StoryObj<typeof meta>

const detailsContent = (
  <>
    <Text weight="bold">Administratör</Text>
    <Text>Jon Jonsson</Text>
    <Text>Granängsringen 3, 135 44, Tyresö</Text>
  </>
)

const usersContent = (
  <>
    <Text weight="bold">Beställare</Text>
    <Text borderBottom>Lisbeth Jonsson</Text>
    <Text borderBottom>Sture Jonsson</Text>
    <Text borderBottom>Steven Stevenson</Text>
    <Text>Bobby Granlund</Text>
  </>
)

/**
 * Canonical box with a label and an action. The play test proves the box is a group named by its label
 * and that the action button fires `onClick` from the keyboard.
 */
export const Default: Story = {
  args: {
    label: 'Dina uppgifter',
    linkLabel: 'Hantera/Ändra uppgifter',
    onClick: fn(),
    children: detailsContent,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('group', { name: 'Dina uppgifter' })).toBeInTheDocument()
    const action = canvas.getByRole('button', { name: 'Hantera/Ändra uppgifter' })
    await userEvent.click(action)
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/** Without a `label`, the box is a plain container with no group semantics. */
export const NoLabel: Story = {
  args: {
    children: detailsContent,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('group')).not.toBeInTheDocument()
  },
}

/** Highlighted variant (light background). */
export const Highlighted: Story = {
  args: {
    label: 'Välj vilka fakta du vill visa i din dryckeslista',
    withBackground: true,
    children: detailsContent,
  },
}

// Reproduces the legacy `info-summary-box-story-dina-uppgifter` frame (label + orange→blue action link,
// three Text lines, in the 1800px wrapper).
export const Visual: Story = {
  tags: ['visual'],
  args: {
    label: 'Dina uppgifter',
    linkLabel: 'Hantera/Ändra uppgifter',
    onClick: fn(),
    children: detailsContent,
  },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
      <InfoSummaryBox {...args} />
    </div>
  ),
}

// Reproduces the legacy `info-summary-box-story-anvandare` frame (bold heading + four bordered rows).
export const VisualAnvandare: Story = {
  tags: ['visual'],
  args: {
    label: 'Användare',
    linkLabel: 'Hantera',
    onClick: fn(),
    children: usersContent,
  },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
      <InfoSummaryBox {...args} />
    </div>
  ),
}
