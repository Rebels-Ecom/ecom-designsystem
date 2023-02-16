import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RadioButton } from './radio-button'

export default {
  title: 'Design System/Atoms/Inputs/Radio Button',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (args) => {
  return (
    <>
      <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
        <RadioButton {...args} />
      </div>
    </>
  )
}

export const RadioButtonStory = Template.bind({})
RadioButtonStory.storyName = 'Radio Button'
RadioButtonStory.args = {
  id: 'input_1',
  value: 'input_1',
  name: 'group_1',
  checked: true,
  disabled: false,
  onChange: () => {},
}

export const RadioButtonStoryError = Template.bind({})
RadioButtonStoryError.args = {
  ...RadioButtonStory.args,
  isErroneous: true,
}
RadioButtonStoryError.storyName = 'Radio Button Error'

export const RadioButtonStoryDisabled = Template.bind({})
RadioButtonStoryDisabled.args = {
  ...RadioButtonStory.args,
  disabled: true,
}
RadioButtonStoryDisabled.storyName = 'Radio Button Disabled'
