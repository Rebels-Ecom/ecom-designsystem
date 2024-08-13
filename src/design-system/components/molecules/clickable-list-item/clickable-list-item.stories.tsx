import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ClickableListItem } from './clickable-list-item'

const meta: Meta<typeof ClickableListItem> = {
  title: 'Design System/Molecules/ClickableListItem',
  component: ClickableListItem,
}

export default meta
type Story = StoryObj<typeof ClickableListItem>

const ClickableListItemStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isSelected, setIsSelected] = useState(false)
    return (
      <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
        <ClickableListItem {...args} onClick={() => setIsSelected(!isSelected)} />
      </div>
    )
  },
}

export const ClickableListItem_Loka = {
  ...ClickableListItemStoryTemplate,
  args: {
    label: 'Click me',
    icon: 'icon-x'
  },
}
