/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f51fe",
      },
      height: {
        118: "7.375rem",
        931: "58.188rem",
      },
      width: {
        307: "19.188rem",
        1344: "84rem",
        1294: "80rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
