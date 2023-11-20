import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SelectList } from './select-list';

const meta: Meta<typeof SelectList> = {
  title: 'Design System/Atoms/Select List',
  component: SelectList,
};

export default meta;
type Story = StoryObj<typeof SelectList>;

const SelectListStoryTemplate: Story = {
  render: (args) => {
    return (
      <>
        <SelectList {...args} />
      </>
    )
  }
};

export const SelectListStory = {
  ...SelectListStoryTemplate,
  args: {
    options: [
      {
        name: 'Beer',
        value: 'Beer'
      },
      {
        name: 'Wine',
        value: 'Wine'
      },
    ]
  }
}
