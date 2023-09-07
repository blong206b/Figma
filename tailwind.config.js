/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        lightgray: "#d1d1d1",
        gainsboro: {
          "100": "#e4e4e4",
          "200": "#d9d9d9",
        },
        darkgray: "#a6a6a6",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "5xl": "24px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
