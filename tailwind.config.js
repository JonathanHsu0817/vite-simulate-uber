/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'home-background': 'rgb(237,237,237)',
        'direction-background': 'rgb(191,191,191)',
      },
    },
  },
  plugins: [],
};
