import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Footer } from './footer'

export default {
  title: 'Design System/Molecules/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => {
  return (
    <>
      <div>
        <Footer {...args} />
      </div>
    </>
  )
}

export const FooterStory = Template.bind({})

FooterStory.args = {
  heading: 'Filmstaden Möten & Event',
  preamble: 'Möten för alla tillfällen',
  links: [
    {
      href: '/#moten_och_konferens',
      text: 'Möte & konferens',
      isExternal: true,
    },
    {
      href: '/#filmevent',
      text: 'Filmevent',
      isExternal: true,
    },
    {
      href: '/#lokaler',
      text: 'Lokaler',
      isExternal: true,
    },
    {
      href: '/#kontakt',
      text: 'Kontakt',
      isExternal: true,
    },
  ],
  linkComponent: 'a',
}

FooterStory.storyName = 'Footer'

FooterStory.parameters = { padding: false }
