import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LoginPage } from './login-page'
import { LoginFormStory } from '../../organisms/login-form/login-form.stories'
import { LoginForm } from '../../organisms/login-form/login-form'

export default {
  title: 'Design System/Templates/LoginPage',
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>

const Template: ComponentStory<typeof LoginPage> = (args) => (
  <LoginPage>
    <LoginForm {...LoginFormStory.args} />
  </LoginPage>
)

export const LoginPageStory = Template.bind({})
LoginPageStory.storyName = 'Login Page Template'
LoginPageStory.args = {
  ...LoginFormStory.args,
}
