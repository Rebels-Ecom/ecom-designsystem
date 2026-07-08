import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { PurchaseList, type PurchaseListItem } from './PurchaseList'
import { Button } from '../Button'
import { ContentWrapper } from '../../atoms/ContentWrapper'

const meta = {
  title: 'Design System/Molecules/PurchaseList',
  component: PurchaseList,
} satisfies Meta<typeof PurchaseList>

export default meta
type Story = StoryObj<typeof meta>

const items: PurchaseListItem[] = [
  {
    id: '1',
    name: 'Item 1',
    linkUrl: '#1',
    noOfProducts: '10 produkter',
    updated: '2024-01-21',
    shared: true,
    removing: true,
  },
  { id: '2', name: 'Item 2', linkUrl: '#2', noOfProducts: '20 produkter', shared: false },
]

/**
 * Canonical selectable list with local selection state. The `play` toggles the (only)
 * selectable row's checkbox — named by its row heading via `aria-labelledby` — and asserts the
 * checked state flips, and that each row name is exposed as a navigation link (2.4.4 / 4.1.2).
 */
export const Default: Story = {
  args: { items, selectedItems: [], onSelectChange: () => {} },
  render: (args) => {
    const [selected, setSelected] = useState<PurchaseListItem[]>([])
    const handleSelectChange = (item: PurchaseListItem) =>
      setSelected((prev) =>
        prev.find((i) => i.id === item.id)
          ? prev.filter((i) => i.id !== item.id)
          : [...prev, item],
      )
    return (
      <ContentWrapper>
        <PurchaseList {...args} selectedItems={selected} onSelectChange={handleSelectChange} />
      </ContentWrapper>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Shared row (Item 1) exposes only a navigation link, no checkbox.
    await expect(canvas.getByRole('link', { name: 'Item 1' })).toHaveAttribute('href', '#1')
    // Selectable row (Item 2): checkbox named by its row heading via aria-labelledby.
    const checkbox = canvas.getByRole('checkbox', { name: 'Item 2' })
    await expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
  },
}

/** Visual parity — reproduces the legacy `purchase-list-story` frame (Delete button + list). */
export const Visual: Story = {
  args: { items, selectedItems: [], onSelectChange: () => {} },
  tags: ['visual'],
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <ContentWrapper>
      <Button surface="primary" iconRight="icon-trash">
        Delete
      </Button>
      <PurchaseList {...args} />
    </ContentWrapper>
  ),
}
