import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList, IArticleList } from './article-list'
import { ContentWrapper } from '../../layouts';
import summerWineImage from '../../../../assets/blog-images/Content9.png';

const meta: Meta<typeof ArticleList> = {
  title: 'Design System/Organisms/ArticleList',
  component: ArticleList
};

const articlesData = [
  {
    image: {
      id: 'article-1-img',
      src: summerWineImage,
      sources: [
        { srcset: summerWineImage, media: `(max-width: 767px)` },
        { srcset: summerWineImage, media: `(min-width: 768px)` },
      ],
      alt: 'article-1-alt',
    },
    text: 'Article 1',
    tags: [{
      shape: 'rectangular',
      text: 'Tag 1',
      color: 'green',
      size: 'md',
    }],
    link: {
      children: 'Läs mer',
      href: '#',
      isExternal: true
    },
    heading: 'Article 1'
  }, {
    image: {
      id: 'article-2-img',
      src: summerWineImage,
      sources: [
        { srcset: summerWineImage, media: `(max-width: 767px)` },
        { srcset: summerWineImage, media: `(min-width: 768px)` },
      ],
      alt: 'article-2-alt',
    },
    text: 'Article 2 aadjklsaj laksdj lajfkdlsjf slkjdfklsjlkdjfklsjdfkljsdlkfjsdkljflksdjfkljs kldsjfkljds lkjfsdlkjf lksjdkfljsdklfjsldkjflksjdlk jdsklfjlskdj lskjdflkjsldkjflksjd',
    // tags: [{
    //   shape: 'rectangular',
    //   text: 'Tag 2',
    //   color: 'green',
    //   size: 'md',
    // }],
    link: {
      children: 'Läs mer',
      href: '#',
      isExternal: true
    },
    heading: 'Article 2',
    maxChar: 116,
  }, {
    image: {
      id: 'article-3-img',
      src: summerWineImage,
      sources: [
        { srcset: summerWineImage, media: `(max-width: 767px)` },
        { srcset: summerWineImage, media: `(min-width: 768px)` },
      ],
      alt: 'article-3-alt',
    },
    text: 'Article 3',
    tags: [{
      shape: 'rectangular',
      text: 'Tag 3',
      color: 'green',
      size: 'md',
    }],
    link: {
      children: 'Läs mer',
      href: '#',
      isExternal: true
    },
    heading: 'Article 3'
  }, {
    image: {
      id: 'article-4-img',
      src: summerWineImage,
      sources: [
        { srcset: summerWineImage, media: `(max-width: 767px)` },
        { srcset: summerWineImage, media: `(min-width: 768px)` },
      ],
      alt: 'article-4-alt',
    },
    text: 'Article 4',
    tags: [{
      shape: 'rectangular',
      text: 'Tag 4',
      color: 'green',
      size: 'md',
    }],
    link: {
      children: 'Läs mer',
      href: '#',
      isExternal: true
    },
    heading: 'Article 4'
  }, {
    image: {
      id: 'article-5-img',
      src: summerWineImage,
      sources: [
        { srcset: summerWineImage, media: `(max-width: 767px)` },
        { srcset: summerWineImage, media: `(min-width: 768px)` },
      ],
      alt: 'article-5-alt',
    },
    text: 'Article 5',
    tags: [{
      shape: 'rectangular',
      text: 'Tag 5',
      color: 'green',
      size: 'md',
    }],
    link: {
      children: 'Läs mer',
      href: '#',
      isExternal: true
    },
    heading: 'Article 5'
  },
];

export default meta;
type Story = StoryObj<typeof ArticleList>;

const ArticleListStoryTemplate: Story = {
  render: ( args ) => <ArticleList {...args} />
};

export const Default = {
  ...ArticleListStoryTemplate,
  args: {
    title: 'Default',
    articles: articlesData,
    swipe: false,
  } as Pick<IArticleList, 'articles'>
}

export const Three_Cards = {
  ...ArticleListStoryTemplate,
  args: {
    title: 'Three Cards',
    articles: articlesData.slice(0, 3)
  } as Pick<IArticleList, 'articles'>
}

export const Full_Width = {
  ...ArticleListStoryTemplate,
  args: {
    title: 'Full Width',
    articles: articlesData.slice(1, 2)
  } as Pick<IArticleList, 'articles'>
}
