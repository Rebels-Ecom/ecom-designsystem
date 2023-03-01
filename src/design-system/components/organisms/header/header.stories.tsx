import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './header'
import { TopNavBarStory } from '../../molecules/top-nav-bar/top-nav-bar.stories'
import { TopNavBar } from '../../molecules/top-nav-bar/top-nav-bar'
import { Navigation } from '../../molecules/navigation/navigation'
import { NavStory } from '../../molecules/navigation/navigation.stories'

export default {
  title: 'Design System/Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <Header>
    <TopNavBar {...args.topNavBar} />
    <Navigation {...args.navigation} />
  </Header>
)

export const HeaderStory = Template.bind({})
HeaderStory.storyName = 'Header'
HeaderStory.args = {
  topNavBar: TopNavBarStory.args,
  navigation: NavStory.args,
}
