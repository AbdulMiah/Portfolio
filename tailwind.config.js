/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "royal-blue": {
        100: "#465FE5",
        200: "#919fef",
      },
      white: "#FFFFFF",
      black: "#000000",
      grey: {
        100: "#F5F5F5",
        200: "#DCDCDC",
      },
      dark: {
        100: "#27282C",
        200: "#242529"
      },
    },
  },
  plugins: [],
};
