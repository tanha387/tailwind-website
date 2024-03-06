/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'custom-color': '#e2e8f0',
      },
      width: {
        '533': '533px',
      },
      height:{
        '300':'300'
      }
    },
  },
  plugins: [],
}

