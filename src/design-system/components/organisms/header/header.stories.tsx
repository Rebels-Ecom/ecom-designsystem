import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Header } from './header'
import { TopNavBarStory } from '../../molecules/top-nav-bar/top-nav-bar.stories'
import { TopNavBar } from '../../molecules/top-nav-bar/top-nav-bar'
import { Navigation } from '../../molecules/navigation/navigation'
import { NavStory } from '../../molecules/navigation/navigation.stories'
import { SearchNavBar } from '../../molecules/search-nav-bar/search-nav-bar'
import { SearchNavBarStory } from '../../molecules/search-nav-bar/search-nav-bar.stories'
import { Logotype } from '../../molecules/logotype/logotype'
import { NavLinks } from '../../molecules/nav-links/nav-links'

export default {
  title: 'Design System/Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <Header>
    {({ Wrapper, Button, GridArea }, isOpen) => (
      <Wrapper isOpen={isOpen}>
        <GridArea area="top">
          <TopNavBar {...args.topNavBar} />
        </GridArea>
        <GridArea area="logo">
          <Logotype {...args.logotype} />
        </GridArea>
        <GridArea area="search">
          <SearchNavBar {...args.searchNavBar} />
        </GridArea>
        <GridArea area="searchNavLinks">
          <NavLinks />
        </GridArea>
        <GridArea area="btn">
          <Button />
        </GridArea>
        <GridArea area="nav">
          <Navigation {...args.navigation} />
        </GridArea>
      </Wrapper>
    )}
  </Header>
)

export const HeaderStory = Template.bind({})
HeaderStory.storyName = 'Header'
HeaderStory.args = {
  topNavBar: TopNavBarStory.args,
  navigation: NavStory.args,
  searchNavBar: SearchNavBarStory.args,
  logotype: {
    logo: {
      src: '/logotypes/Spendrups_logo_desktop_horizontal.svg',
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [
        { srcset: '/logotypes/Spendrups_logo_mobile_vertical.svg', media: `(max-width: 767px)` },
        { srcset: '/logotypes/Spendrups_logo_desktop_horizontal.svg', media: `(min-width: 768px)` },
      ],
    },
    linkComponent: 'a',
  },
  headerLinkList: {
    links: [
      {
        navLinkType: 'favorites',
        href: '/favorites',
        text: 'My favorites',
        isExternal: false,
      },
      {
        navLinkType: 'cart',
        href: '/cart',
        text: 'Cart',
        isExternal: false,
      },
    ],
    linkComponent: 'a',
  },
}
