import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs'
import { UserProfileDropdownStory } from '../user-profile-dropdown/user-profile-dropdown.stories';
import { NavigationList } from '../navigation-list/navigation-list';
import { Navigation } from '../navigation/navigation';
import { NavigationStory } from '../navigation/navigation.stories';
import { UserProfileDropdown } from '../user-profile-dropdown/user-profile-dropdown';
import { InfoSummaryBox } from '../info-summary-box/info-summary-box';
import { InfoSummaryBoxStory_Inkopslistor } from '../info-summary-box/info-summary-box.stories';
import { CartProduct_OrderConfirmation_Beer, CartProduct_OrderConfirmation_Wine } from '../cart-product/cart-product.stories';
import { CartProductList } from '../../organisms/cart-product-list/cart-product-list';
import { ICartProduct, CartProduct } from '../cart-product/cart-product';
import { GroupWrapper } from '../group-wrapper/group-wrapper';
import { Button } from '../../atoms/button/button';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Molecules/Tabs',
  component: Tabs
}

export default meta;
type Story = StoryObj<typeof Tabs>;

const TabsStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isTabsOpen, setIsTabsOpen] = useState<boolean>(false)
    return(
        <>
        <button onClick={()=>setIsTabsOpen(!isTabsOpen)}>Toggle</button>
        <Tabs {...args} isOpen={isTabsOpen}/>
    </>)}
};

const links= [
    {
      href: '#',
      children: 'Hem',
      title: 'Hem',
      isExternal: true,
    },
    {
      href: '/nyheter',
      title: 'Nyheter',
      children: 'Nyheter',
      isExternal: true,
    },
    {
      href: '/ol',
      title: 'Öl',
      children: 'Öl',
      isExternal: true,
      hasChildren: true,
      subNavBtnLabel: 'Visa alla sorter',
      subNavigationLinks: [
        {href: 'ol/ale', title: 'Ale', children: 'Ale',isExternal: false }, 
        {href: 'ol/ipa', title: 'Ipa', children: 'Ipa', isExternal: true}, 
        {href: 'ol/ljus-lager', title: 'Ljus lager', children: 'Ljus lager', isExternal: true},
        {href: 'ol/mork-lager', title: 'Mörk lager', children: 'Mörk lager', isExternal: true}, 
        {href: 'ol/pale-ale', title: 'Pale Ale', children: 'Pale Ale', isExternal: true}, 
        {href: 'ol/stout-och-porter', title: 'Stout och Porter', children: 'Stout och Porter', isExternal: true}, 
        {href: 'ol/surol', title: 'Suröl', children: 'Suröl', isExternal: true}, 
        {href: 'ol/veteol', title: 'Veteöl', children: 'Veteöl', isExternal: true}
      ]
    },
    {
      href: '/vin',
      children: 'Vin',
      title: 'Vin',
      isExternal: true,
      hasChildren: true,
      subNavBtnLabel: 'Visa alla vin',
      subNavigationLinks: [
        {href: 'vin/alkoholfritt', title: 'Alkoholfritt', children: 'Alkoholfritt', isExternal: true }, 
        {href: 'vin/champagne', title: 'Champagne',  children: 'Champagne', isExternal: true}, 
        {href: 'vin/mousserande', title: 'Mousserande', children: 'Mousserande', isExternal: true},
        {href: 'vin/rose', title: 'Rosé', children: 'Rosé', isExternal: true},
        {href: 'vin/rott', title: 'Rött', children: 'Rött', isExternal: true},
        {href: 'vin/sma-partier', title: 'Små partier', children: 'Små partier', isExternal: true},
        {href: 'vin/sott', title: 'Sött', children: 'Sött', isExternal: true},
        {href: 'vin/starkvin', title: 'Starkvin', children: 'Starkvin', isExternal: true},
        {href: 'vin/vitt', title: 'Vitt', children: 'Vitt', isExternal: true}
      ]
    },
    {
      href: '/sprit',
      children: 'Sprit',
      title: 'Sprit',
      isExternal: true,
    },
    {
      href: '/cider',
      children: 'Cider',
      title: 'Cider',
      isExternal: true,
    },
    {
      href: '/alcoholfritt',
      children: 'Alcoholfritt',
      title: 'Alcoholfritt',
      isExternal: true,
    },
    {
      href: '/ovrigt',
      children: 'Övrigt',
      title: 'Övrigt',
      isExternal: true,
    },
  ]

const tabsList = [
    {
        id: '3',
        tabTitle: 'Meny',
        content: <Navigation {...NavigationStory.args} isOpen={true} />
    },
    {
        id: '4',
        tabTitle: 'Mitt spendrups',
        content: <UserProfileDropdown {...UserProfileDropdownStory.args} isDropdownOpen={true}></UserProfileDropdown> 
    }
];

const cartProducts = [
  CartProduct_OrderConfirmation_Beer.args,
  CartProduct_OrderConfirmation_Wine.args,
]

const tabsListMinaFavoriter = [
  {
      id: 'InköpsListor_tab',
      tabTitle: 'InköpsListor',
      content: <GroupWrapper direction='column'>
          <InfoSummaryBox {...InfoSummaryBoxStory_Inkopslistor.args}></InfoSummaryBox>
          <Button type={'button'} surface={'primary'}>Skapa ny lista</Button>
        </GroupWrapper>
  },
  {
      id: 'Produkter_tab',
      tabTitle: 'Produkter',
      content: <CartProductList>
      { cartProducts.map( (product: any) => <CartProduct key={Math.random()} {...product} ></CartProduct>) }
  </CartProductList>
  }
];

export const TabsStory = {
  ...TabsStoryTemplate,
  args: {
    tabs: tabsList
  }
}

export const TabsStory_MinaFavoriter = {
  ...TabsStoryTemplate,
  args: {
    tabs: tabsListMinaFavoriter,
    isOpen: true
  }
}