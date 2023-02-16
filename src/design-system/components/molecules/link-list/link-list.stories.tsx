import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LinkList } from './link-list'

export default {
  title: 'Design System/Molecules/Link List',
  component: LinkList,
  argTypes: {
    direction: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof LinkList>

const Template: ComponentStory<typeof LinkList> = (args) => {
  return (
    <>
      <div style={{ width: '100%' }}>
        <LinkList {...args} />
      </div>
    </>
  )
}

const listCities = [
  'Gävle',
  'Göteborg',
  'Helsingborg',
  'Jönköping',
  'Karlstad',
  'Linköping',
  'Luleå',
  'Lund',
  'Malmö',
  'Norrköping',
  'Stockholm',
  'Umeå',
  'Uppsala',
  'Västerås',
  'Växjö',
]

export const LinkListStory = Template.bind({})

LinkListStory.args = {
  direction: 'vertical',
  links: listCities.map((city) => {
    return {
      href: `/#${city}`,
      text: city,
      isExternal: true,
    }
  }),
  linkComponent: 'a',
}

LinkListStory.storyName = 'Link List Many'

export const LinkListFiveItemsStory = Template.bind({})

LinkListFiveItemsStory.args = {
  ...LinkListStory.args,
  links: LinkListStory.args.links.slice(0, 5),
}

LinkListFiveItemsStory.storyName = 'Link List 5 Items'

export const LinkListTwoItemsStory = Template.bind({})
LinkListTwoItemsStory.args = {
  ...LinkListStory.args,
  links: LinkListStory.args.links.slice(0, 2),
}

LinkListTwoItemsStory.storyName = 'Link List 2 Items'
