import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { CheckboxGroup, TypeInputs } from './checkbox-group'
import { CheckboxStory } from '../../atoms/inputs/checkbox/checkbox.stories'

export default {
  title: 'Design System/Molecules/CheckboxGroup',
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>

const Template: ComponentStory<typeof CheckboxGroup> = (args) => {
  const [checkboxes, setCheckboxes] = useState<Array<TypeInputs>>(
    args.inputs.map((checkbox: any) => {
      return {
        ...checkbox,
        onChange: onChangeCheckbox,
      }
    })
  )

  function onChangeCheckbox(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    const checked = e.currentTarget.checked

    setCheckboxes((prevCheckboxes: Array<TypeInputs>) => {
      return prevCheckboxes.map((checkbox: TypeInputs) => {
        return {
          ...checkbox,
          checked: checkbox.value === value ? checked : checkbox.checked,
        }
      })
    })
  }

  return (
    <>
      <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
        <CheckboxGroup {...args} inputs={checkboxes} />
      </div>
    </>
  )
}

const inputs = [
  {
    ...CheckboxStory.args,
    label: 'Liten popcorn',
  },
  {
    ...CheckboxStory.args,
    id: `${CheckboxStory.args.id}_2`,
    value: `${CheckboxStory.args.value}_2`,
    checked: false,
    label: 'Mellan popcorn',
  },
  {
    ...CheckboxStory.args,
    id: `${CheckboxStory.args.id}_3`,
    value: `${CheckboxStory.args.value}_3`,
    checked: false,
    label: 'Stor popcorn',
  },
]

export const CheckboxGroupStory = Template.bind({})
CheckboxGroupStory.storyName = 'Checkbox Group'
CheckboxGroupStory.args = {
  align: 'horizontal',
  inputs: inputs,
}

export const CheckboxGroupStoryError = Template.bind({})
CheckboxGroupStoryError.storyName = 'Checkbox Group Error'
CheckboxGroupStoryError.args = {
  align: 'horizontal',
  inputs: inputs.map((input: any) => {
    return {
      ...input,
      validation: {
        state: 'error',
      },
    }
  }),
}

export const CheckboxGroupStoryDisabled = Template.bind({})
CheckboxGroupStoryDisabled.storyName = 'Checkbox Group Disabled'
CheckboxGroupStoryDisabled.args = {
  label: 'Välj popkornstorlek',
  align: 'horizontal',
  inputs: inputs.map((input: any) => {
    return {
      ...input,
      disabled: true,
    }
  }),
}
