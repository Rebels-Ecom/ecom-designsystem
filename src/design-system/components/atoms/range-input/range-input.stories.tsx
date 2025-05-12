import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { RangeInput } from './range-input'

const meta: Meta<typeof RangeInput> = {
  title: 'Design System/Atoms/RangeInput',
  component: RangeInput,
}

export default meta
type Story = StoryObj<typeof RangeInput>

const RangeInputStoryTemplate: Story = {
  render: (args) => {
    const [value, setValue] = useState({ min: args.min, max: args.max })
    const handleChange = (value) => {
      console.log(value)
      setValue(value)
    }
    return (
      <div className="App">
        <p>
          {value?.min} - {value?.max}
        </p>
        <RangeInput {...args} onChange={handleChange} />
      </div>
    )
  },
}

export const RangeInputStory = {
  ...RangeInputStoryTemplate,
  args: {
    formatLabel: '',
    min: 0,
    max: 20,
    withFields: false,
    minLabel: '',
    maxLabel: '',
    allowSameValues: false,
    step: 1,
  },
}
