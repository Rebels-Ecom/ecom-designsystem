import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RadioButton } from './radio-button'

const meta: Meta<typeof RadioButton> = {
  title: 'Design System/Atoms/Inputs/Radio Button',
  component: RadioButton
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

const RadioButtonStoryTemplate: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
      <RadioButton {...args} />
    </div>
  )
}

export const RadioButtonStory = {
  ...RadioButtonStoryTemplate,
  args: {
    id: 'input_1',
    value: 'input_1',
    name: 'group_1',
    checked: true,
    disabled: false,
    onChange: () => {}
  }
}

export const RadioButtonStoryError = {
  ...RadioButtonStoryTemplate,
  args: {
    ...RadioButtonStory.args,
    isErroneous: true
  }
}

export const RadioButtonStoryDisabled = {
  ...RadioButtonStoryTemplate,
  args: {
    ...RadioButtonStory.args,
    disabled: true
  }
}
