import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    border: string;
  }
  interface PaletteOptions {
    border: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    border: true;
  }
}
