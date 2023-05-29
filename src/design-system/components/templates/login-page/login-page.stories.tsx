import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LoginPage } from './login-page'
import { LoginFormStory, LoginFormStory_Loading } from '../../organisms/login-form/login-form.stories'
import { LoginForm } from '../../organisms/login-form/login-form'
import { AccountBoxListStory } from '../../organisms/account-box-list/account-box-list.stories'
import { AccountBoxList } from '../../organisms/account-box-list/account-box-list'

const meta: Meta<typeof LoginPage> = {
  title: 'Design System/Templates/LoginPage',
  component: LoginPage,
}

export default meta
type Story = StoryObj<typeof LoginPage>

const LoginPageStoryTemplate: Story = {
  render: ({...args}) => {
    return (
      <LoginPage>
        <LoginForm {...args} />
      </LoginPage>
    )
  },
}

const ChooseAccountStoryTemplate: Story = {
  render: ({...args}) => {
    return (
      <LoginPage>
          <AccountBoxList {...args}/>
      </LoginPage>
    )
  },
}

export const LoginPageStory = {
  ...LoginPageStoryTemplate,
  args: {
    ...LoginFormStory.args
  },
}

export const LoginPageStory_Loading = {
  ...LoginPageStoryTemplate,
  args: {
    ...LoginFormStory_Loading.args
  },
}

export const LoginPageStory_ChooseAccount = {
  ...ChooseAccountStoryTemplate,
  args: {
    ...AccountBoxListStory.args
  }
}
