import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Form } from '../../molecules'
import { IFormTemplateProps } from './types';

const meta: Meta<typeof Form> = {
  title: 'Design System/Atoms/Form',
  component: Form
};

export default meta;
type Story = StoryObj<typeof Form>;

const FormStoryTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <Form {...args} />
    );
  },
};

export const FormStory = {
  ...FormStoryTemplate,
  args: {
    formTitle: 'Form Title',
    loading: false,
    onSubmit: () => console.log('submit'),
    fields: [{
      label: 'Name',
      type: 'text',
      fieldType: 'input',
      name: 'name',
      originalValue: '',
      placeholder: 'Namn Namnsson',
      subtitle: 'subtitle',
      required: true,
      error: 'This field is required',
    }, {
      label: 'Email',
      type: 'email',
      fieldType: 'input',
      name: 'email',
      originalValue: '',
      subtitle: 'subtitle',
      placeholder: 'email@email.com',
      required: true,
      pattern: 'email',
      error: 'Email is required, e.g. mail@mail.com',
    }],
    actions: [{
      children: 'Save',
      surface: 'primary',
      type: 'submit',
    }],
    alignActions: 'center'
  } as IFormTemplateProps,
};