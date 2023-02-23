/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/design-system/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    spacing: {
      0: '0rem',
      2: '.125rem',
      4: '.25rem',
      6: '.375rem',
      8: '.5rem',
      12: '.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      64: '4rem',
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
    },
    borderWidth: {
      DEFAULT: '.0625rem',
      0: '0',
      2: '.125rem',
      3: '.1875rem',
      4: '.25rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-family)', ...defaultTheme.fontFamily.sans],
      },
      textColor: {
        DEFAULT: 'var(--text-default)',
        weak: 'var(--text-weak)',
        weaker: 'var(--text-weaker)',
        inverse: 'var(--text-inverse)',
        disabled: 'var(--text-disabled)',
        button: {
          primary: {
            DEFAULT: 'var(--text-button-primary)',
            active: 'var(--text-button-primary-active)',
          },
        },
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
  ],
}
