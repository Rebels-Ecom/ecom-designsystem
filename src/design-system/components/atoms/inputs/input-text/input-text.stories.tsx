import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react'
import { InputText } from './input-text'

const meta: Meta<typeof InputText> = {
  title: 'Design System/Atoms/Inputs/InputText',
  component: InputText,
};

export default meta;
type Story = StoryObj<typeof InputText>;

const InputTextStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [value, setValue] = useState(args.value)

    function onChange(e: React.FormEvent<HTMLInputElement>) {
      setValue(e.currentTarget.value)
    }

  return (
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <InputText {...args} onChange={onChange} value={value} />
      </div>
    )
  }
};

export const InputTextStory = {
  ...InputTextStoryTemplate,
  args: {
    id: 'input_1',
    value: '',
    disabled: false,
    placeholder: '',
  }
}

export const InputTextStoryPlaceHolder = {
  ...InputTextStoryTemplate,
  args: {
    id: 'input_1',
    value: '',
    disabled: false,
    placeholder: 'Write anything you like',
  }
}
export const InputTextStoryError = {
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    isErroneous: true,
  }
}

export const InputTextStoryDisabled = {
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    disabled: true,
  }
}

export const InputTextStoryCheckIcon = {
  ...InputTextStoryTemplate,
  args: {
    ...InputTextStory.args,
    iconRight: {icon: 'icon-check'},
  }
}
