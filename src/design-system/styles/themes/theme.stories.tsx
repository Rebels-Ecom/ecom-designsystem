import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ColorBox from './color-box/color-box'
import { darkTheme, lightTheme } from './theme'

export default {
  title: 'Design System/Styles/Theme',
  component: ColorBox,
  decorators: [
    (Story, Context) => {
      return (
        <div className={Context.globals.theme}>
          <Story />
        </div>
      )
    },
  ],
} as ComponentMeta<typeof ColorBox>

const Template: ComponentStory<typeof ColorBox> = (_, context) => {
  const containerStyle = { display: 'flex', flexFlow: 'wrap' }
  return (
    <>
      <h3>{context.globals.theme} theme</h3>
      {context.globals.theme === 'light' ? (
        <div style={containerStyle}>
          {Object.entries(lightTheme).map((entries) => (
            <ColorBox bg={entries[1]} key={entries[0]}>
              <div style={{ fontSize: '0.9375rem' }}>{entries[0]}</div>
              <div>{entries[1]}</div>
            </ColorBox>
          ))}
        </div>
      ) : (
        <div style={containerStyle}>
          {Object.entries(darkTheme).map((entries) => (
            <ColorBox bg={entries[1]} key={entries[0]}>
              <div style={{ fontSize: '0.9375rem' }}>{entries[0]}</div>
              <div>{entries[1]}</div>
            </ColorBox>
          ))}
        </div>
      )}
    </>
  )
}

export const ColorStory = Template.bind({})
ColorStory.storyName = 'Theme'
