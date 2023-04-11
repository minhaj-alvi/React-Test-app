import React from "react";

import { Grid, Typography } from "@mui/material";

import Image1 from "../../public/assets/pngs/Img1.png";
import Image from "next/image";
import SelectInstallationSort from "./select-installation-sort";

const HomeConfiguration = () => {
  return (
    <>
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
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "32px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            Configuration for your Home
          </Typography>
          <SelectInstallationSort />
          <SelectInstallationSort />
          <SelectInstallationSort />
          <SelectInstallationSort />
        </Grid>
      </Grid>
    </>
  );
};

export default HomeConfiguration;
