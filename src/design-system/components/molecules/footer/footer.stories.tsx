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
  heading: 'Footer will be placed here',
  preamble: 'More info here',
  links: [
    {
      href: '/#page1',
      text: 'Link to page 1',
      isExternal: true,
    },
    {
      href: '/#page2',
      text: 'Link to page 2',
      isExternal: true,
    },
    {
      href: '/#page3',
      text: 'Link to page 3',
      isExternal: true,
    },
    {
      href: '/#page4',
      text: 'Link to page 4',
      isExternal: true,
    },
  ],
  linkComponent: 'a',
}

FooterStory.storyName = 'Footer'

FooterStory.parameters = { padding: false }
