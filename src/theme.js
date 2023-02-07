// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "#7D0BFE",
  light: "#FF9EDB",
  hash: "#5C5663",
  green: "#3EB876",
  bgLight: "#D9D9D9",
  btnBg: "linear-gradient(90deg, #4A48FF 0%, #2996FF 100%)",
};

const theme = extendTheme({ colors });

export default theme;
