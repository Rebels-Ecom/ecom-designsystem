import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputPasswordFormGroup } from './input-password-form-group'
import { InputTextStory } from '../../atoms/inputs/input-text/input-text.stories'

export default {
  title: 'Design System/Molecules/InputPasswordFormGroup',
  component: InputPasswordFormGroup,
} as ComponentMeta<typeof InputPasswordFormGroup>

const Template: ComponentStory<typeof InputPasswordFormGroup> = (args) => {
  return (
    <>
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <InputPasswordFormGroup {...args} />
      </div>
    </>
  )
}

const formGroupArgs = {
  label: 'Lösenord',
  helperText: 'Lösenordet behöver innehålla minst ett tecken, en stor bokstav, en liten bokstav, ett specialtecken och vara minst 8 tecken lång.',
  requiredText: '*',
  checkboxLabel: 'Visa lösenord',
}

export const FormGroupInputPasswordStory = Template.bind({})
FormGroupInputPasswordStory.storyName = 'Form Group with Input Password'
FormGroupInputPasswordStory.args = {
  ...formGroupArgs,
  inputProps: {
    ...InputTextStory,
    id: 'input_1',
  },
}

export const FormGroupInputPasswordStoryError = Template.bind({})
FormGroupInputPasswordStoryError.storyName = 'Form Group with Input Password Error'
FormGroupInputPasswordStoryError.args = {
  ...formGroupArgs,
  errorText: 'Lösenordet är ej korrekt utfört',
  inputProps: {
    ...InputTextStory,
    id: 'input_1',
  },
}

export const FormGroupInputPasswordStoryDisabled = Template.bind({})
FormGroupInputPasswordStoryDisabled.storyName = 'Form Group with Input Password Disabled'
FormGroupInputPasswordStoryDisabled.args = {
  ...formGroupArgs,
  inputProps: {
    ...InputTextStory,
    id: 'input_1',
    disabled: true,
  },
}

export const FormGroupInputPasswordStoryRightLabelText = Template.bind({})
FormGroupInputPasswordStoryRightLabelText.storyName = 'Form Group Password with Label Right Text'
FormGroupInputPasswordStoryRightLabelText.args = {
  ...formGroupArgs,
  requiredText: '',
  inputProps: {
    ...InputTextStory,
    id: 'input_1',
  },
  labelRightText: <a href="/">Glömt lösenord</a>,
}
