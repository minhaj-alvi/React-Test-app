import * as React from "react";

import { Box, Button, Typography } from "@mui/material";

const BottomBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        zIndex: 999,
        backgroundColor: "white",
        padding: "1rem",
      }}
    >
      <Box sx={{ display: "flex", gap: "1rem", ml: "2rem" }}>
        {" "}
        <Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "18px",
              color: "#122C44",
            }}
          >
            Gesamtpreiseis
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "12px",
              color: "#AFAFAF",
            }}
          >
            inkl. MwSt
          </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "24px",
            color: "#9EA7B7",
            textDecoration: "line-through",
          }}
        >
          1.299€
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "24px",
            color: "#122C44",
          }}
        >
          999€
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", mr: "2rem" }}>
        <Button
          variant="contained"
          sx={{
            mt: "1rem",
            width: "320px",
            height: "55px",
            backgroundColor: "white",
            textTransform: "none",
            borderRadius: "35px",
            color: "#323232",
            fontWeight: "700",
            fontSize: "18px",
            border: "1px solid #122C44",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          Konfiguration speichern
        </Button>
        <Button
          variant="contained"
          sx={{
            mt: "1rem",
            width: "320px",
            height: "55px",
            backgroundColor: "#01E994",
            textTransform: "none",
            borderRadius: "35px",
            color: "#ffffff",
            fontWeight: "700",
            fontSize: "18px",
            "&:hover": {
              backgroundColor: "#01E994",
            },
          }}
        >
          In den Warenkorb
        </Button>
      </Box>
    </Box>
  );
};

export default BottomBar;
