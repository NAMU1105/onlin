const _ = require('lodash');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme1: '#AF8198',
        bgTheme1: '#937F89',
      },

      fontSize: {
        big: '26px',
      },

      colors: {
        backdrop: 'rgba(0, 0, 0, 0.9)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
