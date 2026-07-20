import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, waitFor, within } from 'storybook/test'
import { DynamicFilter, type FilterGroup, type FilterSelection } from './DynamicFilter'

const rangeOptions = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 1000, 1500, 2000, 2466].map(
  (value) => ({ name: String(value), value: 'rangefilter*V16062' }),
)

const baseFilters: FilterGroup[] = [
  { name: 'Listpris', type: 'range', id: 'rangefilter*V16062', formatLabel: 'kr', options: rangeOptions },
  {
    name: 'Land',
    type: 'checkbox',
    options: [
      { name: 'Sverige', value: 'sverige' },
      { name: 'Italien', value: 'italien' },
      { name: 'USA', value: 'usa' },
      { name: 'Belgien', value: 'belgien' },
      { name: 'Norge', value: 'norge' },
      { name: 'Irland', value: 'irland' },
      { name: 'Tyskland', value: 'tyskland' },
      { name: 'Nederländerna', value: 'nederländerna' },
      { name: 'Tjeckien', value: 'tjeckien' },
    ],
  },
  {
    name: 'Producent',
    type: 'checkbox',
    options: [
      { name: 'Heineken', value: 'heineken' },
      { name: 'Birra Moretti', value: 'birra-moretti' },
    ],
  },
  {
    name: 'Single Select',
    type: 'radio',
    options: [
      { name: 'Endast dryck', value: 'drink-only' },
      { name: 'Allt', value: 'all' },
    ],
  },
]

const preSelectedData: FilterSelection[] = [
  { name: 'Listpris', selectedOptions: [{ name: 'range-id', value: '20-600' }] },
  { name: 'Land', selectedOptions: [{ name: 'Italien', value: 'italien' }] },
]

/** Reproduces the legacy story's result list rendered beside the filter (the frame the baseline captured). */
const products = [
  { id: '1', producer: 'Birra Moretti', price: '20' },
  { id: '2', producer: 'Birra Moretti', price: '30' },
  { id: '3', producer: 'Heineken', price: '40' },
  { id: '4', producer: 'Heineken', price: '10' },
]

function ProductList() {
  return (
    <div className="flex flex-col">
      {products.map((product) => (
        <span key={product.id} style={{ color: 'blue' }}>
          {product.producer}, {product.price}kr
        </span>
      ))}
    </div>
  )
}

const meta = {
  title: 'Design System/Organisms/DynamicFilter',
  component: DynamicFilter,
  parameters: { layout: 'fullscreen' },
  args: { onUpdate: fn() },
} satisfies Meta<typeof DynamicFilter>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical example — the filter trigger opens the drawer of grouped, expandable facets. The play
 * function opens the drawer, expands a group, selects a checkbox (reported without a context change,
 * 3.2.2), confirms a removable chip appears, and closes with `Escape` — verifying focus returns to
 * the trigger.
 */
export const Default: Story = {
  args: { filters: baseFilters, title: 'Filter' },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole('button', { name: 'Filter' })

    await userEvent.click(trigger)
    const dialog = await canvas.findByRole('dialog')
    await expect(dialog).toBeInTheDocument()

    // Expand the "Land" group — a disclosure that toggles aria-expanded.
    const landButton = within(dialog).getByRole('button', { name: 'Land' })
    await userEvent.click(landButton)
    await expect(landButton).toHaveAttribute('aria-expanded', 'true')

    // Selecting an option reports the change and surfaces a removable chip outside the drawer.
    const sweden = await within(dialog).findByLabelText('Sverige')
    await userEvent.click(sweden)
    await expect(sweden).toBeChecked()
    await expect(args.onUpdate).toHaveBeenCalled()
    await expect(canvas.getByRole('button', { name: 'Remove filter: Sverige' })).toBeInTheDocument()

    // Escape closes the drawer and returns focus to the trigger (2.1.2).
    await userEvent.keyboard('{Escape}')
    await waitFor(() => expect(canvas.queryByRole('dialog')).not.toBeInTheDocument())
    await expect(trigger).toHaveFocus()
  },
}

/**
 * Pre-selected filters render as removable chips outside the drawer (inline at `md`+, behind a
 * disclosure toggle below it). The play function removes one chip and asserts it is dropped.
 */
export const WithPreSelected: Story = {
  args: { filters: baseFilters, title: 'Filter', preSelected: preSelectedData },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    const italienChip = canvas.getByRole('button', { name: 'Remove filter: Italien' })
    await expect(italienChip).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Remove filter: range-id' })).toBeInTheDocument()

    await userEvent.click(italienChip)
    await waitFor(() =>
      expect(canvas.queryByRole('button', { name: 'Remove filter: Italien' })).not.toBeInTheDocument(),
    )
    await expect(args.onUpdate).toHaveBeenCalled()
    // The other chip remains.
    await expect(canvas.getByRole('button', { name: 'Remove filter: range-id' })).toBeInTheDocument()
  },
}

/** Every built-in string is overridable via `labels` (English defaults). */
export const Localized: Story = {
  args: { filters: baseFilters, labels: { filterButton: 'Filtrera' } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button', { name: 'Filtrera' })).toBeInTheDocument()
  },
}

/**
 * The open drawer with every group expanded — exercises (and lets axe scan) the checkbox group, the
 * single-select `radiogroup`, and the dual-thumb range slider together, plus the footer "show results"
 * button.
 */
export const Open: Story = {
  args: { filters: baseFilters, title: 'Filter', result: 4 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Filter' }))
    const dialog = await canvas.findByRole('dialog')

    for (const name of ['Listpris', 'Land', 'Producent', 'Single Select']) {
      await userEvent.click(within(dialog).getByRole('button', { name }))
    }

    await expect(within(dialog).getByRole('radiogroup')).toBeInTheDocument()
    await expect(within(dialog).getAllByRole('checkbox').length).toBeGreaterThan(0)
    await expect(within(dialog).getAllByRole('slider')).toHaveLength(2)
    await expect(within(dialog).getByRole('button', { name: 'Show results (4)' })).toBeInTheDocument()
  },
}

/**
 * Visual baseline — the closed filter bar beside the result list (Swedish labels reproduce the legacy
 * captured frame). No `play` so the frame stays static.
 */
export const Visual: Story = {
  tags: ['visual'],
  args: {
    filters: baseFilters,
    title: 'Filter',
    labels: { filterButton: 'Filtrera', selectedFilters: (count) => `Valda filter (${count})` },
  },
  render: (args) => (
    <>
      <DynamicFilter {...args} />
      <ProductList />
    </>
  ),
}

/** Visual baseline — the closed bar with two pre-selected chips + clear-all beside the result list. */
export const VisualPreSelected: Story = {
  tags: ['visual'],
  args: {
    filters: baseFilters,
    title: 'Filter',
    preSelected: preSelectedData,
    labels: { filterButton: 'Filtrera', selectedFilters: (count) => `Valda filter (${count})` },
  },
  render: (args) => (
    <>
      <DynamicFilter {...args} />
      <ProductList />
    </>
  ),
}
