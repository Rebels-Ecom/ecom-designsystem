import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { SortableListItem } from './SortableListItem'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'
import { GroupWrapper } from '../../atoms/GroupWrapper'

const meta = {
  title: 'Design System/Molecules/SortableListItem',
  component: SortableListItem,
  args: { onClick: fn() },
} satisfies Meta<typeof SortableListItem>

export default meta
type Story = StoryObj<typeof meta>

const eHandel = (
  <>
    <GroupWrapper direction="column">
      <Heading order={5} noMargin>
        E-HANDELSFRÅGOR
      </Heading>
      <Text>Hej, vi testar för att se var den här infon syns</Text>
    </GroupWrapper>
    <Text>23/09/04</Text>
    <Text>23/09/05</Text>
  </>
)

const leverans = (
  <>
    <GroupWrapper direction="column" spacing="xs">
      <Heading order={5} noMargin>
        FRÅGA OM LEVERANS
      </Heading>
      <Text>Test test</Text>
    </GroupWrapper>
    <Text>23/09/04</Text>
    <Text>23/09/05</Text>
  </>
)

/**
 * Canonical interactive row. The `play` tabs to the stretched row button, asserts it is focused and
 * named by `name`, then activates it with the keyboard and asserts the handler fired (2.1.1 / 4.1.2).
 */
export const EHandel: Story = {
  args: { name: 'E-handelsfrågor', children: eHandel },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: 'E-handelsfrågor' })
    await userEvent.tab()
    await expect(button).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await expect(args.onClick).toHaveBeenCalled()
  },
}

/** Second row variant (matches the legacy `leverans` frame). */
export const Leverans: Story = {
  args: { name: 'Fråga om leverans', children: leverans },
}

/** Non-interactive row: no `onClick`, so no button/chevron is rendered. */
export const Static: Story = {
  args: { name: 'Statisk rad', onClick: undefined, children: leverans },
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).queryByRole('button')).toBeNull()
  },
}

/** Visual parity — reproduces the legacy `sortable-list-item-e-handel` frame (1800px wrapper). */
export const Visual: Story = {
  args: { name: 'E-handelsfrågor', children: eHandel },
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
      <SortableListItem {...args} />
    </div>
  ),
}

/** Visual parity — reproduces the legacy `sortable-list-item-leverans` frame. */
export const VisualLeverans: Story = {
  args: { name: 'Fråga om leverans', children: leverans },
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
      <SortableListItem {...args} />
    </div>
  ),
}
