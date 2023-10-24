import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './login-form'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_horiontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'

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
    logo: {
      src: logotype_desktop_horizontal,
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [
        { srcset: logotype_mobile_horiontal, media: `(max-width: 767px)` },
        { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
      ],
    }
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
