import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { AdminSearch, type AdminSearchResult } from './AdminSearch'

const dataset: AdminSearchResult[] = [
  { name: 'German Jss', companyName: 'Experium Lodgebaren (371000)', email: 'jss@tt.tt' },
  { name: 'Ebba Persson', companyName: 'Experium Lodgebaren (371000)', email: 'ebba.persson@nexergroup.com' },
  { name: 'Henrik Test', companyName: 'Experium Lodgebaren (371000)', email: 'test-henrik@371000.se' },
]

const meta = {
  title: 'Design System/Molecules/AdminSearch',
  component: AdminSearch,
  args: {
    id: 'admin-search',
    noResultText: 'Your search returned no results',
    placeholder: 'Sök på kundnummer, företag, namn',
    onClickSearchResult: fn(),
    // Controlled props are driven by the render wrapper below; these defaults satisfy the type.
    isOpen: false,
    query: '',
    setIsOpen: () => {},
    setQuery: () => {},
    results: [],
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen)
    const [query, setQuery] = useState(args.query)
    const results = query
      ? dataset.filter((item) =>
          [item.name, item.companyName, item.email].some((field) =>
            field.toLowerCase().includes(query.toLowerCase()),
          ),
        )
      : []
    return (
      <AdminSearch {...args} isOpen={isOpen} setIsOpen={setIsOpen} query={query} setQuery={setQuery} results={results} />
    )
  },
} satisfies Meta<typeof AdminSearch>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Canonical search. The `play` proves the field is a labelled searchbox, that typing opens the
 * results dropdown, and that activating a result calls `onClickSearchResult` (2.1.1 / 4.1.2).
 */
export const Default: Story = {
  args: { isOpen: false, query: '' },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('searchbox', { name: 'Search' })
    await userEvent.type(input, 'German')
    const result = await canvas.findByRole('button', { name: /German Jss/ })
    await userEvent.click(result)
    await expect(args.onClickSearchResult).toHaveBeenCalled()
  },
}

/** Loading — the dropdown shows the spinner while results are fetched. */
export const Loading: Story = {
  args: { isOpen: true, query: 'german', isLoading: true },
}

/** No matches — the dropdown shows `noResultText`. */
export const NoResults: Story = {
  args: { isOpen: true, query: 'zzzzz' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Your search returned no results')).toBeInTheDocument()
  },
}

/*
 * Visual-regression frame — reproduces `admin-search-story`: the closed search bar (blue search-icon
 * box + tinted input with the Swedish placeholder). No `play`, `layout: 'fullscreen'`. The dropdown /
 * loader are behaviour-only (no legacy baseline — the story captured the closed bar).
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  args: { isOpen: false, query: '' },
}
