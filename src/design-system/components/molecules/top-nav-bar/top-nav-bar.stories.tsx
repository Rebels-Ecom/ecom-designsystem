import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TTopNavLinks, TopNavBar } from './top-nav-bar'
import { UiDatePickerStory } from '../../atoms/ui-date-picker/ui-date-picker.stories';
import { TNavLink } from '../../../../types/links';


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
    const setSelectedDate = (date:Date) => { console.log(`Trigger set delivery day - ${date.toISOString().split('T')[0]}`)}

    return(<TopNavBar {...args} onClick={handleOnClick} onSelectDate={setSelectedDate}/>)
  }
};

export const topNavArgs = {
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
  ] as TTopNavLinks,
  linkComponent: 'a'
}

const userName = 'Jon Johnsson'

const topNavArgsLoggedIn = {
  userLoggedIn: true,
  userName: 'Jon Johnson',
  btnIcon: 'icon-x-circle',
  btnText: 'Logga ut',
  datePicker: UiDatePickerStory.args,
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
  userName: 'Jon Johnson',
  btnIcon: 'icon-x-circle',
  btnText: 'Logga ut',
  datePicker: UiDatePickerStory.args,
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

const topNavArgs_Admin_HasActiveUser = {
  userLoggedIn: true,
  hasActiveUser: true,
  userName: 'Jon Johnson',
  btnIcon: 'icon-x-circle',
  btnText: 'Logga ut',
  datePicker: UiDatePickerStory.args,
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

export const TopNavBarStory_Guest_User = {
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

export const TopNavBarStory_AdminHasActiveUser = {
  ...TopNavBarStoryTemplate,
  args: {
    ...topNavArgs_Admin_HasActiveUser,
  }
}
