import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const HtmlContainer = () => {
  return (
    <>
      <h1 className={'headingXL'} style={{ margin: '0' }}> Heading XL / h1</h1>

      <h2 className={'h2'}>Heading L / h2</h2>

      <h3 className={'h3'}>Heading M / h3</h3>

      <h4 className={'h4'}>Heading S / h4</h4>

      <h5 className={'h5'}>Heading XS / h5</h5>

      <p className={'body fontBold p'}>Body bold</p>
      <p className={'body p'}>Body</p>
      <p className={'bodyS fontBold p'}>Body S bold</p>
      <p className={'bodyS p'}>Body S</p>
      <div>
        <a className={'body'} href="#">
          Link default
        </a>
      </div>
    </>
  )
}

export default {
  title: 'Design System/Styles/Typography',
  component: HtmlContainer,
  decorators: [
    (Story, Context) => {
      return (
        <div className={Context.globals.theme}>
          <Story />
        </div>
      )
    },
  ],
} as ComponentMeta<typeof HtmlContainer>

const Typography: ComponentStory<typeof HtmlContainer> = () => <HtmlContainer />

export { Typography }
