import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ILoginForm, LoginForm } from './login-form'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_horiontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'

const meta: Meta<typeof LoginForm> = {
  title: 'Design System/Organisms/LoginForm',
  component: LoginForm,
}

export default meta
type Story = StoryObj<typeof LoginForm>

const LoginFormStoryTemplate: Story = {
  render: ({ ...args }: ILoginForm & { success?: boolean }) => (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <LoginForm
        {...args}
        responseMessage={args.success ? { title: 'Success!', message: 'Success message...' } : undefined}
        loading={args.loading}
      />
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
    forgotPassword: {
      name: 'Glömt mitt lösenord?',
      href: '#',
    },
    primarySubmitLabel: 'Logga in',
    secondarySubmitLabel: 'Bli e-handelskund',
    offerLink: {
      name: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
      href: '#',
    },
    onSubmit: () => {},
    onPasswordChange: () => {},
    onUsernameChange: () => {},
    errorMessage: `Det verkar som att du fyllt i fel uppgifter. 
    <br>
    Försök igen, beställ ett nytt lösenord eller kontakta e-handelssupport på <a href="mailto:ehandel@spendrups.se">ehandel@spendrups.se</a> eller <a href="tel:+46771494910">0771-49 49 10</a>.`,
    logo: <span>Logo goes here</span>,
    success: false,
    loading: false,
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
    secondarySubmitLabel: 'Bli e-handelskund',
    offerLinkLabel: 'Ny på Spendrups & vill veta mer om vårat erbjudande?',
    onSubmit: (e) => {},
    onPasswordChange: (e) => {},
    onUsernameChange: (e) => {},
    loading: true,
  },
}
