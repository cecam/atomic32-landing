/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-element': 'float 5s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0%)'},
          '50%': { transform: 'translateY(3%)'},
          '100%': { transform: 'translateY(0%)'},
        }
      }
    },
  },
  plugins: [],
}

