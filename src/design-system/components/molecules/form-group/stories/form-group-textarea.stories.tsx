import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormGroup } from '../form-group'
import { useState } from 'react'
import { Textarea } from '../../../atoms'
import { TextareaStory } from '../../../atoms/textarea/textarea.stories'

export default {
  title: 'Design System/Molecules/FormGroup/Textarea',
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
        <FormGroup {...args} formElementId={TextareaStory.args.id}>
          {<Textarea {...{ ...TextareaStory.args, ...formElementProps, disabled, isErroneous }} />}
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

export const FormGroupTextareaStory = FormGroupStory.bind({})
FormGroupTextareaStory.storyName = 'Form Group with Textarea'
FormGroupTextareaStory.args = {
  ...formGroupArgs,
}

export const FormGroupTextareaStoryError = FormGroupStory.bind({})
FormGroupTextareaStoryError.storyName = 'Form Group with Textarea Error'
FormGroupTextareaStoryError.args = {
  ...formGroupArgs,
  errorText: 'Du behöver fylla i dina favoritfilmer',
}

export const FormGroupTextareaStoryDisabled = FormGroupStory.bind({})
FormGroupTextareaStoryDisabled.storyName = 'Form Group with Textarea Disabled'
FormGroupTextareaStoryDisabled.args = {
  ...formGroupArgs,
}

export const FormGroupTextareaStoryRightLabelText = FormGroupStory.bind({})
FormGroupTextareaStoryRightLabelText.storyName = 'Form Group with Textarea Label Right Text'
FormGroupTextareaStoryRightLabelText.args = {
  ...formGroupArgs,
  requiredText: '',
  labelRightText: <a href="/">Se filmer</a>,
}
