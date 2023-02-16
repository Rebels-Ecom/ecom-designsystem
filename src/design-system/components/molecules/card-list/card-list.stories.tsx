import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardList } from './card-list'
import { CardSquareStory } from '../card-square/card-square.stories'

export default {
  title: 'Design System/Molecules/Cards',
  component: CardList,
} as ComponentMeta<typeof CardList>

const Template: ComponentStory<typeof CardList> = (args) => {
  const maxWidth = args.format === '1:1' || !args.format ? 606 : 388
  return (
    <>
      <div style={{ width: '100%', marginTop: '2rem', maxWidth: maxWidth }}>
        <CardList {...args} />
      </div>
    </>
  )
}

export const CardListStory = Template.bind({})

CardListStory.args = {
  surface: 'decorativeOne',
  preamble: 'Låt varumärken ta plats',
  link: {
    ...CardSquareStory.args.link,
  },
  format: '1:1',
  list: ['Konferens', 'Möte', 'Föreläsning', 'Produktlansering', 'Inspirationsdag', 'm.m.'],
}

CardListStory.storyName = 'Card List'
