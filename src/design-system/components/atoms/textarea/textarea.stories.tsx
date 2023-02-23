import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Textarea } from './textarea'

export default {
  title: 'Design System/Atoms/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => {
  function onChangeTextarea1(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea1(e.currentTarget.value)
  }

  function onChangeTextarea2(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea2(e.currentTarget.value)
  }

  function onChangeTextarea3(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea3(e.currentTarget.value)
  }

  function onChangeTextarea4(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea4(e.currentTarget.value)
  }

  function onChangeTextarea5(e: React.FormEvent<HTMLTextAreaElement>) {
    setValueTextarea5(e.currentTarget.value)
  }

  const [valueTextarea1, setValueTextarea1] = useState('')
  const [valueTextarea2, setValueTextarea2] = useState('Some text here')
  const [valueTextarea3, setValueTextarea3] = useState('Some text here')
  const [valueTextarea4, setValueTextarea4] = useState('Some text here')
  const [valueTextarea5, setValueTextarea5] = useState('')

  const presentationStyle = { margin: '0 0 1rem 0', maxWidth: '616px' }

  return (
    <>
      <div style={presentationStyle}>
        <Textarea {...args} {...{ id: 'Textarea_1', value: valueTextarea1 }} onChange={onChangeTextarea1} />
      </div>

      <div style={presentationStyle}>
        <Textarea {...args} {...{ id: 'Textarea_2', value: valueTextarea2 }} onChange={onChangeTextarea2} />
      </div>

      <div style={presentationStyle}>
        <Textarea {...args} {...{ id: 'Textarea_3', value: valueTextarea3 }} onChange={onChangeTextarea3} disabled={true} />
      </div>

      <div style={presentationStyle}>
        <Textarea {...args} {...{ id: 'Textarea_4', value: valueTextarea4 }} isErroneous onChange={onChangeTextarea4} />
      </div>

      <div style={presentationStyle}>
        <Textarea {...args} {...{ id: 'Textarea_5', value: valueTextarea5, placeholder: 'Placeholder text' }} onChange={onChangeTextarea5} />
      </div>
    </>
  )
}

export const TextareaStory = Template.bind({})
TextareaStory.storyName = 'Textarea'
TextareaStory.args = {
  id: 'textarea',
  cols: 5,
  rows: 5,
}
