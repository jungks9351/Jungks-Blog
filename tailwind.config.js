/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main-purple': '#5615E1',
        'sub-purple': '#8500D6',
      },
      backgroundImage: {
        intro: 'url(/images/intro_bg.jpg)',
      },
      keyframes: {
        fadeIn: {
          from: {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        'fadeIn-500': 'fadeIn 1s ease-in-out 500ms forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
