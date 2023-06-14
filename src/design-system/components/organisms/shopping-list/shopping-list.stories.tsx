import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingList } from './shopping-list'
import { Heading, MessagePopup, Text } from '../../atoms';
import { BoxWrapper, DeliveryDateInfo, InfoSummaryBox } from '../../molecules';
import { MaxWidth } from '../../layouts';
import { InfoSummaryBoxStory_Produkter, InfoSummaryBoxStory_ShoppingList } from '../../molecules/info-summary-box/info-summary-box.stories';
import { MessagePopupStory } from '../../atoms/message-popup/message-popup.stories';

const meta: Meta<typeof ShoppingList> = {
  title: 'Design System/Organisms/ShoppingList',
  component: ShoppingList
};

export default meta;
type Story = StoryObj<typeof ShoppingList>;

const ShoppingListStoryTemplate: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true);
    return(
      <div style={{ margin: '2rem auto', maxWidth: '920px' }}>
        <MaxWidth contentMaxWidth={'wide'}>
          <BoxWrapper spacing={'xl'}>
              <Heading order={3}>Vårfesten</Heading>
              <Text>Senast sparad:</Text>
              <DeliveryDateInfo dateLabel={'2022-06-10'}/>
              <MessagePopup isOpen={isOpen} onClose={()=>setIsOpen(!isOpen)} {...MessagePopupStory.args} icon={'icon-info'} arrowPosition='center'></MessagePopup>
              <InfoSummaryBox {...InfoSummaryBoxStory_ShoppingList.args}/>
              <InfoSummaryBox {...InfoSummaryBoxStory_Produkter.args}/> 
          </BoxWrapper>
        </MaxWidth>
      </div>
    )
  }
}

export const ShoppingListStory = {
  ...ShoppingListStoryTemplate,
  args: {
   
  }
}