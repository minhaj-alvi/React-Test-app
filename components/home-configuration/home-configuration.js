import React from "react";

import { Grid, Typography } from "@mui/material";

import Image1 from "../../public/assets/pngs/Img1.png";
import Image from "next/image";
import SelectInstallationSort from "./select-installation-sort";
import { homeConfigurationStyles } from "@/styles/home-styles/home-configuration/home-configuration-styles";

const HomeConfiguration = () => {
  const classes = homeConfigurationStyles();

  return (
    <Grid
      container
      spacing={{ xs: 0, md: 0 }}
      columns={{ xs: 2, sm: 8, md: 16, xl: 16 }}
      sx={{ mt: "7rem" }}
    >
      <Grid item xs={10}>
        <Image src={Image1} alt="Image" width={"965px"} height={"543px"} />
      </Grid>
      <Grid sx={{ ml: "8rem" }} item xs={4}>
        <Typography className={classes.heading}>
          Configuration for your Home
        </Typography>
        <SelectInstallationSort />
        <SelectInstallationSort />
        <SelectInstallationSort />
        <SelectInstallationSort />
      </Grid>
    </Grid>
  );
};

export default HomeConfiguration;
