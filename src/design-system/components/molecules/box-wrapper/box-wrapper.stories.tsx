import React from 'react'
import { BoxWrapper } from './box-wrapper'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Heading, Text } from '../../atoms'
import { DeliveryDateInfo, InfoSummaryBox, OrderConfirmationDetails, OrderItem, Tabs, TagsList } from '../../molecules'
import { InfoSummaryBoxStory_Anvandare, InfoSummaryBoxStory_DinaUppgifter, InfoSummaryBoxStory_Inkopslistor, InfoSummaryBoxStory_MinaOrdrar } from '../info-summary-box/info-summary-box.stories'
import { OrderItem_MinSenasteOrder } from '../order-item/order-item.stories'
import { TabsStory_MinaFavoriter } from '../tabs/tabs.stories'
import { OrderConfirmationDetailsStory_Pricing, OrderConfirmationDetailsStory_TotalPayment } from '../order-confirmation-details/order-confirmation-details.stories'
import { GroupWrapper } from '../group-wrapper/group-wrapper'

const meta: Meta<typeof BoxWrapper> = {
    title: 'Design System/Molecules/BoxWrapper',
    component: BoxWrapper
};

export default meta;
type Story = StoryObj<typeof BoxWrapper>;

const BoxWrapperStoryTemplate: Story = {
    render: ({...args}) => (
        <div style={{ margin: 'auto', maxWidth: '700px' }}>
            <BoxWrapper spacing={'xl'} {...args}>{args.children}</BoxWrapper>
        </div>
    )
}

function getProductTags(tags: Array<any>) {
    return tags.map((tag) => {
      return {
        text: tag.Text,
        shape: tag.Shape ? tag.Shape : 'rectangular',
        color: tag.Class,
      }
    })
  }

const minSenasteOrderTags = [
    {
        "Text": "2022-06-01",
        "Class": "grey",
        "Shape" : 'pill',
        "ExternalId": "10751"
    },
    {
        "Text": "Levererad",
        "Class": "green",
        "Shape" : 'pill',
        "ExternalId": "10751"
    }
]

const minaOrdrarTags = [
    {
        "Text": "Mottagen",
        "Class": "grey",
        "Shape" : 'pill',
        "ExternalId": "10751"
    },
    {
        "Text": "Packas",
        "Class": "yellow",
        "Shape" : 'pill',
        "ExternalId": "10752"
    },
    {
        "Text": "Skickas",
        "Class": "blue",
        "Shape" : 'pill',
        "ExternalId": "10753"
    },
    {
        "Text": "Levererad",
        "Class": "green",
        "Shape" : 'pill',
        "ExternalId": "10754"
    },
    {
        "Text": "Retur",
        "Class": "purple",
        "Shape" : 'pill',
        "ExternalId": "10755"
    }
]

const mittSpendrupsArgs = (
    <>
        <Heading order={3}>Mitt spendrups</Heading>
        <Text>Dina aktuella leveransdatum</Text>
        <DeliveryDateInfo dateLabel={'2022-06-03'}/>
        <InfoSummaryBox {...InfoSummaryBoxStory_DinaUppgifter.args}></InfoSummaryBox>
        <InfoSummaryBox {...InfoSummaryBoxStory_Anvandare.args}></InfoSummaryBox>
    </>
)

const minaFavoriterArgs = (
    <>
        <Heading order={3}>Mina Favoriter</Heading>
        <Text>Hantera dina favoriter här under</Text>
        <Tabs {...TabsStory_MinaFavoriter.args}></Tabs>
    </>
)

const minSenasteOrderArgs = (
    <>
        <Heading order={3}>Min Senaste Order</Heading>
        <Text>Tillagda produkter</Text>
        <Text weight='bold'>Din senaste order innehåller 22 produkter</Text>
        <TagsList tagsList={getProductTags(minSenasteOrderTags)}></TagsList>
        <OrderItem {...OrderItem_MinSenasteOrder.args}></OrderItem>
        <OrderConfirmationDetails {...OrderConfirmationDetailsStory_Pricing.args} withBackground></OrderConfirmationDetails>
        <OrderConfirmationDetails {...OrderConfirmationDetailsStory_TotalPayment.args} withBackground={false}></OrderConfirmationDetails>
        <Button type={'button'} surface={'primary'}>Beställ igen</Button>
    </>
)

const minaOrdrarArgs = (
    <>
        <Heading order={3}>Mina Ordrar</Heading>
        <Text>Tillagda produkter</Text>
        <Text weight='bold'>Du har totalt 2 ordrar som väntar på att levereras</Text>
        <TagsList tagsList={getProductTags(minaOrdrarTags)}></TagsList>
        <InfoSummaryBox {...InfoSummaryBoxStory_MinaOrdrar.args}></InfoSummaryBox>
        <OrderConfirmationDetails {...OrderConfirmationDetailsStory_Pricing.args} withBackground></OrderConfirmationDetails>
        <OrderConfirmationDetails {...OrderConfirmationDetailsStory_TotalPayment.args} withBackground={false}></OrderConfirmationDetails>
        <Button type={'button'} surface={'primary'}>Beställ igen</Button>
    </>
)

const ovrigaTjansterArgs = (
    <>
        <Heading order={3}>Övriga tjänster</Heading>
        <Text>Gör ditt val här under</Text>
        <GroupWrapper>
            <Button type={'button'} surface={'secondary'} iconRight={{icon: 'icon-download'}} rounded>Volymrapport</Button>
            <Button type={'button'} surface={'secondary'} iconRight={{icon: 'icon-check-circle'}} rounded>Bonusbesked</Button>
        </GroupWrapper>
    </>
)
const ovrigaOrderTjansterArgs = (
    <>
        <Heading order={3}>Övriga ordertjänster</Heading>
        <Text>Gör ditt val här under</Text>
        <GroupWrapper>
            <Button type={'button'} surface={'secondary'} iconRight={{icon: 'icon-package'}} rounded>Tomgodsordrar</Button>
            <Button type={'button'} surface={'secondary'} iconRight={{icon: 'icon-archive'}} rounded>Returordrar</Button>
        </GroupWrapper>
    </>
)

export const BoxWrapperStory_MittSpendrups = {
    ...BoxWrapperStoryTemplate,
    args: {
        children: mittSpendrupsArgs,
        position: 'left',
        spacing: 'md', 
        noWrap: true,
    }
}

export const BoxWrapperStory_MinaFavoriter = {
    ...BoxWrapperStoryTemplate,
    args: {
        children: minaFavoriterArgs,
        position: 'left',
        spacing: 'md', 
        noWrap: true,
    }
}

export const BoxWrapperStory_MinSenasteOrder = {
    ...BoxWrapperStoryTemplate,
    args: {
        children: minSenasteOrderArgs,
        position: 'left',
        spacing: 'md', 
        noWrap: true,
    }
}

export const BoxWrapperStory_MinaOrdrar = {
    ...BoxWrapperStoryTemplate,
    args: {
        children: minaOrdrarArgs,
        position: 'left',
        spacing: 'md', 
        noWrap: true,
    }
}

export const BoxWrapperStory_ÖvrigaTjänster = {
    ...BoxWrapperStoryTemplate,
    args: {
        children: ovrigaTjansterArgs,
        position: 'left',
        spacing: 'md', 
        noWrap: true,
    }
}
export const BoxWrapperStory_ÖvrigaOrderTjänster = {
    ...BoxWrapperStoryTemplate,
    args: {
        children: ovrigaOrderTjansterArgs,
        position: 'left',
        spacing: 'md', 
        noWrap: true,
    }
}