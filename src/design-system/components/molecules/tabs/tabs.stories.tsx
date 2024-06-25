import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs'
import { UserProfileDropdownStory } from '../user-profile-dropdown/user-profile-dropdown.stories';
import { UserProfileDropdown } from '../user-profile-dropdown/user-profile-dropdown';
import { InfoSummaryBox } from '../info-summary-box/info-summary-box';
import { InfoSummaryBoxStory_Inkopslistor } from '../info-summary-box/info-summary-box.stories';
import { CartProduct_OrderConfirmation_Beer, CartProduct_OrderConfirmation_Wine } from '../cart-product/cart-product.stories';
import { CartProductList } from '../../organisms/cart-product-list/cart-product-list';
import { CartProduct } from '../cart-product/cart-product';
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

const tabsList = [
    {
        id: '3',
        tabTitle: 'Meny',
        content: <p>Menu</p>
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