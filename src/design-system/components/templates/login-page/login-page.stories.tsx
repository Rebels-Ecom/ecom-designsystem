import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LoginPage } from './login-page'
import { LoginFormStory } from '../../organisms/login-form/login-form.stories'
import { LoginForm } from '../../organisms/login-form/login-form'

const meta: Meta<typeof LoginPage> = {
  title: 'Design System/Templates/LoginPage',
  component: LoginPage
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

const LoginPageStoryTemplate: Story = {
  render: ({ ...args }) => (
    <LoginPage>
      <LoginForm {...args} />
    </LoginPage>
  )
};

export const LoginPageStory = {
  ...LoginPageStoryTemplate,
  args: {
    ...LoginFormStory.args,
  }
}