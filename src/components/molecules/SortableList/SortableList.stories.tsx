import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { SortableList } from './SortableList'
import { SortableListItem } from '../SortableListItem'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { GroupWrapper } from '../../atoms/GroupWrapper'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'

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

const rows = [
  <SortableListItem key="e" name="E-handelsfrågor" onClick={fn()}>
    {eHandel}
  </SortableListItem>,
  <SortableListItem key="l" name="Fråga om leverans" onClick={fn()}>
    {leverans}
  </SortableListItem>,
]

const meta = {
  title: 'Design System/Molecules/SortableList',
  component: SortableList,
  args: {
    listHeading: 'Reklamation',
    withSeparatingLines: true,
    children: rows,
    sortingOptions: [
      { name: 'Typ', onClickUp: fn(), onClickDown: fn() },
      { name: 'Skapad', onClickUp: fn(), onClickDown: fn() },
      { name: 'Ändrat', onClickUp: fn(), onClickDown: fn() },
    ],
  },
} satisfies Meta<typeof SortableList>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical list. The `play` proves a sort control is a keyboard-operable button that fires the
 * option's handler (first selection sorts descending).
 */
export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Skapad' }))
    await expect(args.sortingOptions[1].onClickDown).toHaveBeenCalled()
  },
}

/** An applied sort marks its control `aria-pressed` (state is not conveyed by colour alone). */
export const ActiveSorting: Story = {
  args: { activeSorting: { name: 'Typ', direction: 'asc' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Typ', pressed: true })).toBeInTheDocument()
  },
}

/** Loading swaps the list for the `role="status"` spinner. */
export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
    await expect(canvas.queryByRole('button', { name: 'Typ' })).toBeNull()
  },
}

/** Localised sort-controls label via `labels`. */
export const Localized: Story = {
  args: { labels: { sortOptions: 'Sorteringsval' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('list', { name: 'Sorteringsval' })).toBeInTheDocument()
  },
}

/*
 * Visual parity — reproduces `sortable-list-story` (heading "Reklamation", three idle sort controls,
 * two interactive rows with separating lines) inside the legacy 1254px wrapper. No `play` so the frame
 * never mutates.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <ContentWrapper>
        <SortableList {...args} />
      </ContentWrapper>
    </div>
  ),
}
