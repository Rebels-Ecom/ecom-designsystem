import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Button } from '../../atoms'
import { ContentWrapper } from '../../layouts'
import { PurchaseList, TPurchaseListItem } from './purchase-list'

const meta: Meta<typeof PurchaseList> = {
  title: 'Design System/Atoms/PurchaseList',
  component: PurchaseList,
  parameters: {
    controls: { exclude: ['listItems'] },
  },
}

export default meta
type Story = StoryObj<typeof PurchaseList>

const PurchaseListTemplate: Story = {
  render: (args) => {
    const [selectedItems, setSelectedItems] = useState<TPurchaseListItem[]>([])

    const handleSelectChange = (item: TPurchaseListItem) => {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((i) => i.name !== item.name))
      } else {
        setSelectedItems([...selectedItems, item])
      }
    }

    const handleDelete = () => {
      console.log('Deleting items:', selectedItems)
    }

    // Example items
    return (
      <ContentWrapper>
        <Button type="button" surface="primary" onClick={handleDelete} iconRight={{ icon: 'icon-trash' }}>
          Delete
        </Button>
        <PurchaseList {...args} linkComponent="p" onSelectChange={handleSelectChange} selectedItems={selectedItems} />
      </ContentWrapper>
    )
  },
}

const items: TPurchaseListItem[] = [
  { id: '1', name: 'Item 1', linkUrl: 'url1', noOfProducts: '10 produkter', updated: '2024-01-21', shared: true, removing: true },
  { id: '2', name: 'Item 2', linkUrl: 'url2', noOfProducts: '20 produkter', updated: undefined, shared: false },
]

export const PurchaseListStory = {
  ...PurchaseListTemplate,
  args: {
    items: items,
  },
}
