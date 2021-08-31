import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { esES } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    typography: {
      fontFamily: [
        'Montserrat',
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },

    palette: {
      primary: {
        main: "#01062A",
      },
      secondary: {
        main: "#131A49",
      },

      color3: {
        main: "#0a1a7c",
      },
      color4: {
        main: "#13abff",
      },
      color5: {
        main: "#b3ffff",
      },
      color6: {
        main: "#54ffff",
      },
      complementaryGray: {
        main: "#8E8E8E",
      },

      info: {
        main: "#86d5f6",
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  },
  esES
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
