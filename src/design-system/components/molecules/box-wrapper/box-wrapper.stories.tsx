import React from 'react'
import { BoxWrapper } from './box-wrapper'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Heading, Text } from '../../atoms'
import {
  InfoSummaryBox,
  OrderConfirmationDetails,
  OrderItem,
  SingleSelectButtonsList,
  Tabs,
  TagsList,
} from '../../molecules'
import {
  InfoSummaryBoxStory_Anvandare,
  InfoSummaryBoxStory_CheckboxList_Heineken,
  InfoSummaryBoxStory_CheckboxList_Loka,
  InfoSummaryBoxStory_DinaUppgifter,
  InfoSummaryBoxStory_MinaOrdrar,
  InfoSummaryBoxStory_PDF_Category_Beer,
  InfoSummaryBoxStory_PDF_Category_Wine,
  InfoSummaryBoxStory_WordFilters,
} from '../info-summary-box/info-summary-box.stories'
import { OrderItem_MinSenasteOrder } from '../order-item/order-item.stories'
import { TabsStory_MinaFavoriter } from '../tabs/tabs.stories'
import {
  OrderConfirmationDetailsStory_Pricing,
  OrderConfirmationDetailsStory_TotalPayment,
} from '../order-confirmation-details/order-confirmation-details.stories'
import { GroupWrapper } from '../group-wrapper/group-wrapper'
import { ScrollableList } from '../scrollable-list/scrollable-list'
import {
  ScrollableListListStory_PurchaseLists,
} from '../scrollable-list/scrollable-list.stories'
import { SingleSelectButtonsListStory } from '../single-select-buttons-list/single-select-buttons-list.stories'

const meta: Meta<typeof BoxWrapper> = {
  title: 'Design System/Molecules/BoxWrapper',
  component: BoxWrapper,
}

export default meta
type Story = StoryObj<typeof BoxWrapper>

const BoxWrapperStoryTemplate: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: 'auto', maxWidth: '700px' }}>
      <BoxWrapper spacing={'xl'} {...args}>
        {args.children}
      </BoxWrapper>
    </div>
  ),
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
    Text: '2022-06-01',
    Class: 'grey',
    Shape: 'pill',
    ExternalId: '10751',
  },
  {
    Text: 'Levererad',
    Class: 'green',
    Shape: 'pill',
    ExternalId: '10751',
  },
]

const minaOrdrarTags = [
  {
    Text: 'Mottagen',
    Class: 'grey',
    Shape: 'pill',
    ExternalId: '10751',
  },
  {
    Text: 'Packas',
    Class: 'yellow',
    Shape: 'pill',
    ExternalId: '10752',
  },
  {
    Text: 'Skickas',
    Class: 'blue',
    Shape: 'pill',
    ExternalId: '10753',
  },
  {
    Text: 'Levererad',
    Class: 'green',
    Shape: 'pill',
    ExternalId: '10754',
  },
  {
    Text: 'Retur',
    Class: 'purple',
    Shape: 'pill',
    ExternalId: '10755',
  },
]

const mittSpendrupsArgs = (
  <>
    <Heading order={3}>Mitt spendrups</Heading>
    <Text>Dina aktuella leveransdatum</Text>
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
    <Text weight="bold">Din senaste order innehåller 22 produkter</Text>
    <TagsList tagsList={getProductTags(minSenasteOrderTags)}></TagsList>
    <OrderItem {...OrderItem_MinSenasteOrder.args}></OrderItem>
    <OrderConfirmationDetails {...OrderConfirmationDetailsStory_Pricing.args} withBackground></OrderConfirmationDetails>
    <OrderConfirmationDetails {...OrderConfirmationDetailsStory_TotalPayment.args} withBackground={false}></OrderConfirmationDetails>
    <Button type={'button'} surface={'primary'}>
      Beställ igen
    </Button>
  </>
)

const minaOrdrarArgs = (
  <>
    <Heading order={3}>Mina Ordrar</Heading>
    <Text>Tillagda produkter</Text>
    <Text weight="bold">Du har totalt 2 ordrar som väntar på att levereras</Text>
    <TagsList tagsList={getProductTags(minaOrdrarTags)}></TagsList>
    <InfoSummaryBox {...InfoSummaryBoxStory_MinaOrdrar.args}></InfoSummaryBox>
    <OrderConfirmationDetails {...OrderConfirmationDetailsStory_Pricing.args} withBackground></OrderConfirmationDetails>
    <OrderConfirmationDetails {...OrderConfirmationDetailsStory_TotalPayment.args} withBackground={false}></OrderConfirmationDetails>
    <Button type={'button'} surface={'primary'}>
      Beställ igen
    </Button>
  </>
)

