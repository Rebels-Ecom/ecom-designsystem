import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Table } from './Table'
import type { TableRow } from './Table'
import { ContentWrapper } from '../../atoms/ContentWrapper'

const rows: TableRow[] = [
  {
    name: 'Name 1',
    status: 'OK',
    id: '1',
    icon: { icon: 'icon-alert-circle', label: 'Alert for Name 1', onClick: fn() },
    icon2: { icon: 'icon-alert-circle', label: 'Second alert for Name 1', onClick: fn() },
  },
  { name: 'Name 2', status: 'IN PROGRESS', id: '2', icon: { icon: 'icon-alert-circle', label: 'Alert for Name 2', onClick: fn() } },
  { name: 'Name 3', status: 'DONE', id: '3', icon: { icon: 'icon-alert-circle', label: 'Alert for Name 3', onClick: fn() } },
  { name: 'Name 4', status: 'DONE', id: '4', icon: { icon: 'icon-alert-circle', label: 'Alert for Name 4', onClick: fn() } },
  { name: 'Name 5', status: 'DONE', id: '5', icon: { icon: 'icon-alert-circle', label: 'Alert for Name 5', onClick: fn() } },
  { name: 'Name 6', status: 'DONE', id: '6', icon: { icon: 'icon-alert-circle', label: 'Alert for Name 6', onClick: fn() } },
]

const animals: TableRow[] = [
  { animal: 'Dog', breed: 'Golden Retriever', id: '1' },
  { animal: 'Dog', breed: 'German Shepherd', id: '2' },
  { animal: 'Dog', breed: 'English Setter', id: '3' },
]

const meta = {
  title: 'Design System/Molecules/Table',
  component: Table,
  args: {
    listItems: rows,
    hideColumnTitles: false,
    equalWidthColumns: false,
    listGap: 0,
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical table. The `play` proves a column header is a keyboard-operable sort button that flips the
 * column's `aria-sort` and reorders the rows.
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Initial sort is name-ascending, so "Name 1" leads.
    expect(canvas.getAllByRole('cell')[0]).toHaveTextContent('Name 1')
    const sortByName = canvas.getByRole('button', { name: 'Sort by name' })
    await userEvent.click(sortByName)
    await expect(sortByName.closest('th')).toHaveAttribute('aria-sort', 'descending')
    await expect(canvas.getAllByRole('cell')[0]).toHaveTextContent('Name 6')
  },
}

/** Text-only table (no action columns). */
export const TextOnly: Story = {
  args: { listItems: animals },
}

/** Column titles hidden — they stay in the accessibility tree (sr-only) so the table is still labelled. */
export const HideColumnTitles: Story = {
  args: { hideColumnTitles: true },
}

/** Loading skeleton — a `role="status"` region announces the loading state. */
export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
    await expect(canvas.queryByRole('table')).toBeNull()
  },
}

/** Localised sort-control and action-column names via `labels`. */
export const Localized: Story = {
  args: {
    labels: { actions: 'Åtgärder', sortBy: (column) => `Sortera efter ${column}` },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Sortera efter name' })).toBeInTheDocument()
  },
}

/*
 * Visual — reviewOnly (see baseline-map). Reproduces `table-story` (six rows, two action columns). The
 * V2 rewrite is a semantic `<table>` (legacy was a `<div>` grid), a deliberate structural divergence
 * that won't pixel-match, so it is paired in the review gallery for human sign-off, not pixel-gated.
 * Mobile is excluded: the legacy mobile PNG was captured full-page (375×1436), not at viewport height.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <ContentWrapper>
      <Table {...args} />
    </ContentWrapper>
  ),
}

/* Visual — reviewOnly. Reproduces `table-story-two` (three text rows), same divergence rationale. */
export const VisualTwo: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { listItems: animals },
  render: (args) => (
    <ContentWrapper>
      <Table {...args} />
    </ContentWrapper>
  ),
}
