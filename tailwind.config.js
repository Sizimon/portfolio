/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'MainDark': '#1F1919',
        'SubDark': '#3C3D37',
        'MainLight': '#ECDFCC',
        'SubLight': '#697565'
      },
      fontFamily: {
        Anton: ['Anton', 'sans-serif'],
        WorkSans: ['Work Sans', 'sans-serif'],
      },
      screens: {
        'xs': '380px',
        'ap': '1025px',
        '4k': '2560px',
        'bp': '1023px'
      },
    },
  },
  plugins: [],
}

