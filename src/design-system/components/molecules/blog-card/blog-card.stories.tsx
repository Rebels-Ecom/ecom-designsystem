import React from 'react'
import { BlogCard } from './blog-card'
import type { Meta, StoryObj } from '@storybook/react'
import { PictureStory } from '../../atoms/picture/picture.stories'
import { UILinkBlogStory } from '../../atoms/ui-link/ui-link.stories'
import { TagStoryRectangular_S } from '../../atoms/tag/tag.stories'

const meta: Meta<typeof BlogCard> = {
    title: 'Design System/Molecules/Blog',
    component: BlogCard
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

const BlogCardStoryTemplate: Story = {
  render: ({ ...args }) => (<BlogCard {...args} />)
};

export const BlogCardStory = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory.args,
        tag: TagStoryRectangular_S.args,
        heading: 'Blog Card Heading',
        text: '<p>Tillsammans med Sveriges främsta vin & ölexperter ger vi dig möjligheten att ta din och dina anställdas kunskaper till nya höjder.</p>',
        link: UILinkBlogStory.args
    }
}

export const BlogCardStoryShortText = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory.args,
        heading: 'Blog Card Heading',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        link: UILinkBlogStory.args
    }
}

export const BlogCardStoryLongText = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory.args,
        heading: 'Blog Card Heading',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
        link: UILinkBlogStory.args
    }
}

export const BlogCardStoryFullWidth = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory.args,
        heading: 'Vi testar oss fram för den bästa smakupplevelsen',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        link: UILinkBlogStory.args,
        fullWidth: true
    }
}
