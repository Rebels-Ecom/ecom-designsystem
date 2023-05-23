import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './login-form'

const meta: Meta<typeof LoginForm> = {
  title: 'Design System/Organisms/LoginForm',
  component: LoginForm,
}

export default meta
type Story = StoryObj<typeof LoginForm>

const LoginFormStoryTemplate: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <LoginForm {...args} />
    </div>
  ),
}

export const LoginFormStory = {
  ...LoginFormStoryTemplate,
  args: {
    title: 'Logga in',
    description: 'Fyll i dina uppgifter här nedanför',
    usernameLabel: 'Mailadress',
    username: 'John@doe.se',
    passwordLabel: 'Lösenord',
    password: 'lösenord123',
    forgotPasswordLabel: 'Glömt mitt lösenord?',
    primarySubmitLabel: 'Logga in',
    secondarySubmitLabel: 'Skapa ett konto & bli e-handelskund',
    offerLinkLabel: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
    onSubmit: (e) => {},
    onPasswordChange: (e) => {},
    onUsernameChange: (e) => {},
  },
}

export const LoginFormStory_Loading = {
  ...LoginFormStoryTemplate,
  args: {
    title: 'Logga in',
    description: 'Fyll i dina uppgifter här nedanför',
    usernameLabel: 'Mailadress',
    username: 'John@doe.se',
    passwordLabel: 'Lösenord',
    password: 'lösenord123',
    forgotPasswordLabel: 'Glömt mitt lösenord?',
    primarySubmitLabel: 'Logga in',
    secondarySubmitLabel: 'Skapa ett konto & bli e-handelskund',
    offerLinkLabel: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
    onSubmit: (e) => {},
    onPasswordChange: (e) => {},
    onUsernameChange: (e) => {},
    loading: true
  },
}
