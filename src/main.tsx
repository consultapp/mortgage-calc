import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import MortgageCalc from "./components/MortgageCalc/MortgageCalc.js";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MortgageCalc />
    </ThemeProvider>
  </React.StrictMode>
);
