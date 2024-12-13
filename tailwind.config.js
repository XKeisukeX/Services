/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        DEFAULT: '1rem',
        sm: '3rem',
        xl: '5rem',
        '2xl': '6xl',
      },
      colors: {
        primary: '#016293',
        secondary: '#ff6700',
        color: '#3d3d3d',
      },
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
      }
    },
  },
  plugins: [],
}