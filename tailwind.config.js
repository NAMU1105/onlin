const _ = require('lodash');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        theme1: '#AF8198',
        bgTheme1: '#937F89',
        themetext1: '#af8198',
        themetext2: '#af8f81',
        themetext3: '#32482b',

        themepragraph1: '#53434b',
        themepragraph2: '#53434b',
        themepragraph3: '#252c26',

        themebtn1: '#937f89',
        themebtn2: '#6a6158',
        themebtn3: '#445b45',

        themebg1: '#937f89',
        themebg2: '#faf8f9',
        themebg3: '#f8f8f8',

        themebglight1: '#e9e5e7',
        themebglight2: '#e9e7e5',
        themebglight3: '#e9ede7',
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
