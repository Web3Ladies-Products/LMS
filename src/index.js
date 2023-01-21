import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
