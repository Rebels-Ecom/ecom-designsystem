import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react'
import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title:  'Design System/Atoms/Inputs/Checkbox',
  component: Checkbox
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const CheckboxStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isChecked, setIsChecked] = useState(false)
    const [isChecked2, setIsChecked2] = useState(false)
    const [isChecked3, setIsChecked3] = useState(false)
    const [isChecked4, setIsChecked4] = useState(true)
  
    const input = {
      id: 'input_1',
      value: 'input_1',
      checked: isChecked,
      name: 'group',
    }
  
    const input2 = {
      ...input,
      id: 'input_2',
      value: 'input_2',
      checked: isChecked2,
      disabled: true,
    }
    const input3 = {
      ...input,
      id: 'input_3',
      value: 'input_3',
      checked: isChecked3,
      isErroneous: true,
    }
  
    const input4 = {
      ...input,
      id: 'input_4',
      value: 'input_4',
      checked: isChecked4,
      name: 'group2',
      disabled: true,
    }
  
    const style = { margin: '0 0 1rem 0', maxWidth: '616px' }
  
    return (
      <>
        <div style={style}>
          <Checkbox {...args} />
        </div>
      </>
    )
  }
};

export const CheckboxStory = {
  ...CheckboxStoryTemplate,
  args: {
    id: 'input_1',
    value: 'input_1',
    checked: true,
    name: 'group',
    disabled: false,
  }
}

export const CheckboxStoryError = {
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
  isErroneous: true,
  }
}

export const CheckboxStoryDisabled = {
  ...CheckboxStoryTemplate,
  args: {
    ...CheckboxStory.args,
  disabled: true,
  }
}
