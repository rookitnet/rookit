/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",
        primarybutton: "rgba(var(--primarybutton))",
        primarybuttontext: "rgba(var(--primarybuttontext))",
      }
    },
  },
  plugins: [],
}

