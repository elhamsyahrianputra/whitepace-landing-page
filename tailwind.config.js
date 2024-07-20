/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'lg': '1025px',
      },
      colors: {
        primary: {
          DEFAULT: "#4F9CF9",
          dark: "#043873",
        },
        secondary: {
          yellow: "#FFE492",
          blue: "#A7CEFC",
        },
        light: {
          DEFAULT: "#FFFFFF",
        },
        dark: {
          DEFAULT: "#212529",
        }
      }
    },
  },
  safelist: [
    'hidden',
    'show',
  ],
  plugins: [],
}

