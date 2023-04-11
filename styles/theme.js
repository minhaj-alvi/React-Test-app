import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      black: "#1B152E",
      main: "#1B152E",
      contrastText: "#fff",
    },
    socialIcons: {
      main: "#000000",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
});

export default theme;
