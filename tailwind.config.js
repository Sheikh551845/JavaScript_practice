/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  // tailwind.config.js
module.exports = {
    theme: {
      extend: {
        textShadow: {
          sm: '1px 1px 2px rgba(0,0,0,0.5)',
          DEFAULT: '2px 2px 4px rgba(0,0,0,0.5)',
          lg: '3px 3px 6px rgba(0,0,0,0.7)',
        },
      },
    },
    plugins: [
      function ({ addUtilities, theme }) {
        const shadows = theme('textShadow')
        const newUtilities = Object.entries(shadows).map(([key, value]) => {
          return {
            [`.text-shadow${key === 'DEFAULT' ? '' : '-' + key}`]: {
              textShadow: value,
            },
          }
        })
        addUtilities(newUtilities)
      },
    ],
  }
  