import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react'
import { InputFile } from './input-file'

const meta: Meta<typeof InputFile> = {
  title: 'Design System/Atoms/Inputs/InputFile',
  component: InputFile,
};

export default meta;
type Story = StoryObj<typeof InputFile>;

const InputFileStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [value, setValue] = useState(args.value)

    function onChange(e: React.FormEvent<HTMLInputElement>) {
      setValue(e.currentTarget.value)
    }

    return (
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <InputFile {...args} onChange={onChange} value={value} />
      </div>
    )
  }
};

export const InputFileStory = {
  ...InputFileStoryTemplate,
  args: {
    id: 'input_1',
    value: '',
    disabled: false,
    label: 'Välj fil',
    placeholder: 'Ingen fil har valts',
  }
}

export const InputFileStoryDisabled = {
  ...InputFileStoryTemplate,
  args: {
    ...InputFileStory.args,
    disabled: true,
    placeholder: 'Ingen fil har valts',
  }
}