/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'gray': '0px 0px 6px 2px rgba(99, 99, 99, 0.25)',
      }
    },
  },
  plugins: [],
}

