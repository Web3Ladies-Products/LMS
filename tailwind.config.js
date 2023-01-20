/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7D0BFE",
        light: "#FF9EDB",
        hash: "#5C5663",
        green: "#3EB876"
      },
      screens: {
        phone: "279px",
        mobile: "360px",
        mobile_l: "500px",
        tablet: "807px",
        laptop: "1000px",
        desktop: "1020px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
});
