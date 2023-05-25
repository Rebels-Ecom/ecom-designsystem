import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TopNavBar } from './top-nav-bar'


const meta: Meta<typeof TopNavBar> = {
  title: 'Design System/Molecules/Top Nav Bar',
  component: TopNavBar
};

export default meta;
type Story = StoryObj<typeof TopNavBar>;

const TopNavBarStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleOnClick(){
      console.log('Navigate to login page...')
    }
    return(<TopNavBar {...args} onClick={handleOnClick}/>)
  }
};

const topNavArgs = {
  links: [
    {
      href: '/kontakta-oss',
      icon: 'icon-mail',
      children: 'Kontakta oss',
      isExternal: false,
    },
    {
      isTelephoneLink: true,
      href: '0771-494910',
      icon: 'icon-phone',
      children: '0771-494910',
      isExternal: true,
    },
    {
      href: 'http://spendrups.se/kund/',
      icon: 'icon-plus-circle',
      children: 'Bli kund',
      isExternal: true,
    },
    {
      href: '/login',
      icon: 'icon-user',
      children: 'Logga in',
      isExternal: false,
    }
  ],
  linkComponent: 'a'
}

const userName = 'Jon Johnsson'

const topNavArgsLoggedIn = {
  userLoggedIn: true,
  userName: 'Jon Johnson',
  btnIcon: 'icon-x-circle',
  btnText: 'Logga ut',
  links: [
    {
      href: '/kontakta-oss',
      icon: 'icon-mail',
      children: 'Kontakta oss',
      isExternal: false,
    },
    {
      isTelephoneLink: true,
      href: '0771-494910',
      icon: 'icon-phone',
      children: '0771-494910',
      isExternal: true,
    },
    {
      href: '#',
      icon: 'icon-users',
      children: `Inloggad som ${userName}`,
      isExternal: false,
    },
  ],
  linkComponent: 'a'
}

const topNavArgs_Admin = {
  userLoggedIn: true,
  isAdmin: true,
  userName: 'Jon Johnson',
  btnIcon: 'icon-x-circle',
  btnText: 'Logga ut',
  links: [
    {
      href: '#',
      icon: 'icon-users',
      children: `Inloggad som ${userName}`,
      isExternal: false,
    },
  ],
  linkComponent: 'a'
}

export const TopNavBarStory = {
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs
  }
}

export const TopNavBarStory_Logged_In_User = {
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgsLoggedIn
  }
}

export const TopNavBarStory_Admin = {
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs_Admin,
  }
}
