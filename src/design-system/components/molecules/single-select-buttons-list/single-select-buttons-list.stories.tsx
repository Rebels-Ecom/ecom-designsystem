import React, { useState } from 'react'
import { SingleSelectButtonsList } from './single-select-buttons-list'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SingleSelectButtonsList> = {
  title: 'Design System/Molecules/SingleSelectButtonsList',
  component: SingleSelectButtonsList,
}

export default meta
type Story = StoryObj<typeof SingleSelectButtonsList>

const SingleSelectButtonsListStoryTemplate: Story = {
  render: (args) => {
    const [selectedMonth, setSelectedMonth] = useState(args.selectedOption)
    function onChangeSelect(e: React.FormEvent<HTMLSelectElement>) {
      setSelectedMonth(e.currentTarget.value)
    }

    return (
      <div style={{ margin: 'auto', maxWidth: '1800px' }}>
        <SingleSelectButtonsList {...args} selectedOption={selectedMonth} onChange={onChangeSelect} />
      </div>
    )
  },
}

export const SingleSelectButtonsListStory = {
  ...SingleSelectButtonsListStoryTemplate,
  args: {
    selectedOption: 'Juni 2023',
    options: [
      { id: 'Juni 2023', name: 'Juni 2023', value: 'Juni 2023' },
      { id: 'Maj 2023', name: 'Maj 2023', value: 'Maj 2023' },
      { id: 'April 2023', name: 'April 2023', value: 'April 2023' },
      { id: 'Mars 2023', name: 'Mars 2023', value: 'Mars 2023' },
      { id: 'Februari 2023', name: 'Februari 2023', value: 'Februari 2023' },
      { id: 'Januari 2023', name: 'Januari 2023', value: 'Januari 2023' },
    ],
  },
}
