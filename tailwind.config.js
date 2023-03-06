/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './src/design-system/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    spacing: {
      0: '0rem',
      2: '.125rem',
      4: '.25rem',
      6: '.375rem',
      8: '.5rem',
      10: '.625rem',
      12: '.75rem',
      14: '.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      76: '4.75rem',
      96: '6rem',
      full: '100%',
    },
    screens: {
      sm: '600px',
      md: '768px',
      lg: '905px',
      xl: '1024px',
      '2xl': '1440px',
    },
    fontSize: {
      xs: ['.875rem', { lineHeight: '1rem', letterSpacing: 1.005 }],
      sm: ['1rem', { lineHeight: '1.5rem' }],
      base: ['1.125rem', { lineHeight: '1.5rem' }],
      md: ['1.3125rem', { lineHeight: '2rem' }],
      lg: ['1.625rem', { lineHeight: '2rem', letterSpacing: -0.005 }],
      xl: ['2rem', { lineHeight: '2.75rem', letterSpacing: -0.01 }],
      '2xl': ['2.5rem', { lineHeight: '3.5rem', letterSpacing: -0.015 }],
      '3xl': ['3.75rem', { lineHeight: '4.5rem', letterSpacing: -0.02 }],
      'cta-sm': ['var( --cta-s-font-size)', {lineHeight: 'var(--cta-s-line-height)', letterSpacing:'var(--cta-s-letter-spacing)' }],
      'cta-lg': ['var( --cta-l-font-size)', {lineHeight: 'var(--cta-l-line-height)', letterSpacing:'var(--cta-l-letter-spacing)'}],
      'tag-rectangular-sm': ['var( --tag-rectangular-mobile-font-size)', {lineHeight: 'var(--tag-rectangular-mobile-line-height)'}],
      'tag-rectangular-lg': ['var( --tag-rectangular-desktop-font-size)', {lineHeight: 'var(--tag-rectangular-desktop-line-height)'}],
      'tag-round-sm': ['var( --tag-round-mobile-font-size)', {lineHeight: 'var(--tag-round-mobile-line-height)'}],
      'tag-round-lg': ['var( --tag-round-desktop-font-size)', {lineHeight: 'var(--tag-round-desktop-line-height)'}],
    },
    borderWidth: {
      DEFAULT: '.0625rem',
      0: '0',
      1: '0.063rem',
      2: '.125rem',
      3: '.1875rem',
      4: '.25rem',
    },
    extend: {
      fontFamily: {
        primary: ['spendrups_primary', ...defaultTheme.fontFamily.sans, 'Arial'],
        secondary: ['spendrups_secondary', ...defaultTheme.fontFamily.sans, 'Arial'],
        secondaryBold: ['spendrups_secondary_bold', ...defaultTheme.fontFamily.sans, 'Arial']
      },
      textColor: {
        DEFAULT: 'var(--text-default)',
        weak: 'var(--text-weak)',
        weaker: 'var(--text-weaker)',
        inverse: 'var(--text-inverse)',
        disabled: 'var(--text-disabled)',
        greyDecorative: 'var(--color-text-decorative-grey)',
        purpleDecorative: 'var(--color-text-decorative-purple)',
        cta: {
          primary: {
            DEFAULT: 'var(--color-on-primary)',
            disabled: 'var(--color-on-primary-disabled)',
          },
          secondary: {
            DEFAULT: 'var(--color-on-secondary)',
            hover: 'var(--color-on-secondary-hover)',
            disabled: 'var(--color-on-secondary-disabled)',
          },
          tertiary: {
            DEFAULT: 'var(--color-on-tertiary)',
            disabled: 'var(--color-on-tertiary-disabled)',
          }
        },
        tag: {
          blue: 'var(--tag-blue)',
          white: 'var(--tag-white)',
        }
      },
      placeholderColor: {
        DEFAULT: 'var(--text-default)',
        weak: 'var(--text-weak)',
        weaker: 'var(--text-weaker)',
        inverse: 'var(--text-inverse)',
        disabled: 'var(--text-disabled)',
      },
      borderColor: {
        DEFAULT: 'var(--border-default)',
        border: 'var(--border-default)',
        focus: 'var(--border-focus)',
        strong: 'var(--border-strong)',
        weak: 'var(--border-weak)',
        disabled: 'var(--border-disabled)',
        error: 'var(--border-error)',
        selected: 'var(--border-selected)',
        input: {
          DEFAULT: 'var(--border-input)',
          hover: 'var(--border-input-hover)',
          active: 'var(--border-input-active)',
        },
        cta: {
          primary: {
            DEFAULT: 'var(--border-on-primary)',
          },
          secondary: {
            DEFAULT: 'var(--border-on-secondary)',
            hover: 'var(--border-on-secondary-hover)',
            disabled: 'var(--border-on-secondary-disabled)',
          }
        }
      },
      backgroundColor: {
        DEFAULT: 'var(--background-default)',
        weak: 'var(--background-weak)',
        selected: {
          DEFAULT: 'var(--background-selected)',
          hover: 'var(--background-selected-hover)',
        },
        disabled: 'var(--background-disabled)',
        error: {
          DEFAULT: 'var(--background-error)',
          hover: 'var(--background-error-hover)',
        },
        input: {
          DEFAULT: 'var(--background-input)',
          hover: 'var(--background-input-hover)',
        },
        cta: {
          primary: {
            DEFAULT: 'var(--cta-primary-default)',
            hover: 'var(--cta-primary-hover)',
            disabled: 'var(--cta-primary-disabled)',
          },
          secondary: {
            DEFAULT: 'var(--cta-secondary-default)',
          },
          tertiary: {
            DEFAULT: 'var(--cta-tertiary-default)',
            hover: 'var(--cta-tertiary-hover)',
            disabled: 'var(--cta-tertiary-disabled)',
          }
        },
        tag: {
          green: 'var(--tag-green)',
          mint: 'var(--tag-mint)',
          blue: 'var(--tag-blue)',
          orange: 'var(--tag-orange)',
        }
      },
      ringColor: {
        DEFAULT: 'var(--focus-ring)',
        active: 'var(--border-input-active)',
      },
      ringOffsetColor: {
        DEFAULT: 'var(--offset-color)',
      },
    },
    colors: {
      error: 'var(--error)',
      icon: {
        DEFAULT: 'var(--icon-default)',
        inverse: 'var(--icon-inverse)',
        disabled: 'var(--icon-disabled)',
      },
      brand: {
        DEFAULT: 'var(--brand-default)',
        strong: 'var(--brand-strong)',
        stronger: 'var(--brand-stronger)',
        weaker: 'var(--brand-weaker)',
        weakest: 'var(--brand-weakest)',
      },
      cta: {
        primary: {
          focus:'var(--cta-primary-focused-shadow)',
        },
      },
      ring: 'var(--focus-ring)',
      transparent: 'transparent',
    },
  },
  plugins: [
    plugin(({ addVariant, addUtilities }) => {
      addVariant('focus-visible-within', '&:has(:focus-visible)')
      addVariant('disabled-within', '&:has(:disabled)')
      addVariant('children', '&>*')
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
      })
    }),
    require('flowbite/plugin')
  ],
}