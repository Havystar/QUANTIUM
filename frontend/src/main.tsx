import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider, createTheme} from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'black'
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
