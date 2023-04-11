import React, { useState } from "react";

import { Box, MenuItem, Select, Typography } from "@mui/material";

import { InstallationsortArray } from "@/utils/constants/constants";
import { homeConfigurationStyles } from "@/styles/home-styles/home-configuration/home-configuration-styles";

const SelectInstallationSort = () => {
  const [value, setValue] = useState("Haus");
  const classes = homeConfigurationStyles();

  return (
    <Box sx={{ mt: "1rem" }}>
      <Typography className={classes.subheading}>Installationsort</Typography>
      <Select
        className={classes.select}
        renderValue={
          value !== ""
            ? () => (
                <Typography className={classes.renderText}>{value}</Typography>
              )
            : () => null
        }
        onChange={(event) => setValue(event.target.value)}
        displayEmpty
      >
        {InstallationsortArray.map((data, index) => (
          <MenuItem key={index} value={data?.options}>
            {data?.options}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectInstallationSort;
