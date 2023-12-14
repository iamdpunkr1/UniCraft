/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ["Satoshi-Regular", "sans-serif"],
        'satoshi-bold': ["Satoshi-Bold", "sans-serif"],
    },
  },
  plugins: [],
}
}
