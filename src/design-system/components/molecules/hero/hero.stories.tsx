import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Hero } from './hero'
import { PictureStory, PictureStoryBoat, PictureStoryCookies, PictureStoryKitchen } from '../../atoms/picture/picture.stories'

export default {
  title: 'Design System/Molecules/Heros',
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => {
  return (
    <>
      <div style={{ margin: '0 0 0 0' }}>
        <Hero {...args} />
      </div>
    </>
  )
}

export const HeroStory = Template.bind({})
HeroStory.storyName = 'Hero'
HeroStory.args = {
  image: PictureStory.args,
  topHeading: 'Nytt i höst',
  heading: 'Nya produkter',
  preamble: 'Mer text här...',
  alignContent: 'left',
  link: {
    text: 'Ny knapp text',
    href: '#sometext',
    linkComponent: 'a',
    title: 'Ny knapp text',
  },
}

export const HeroStoryLeft = Template.bind({})
HeroStoryLeft.storyName = 'Hero Left'
HeroStoryLeft.args = {
  image: PictureStoryCookies.args,
  topHeading: 'Kanske sommarens populäraste....',
  heading: 'Vår smidiga spritzer på fat finns nu i ny smak',
  preamble: 'Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.',
  alignContent: 'left',
  heroTheme: 'dark',
  link: {
    text: 'Beställ idag',
    href: '#bestalla',
    linkComponent: 'a',
    title: 'Beställ idag',
  },
}

export const HeroStoryRight = Template.bind({})
HeroStoryRight.storyName = 'Hero Right'
HeroStoryRight.args = {
  image: PictureStoryBoat.args,
  topHeading: 'Kanske sommarens populäraste....',
  heading: 'Wisby är tillbaka, nu bättre en någonsin',
  preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
  alignContent: 'right',
  heroTheme: 'light',
  link: {
    text: 'Beställ idag',
    href: '#bestalla',
    linkComponent: 'a',
    title: 'Beställ idag',
  },
}

export const HeroStoryCenter = Template.bind({})
HeroStoryCenter.storyName = 'Hero Center'
HeroStoryCenter.args = {
  image: PictureStoryKitchen.args,
  topHeading: 'Kanske sommarens populäraste....',
  heading: 'Wisby är tillbaka, nu bättre en någonsin',
  preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
  alignContent: 'center',
  heroTheme: 'dark',
  link: {
    text: 'Beställ idag',
    href: '#bestalla',
    linkComponent: 'a',
    title: 'Beställ idag',
  },
}



