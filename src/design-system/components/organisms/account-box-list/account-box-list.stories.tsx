import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { AccountBoxList } from './account-box-list'
import { AccountBoxStory } from '../../molecules/account-box/account-box.stories'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_horiontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'

const meta: Meta<typeof AccountBoxList> = {
  title: 'Design System/Organisms/AccountBoxList',
  component: AccountBoxList
};

export default meta;
type Story = StoryObj<typeof AccountBoxList>;

const AccountBoxListStoryTemplate: Story = {
  render: ({ ...args }) => (<AccountBoxList {...args} />)
}

const logotypePictureArgs = {
    src: logotype_desktop_horizontal,
    alt: 'logo',
    href: '/',
    id: 'logo',
    sources: [
      { srcset: logotype_mobile_horiontal, media: `(max-width: 767px)` },
      { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
    ]
}

const listOfAccounts = [
  AccountBoxStory.args,
  AccountBoxStory.args,
  AccountBoxStory.args,
  AccountBoxStory.args
]

export const AccountBoxListStory = {
  ...AccountBoxListStoryTemplate,
  args: {
    logotype: logotypePictureArgs,
    heading: 'Välj konto',
    text: 'Vilket konto vill du hantera idag?',
    accountsList: listOfAccounts
  }
}