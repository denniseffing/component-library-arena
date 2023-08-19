/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d926a9",
          secondary: "#ffffff"
        }

      }
    ],
  },
  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")],
}

