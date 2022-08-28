/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pagesview/**/*.{js,ts,jsx,tsx}",
    "./components/**/**.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#256c42",
          secondary: "#639377",
        },
      },
    ],
  },
};
