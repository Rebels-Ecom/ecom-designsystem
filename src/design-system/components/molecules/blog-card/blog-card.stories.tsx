import React from 'react'
import { BlogCard } from './blog-card'
import type { Meta, StoryObj } from '@storybook/react'
import { PictureStory, PictureStoryPistonHead_Blog, PictureStory_AmericanBeer, PictureStory_BeerTap, PictureStory_Brewery, PictureStory_BrewingFeeling, PictureStory_BrewInPeace, PictureStory_Cooperation, PictureStory_DarkLightBeer, PictureStory_EHandel, PictureStory_Equipment, PictureStory_GeorgianWine, PictureStory_Oranges, PictureStory_Pang, PictureStory_SummerWine, PictureStory_Suppliers, PictureStoryMariestad_Blog, PictureStoryVisby_Blog, PictureStoryPang_Blog} from '../../atoms/picture/picture.stories'
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

export const BlogCardStory_AmericanBeer = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_AmericanBeer.args,
        heading: 'Blog Card Heading',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_Pang = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_Pang.args,
        heading: 'Blog Card Heading',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_SummerWine = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_SummerWine.args,
        heading: 'Blog Card Heading',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_GeorgianWine = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_GeorgianWine.args,
        heading: 'Blog Card Heading',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_Suppliers = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_Suppliers.args,
        heading: 'Blog Card Heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',        
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_EHandel = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_EHandel.args,
        heading: 'Blog Card Heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',        
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_Cooperation = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_Cooperation.args,
        heading: 'Blog Card Heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',        
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_BrewingFeeling = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_BrewingFeeling.args,
        heading: 'Blog Card Heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',        
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_BrewInPeace = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_BrewInPeace.args,
        heading: 'Blog Card Heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',        
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_DarkLightBeer = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_DarkLightBeer.args,
        heading: 'Blog Card Heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',        
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_Oranges = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_Oranges.args,
        heading: 'Blog Card Heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',        
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_BeerEquipment = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_Equipment.args,
        heading: 'Blog Card Heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',        
        link: UILinkBlogStory.args
    }
}

export const BlogCardStory_BeerTap = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_BeerTap.args,
        heading: 'Blog Card Heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',        
        link: UILinkBlogStory.args
    }
}

export const BlogCardStoryFullWidth = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStory_Brewery.args,
        heading: 'Vi testar oss fram för den bästa smakupplevelsen',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        link: UILinkBlogStory.args,
        fullWidth: true
    }
}

export const BlogCardStoryPistonhead = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStoryPistonHead_Blog.args,
        heading: 'NO NONSENSE BEER!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        fullWidth: true
    }
}

export const BlogCardStoryMariestad = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStoryMariestad_Blog.args,
        heading: 'Mariestad',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
        link: UILinkBlogStory.args,
    }
}

export const BlogCardStoryWisby = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStoryVisby_Blog.args,
        heading: 'Wisby',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
        link: UILinkBlogStory.args,
    }
}

export const BlogCardStoryPang = {
    ...BlogCardStoryTemplate,
    args: {
        image: PictureStoryPang_Blog.args,
        heading: 'PANG PANG!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
        link: UILinkBlogStory.args,
    }
}
