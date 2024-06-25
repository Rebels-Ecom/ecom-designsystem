import React from 'react';
import type { Meta } from '@storybook/react';
import { Standard_Header } from '../../organisms/header/header.stories';
import { FooterStory } from '../../organisms/footer/footer.stories';
import { ContentWrapper } from '../../layouts';
import { BoxWrapper, InfoSummaryBox, OrderConfirmationDetails, ScrollableList } from '../../molecules';
import { Button, Heading, IconLink, MessagePopup } from '../../atoms';
import { MessagePopupStory } from '../../atoms/message-popup/message-popup.stories';
import { InfoSummaryBoxStory_ShoppingList } from '../../molecules/info-summary-box/info-summary-box.stories';
import { ScrollableListListStory_WithFade_2_products } from '../../molecules/scrollable-list/scrollable-list.stories';
import { OrderConfirmationDetailsStory_Pricing, OrderConfirmationDetailsStory_TotalPayment } from '../../molecules/order-confirmation-details/order-confirmation-details.stories';
import { Footer } from '../../organisms';

const meta: Meta = {
  title: 'Design System/Templates/ShoppingListPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
};

export default meta;

// GUIDELINE for how to structure a shopping list page
const ShoppingListStoryTemplate = {
  render: ({ ...args }) => {
  const [isMessagePopupOpen, setIsMessagePopupOpen] = React.useState(true)

    return (
      <>
        {args.header && args.header}
        <ContentWrapper>

            <BoxWrapper spacing={'xl'}>
              <Heading order={3}>Vårfesten</Heading>
              <MessagePopup onClose={() => setIsMessagePopupOpen(!isMessagePopupOpen)} {...MessagePopupStory.args} icon={'icon-info'} arrowPosition='center' isOpen={isMessagePopupOpen}></MessagePopup>
              <InfoSummaryBox {...InfoSummaryBoxStory_ShoppingList.args} />
              <Heading order={4} align='center'>Populära produkter som vi tror passar dig</Heading>
              <ScrollableList {...ScrollableListListStory_WithFade_2_products.args}>{ScrollableListListStory_WithFade_2_products.args.children}</ScrollableList>
              <IconLink icon={'icon-plus'} href={'/to-somewhere'} isExternal={true} linkComponent={'a'}>Visa alla rekommenderade produkter</IconLink>
              <OrderConfirmationDetails {...OrderConfirmationDetailsStory_Pricing.args} withBackground />
              <OrderConfirmationDetails {...OrderConfirmationDetailsStory_TotalPayment.args} withBackground={false} />
              <Button children='Button' type={'button'} surface={'primary'} size='small' />
            </BoxWrapper>

        </ContentWrapper>
        <Footer {...args.footer} />
      </>
    );
  }
}

export const ShoppingListStory = {
  ...ShoppingListStoryTemplate,
  args: {
    header: Standard_Header.render,
    footer:FooterStory.args
  }
}