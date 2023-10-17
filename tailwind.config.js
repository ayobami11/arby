/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        'main-gradient': `linear-gradient(98deg, ${theme('colors.blue')} -32.92%, ${theme('colors.green')} 120.37%)`
      }),
      colors: {
        'blue': 'rgb(21, 121, 208)',
        'dark-blue': 'rgb(0, 54, 110)',
        'green': 'rgb(85, 215, 62)',
        'white': 'rgb(255, 255, 255)',
        'dark-gray': {
          100: 'rgb(22, 21, 19)',
          200: 'rgb(28, 32, 34)',
          300: 'rgb(38, 50, 56)',
          400: 'rgb(40, 44, 46)'
        },
      },
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
        'georgia': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'georama': ['Georama', 'sans-serif'],
      },
      keyframes: {
        'infinite-scroll': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite forwards'
      },
    },
  },
  plugins: [],
}

