import React, { useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormGroup } from '../form-group'
import { useState } from 'react'
import { CheckboxGroup } from '../..'
import { TypeInputs } from '../../checkbox-group/checkbox-group'
import { CheckboxGroupStory } from '../../checkbox-group/checkbox-group.stories'

export default {
  title: 'Design System/Molecules/FormGroup/CheckboxGroup',
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>

const FormGroupStory: ComponentStory<typeof FormGroup> = (args, context) => {
  const [checkboxes, setCheckboxes] = useState<Array<TypeInputs>>(
    CheckboxGroupStory.args.inputs.map((checkbox: any) => {
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

  const disabled = context.story.includes('Disabled')
  useEffect(() => {
    if (disabled) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            disabled: true,
          }
        })
      })
    }
    if (args.errorText) {
      setCheckboxes((prevCheckbox: Array<TypeInputs>) => {
        return prevCheckbox.map((checkbox: TypeInputs) => {
          return {
            ...checkbox,
            isErroneous: true,
          }
        })
      })
    }
  }, [disabled, args.errorText])

  return (
    <>
      <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
        <FormGroup {...args} formElementId={checkboxes[0].id}>
          {<CheckboxGroup inputs={checkboxes} />}
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

export const FormGroupCheckboxGroupStory = FormGroupStory.bind({})
FormGroupCheckboxGroupStory.storyName = 'Form Group with Checkbox Group'
FormGroupCheckboxGroupStory.args = {
  ...formGroupArgs,
}

export const FormGroupCheckboxGroupStoryError = FormGroupStory.bind({})
FormGroupCheckboxGroupStoryError.storyName = 'Form Group with Checkbox Group Error'
FormGroupCheckboxGroupStoryError.args = {
  ...formGroupArgs,
  errorText: 'Du behöver välja en storlek',
}

export const FormGroupCheckboxGroupStoryDisabled = FormGroupStory.bind({})
FormGroupCheckboxGroupStoryDisabled.storyName = 'Form Group with Checkbox Group Disabled'
FormGroupCheckboxGroupStoryDisabled.args = {
  ...formGroupArgs,
}

export const FormGroupCheckboxGroupStoryRightLabelText = FormGroupStory.bind({})
FormGroupCheckboxGroupStoryRightLabelText.storyName = 'Form Group with Checkbox Group Label Right Text'
FormGroupCheckboxGroupStoryRightLabelText.args = {
  ...formGroupArgs,
  requiredText: '',
  labelRightText: <a href="/">Se fler menyer</a>,
}
