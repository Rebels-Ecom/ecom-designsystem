import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Search, type SearchResult } from './Search'

const meta = {
  title: 'Design System/Molecules/Search',
  component: Search,
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

const items: SearchResult[] = [
  { label: 'Ekoöl på riktigt', text: 'Testa vår ekoöl', slug: 'eko-ol' },
  { label: 'Loka årets vinnare', text: 'Loka årets vinnare i sustainable brand index', slug: 'loka-arets-vinnare' },
  { label: 'Briska', text: 'Briska', slug: 'briska' },
  { label: 'Kiviks musteri', text: 'Prova nya cider', slug: 'kiviks-cider' },
]

const noResult = { label: 'Your search returned no results', text: 'Thank you, come again' }

/** Controlled wrapper mirroring how a consumer owns query/open state and filters results. */
function ControlledSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [, setIsFocused] = useState(false)
  const [query, setQuery] = useState('')
  const results = query
    ? items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <div className="min-h-72">
      <Search
        id="SearchId"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsFocused={setIsFocused}
        query={query}
        setQuery={setQuery}
        results={results}
        noResult={noResult}
        placeholder="Sök"
      />
    </div>
  )
}

/** Type to open the dropdown, see matching results, clear the field and dismiss with Escape. */
export const Default: Story = {
  args: {
    id: 'SearchId',
    isOpen: false,
    setIsOpen: () => {},
    setIsFocused: () => {},
    query: '',
    setQuery: () => {},
    results: [],
    noResult,
    placeholder: 'Sök',
  },
  render: () => <ControlledSearch />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Landmark + labelled field, not just a placeholder.
    await expect(canvas.getByRole('search')).toBeInTheDocument()
    const field = canvas.getByRole('textbox', { name: 'Search' })

    await userEvent.type(field, 'briska')
    await expect(canvas.getByRole('link', { name: /Briska/ })).toBeInTheDocument()

    // Clear button is keyboard-reachable and resets the query.
    const clear = canvas.getByRole('button', { name: 'Clear search' })
    await userEvent.click(clear)
    await expect(field).toHaveValue('')

    // No-match query shows the fallback, then Escape closes the dropdown.
    await userEvent.type(field, 'zzz')
    await expect(canvas.getByText('Your search returned no results')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await expect(canvas.queryByText('Your search returned no results')).not.toBeInTheDocument()
  },
}

/** The field, submit and clear control names are overridable for localisation. */
export const Localized: Story = {
  args: {
    id: 'SearchLocalized',
    isOpen: false,
    setIsOpen: () => {},
    setIsFocused: () => {},
    query: '',
    setQuery: () => {},
    results: [],
    noResult,
    placeholder: 'Sök',
    labels: { field: 'Sök', submit: 'Sök', clear: 'Rensa sökning', results: 'Sökresultat' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('textbox', { name: 'Sök' })).toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Sök' })).toBeInTheDocument()
  },
}

/** Static closed frame reproducing the legacy `search-story` baseline (empty query, no dropdown). */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: {
    id: 'SearchId',
    isOpen: false,
    setIsOpen: () => {},
    setIsFocused: () => {},
    query: '',
    setQuery: () => {},
    results: [],
    noResult,
    placeholder: 'Placeholder text',
  },
}
