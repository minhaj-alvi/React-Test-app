import AuthContext from "@/config/auth/context";
import "@/styles/globals.css";
import React from "react";

import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </StyledEngineProvider>
    </AuthContext.Provider>
  );
};

MyApp.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.any,
};

export default MyApp;
