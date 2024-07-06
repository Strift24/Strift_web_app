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
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
          
        },
      },
      animation: {
        floatUp: 'floatUp 0.5s ease-out',
        shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',

      },
    },
  },
  plugins: [],
}

