import PropTypes from "prop-types";
import React from "react";

import { Box, GlobalStyles, styled } from "@mui/material";
import Navbar from "@/components/navbar/navbar";
import BottomBar from "@/components/bottom-bar/bottom-bar";

const MainLayoutRoot = styled("div")(() => ({
  flex: "1 1 auto",
  backgroundColor: "#FFFFFF",
}));

const MainLayout = ({ children }) => {
  return (
    <MainLayoutRoot>
      <GlobalStyles
        styles={{
          body: { margin: "0px important" },
          h1: { color: "grey" },
          "*::-webkit-scrollbar": {
            width: "0em",
          },
          "*::-webkit-scrollbar-track": {},
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,0)",
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
        {children}
        <BottomBar />
      </Box>
    </MainLayoutRoot>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
