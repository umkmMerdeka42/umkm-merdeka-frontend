/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#6c71b4',
        secondary: '#0d9488',
        tertiary: '#F43F5E',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tw-elements/dist/plugin'),
  ],
};
