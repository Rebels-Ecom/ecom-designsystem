import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from './select'

export default {
  title: 'Design System/Atoms/Selects',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  const [selectedOptionValue, setSelectedOptionValue] = useState('2')
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(1)

  function onChangeSelect1(e: React.FormEvent<HTMLSelectElement>) {
    setSelectedOptionValue(e.currentTarget.value)
  }

  function onChangeSelect2(e: React.FormEvent<HTMLSelectElement>) {
    setSelectedOptionIndex(e.currentTarget.selectedIndex)
  }

  return (
    <>
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <Select {...args} onChange={onChangeSelect1} value={selectedOptionValue} id={'select_1'} />
      </div>
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <Select {...args} onChange={onChangeSelect1} disabled={true} id={'select_2'} />
      </div>
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <Select {...args} onChange={onChangeSelect2} selectedIndex={selectedOptionIndex} isErroneous id={'select_3'} />
      </div>
    </>
  )
}

export const SelectStory = Template.bind({})
SelectStory.storyName = 'Select'
SelectStory.args = {
  id: 'select',
  options: [
    { name: 'Välj en film', value: '' },
    { name: 'Shrek', value: '1' },
    { name: 'Sing', value: '2' },
    { name: 'Sing 2', value: '3' },
  ],
}
