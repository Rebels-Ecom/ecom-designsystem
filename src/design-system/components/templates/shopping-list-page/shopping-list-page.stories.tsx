import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingListPage } from './shopping-list-page'
import { Button, Heading, IconLink, MessagePopup, Text } from '../../atoms';
import { BoxWrapper, DeliveryDateInfo, InfoSummaryBox, OrderConfirmationDetails } from '../../molecules';
import { MaxWidth } from '../../layouts';
import { InfoSummaryBoxStory_ShoppingList } from '../../molecules/info-summary-box/info-summary-box.stories';
import { MessagePopupStory } from '../../atoms/message-popup/message-popup.stories';
import { ScrollableList } from '../../molecules/scrollable-list/scrollable-list';
import { ScrollableListListStory_WithFade, ScrollableListListStory_WithFade_2_products } from '../../molecules/scrollable-list/scrollable-list.stories';
import { OrderConfirmationDetailsStory_Pricing, OrderConfirmationDetailsStory_TotalPayment } from '../../molecules/order-confirmation-details/order-confirmation-details.stories';
import { ButtonProductCardStory } from '../../atoms/button/button.stories';

const meta: Meta<typeof ShoppingListPage> = {
  title: 'Design System/Templates/ShoppingListPage',
  component: ShoppingListPage
};

export default meta;
type Story = StoryObj<typeof ShoppingListPage>;

const ShoppingListStoryTemplate: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true);
    return(
        <MaxWidth contentMaxWidth={'narrow'}>
          <BoxWrapper spacing={'xl'}>
              <Heading order={3}>Vårfesten</Heading>
              <Text>Senast sparad:</Text>
              <DeliveryDateInfo dateLabel={'2022-06-10'}/>
              <MessagePopup isOpen={isOpen} onClose={()=>setIsOpen(!isOpen)} {...MessagePopupStory.args} icon={'icon-info'} arrowPosition='center'></MessagePopup>
              <InfoSummaryBox {...InfoSummaryBoxStory_ShoppingList.args}/>
              <Heading order={4} align='center'>Populära produkter som vi tror passar dig</Heading>
              <ScrollableList {...ScrollableListListStory_WithFade_2_products.args}>{ScrollableListListStory_WithFade.args.children}</ScrollableList> 
              <IconLink icon={'icon-plus'} href={'/to-somewhere'} isExternal={true} linkComponent={'a'}>Visa alla rekommenderade produkter</IconLink>
              <OrderConfirmationDetails {...OrderConfirmationDetailsStory_Pricing.args} withBackground></OrderConfirmationDetails>
              <OrderConfirmationDetails {...OrderConfirmationDetailsStory_TotalPayment.args} withBackground={false}></OrderConfirmationDetails>
              <Button {...ButtonProductCardStory.args} type={'button'} surface={'primary'} size='small'></Button>
          </BoxWrapper>
        </MaxWidth>
    )
  }
}

export const ShoppingListStory = {
  ...ShoppingListStoryTemplate,
  args: {
   
  }
}