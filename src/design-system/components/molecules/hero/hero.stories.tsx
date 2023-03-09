import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './hero'
import { PictureStory, PictureStoryBoat, PictureStoryCookies, PictureStoryKitchen } from '../../atoms/picture/picture.stories'

const meta: Meta<typeof Hero> = {
  title: 'Design System/Molecules/Heros',
  component: Hero
};

export default meta;
type Story = StoryObj<typeof Hero>;

const HeroStoryTemplate: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: '0 0 0 0' }}>
      <Hero {...args} />
    </div>)
};

export const HeroStory = {
  ...HeroStoryTemplate,
  args: {
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
    }
  }
}

export const HeroStoryLeft = {
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryCookies.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Vår smidiga spritzer på fat finns nu i ny smak',
    preamble: 'Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.',
    alignContent: 'left',
    heroTheme: 'dark',
    link: {
      size: 'large',
      surface: 'primary',
      children: 'Beställ idag',
      href: '#bestalla',
      isExternal: true,
      target: null,
      title: 'Beställ idag',
    }
  }
}

export const HeroStoryRight = {
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryBoat.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
    alignContent: 'right',
    heroTheme: 'light',
    link: {
      size: 'large',
      surface: 'primary',
      children: 'Beställ idag',
      href: '#bestalla',
      isExternal: true,
      target: null,
      title: 'Beställ idag',
    }
  }
}

export const HeroStoryCenter = {
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryKitchen.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
    alignContent: 'center',
    heroTheme: 'dark',
    link: {
      size: 'large',
      surface: 'primary',
      children: 'Beställ idag',
      href: '#bestalla',
      isExternal: true,
      target: null,
      title: 'Beställ idag',
    }
  }
}



