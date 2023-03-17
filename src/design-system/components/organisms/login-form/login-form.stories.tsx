import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginForm } from './login-form'

export default {
  title: 'Design System/Organisms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <LoginForm {...args} />
    </div>
  )
}

export const LoginFormStory = Template.bind({})
LoginFormStory.storyName = 'Login Form'
LoginFormStory.args = {
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
}
