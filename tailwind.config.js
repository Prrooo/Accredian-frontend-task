/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color':'#1A73E8',
        'primary-color-bg':'#EEF5FF',
      }
    },
  },
  plugins: [],
}