import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormGroup } from '../form-group'
import { useState } from 'react'
import { InputText } from '../../../atoms'
import { InputTextStory } from '../../../atoms/inputs/input-text/input-text.stories'

export default {
  title: 'Design System/Molecules/FormGroup/InputText',
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
        <FormGroup {...args} formElementId={InputTextStory.args.id}>
          {<InputText {...{ ...InputTextStory.args, ...formElementProps, disabled, isErroneous }} />}
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

export const FormGroupInputTextStory = FormGroupStory.bind({})
FormGroupInputTextStory.storyName = 'Form Group with InputText'
FormGroupInputTextStory.args = {
  ...formGroupArgs,
}

export const FormGroupInputTextStoryError = FormGroupStory.bind({})
FormGroupInputTextStoryError.storyName = 'Form Group with InputText Error'
FormGroupInputTextStoryError.args = {
  ...formGroupArgs,
  errorText: 'Du behöver fylla i dina favoritfilmer',
}

export const FormGroupInputTextStoryDisabled = FormGroupStory.bind({})
FormGroupInputTextStoryDisabled.storyName = 'Form Group with InputText Disabled'
FormGroupInputTextStoryDisabled.args = {
  ...formGroupArgs,
}

export const FormGroupInputTextStoryRightLabelText = FormGroupStory.bind({})
FormGroupInputTextStoryRightLabelText.storyName = 'Form Group with InputText Label Right Text'
FormGroupInputTextStoryRightLabelText.args = {
  ...formGroupArgs,
  requiredText: '',
  labelRightText: <a href="/">Se filmer</a>,
}
