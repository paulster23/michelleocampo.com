/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['avano-contrast', 'sans-serif'],
        sans: ['avano-contrast', 'sans-serif'],
      },
      colors: {
        'cream': '#FAFAF8',
        'warm-white': '#F5F3F0',
        'warm-gray': '#5C5C5C',
        'charcoal': '#1C1C1C',
        'primary': '#2C3E50',
        'gold': '#C49A6C',
      },
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '0em' }],
        'body-lg':    ['1.125rem', { lineHeight: '1.6' }],
        'body':       ['1rem',     { lineHeight: '1.6' }],
        'label':      ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
    },
  },
  plugins: [],
};