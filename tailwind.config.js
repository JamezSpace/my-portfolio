/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
        colors: {
            'black': '#141219',
            'black-secondary': '#0f0e19',
            'purple': '#8a78cb',
            'purple-secondary': '#c3b6da',
            'blue': '#3450b3'
        },
        screens: {
            'non-desktop-screen': {
                max: '900px'
            },
            'non-tablet-screen': {
                max: '520px'
            },
            'tablet-large-screen': {
                max: '900px',
                min: '680px'
            },
            'tablet-small-screen': {
                max: '679px',
                min: '520px'
            },
            // 'phone-large-screen': {
            //     min: '',
            //     max: ''
            // },
            // 'phone-small-screen': {
            //     min: '',
            //     max: ''
            // }
        }
    },
  },
  plugins: [],
}

