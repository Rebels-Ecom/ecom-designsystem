import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InlineHelperText } from './inline-helper-text'

export default {
  title: 'Design System/Atoms/Messages',
  component: InlineHelperText,
} as ComponentMeta<typeof InlineHelperText>

const Template: ComponentStory<typeof InlineHelperText> = () => {
  return (
    <>
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <InlineHelperText>Vi använder denna e-postadress om vi behöver kontakta dig</InlineHelperText>
      </div>
    </>
  )
}

export const InlineHelperTextStory = Template.bind({})
InlineHelperTextStory.storyName = 'Inline Helper Text'
