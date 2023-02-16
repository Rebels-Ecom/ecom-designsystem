import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RadioButtonGroup, TypeInputs } from './radio-button-group'
import { RadioButtonStory } from '../../atoms/inputs/radio-button/radio-button.stories'

export default {
  title: 'Design System/Molecules/RadioButtonGroup',
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const [radioBtnsGroupOne, setRadioBtnsGroupOne] = useState<Array<TypeInputs>>(
    args.inputs.map((radioBtn: any) => {
      return {
        ...radioBtn,
        onChange: onChangeRadioGroupOne,
      }
    })
  )

  function onChangeRadioGroupOne(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value

    setRadioBtnsGroupOne((prevRadios: Array<TypeInputs>) => {
      return prevRadios.map((radio: TypeInputs) => {
        return {
          ...radio,
          checked: radio.value === value ? true : false,
        }
      })
    })
  }

  return (
    <>
      <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
        <RadioButtonGroup inputs={radioBtnsGroupOne} align={args.align} />
      </div>
    </>
  )
}

export const RadioButtonGroupStory = Template.bind({})
RadioButtonGroupStory.storyName = 'Radio Button Group'
RadioButtonGroupStory.args = {
  inputs: [
    {
      ...RadioButtonStory.args,
      label: 'Liten popcorn',
    },
    {
      ...RadioButtonStory.args,
      id: `${RadioButtonStory.args.id}_2`,
      value: `${RadioButtonStory.args.value}_2`,
      checked: false,
      label: 'Mellan popcorn',
    },
  ],
}

export const RadioButtonGroupStoryError = Template.bind({})
RadioButtonGroupStoryError.storyName = 'Radio Button Group Error'
RadioButtonGroupStoryError.args = {
  inputs: [
    {
      ...RadioButtonStory.args,
      label: 'Liten popcorn',
      isErroneous: true,
    },
    {
      ...RadioButtonStory.args,
      id: `${RadioButtonStory.args.id}_2`,
      value: `${RadioButtonStory.args.value}_2`,
      checked: false,
      label: 'Mellan popcorn',
      isErroneous: true,
    },
  ],
}

export const RadioButtonGroupStoryDisabled = Template.bind({})
RadioButtonGroupStoryDisabled.storyName = 'Radio Button Group Disabled'
RadioButtonGroupStoryDisabled.args = {
  inputs: [
    {
      ...RadioButtonStory.args,
      label: 'Liten popcorn',
      disabled: true,
    },
    {
      ...RadioButtonStory.args,
      id: `${RadioButtonStory.args.id}_2`,
      value: `${RadioButtonStory.args.value}_2`,
      checked: false,
      label: 'Mellan popcorn',
      disabled: true,
    },
  ],
}
