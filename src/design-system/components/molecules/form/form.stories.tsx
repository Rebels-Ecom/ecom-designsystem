import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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

export const Standard_Form = {
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

export const Compare_Two_Fields = {
  ...FormStoryTemplate,
  args: {
    formTitle: 'Form Title',
    loading: false,
    onSubmit: () => console.log('submit'),
    fields: [{
      label: 'Nytt lösenord',
      type: 'password',
      fieldType: 'input',
      name: 'new-password',
      originalValue: '',
      placeholder: '*',
      required: true,
      error: 'Du måste ange ett lösenord',
      betaField: 'confirm-password',
    }, {
      label: 'Upprepa lösenord',
      type: 'password',
      fieldType: 'input',
      name: 'confirm-password',
      originalValue: '',
      placeholder: '*',
      required: true,
      error: 'Lösenord matchar inte',
      alphaField: 'new-password',
    }],
    actions: [{
      children: 'Save',
      surface: 'primary',
      type: 'submit',
    }],
    alignActions: 'center'
  } as IFormTemplateProps,
};