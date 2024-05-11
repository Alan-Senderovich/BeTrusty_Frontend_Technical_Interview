/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#0f172a",
          100: "#162342",
        },
        "secondary-blue": "#164155",
        "light-blue": {
          DEFAULT: "#33eaff",
        },
        white: "#ffffff",
        black: "#000000",
        gray: "#575d6a",
      },
    },
  },
  plugins: [],
};
