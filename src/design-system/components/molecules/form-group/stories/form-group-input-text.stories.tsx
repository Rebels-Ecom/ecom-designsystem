import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { FormGroup } from '../form-group'
import { useState } from 'react'
import { InputText } from '../../../atoms'
import { InputTextStory } from '../../../atoms/inputs/input-text/input-text.stories'

const meta: Meta<typeof FormGroup> = {
  title: 'Design System/Molecules/FormGroup/InputText',
  component: FormGroup,
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

const FormGroupStoryTemplate: Story = {
  render: (args, context) => {
    const [value, setValue] = useState('')

    function onChangeInput(e: React.FormEvent<HTMLInputElement>) {
      setValue(e.currentTarget.value)
    }
  
    const formElementProps = {
      onChange: onChangeInput,
      value: value,
    }
  
    const isErroneous = args.errorText ? true : false
    const disabled = context.story.includes('Disabled')  

  return (
    <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
      <FormGroup {...args} formElementId={InputTextStory.args.id}>
        {<InputText {...{ ...InputTextStory.args, ...formElementProps, disabled, isErroneous }} />}
      </FormGroup>
    </div>
    )
  }
};

const formGroupArgs = {
  label: 'Vad letar du efter?',
  helperText: 'Genom att skriva produkt namn, kan vi lättare hjälpa dig vidare.',
  requiredText: '(Obligatorisk)',
}

export const FormGroupInputTextStory = {
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs,
  }
}

export const FormGroupInputTextStoryError = {
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs,
    errorText: 'Du behöver fylla i produkt namn',
  }
}

export const FormGroupInputTextStoryDisabled = {
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs,
  }
}

export const FormGroupInputTextStoryRightLabelText = {
  ...FormGroupStoryTemplate,
  args: {
    ...formGroupArgs,
    requiredText: '',
    labelRightText: <a href="/">Se produkter</a>,
  }
}
