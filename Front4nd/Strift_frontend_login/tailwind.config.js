/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '390px'}, // Custom breakpoint for screen widths below 390px
      },
      boxShadow: {
        'gray': '0px 0px 6px 2px rgba(99, 99, 99, 0.25)',
      },
      letterSpacing: {
        tighter: '-0.165px',
      },
    },
  },
  plugins: [],
}

