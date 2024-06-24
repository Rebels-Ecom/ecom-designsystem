import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SwipeList } from './swipe-list'

const meta: Meta<typeof SwipeList> = {
  title: 'Design System/Deprecated/Swipe List',
  component: SwipeList,
};

export default meta;
type Story = StoryObj<typeof SwipeList>;

const SwipeListStoryTemplate: Story = {
  render: (args) => {
    return (
      <div style={{ width: '500px', margin: '0 auto' }}>
        <SwipeList />
      </div>
    )
  }
};

export const SwipeListStory = {
  ...SwipeListStoryTemplate,
  args: {}
}
