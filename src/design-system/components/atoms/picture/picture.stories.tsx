import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Picture } from './picture'
import pictureMoscowMule from '../../../../assets/hero-images/Promo_Hero_L1.png'
import pictureBottles from '../../../../assets/hero-images/Promo_Hero_C3.png'
import pictureManBrewer from '../../../../assets/hero-images/Promo_Hero_L2.png'
import pictureWomanBrewer from '../../../../assets/hero-images/Promo_Hero_L4.png'

import americanBeerImage from '../../../../assets/blog-images/Content12.png'
import pangBeerImage from '../../../../assets/blog-images/Content1.png'
import summerWineImage from '../../../../assets/blog-images/Content9.png'
import georganWineImage from '../../../../assets/blog-images/Content8.png'
import supplierImage from '../../../../assets/blog-images/Content6.png'
import eHandelImage from '../../../../assets/blog-images/Content7.png'
import samarbeteImage from '../../../../assets/blog-images/Content11.png'
import brewingFeelingImage from '../../../../assets/blog-images/Content2.png'
import brewInPeaceImage from '../../../../assets/blog-images/Content13.png'
import darkLightBeerImage from '../../../../assets/blog-images/Content10.png'
import orangesImage from '../../../../assets/blog-images/Content3.png'
import beerEquipmentImage from '../../../../assets/blog-images/Content5.png'
import tapImage from '../../../../assets/blog-images/Content4.png'
import breweryImage from '../../../../assets/blog-images/Content14.png'

import teaserKockensVal from '../../../../assets/teaser-images/Teaser1.png'
import teaserGin from '../../../../assets/teaser-images/Teaser2.png'
import teaserBeer from '../../../../assets/teaser-images/Teaser3.png'
import pistonHead from '../../../../assets/hero-images/Pistonhead_Hero.svg'
import pistonHeadLogo from '../../../../assets/hero-images/pistonhead_logo.svg'
import pistonHeadBlog from '../../../../assets/blog-images/Pistonhead_BlogCard.svg'
import breadcrumbsBlackAndWhite from '../../../../assets/breadcrumbs-images/breadcrumbs_bw.png'
import mariestad from '../../../../assets/blog-images/mariestad.png'
import visby from '../../../../assets/blog-images/visby.png'
import pang from '../../../../assets/blog-images/pang.png'

import fallbackImage from '../../../../assets/fallback-images/defaultFallbackImage.svg'

/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture */

const meta: Meta<typeof Picture> = {
  title: 'Design System/Atoms/Picture',
  component: Picture
};

export default meta;
type Story = StoryObj<typeof Picture>;

const PictureStoryTemplate: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: '1rem' }}>
      <Picture {...args} />
    </div>
  )
};

export const PictureStory = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureOne',
    src: '', // 'https://picsum.photos/id/1018/1366/576',
    sources: [
      { srcset: 'https://picsum.photos/id/1011/700/1050', media: `(max-width: 767px)` },
      { srcset: '', media: `(min-width: 768px)` },
    ],
    fallbackImageUrl: fallbackImage,
    alt: 'Placholder',
    loading: 'lazy',
    decoding: 'auto',
    fetchPriority: 'low',
  }
}

