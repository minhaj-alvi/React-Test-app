import React from "react";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import Svg1 from "@/public/assets/svgs/circular-bar/Svg1";
import Svg2 from "@/public/assets/svgs/circular-bar/svg2";
import Svg3 from "@/public/assets/svgs/circular-bar/svg3";
import Svg4 from "@/public/assets/svgs/circular-bar/svg4";
import CircularProgressBarStyles from "@/styles/circular-progress/circular-progress-styles";

const CircularProgressBarLeft = () => {
  const classes = CircularProgressBarStyles();
  return (
    <>
      <Box className={classes.mainContainer}>
        <Box>
          <Box className={classes.subContainer}>
            <Box className={classes.svgContainer}>
              <Svg1 />
              <Typography className={classes.text1}>2/10</Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={20}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>{" "}
          <Typography className={classes.text2}>Effizienz</Typography>
        </Box>
        <Box>
          <Box className={classes.subContainer}>
            <Box className={classes.svgContainer}>
              <Svg2 />
              <Typography className={classes.text1}>10/10</Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={100}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>{" "}
          <Typography className={classes.text2}>Komfort</Typography>
        </Box>
        <Box>
          <Box className={classes.subContainer}>
            <Box className={classes.svgContainer}>
              <Svg3 />
              <Typography className={classes.text1}>5/10</Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={50}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>{" "}
          <Typography className={classes.text2}>Sicherheit</Typography>
        </Box>

        <Box>
          <Box className={classes.subContainer}>
            <Box className={classes.svgContainer}>
              <Svg4 />
              <Typography className={classes.text1}>2/10</Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={20}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>
          <Typography className={classes.text2}>Sicherheit</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CircularProgressBarLeft;
