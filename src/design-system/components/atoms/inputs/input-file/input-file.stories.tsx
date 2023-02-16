import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { InputFile } from './input-file'

export default {
  title: 'Design System/Atoms/Inputs/InputFile',
  component: InputFile,
} as ComponentMeta<typeof InputFile>

const Template: ComponentStory<typeof InputFile> = (args) => {
  const [value, setValue] = useState(args.value)

  function onChange(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <InputFile {...args} onChange={onChange} value={value} />
      </div>
    </>
  )
}

export const InputFileStory = Template.bind({})
InputFileStory.storyName = 'Input File'
InputFileStory.args = {
  id: 'input_1',
  value: '',
  disabled: false,
  label: 'Välj fil',
  placeholder: 'Ingen fil har valts',
}

export const InputFileStoryDisabled = Template.bind({})
InputFileStoryDisabled.storyName = 'Input File Disabled'
InputFileStoryDisabled.args = {
  ...InputFileStory.args,
  disabled: true,
  placeholder: 'Ingen fil har valts',
}
