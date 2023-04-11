import * as React from "react";

import { AppBar, Box, Button, Toolbar } from "@mui/material";
import HelpIcon from "@/public/assets/svgs/navbar/help-icon";
import ContactInfoDropDown from "../contact-info-dropdown/contact-info-dropdown";

const Navbar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        sx={{ background: "white", boxShadow: 0, border: "1px solid #EFEFEF" }}
        position="fixed"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end", m: 1 }}>
          <Box sx={{ display: "flex", gap: "3rem" }}>
            <Button
              startIcon={<HelpIcon />}
              sx={{
                backgroundColor: "white",
                width: "125px",
                padding: "1rem",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "500",
                color: "#323232",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#323232",
                },
                gap: "1rem",
              }}
            >
              Help?
            </Button>
            <ContactInfoDropDown />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
