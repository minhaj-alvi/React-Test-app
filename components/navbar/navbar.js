import * as React from "react";

import { AppBar, Box, Button, Toolbar } from "@mui/material";
import HelpIcon from "@/public/assets/svgs/navbar/help-icon";
import ContactInfoDropDown from "../contact-info-dropdown/contact-info-dropdown";
import { navBarStyles } from "@/styles/navbar/navbar-styles";

const Navbar = () => {
  const classes = navBarStyles();
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <Box className={classes.btnContainer}>
            <Button className={classes.helpBtn} startIcon={<HelpIcon />}>
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
