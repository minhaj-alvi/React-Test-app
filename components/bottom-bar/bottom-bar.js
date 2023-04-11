import * as React from "react";

import { Box, Button, Typography } from "@mui/material";
import BottomBarStyles from "@/styles/bottom-bar/bottom-bar-styles";

const BottomBar = () => {
  const classes = BottomBarStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.subContainer}>
        <Box>
          <Typography className={classes.text1}>Gesamtpreiseis</Typography>
          <Typography className={classes.text2}>inkl. MwSt</Typography>
        </Box>
        <Typography className={classes.text3}>1.299€</Typography>
        <Typography className={classes.text4}>999€</Typography>
      </Box>
      <Box className={classes.btnContainer}>
        <Button className={classes.btn1} variant="contained">
          Konfiguration speichern
        </Button>
        <Button className={classes.btn2} variant="contained">
          In den Warenkorb
        </Button>
      </Box>
    </Box>
  );
};

export default BottomBar;
