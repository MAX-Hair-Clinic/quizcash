import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: "Rubik, sans-serif",
  h1: { fontSize: "2rem", lineHeight: 1.2 },
  h2: { fontSize: "1.75rem", lineHeight: 1.3 },
  h3: { fontSize: "1.5rem", lineHeight: 1.4 },
  h4: { fontSize: "1.25rem", lineHeight: 1.4 },
  h5: { fontSize: "1rem", lineHeight: 1.5 },
  h6: { fontSize: "0.875rem", lineHeight: 1.5 },
  body1: { fontSize: "1rem", lineHeight: 1.5 },
  body2: { fontSize: "0.875rem", lineHeight: 1.5 },
  caption: { fontSize: "0.75rem", lineHeight: 1.5 },
  subtitle1: { fontSize: "0.875rem", lineHeight: 1.5 },
  subtitle2: { fontSize: "0.75rem", lineHeight: 1.5 },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#272052",
    },
    secondary: {
      main: "#AF7EE7",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
  typography: {
    ...typography,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: `1px solid #D8D5EA`,
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#272052",
    },
    secondary: {
      main: "#AF7EE7",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
  typography: {
    ...typography,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: `1px solid #D8D5EA`,
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
