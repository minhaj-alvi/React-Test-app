import React, { useState } from "react";
import PropTypes from "prop-types";

import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import { Modal } from "@mui/material";

import ConfirmationModal from "@/components/confirmation-modal/confirmation-modal";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  const [open, setOpen] = useState(true);

  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConfirmationModal open={open} setOpen={setOpen} />
      </Modal>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

MyApp.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.any,
};

export default MyApp;