const ovrigaTjansterArgs = (
  <>
    <Heading order={3}>Övriga tjänster</Heading>
    <Text>Gör ditt val här under</Text>
    <GroupWrapper>
      <Button type={'button'} surface={'secondary'} iconRight={{ icon: 'icon-download' }} rounded>
        Volymrapport
      </Button>
      <Button type={'button'} surface={'secondary'} iconRight={{ icon: 'icon-check-circle' }} rounded>
        Bonusbesked
      </Button>
    </GroupWrapper>
  </>
)
const ovrigaOrderTjansterArgs = (
  <>
    <Heading order={3}>Övriga ordertjänster</Heading>
    <Text>Gör ditt val här under</Text>
    <GroupWrapper>
      <Button type={'button'} surface={'secondary'} iconRight={{ icon: 'icon-package' }} rounded>
        Tomgodsordrar
      </Button>
      <Button type={'button'} surface={'secondary'} iconRight={{ icon: 'icon-archive' }} rounded>
        Returordrar
      </Button>
    </GroupWrapper>
  </>
)

const tidigareOrdrarArgs = (
  <>
    <Heading order={3}>Mina tidigare ordrar</Heading>
    <Text>Ordrar sparas 1-1.5 år tillbaka i tiden, per månad:</Text>
    <Text weight="bold">Välj din månad för att se tidigare historik</Text>
    <SingleSelectButtonsList onChange={() => {}} {...SingleSelectButtonsListStory.args}></SingleSelectButtonsList>
  </>
)

const downloadPDFArgs = (
  <>
    <Heading order={3} noMargin>
      Produktblad
    </Heading>
    <Heading order={4} noMargin>
      Inköpslista namn
    </Heading>
    <Text>2023-07-18 kl 13:33</Text>
    <InfoSummaryBox {...InfoSummaryBoxStory_CheckboxList_Loka.args}></InfoSummaryBox>
    <InfoSummaryBox {...InfoSummaryBoxStory_CheckboxList_Heineken.args}></InfoSummaryBox>
    <Button type={'button'} surface={'primary'} iconRight={{ icon: 'icon-file' }}>
      Spara PDF-fil
    </Button>
  </>
)

const wordFiltersArgs = (
  <>
    <Heading order={4} noMargin>
      Vilka Fakta
    </Heading>
    <InfoSummaryBox {...InfoSummaryBoxStory_WordFilters.args}></InfoSummaryBox>
  </>
)

const purchaseListsArgs = (
  <>
    <Heading order={3}>Inköpslistor</Heading>
    <ScrollableList {...ScrollableListListStory_PurchaseLists.args}></ScrollableList>
  </>
)

const purchaseListArgs = (
  <>
    <Heading order={3}>List Namn</Heading>
    <InfoSummaryBox {...InfoSummaryBoxStory_PDF_Category_Beer.args}></InfoSummaryBox>
    <InfoSummaryBox {...InfoSummaryBoxStory_PDF_Category_Wine.args}></InfoSummaryBox>
    <OrderConfirmationDetails {...OrderConfirmationDetailsStory_Pricing.args} withBackground></OrderConfirmationDetails>
    <Button type={'button'} surface={'primary'}>
      Beställ igen
    </Button>
  </>
)

export const BoxWrapperStory_MittSpendrups = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: mittSpendrupsArgs,
    position: 'left',
    hasMaxWidth: false,
    withBorder: false,
    spacing: 'md',
    noWrap: true,
  },
}

export const BoxWrapperStory_MinaFavoriter = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: minaFavoriterArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}

export const BoxWrapperStory_MinSenasteOrder = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: minSenasteOrderArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}

export const BoxWrapperStory_MinaOrdrar = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: minaOrdrarArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}

export const BoxWrapperStory_ÖvrigaTjänster = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: ovrigaTjansterArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}
export const BoxWrapperStory_ÖvrigaOrderTjänster = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: ovrigaOrderTjansterArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}

export const BoxWrapperStory_TidigareOrdrar = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: tidigareOrdrarArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}

export const BoxWrapperStory_PurchaseLists = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: purchaseListsArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}

export const BoxWrapperStory_PurchaseListDetails = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: purchaseListArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}

export const BoxWrapperStory_Download_PDF = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: downloadPDFArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}

export const BoxWrapperStory_WordFilters = {
  ...BoxWrapperStoryTemplate,
  args: {
    children: wordFiltersArgs,
    position: 'left',
    spacing: 'md',
    noWrap: true,
  },
}
