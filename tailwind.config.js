// tailwind.config.js
module.exports = {
  content: [
    './**/*.html',
    './**/*.js',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      primary: {
        DEFAULT: '#194F97',  // Primary color
        light: '#194F97'
      },
      fontFamily: {
        gellix: ['Gellix', 'Inter'],
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin'),
  ],
}
