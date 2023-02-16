import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { InputText } from './input-text'

export default {
  title: 'Design System/Atoms/Inputs/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (args) => {
  const [value, setValue] = useState(args.value)

  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <InputText {...args} onChange={onChange} value={value} />
      </div>
    </>
  )
}

export const InputTextStory = Template.bind({})
InputTextStory.storyName = 'Input Text'
InputTextStory.args = {
  id: 'input_1',
  value: '',
  disabled: false,
  placeholder: '',
}

export const InputTextStoryPlaceHolder = Template.bind({})
InputTextStoryPlaceHolder.storyName = 'Input Text Placeholder'
InputTextStoryPlaceHolder.args = {
  id: 'input_1',
  value: '',
  disabled: false,
  placeholder: 'Write anything you like',
}

export const InputTextStoryError = Template.bind({})
InputTextStoryError.storyName = 'Input Text Error'
InputTextStoryError.args = {
  ...InputTextStory.args,
  isErroneous: true,
}
export const InputTextStoryDisabled = Template.bind({})
InputTextStoryDisabled.storyName = 'Input Text Disabled'
InputTextStoryDisabled.args = {
  ...InputTextStory.args,
  disabled: true,
}
