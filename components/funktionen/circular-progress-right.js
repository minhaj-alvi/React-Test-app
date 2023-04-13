import React from "react";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import Svg5 from "@/public/assets/svgs/circular-bar/svg5";
import Svg6 from "@/public/assets/svgs/circular-bar/svg6";
import Svg7 from "@/public/assets/svgs/circular-bar/svg7";
import CircularProgressBarStyles from "@/styles/circular-progress/circular-progress-styles";

const CircularProgressBarRight = () => {
  const classes = CircularProgressBarStyles();

  return (
    <>
      <Box className={classes.mainContainer}>
        <Box>
          <Box className={classes.subContainer}>
            <Box className={classes.svgsContainer}>
              <Svg5 />
              <Typography className={classes.text1}>-35%</Typography>
              <Typography className={classes.text3}>bis zu</Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={100}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>{" "}
          <Typography className={classes.text2}>Heizkosten</Typography>
        </Box>
        <Box>
          <Box className={classes.subContainer}>
            <Box className={classes.svgsContainer}>
              <Svg6 />
              <Typography className={classes.text1}>-50%</Typography>
              <Typography className={classes.text3}>bis zu</Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={100}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>{" "}
          <Typography className={classes.text2}>Stromkosten</Typography>
        </Box>
        <Box>
          <Box className={classes.subContainer}>
            <Box className={classes.svgsContainer}>
              <Svg7 />
              <Typography className={classes.text1}>-40%</Typography>
              <Typography className={classes.text3}>bis zu</Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={100}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>{" "}
          <Typography className={classes.text2}>CO Emmisionen</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CircularProgressBarRight;
