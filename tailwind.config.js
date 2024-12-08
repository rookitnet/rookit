/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url(var(--logo))",
      },
      colors: {
        background: "rgba(var(--background))"
      }
    },
  },
  plugins: [],
}