export const PictureStoryBeer = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureBeer',
    src: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb',
    sources: [
      { srcset: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb', media: `(max-width: 767px)` },
      { srcset: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb', media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryMoscowMule = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureMoscowMule',
    src: pictureMoscowMule,
    sources: [
      { srcset: pictureMoscowMule, media: `(max-width: 767px)` },
      { srcset: pictureMoscowMule, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryBottles = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureBottles',
    src: pictureBottles,
    sources: [
      { srcset: pictureBottles, media: `(max-width: 767px)` },
      { srcset: pictureBottles, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
    }
}

export const PictureStoryManBrewer = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureManBrewer',
    src: pictureManBrewer,
    sources: [
      { srcset: pictureManBrewer, media: `(max-width: 767px)` },
      { srcset: pictureManBrewer, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryWomanBrewer = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureWomanBrewer',
    src: pictureWomanBrewer,
    sources: [
      { srcset: pictureWomanBrewer, media: `(max-width: 767px)` },
      { srcset: pictureWomanBrewer, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_AmericanBeer = {
  ...PictureStoryTemplate,
  args: {
    id: 'american_beer',
    src: americanBeerImage,
    sources: [
      { srcset: americanBeerImage, media: `(max-width: 767px)` },
      { srcset: americanBeerImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_Pang = {
  ...PictureStoryTemplate,
  args: {
    id: 'pang',
    src: pangBeerImage,
    sources: [
      { srcset: pangBeerImage, media: `(max-width: 767px)` },
      { srcset: pangBeerImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_SummerWine = {
  ...PictureStoryTemplate,
  args: {
    id: 'summer_wine',
    src: summerWineImage,
    sources: [
      { srcset: summerWineImage, media: `(max-width: 767px)` },
      { srcset: summerWineImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_GeorgianWine = {
  ...PictureStoryTemplate,
  args: {
    id: 'georgian_wine',
    src: georganWineImage,
    sources: [
      { srcset: georganWineImage, media: `(max-width: 767px)` },
      { srcset: georganWineImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_Suppliers = {
  ...PictureStoryTemplate,
  args: {
    id: 'suppliers',
    src: supplierImage,
    sources: [
      { srcset: supplierImage, media: `(max-width: 767px)` },
      { srcset: supplierImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_EHandel = {
  ...PictureStoryTemplate,
  args: {
    id: 'e_handel',
    src: eHandelImage,
    sources: [
      { srcset: eHandelImage, media: `(max-width: 767px)` },
      { srcset: eHandelImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_Cooperation = {
  ...PictureStoryTemplate,
  args: {
    id: 'cooperation',
    src: samarbeteImage,
    sources: [
      { srcset: samarbeteImage, media: `(max-width: 767px)` },
      { srcset: samarbeteImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_BrewingFeeling = {
  ...PictureStoryTemplate,
  args: {
    id: 'brewing_feeling',
    src: brewingFeelingImage,
    sources: [
      { srcset: brewingFeelingImage, media: `(max-width: 767px)` },
      { srcset: brewingFeelingImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_BrewInPeace = {
  ...PictureStoryTemplate,
  args: {
    id: 'brew_in_peace',
    src: brewInPeaceImage,
    sources: [
      { srcset: brewInPeaceImage, media: `(max-width: 767px)` },
      { srcset: brewInPeaceImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_DarkLightBeer = {
  ...PictureStoryTemplate,
  args: {
    id: 'dark_light-beer',
    src: darkLightBeerImage,
    sources: [
      { srcset: darkLightBeerImage, media: `(max-width: 767px)` },
      { srcset: darkLightBeerImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_Oranges = {
  ...PictureStoryTemplate,
  args: {
    id: 'oranges',
    src: orangesImage,
    sources: [
      { srcset: orangesImage, media: `(max-width: 767px)` },
      { srcset: orangesImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_Equipment = {
  ...PictureStoryTemplate,
  args: {
    id: 'beer_equipment',
    src: beerEquipmentImage,
    sources: [
      { srcset: beerEquipmentImage, media: `(max-width: 767px)` },
      { srcset: beerEquipmentImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_BeerTap = {
  ...PictureStoryTemplate,
  args: {
    id: 'beer_tap',
    src: tapImage,
    sources: [
      { srcset: tapImage, media: `(max-width: 767px)` },
      { srcset: tapImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_Brewery = {
  ...PictureStoryTemplate,
  args: {
    id: 'brewery',
    src: breweryImage,
    sources: [
      { srcset: breweryImage, media: `(max-width: 767px)` },
      { srcset: breweryImage, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_Teaser_KockensVal = {
  ...PictureStoryTemplate,
  args: {
    id: 'teaser_kockens_val',
    src: teaserKockensVal,
    sources: [
      { srcset: teaserKockensVal, media: `(max-width: 767px)` },
      { srcset: teaserKockensVal, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_Teaser_Gin  = {
  ...PictureStoryTemplate,
  args: {
    id: 'teaser_gin',
    src: teaserGin,
    sources: [
      { srcset: teaserGin, media: `(max-width: 767px)` },
      { srcset: teaserGin, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_Teaser_Beer  = {
  ...PictureStoryTemplate,
  args: {
    id: 'teaser_beer',
    src: teaserBeer,
    sources: [
      { srcset: teaserBeer, media: `(max-width: 767px)` },
      { srcset: teaserBeer, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryField = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureField',
    src: 'https://picsum.photos/id/98/1366/576',
    sources: [
      { srcset: 'https://picsum.photos/id/98/700/1050', media: `(max-width: 767px)` },
      { srcset: 'https://picsum.photos/id/98/1366/576', media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryPistonHead = {
  ...PictureStoryTemplate,
  args: {
    id: 'picturePistonhead',
    src: pistonHead,
    sources: [
      { srcset: pistonHead, media: `(max-width: 767px)` },
      { srcset: pistonHead, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryPistonHeadLogo = {
  ...PictureStoryTemplate,
  args: {
    id: 'picturePistonheadLogo',
    src: pistonHeadLogo,
    sources: [
      { srcset: pistonHeadLogo, media: `(max-width: 767px)` },
      { srcset: pistonHeadLogo, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryPistonHead_Blog = {
  ...PictureStoryTemplate,
  args: {
    id: 'picturePistonheadBlog',
    src: pistonHeadBlog,
    sources: [
      { srcset: pistonHeadBlog, media: `(max-width: 767px)` },
      { srcset: pistonHeadBlog, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStory_BreadcrumbsContentPage = {
  ...PictureStoryTemplate,
  args: {
    id: 'breadcrumbsBlackAndWhite',
    src: breadcrumbsBlackAndWhite,
    sources: [
      { srcset: breadcrumbsBlackAndWhite, media: `(max-width: 767px)` },
      { srcset: breadcrumbsBlackAndWhite, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryMariestad_Blog = {
  ...PictureStoryTemplate,
  args: {
    id: 'picturePistonheadBlog',
    src: mariestad,
    sources: [
      { srcset: mariestad, media: `(max-width: 767px)` },
      { srcset: mariestad, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryVisby_Blog = {
  ...PictureStoryTemplate,
  args: {
    id: 'picturePistonheadBlog',
    src: visby,
    sources: [
      { srcset: visby, media: `(max-width: 767px)` },
      { srcset: visby, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryPang_Blog = {
  ...PictureStoryTemplate,
  args: {
    id: 'picturePistonheadBlog',
    src: pang,
    sources: [
      { srcset: pang, media: `(max-width: 767px)` },
      { srcset: pang, media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}







