/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))"
      }
    },
  },
  plugins: [],
}

