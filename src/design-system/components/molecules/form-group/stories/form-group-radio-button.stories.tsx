import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormGroup } from '../form-group'
import { useState } from 'react'
import { RadioButtonGroup } from '../..'
import { TypeInputs } from '../../radio-button-group/radio-button-group'
import { RadioButtonGroupStory } from '../../radio-button-group/radio-button-group.stories'

export default {
  title: 'Design System/Molecules/FormGroup/RadioButtonGroup',
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>

const FormGroupStory: ComponentStory<typeof FormGroup> = (args, context) => {
  const [radioButtons, setRadioButtons] = useState<Array<TypeInputs>>(
    RadioButtonGroupStory.args.inputs.map((radioBtn: any) => {
      return {
        ...radioBtn,
        onChange: onChangeRadioGroupOne,
      }
    })
  )

  function onChangeRadioGroupOne(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value

    setRadioButtons((prevRadios: Array<TypeInputs>) => {
      return prevRadios.map((radio: TypeInputs) => {
        return {
          ...radio,
          checked: radio.value === value ? true : false,
        }
      })
    })
  }

  const disabled = context.story.includes('Disabled')
  useEffect(() => {
    if (disabled) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
            disabled: true,
          }
        })
      })
    }
    if (args.errorText) {
      setRadioButtons((prevRadios: Array<TypeInputs>) => {
        return prevRadios.map((radio: TypeInputs) => {
          return {
            ...radio,
            isErroneous: true,
          }
        })
      })
    }
  }, [disabled, args.errorText])

  return (
    <>
      <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
        <FormGroup {...args} formElementId={radioButtons[0].id}>
          {<RadioButtonGroup inputs={radioButtons} />}
        </FormGroup>
      </div>
    </>
  )
}

const formGroupArgs = {
  label: 'Välj storlek på popkorn',
  helperText: 'Välj en storlek som passar dig eller ditt sällskap',
  requiredText: '(Obligatorisk)',
}

export const FormGroupRadioButtonGroupStory = FormGroupStory.bind({})
FormGroupRadioButtonGroupStory.storyName = 'Form Group with Radio Button Group'
FormGroupRadioButtonGroupStory.args = {
  ...formGroupArgs,
}

export const FormGroupRadioButtonGroupStoryError = FormGroupStory.bind({})
FormGroupRadioButtonGroupStoryError.storyName = 'Form Group with Radio Button Group Error'
FormGroupRadioButtonGroupStoryError.args = {
  ...formGroupArgs,
  errorText: 'Du behöver välja en storlek',
}

export const FormGroupRadioButtonGroupStoryDisabled = FormGroupStory.bind({})
FormGroupRadioButtonGroupStoryDisabled.storyName = 'Form Group with Radio Button Group Disabled'
FormGroupRadioButtonGroupStoryDisabled.args = {
  ...formGroupArgs,
}

export const FormGroupRadioButtonGroupStoryRightLabelText = FormGroupStory.bind({})
FormGroupRadioButtonGroupStoryRightLabelText.storyName = 'Form Group with Radio Button Group Label Right Text'
FormGroupRadioButtonGroupStoryRightLabelText.args = {
  ...formGroupArgs,
  requiredText: '',
  labelRightText: <a href="/">Se fler menyer</a>,
}
