import React from "react";
import PropTypes from "prop-types";

import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </StyledEngineProvider>
  );
};

MyApp.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.any,
};

export default MyApp;
