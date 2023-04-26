import React from 'react'
import { DecoratorFn } from '@storybook/react'
import './preview.css'
import '../src/design-system/styles/themes/spendrups.css'
import '../src/design-system/styles/layout/spendrups.css'
import '../src/design-system/styles/typography/spendrups.css'
import '../src/design-system/styles/icons/style.css'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import { theme } from './theme'

const customViewports = {
  iphoneSE: {
    name: 'Iphone SE',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iphone11: {
    name: 'Iphone 11',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  Ipad: {
    name: 'Ipad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  DesktopLarge: {
    name: 'Desktop L',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
}

export const parameters = {
  viewport: { viewports: customViewports },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
        color: '#fff',
      },
      {
        name: 'dark',
        value: '#000',
        color: '#000',
      },
    ],
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      dynamicTitle: true,
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
    },
  },
}

// export const theme: DecoratorFn = (StoryFn, context) => {
//   const theme = context.parameters.theme || context.globals.theme
//   const padding = context.parameters?.padding ?? true

//   return theme === 'side-by-side' ? (
//     <div className="wrapper">
//       <div className="preview light">
//         <div className={padding ? 'padding' : ''}>
//           <StoryFn />
//         </div>
//       </div>
//       <div className="preview dark">
//         <div className={padding ? 'padding' : ''}>
//           <StoryFn />
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className="wrapper">
//       <div className={`preview ${theme}`}>
//         <div className={padding ? 'padding' : ''}>
//           <StoryFn />
//         </div>
//       </div>
//     </div>
//   )
// }

// export const decorators = [theme]

function ThemeWrapper(props: { children: React.ReactNode }) {

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <Notifications position="top-right" zIndex={2077}/>
        <div className="wrapper">
          <div className="preview light">
            {props.children}
          </div>
        </div>
    </MantineProvider>
  );
}

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
