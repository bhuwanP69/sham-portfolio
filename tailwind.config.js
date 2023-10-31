/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'body-color':'#ffd6d6',
        'text-color':'#ff3870',
        'text-color2':'#b02cd6',
        'text-Black':'#050748',
        'button-color1':'#ffbd84',
        'button-color2':'#ff1f8e',
        'button-color3':'#6A6A90',
        'aboutText':'#6A6A90',
        'borderColor':'#d4f0ff',
        'underPurple':'#a33fbf',
        'underIndigo':'#6610f2',
        'underBlue':'#0dcaf0',




      }
    },
  },
  plugins: [],
}