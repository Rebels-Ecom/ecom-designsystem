import { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { ProductSearch, type ProductSearchResult } from './ProductSearch'
import beerGlass from '../../../assets/product-images/beer-glass.jpg'

// Real product photo (bundled from the legacy assets, so the review gallery renders reproducibly
// with no network). Decorative (empty alt) — the product name is the adjacent accessible text.
const image = { id: 'ps-thumb', src: beerGlass, sources: [], alt: '' }

const catalogue: ProductSearchResult[] = [
  {
    partNo: '1109611',
    productName: 'Gotlands Bryggeri Wisby Kloster 5% 33cl',
    image,
    productVariantList: [
      { variantId: '1109611', variantName: '33cl Engångsglas', image },
      { variantId: '2131291', variantName: '30l FAT', image },
    ],
  },
  { partNo: '1105101', productName: 'Norrlands Guld Export 5,3 50cl', image },
]

const meta = {
  title: 'Design System/Organisms/Product/ProductSearch',
  component: ProductSearch,
  args: {
    id: 'product-search',
    placeholder: 'Sök på namn, art.nr. mm',
    noResultText: 'Your search returned no results',
    onSelectResult: fn(),
    // Defaults for the controlled props; interactive stories override these via local state in `render`.
    isOpen: false,
    setIsOpen: fn(),
    query: '',
    setQuery: fn(),
    results: [],
  },
} satisfies Meta<typeof ProductSearch>

export default meta
type Story = StoryObj<typeof meta>

/** Interactive controlled search — typing opens a live results dropdown filtered from a catalogue. */
export const Default: Story = {
  render: (args) => {
    const [query, setQuery] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const results = useMemo(
      () =>
        query
          ? catalogue.filter((p) => p.productName.toLowerCase().includes(query.toLowerCase()))
          : [],
      [query],
    )
    return (
      <div style={{ maxWidth: '616px' }}>
        <ProductSearch {...args} query={query} setQuery={setQuery} isOpen={isOpen} setIsOpen={setIsOpen} results={results} />
      </div>
    )
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByRole('textbox', { name: 'Search products' })
    await userEvent.type(field, 'Norrlands')
    const list = await canvas.findByRole('list', { name: 'Search results' })
    await expect(within(list).getByText('Norrlands Guld Export 5,3 50cl')).toBeInTheDocument()
    await userEvent.click(within(list).getByRole('button', { name: 'Add Norrlands Guld Export 5,3 50cl' }))
    await expect(args.onSelectResult).toHaveBeenCalledWith('1105101')
  },
}

/** No matches — the consumer-supplied `noResultText` shows in the live region. */
export const NoResults: Story = {
  render: (args) => {
    const [query, setQuery] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div style={{ maxWidth: '616px' }}>
        <ProductSearch {...args} query={query} setQuery={setQuery} isOpen={isOpen} setIsOpen={setIsOpen} results={[]} />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.type(canvas.getByRole('textbox', { name: 'Search products' }), 'zzz')
    await expect(await canvas.findByText('Your search returned no results')).toBeInTheDocument()
  },
}

/** Escape closes the open dropdown and returns the field to its resting state (2.1.1). */
export const EscapeCloses: Story = {
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const field = canvas.getByRole('textbox', { name: 'Search products' })
    await userEvent.type(field, 'Norrlands')
    await expect(await canvas.findByRole('list', { name: 'Search results' })).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await expect(canvas.queryByRole('list', { name: 'Search results' })).toBeNull()
  },
}

/** Loading — while open with a query, the spinner replaces the results list. */
export const Loading: Story = {
  render: (args) => (
    <div style={{ maxWidth: '616px' }}>
      <ProductSearch {...args} query="Norr" isOpen isLoading setQuery={fn()} setIsOpen={fn()} results={[]} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('status')).toBeInTheDocument()
  },
}

/*
 * Visual parity — reproduces the legacy `product-search-story` frame: the CLOSED search bar (the story
 * was captured with `isOpen: false` and an empty query, so no dropdown). 616px max-width wrapper mirrors
 * the legacy story container.
 */
export const Visual: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ maxWidth: '616px' }}>
      <ProductSearch {...args} query="" isOpen={false} setQuery={fn()} setIsOpen={fn()} results={[]} />
    </div>
  ),
}

/*
 * Visual parity — reproduces `product-search-story-loading`. That legacy story also had `isOpen: false`
 * + empty query, so the spinner never showed and the captured frame is the SAME closed bar as `Visual`.
 */
export const VisualLoading: Story = {
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <div style={{ maxWidth: '616px' }}>
      <ProductSearch {...args} query="" isOpen={false} isLoading setQuery={fn()} setIsOpen={fn()} results={[]} />
    </div>
  ),
}
