const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bhb': {
          light: '#94ca60',
          DEFAULT: '#70aa39',
          dark: '#61933f',
        },
      },
      fontFamily: {
        bhb: ['Bodoni', 'serif'],
      },
    },
  },
};