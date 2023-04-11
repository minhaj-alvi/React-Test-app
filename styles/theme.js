import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#01E994",
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
