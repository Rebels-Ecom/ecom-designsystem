import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InlineErrorText } from './inline-error-text'

export default {
  title: 'Design System/Atoms/Messages',
  component: InlineErrorText,
} as ComponentMeta<typeof InlineErrorText>

const Template: ComponentStory<typeof InlineErrorText> = () => {
  return (
    <>
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <InlineErrorText>Filmtitel är obligatorisk</InlineErrorText>
      </div>
    </>
  )
}

export const InlineErrorTextStory = Template.bind({})
InlineErrorTextStory.storyName = 'Inline Error Text'
