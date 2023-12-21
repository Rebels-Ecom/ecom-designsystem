import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AccountBox } from './account-box'
import { Button_Large_Icon_Right } from '../../atoms/button/button.stories'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof AccountBox> = {
  title: 'Design System/Molecules/AccountBox',
  component: AccountBox,
}

export default meta
type Story = StoryObj<typeof AccountBox>

const AccountBoxStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleChooseAccount(accNum: string) {
      console.log('Go to account number: ', accNum)
    }

    return <AccountBox {...args} />
  },
}

export const AccountBoxStory = {
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: 'Kundnr: 186922',
    contactPerson: 'Jon Jonsson',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: Button_Large_Icon_Right.args,
    onClickChooseAccount: action('clicked'),
  },
}

export const AccountBoxStory_2 = {
  ...AccountBoxStoryTemplate,
  args: {
    companyName: 'Beer Fest',
    accountNumber: 'Kundnr: 186922',
    address: 'Granängsringen 3',
    zipcode: '135 44',
    city: 'Tyresö',
    chooseAccountBtn: Button_Large_Icon_Right.args,
    onClickChooseAccount: action('clicked'),
  },
}
