import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './hero'
import { PictureStory, PictureStoryMoscowMule, PictureStoryBottles, PictureStoryManBrewer, PictureStoryWomanBrewer, PictureStoryPistonHead, PictureStoryPistonHeadLogo } from '../../atoms/picture/picture.stories'
import { VideoStory } from '../../atoms/video/video.stories';

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
      size: 'large',
      surface: 'primary',
      children: 'Ny knapp text',
      href: '#sometext',
      isExternal: true,
      target: null,
      title: 'Ny knapp text',
    }
  }
}

export const HeroStoryCenter = {
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryBottles.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Vår smidiga spritzer på fat finns nu i ny smak',
    preamble: 'Dominerande smak av kryddig ingefära balanseras upp av frisk och syrlig smak från limejuice. Lång eftersmak från den kryddiga ingefäran.',
    alignContent: 'center',
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

export const HeroStoryLeft1 = {
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryMoscowMule.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
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

export const HeroStoryLeft2 = {
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryManBrewer.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
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
    image: PictureStoryWomanBrewer.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Wisby är tillbaka, nu bättre en någonsin',
    preamble: 'Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär',
    alignContent: 'right',
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

export const HeroStoryPistonhead = {
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryPistonHead.args,
    contentImage: PictureStoryPistonHeadLogo.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Pistonhead lager',
    preamble: 'Sedan starten för över 100 år sedan har vi vuxit till Sveriges ledande bryggeri Vi står i dag för en tredjedel av den svenska ölmarknaden',
    alignContent: 'center',
    heroTheme: 'dark',
  }
}

export const HeroStoryVideo = {
  ...HeroStoryTemplate,
  args: {
    image: PictureStoryPistonHead.args,
    video: VideoStory.args,
    isVideo: true,
    contentImage: PictureStoryPistonHeadLogo.args,
    topHeading: 'Kanske sommarens populäraste....',
    heading: 'Pistonhead lager',
    preamble: 'Sedan starten för över 100 år sedan har vi vuxit till Sveriges ledande bryggeri Vi står i dag för en tredjedel av den svenska ölmarknaden',
    alignContent: 'center',
    heroTheme: 'light',
  }
}



