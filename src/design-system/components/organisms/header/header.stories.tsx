import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'
import { TopNavBarStory } from '../../molecules/top-nav-bar/top-nav-bar.stories'
import { TopNavBar } from '../../molecules/top-nav-bar/top-nav-bar'
import { Navigation } from '../../molecules/navigation/navigation'
import { NavigationStory } from '../../molecules/navigation/navigation.stories'
import { SearchNavBar } from '../../molecules/search-nav-bar/search-nav-bar'
import { SearchNavBarStory } from '../../molecules/search-nav-bar/search-nav-bar.stories'
import { Logotype } from '../../molecules/logotype/logotype'
import { NavLinks } from '../../molecules/nav-links/nav-links'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_vertical from '../../../../logotypes/Spendrups_logo_vertical.svg'

const meta: Meta<typeof Header> = {
  title: 'Design System/Organisms/Header',
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

const HeaderStoryTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const handleOnClick = () => setIsOpen(!isOpen)
    return (
      <Header isOpen={isOpen}>
        {({ Wrapper, Button, GridArea }) => (
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
              <Button onClick={handleOnClick} />
            </GridArea>
            <GridArea area="nav">
              <Navigation {...args.navigation} isOpen={isOpen} />
            </GridArea>
          </Wrapper>
        )}
      </Header>
    )
  },
}

export const HeaderStory = {
  ...HeaderStoryTemplate,
  args: {
    topNavBar: TopNavBarStory.args,
    navigation: NavigationStory.args,
    searchNavBar: SearchNavBarStory.args,
    logotype: {
      logo: {
        src: logotype_desktop_horizontal,
        alt: 'logo',
        href: '/',
        id: 'logo',
        sources: [
          { srcset: logotype_mobile_vertical, media: `(max-width: 767px)` },
          { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
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
  },
}
