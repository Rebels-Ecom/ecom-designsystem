import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormGroup } from '../form-group'
import { useState } from 'react'
import { Select } from '../../../atoms'
import { SelectStory } from '../../../atoms/select/select.stories'

export default {
  title: 'Design System/Molecules/FormGroup/Select',
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>

const FormGroupStory: ComponentStory<typeof FormGroup> = (args, context) => {
  const [value, setValue] = useState('')

  function onChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value)
  }

  const formElementProps = {
    onChange: onChangeInput,
    value: value,
  }

  const isErroneous = args.errorText
  const disabled = context.story.includes('Disabled')

  return (
    <>
      <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
        <FormGroup {...args} formElementId={SelectStory.args.id}>
          {<Select {...{ ...SelectStory.args, ...formElementProps, disabled, isErroneous }} />}
        </FormGroup>
      </div>
    </>
  )
}

const formGroupArgs = {
  label: 'Vilka är dina favoritfilmer?',
  helperText: 'Genom att skriva filmens titel, kan vi lättare hjälpa dig vidare.',
  requiredText: '(Obligatorisk)',
}

export const FormGroupSelectStory = FormGroupStory.bind({})
FormGroupSelectStory.storyName = 'Form Group with Select'
FormGroupSelectStory.args = {
  ...formGroupArgs,
}

export const FormGroupSelectStoryError = FormGroupStory.bind({})
FormGroupSelectStoryError.storyName = 'Form Group with Select Error'
FormGroupSelectStoryError.args = {
  ...formGroupArgs,
  errorText: 'Du behöver fylla i dina favoritfilmer',
}

export const FormGroupSelectStoryDisabled = FormGroupStory.bind({})
FormGroupSelectStoryDisabled.storyName = 'Form Group with Select Disabled'
FormGroupSelectStoryDisabled.args = {
  ...formGroupArgs,
}

export const FormGroupSelectStoryRightLabelText = FormGroupStory.bind({})
FormGroupSelectStoryRightLabelText.storyName = 'Form Group with Select Label Right Text'
FormGroupSelectStoryRightLabelText.args = {
  ...formGroupArgs,
  requiredText: '',
  labelRightText: <a href="/">Se filmer</a>,
}
