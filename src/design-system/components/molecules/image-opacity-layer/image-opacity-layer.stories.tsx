import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ImageOpacityLayer } from './image-opacity-layer'
import { PictureStory } from '../../atoms/picture/picture.stories'

export default {
  title: 'Design System/Molecules/ImageOpacityLayer',
  component: ImageOpacityLayer,
} as ComponentMeta<typeof ImageOpacityLayer>

const Template: ComponentStory<typeof ImageOpacityLayer> = (args) => {
  return (
    <>
      <div style={{ margin: '0 0 0 0' }}>
        <ImageOpacityLayer {...args} />
      </div>
    </>
  )
}

export const ImageOpacityLayerStory = Template.bind({})

ImageOpacityLayerStory.args = {
  image: PictureStory.args,
  contain: false,
}

ImageOpacityLayerStory.storyName = 'ImageOpacityLayer'

ImageOpacityLayerStory.parameters = { padding: false }
