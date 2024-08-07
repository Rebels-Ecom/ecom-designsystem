import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InfoSummaryBox } from './info-summary-box'
import { Text } from '../../atoms/text/text'
import { OrderItem } from '../order-item/order-item'
import { OrderItem_MinaOrdrar_1, OrderItem_MinaOrdrar_2, OrderItem_Sommarfest, OrderItem_Vinterfest } from '../order-item/order-item.stories'
import { CartProductList } from '../../organisms/cart-product-list/cart-product-list'
import { CartProduct } from '../cart-product/cart-product'
import { CartProduct_OrderConfirmation_Beer, CartProduct_OrderConfirmation_Wine } from '../cart-product/cart-product.stories'
import { GroupWrapper } from '../group-wrapper/group-wrapper'
import { Button, Heading } from '../../atoms'
import { CheckboxListItem } from '../checkbox-list-item/checkbox-list-item'
import { CheckboxListItem_Loka, CheckboxListItem_Heineken } from '../checkbox-list-item/checkbox-list-item.stories'
import { UnorderedListStory } from '../unordered-list/unordered-list.stories'
import { UnorderedList } from '../unordered-list/unordered-list'

const meta: Meta<typeof InfoSummaryBox> = {
  title: 'Design System/Molecules/InfoSummaryBox',
  component: InfoSummaryBox,
}

export default meta
type Story = StoryObj<typeof InfoSummaryBox>

const InfoSummaryBoxStoryTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
        <InfoSummaryBox {...args} />
      </div>
    )
  },
}

const itemsListAdministrator = (
  <>
    <Text weight="bold">Administratör</Text>
    <Text>Jon Jonsson</Text>
    <Text>Granängsringen 3, 135 44, Tyresö</Text>
  </>
)

const itemsListBestallare = (
  <>
    <Text weight="bold">Beställare</Text>
    <Text borderBottom>Lisbeth Jonsson</Text>
    <Text borderBottom>Sture Jonsson</Text>
    <Text borderBottom>Steven Stevenson</Text>
    <Text>Bobby Granlund</Text>
  </>
)

const itemsListInkopslistor = (
  <>
    <OrderItem {...OrderItem_Sommarfest.args}></OrderItem>
    <OrderItem {...OrderItem_Vinterfest.args}></OrderItem>
  </>
)

const itemsListMinaOrdrar = (
  <>
    <OrderItem {...OrderItem_MinaOrdrar_1.args}></OrderItem>
    <OrderItem {...OrderItem_MinaOrdrar_2.args}></OrderItem>
  </>
)

const itemsListCategoryBeer = (
  <>
    <OrderItem {...OrderItem_MinaOrdrar_1.args}></OrderItem>
    <OrderItem {...OrderItem_MinaOrdrar_2.args}></OrderItem>
  </>
)

const itemsListCategoryWine = (
  <>
    <OrderItem {...OrderItem_MinaOrdrar_1.args}></OrderItem>
    <OrderItem {...OrderItem_MinaOrdrar_2.args}></OrderItem>
  </>
)

const cartProducts = [CartProduct_OrderConfirmation_Beer.args, CartProduct_OrderConfirmation_Wine.args]

const itemsProdukter = (
  <CartProductList>
    {cartProducts.map((product: any) => (
      <CartProduct key={Math.random()} {...product}></CartProduct>
    ))}
  </CartProductList>
)

const itemsShoppingList = (
  <GroupWrapper position="center">
    <Button type={'button'} surface={'secondary'} children={'Hämta inköpslista'} iconRight={{ icon: 'icon-layers' }} rounded onClick={() => {}} />
    <Button type={'button'} surface={'secondary'} children={'Senaste order'} iconRight={{ icon: 'icon-package' }} rounded onClick={() => {}} />
  </GroupWrapper>
)

const checkboxProducts = [CheckboxListItem_Heineken.args, CheckboxListItem_Loka.args, CheckboxListItem_Heineken.args]
const itemsCheckboxListLoka = <UnorderedList {...UnorderedListStory.args} spacing="md"></UnorderedList>
const itemsCheckboxListHeineken = (
  <>
    {checkboxProducts.map((product: any) => (
      <CheckboxListItem checked={false} onChange={() => {}} {...product}></CheckboxListItem>
    ))}
  </>
)

const itemsWordFilters = (
  <>
    <Heading order={5}>Ursprung</Heading>
    <UnorderedList {...UnorderedListStory.args} spacing="md"></UnorderedList>
    <Heading order={5}>Karaktär</Heading>
    <UnorderedList {...UnorderedListStory.args} spacing="md"></UnorderedList>
  </>
)

export const InfoSummaryBoxStory_DinaUppgifter = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Dina uppgifter',
    linkLabel: 'Hantera/Ändra uppgifter',
    onClick: () => {
      console.log('On click "Hantera/ändra uppgifter"')
    },
    children: itemsListAdministrator,
  },
}

export const InfoSummaryBoxStory_Anvandare = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Användare',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsListBestallare,
  },
}

export const InfoSummaryBoxStory_Inkopslistor = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Listor',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsListInkopslistor,
  },
}

export const InfoSummaryBoxStory_Produkter = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Produkter',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsProdukter,
  },
}

export const InfoSummaryBoxStory_MinaOrdrar = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    children: itemsListMinaOrdrar,
  },
}

export const InfoSummaryBoxStory_PDF_Category_Beer = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Öl',
    children: itemsListCategoryBeer,
  },
}

export const InfoSummaryBoxStory_PDF_Category_Wine = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Vin',
    children: itemsListCategoryWine,
  },
}

export const InfoSummaryBoxStory_PurchaseListItem = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Vin',
    children: itemsListCategoryWine,
  },
}

export const InfoSummaryBoxStory_ShoppingList = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Produkter',
    linkLabel: 'Hantera',
    onClick: () => {},
    children: itemsShoppingList,
  },
}

export const InfoSummaryBoxStory_CheckboxList_Loka = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'VATTEN',
    children: itemsCheckboxListLoka,
  },
}

export const InfoSummaryBoxStory_CheckboxList_Heineken = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'ÖL',
    children: itemsCheckboxListHeineken,
  },
}

export const InfoSummaryBoxStory_WordFilters = {
  ...InfoSummaryBoxStoryTemplate,
  args: {
    label: 'Välj vilka fakta du vill visa i din dryckeslista',
    children: itemsWordFilters,
    withBackground: true,
  },
}
