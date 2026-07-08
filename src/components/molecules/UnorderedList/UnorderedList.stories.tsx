import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { UnorderedList } from './UnorderedList'
import { CheckboxListItem } from '../CheckboxListItem'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'

const meta = {
  title: 'Design System/Molecules/UnorderedList',
  component: UnorderedList,
  args: { withSeparatingLines: true },
} satisfies Meta<typeof UnorderedList>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Build `n` alternating checkbox rows, mirroring the legacy `unordered-list-story`. Ids are made
 * unique per row (the legacy story reused the same id, which would fail the duplicate-id a11y rule).
 */
function rows(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const isLoka = i % 2 === 0
    const name = isLoka ? 'Loka stilla naturell 12 pack 50cl pet' : 'Heineken 5% 50cl engångsglas'
    const art = isLoka ? '1224345' : '115112'
    return (
      <CheckboxListItem key={i} id={`${art}-${i}`} name={`${art}-${i}`} value={art} checked={false} onChange={fn()}>
        <Heading order={5} noMargin>
          {name}
        </Heading>
        <Text>Art.nr: {art}</Text>
      </CheckboxListItem>
    )
  })
}

/**
 * Canonical list. The play test confirms the semantic `role="list"` wrapper, one `<li>` per row,
 * and that the first row's control is keyboard-reachable.
 */
export const Default: Story = {
  args: { children: rows(3) },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('list')).toBeInTheDocument()
    expect(canvas.getAllByRole('listitem')).toHaveLength(3)
    await userEvent.tab()
    const firstCheckbox = canvas.getAllByRole('checkbox')[0]
    await expect(firstCheckbox).toHaveFocus()
  },
}

/** While loading, the list is replaced by a status spinner — no list is exposed to AT. */
export const Loading: Story = {
  args: { children: rows(3), loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('status')).toBeInTheDocument()
    expect(canvas.queryByRole('list')).not.toBeInTheDocument()
  },
}

// Reproduces the legacy `unordered-list-story` frame: 7 separated checkbox rows in a 1254px column.
export const Visual: Story = {
  tags: ['visual'],
  args: { children: rows(7) },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <UnorderedList {...args} />
    </div>
  ),
}

// Reproduces the legacy `unordered-list-story-loading` frame (same column, spinner instead of rows).
export const VisualLoading: Story = {
  tags: ['visual'],
  args: { children: rows(7), loading: true },
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <UnorderedList {...args} />
    </div>
  ),
}
