import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardSquare } from './card-square'
import { PictureStory } from '../../atoms/picture/picture.stories'

export default {
  title: 'Design System/Molecules/Cards',
  component: CardSquare,
} as ComponentMeta<typeof CardSquare>

const Template: ComponentStory<typeof CardSquare> = (args) => {
  const maxWidth = 606
  return (
    <>
      <div style={{ width: '100%', marginTop: '2rem', maxWidth: maxWidth }}>
        <CardSquare {...args} />
      </div>
    </>
  )
}

export const CardSquareStory = Template.bind({})

CardSquareStory.args = {
  image: PictureStory.args,
  surface: 'decorativeOne',
  preamble: 'Låt varumärken ta plats',
  heading: 'Webben, foajén, bioduken. Följ publiken genom hela bioupplevelsen',
  description: 'lorem ipsum',
  link: {
    text: 'Våra Reklamplatser',
    href: '/kontakt',
    linkComponent: 'a',
    title: 'Till kontaktssidan',
  },
}

CardSquareStory.storyName = 'Card Square'
