import React, { useState } from "react";

import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { intentionStyles } from "@/styles/home-styles/intentions/intentions-styles";

const Intentions = () => {
  const [checked, setChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  const handleChange = (name) => (event) => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  const classes = intentionStyles();

  return (
    <>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 2, sm: 8, md: 16, xl: 16 }}
        sx={{ mt: "4rem" }}
      >
        <Grid item xs={10}></Grid>
        <Grid sx={{ ml: "8rem" }} item xs={4}>
          <Typography className={classes.heading}>Intention</Typography>
          <Box sx={{ mt: "1rem" }}>
            <Typography className={classes.subHeading}>
              What are your preferences?
            </Typography>
            <Box
              className={
                checked.checkbox1
                  ? classes.checkboxContainerChecked
                  : classes.checkboxContainerUnChecked
              }
            >
              <Box className={classes.checkbox}>
                <Checkbox
                  checked={checked.checkbox1}
                  onChange={handleChange("checkbox1")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography className={classes.checkboxText}>
                  Heizkosten sparen
                </Typography>
              </Box>
            </Box>
            <Box
              className={
                checked.checkbox2
                  ? classes.checkboxContainerChecked
                  : classes.checkboxContainerUnChecked
              }
            >
              <Box className={classes.checkbox}>
                <Checkbox
                  checked={checked.checkbox2}
                  onChange={handleChange("checkbox2")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography className={classes.checkboxText}>
                  Stromkosten sparen
                </Typography>
              </Box>
            </Box>
            <Box
              className={
                checked.checkbox3
                  ? classes.checkboxContainerChecked
                  : classes.checkboxContainerUnChecked
              }
            >
              <Box className={classes.checkbox}>
                <Checkbox
                  checked={checked.checkbox3}
                  onChange={handleChange("checkbox3")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography className={classes.checkboxText}>
                  Wohnkomfort steigern
                </Typography>
              </Box>
            </Box>{" "}
            <Box
              className={
                checked.checkbox4
                  ? classes.checkboxContainerChecked
                  : classes.checkboxContainerUnChecked
              }
            >
              <Box className={classes.checkbox}>
                <Checkbox
                  checked={checked.checkbox4}
                  onChange={handleChange("checkbox4")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography className={classes.checkboxText}>
                  Mehr Sicherheit
                </Typography>
              </Box>
            </Box>{" "}
            <Box
              className={
                checked.checkbox5
                  ? classes.checkboxContainerChecked
                  : classes.checkboxContainerUnChecked
              }
            >
              <Box className={classes.checkbox}>
                <Checkbox
                  checked={checked.checkbox5}
                  onChange={handleChange("checkbox5")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography className={classes.checkboxText}>
                  Wertsteigerung der Immobilie
                </Typography>
              </Box>
            </Box>{" "}
            <Box
              className={
                checked.checkbox6
                  ? classes.checkboxContainerChecked
                  : classes.checkboxContainerUnChecked
              }
            >
              <Box className={classes.checkbox}>
                <Checkbox
                  checked={checked.checkbox6}
                  onChange={handleChange("checkbox6")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography className={classes.checkboxText}>
                  Barrierefreiheit im Alter
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className={classes.detailContainer}>
            <Typography className={classes.detailText}>
              Details zur Intention
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Intentions;
