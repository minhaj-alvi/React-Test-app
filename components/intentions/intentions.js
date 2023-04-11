import React, { useState } from "react";

import { Box, Checkbox, Grid, Typography } from "@mui/material";

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
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "32px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            Intention
          </Typography>
          <Box sx={{ mt: "1rem" }}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                color: "#323232",
              }}
            >
              What are your preferences?
            </Typography>
            <Box
              sx={{
                width: "320px",
                height: "55px",
                mt: "0.5rem",
                border: checked.checkbox1
                  ? "1px solid #01E994"
                  : "1px solid #D0D5DD",
                boxShadow: "none",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "1rem",
                }}
              >
                <Checkbox
                  checked={checked.checkbox1}
                  onChange={handleChange("checkbox1")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#323232",
                    textAlign: "center",
                  }}
                >
                  Heizkosten sparen
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "320px",
                height: "55px",
                mt: "0.5rem",
                border: checked.checkbox2
                  ? "1px solid #01E994"
                  : "1px solid #D0D5DD",
                boxShadow: "none",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "1rem",
                }}
              >
                <Checkbox
                  checked={checked.checkbox2}
                  onChange={handleChange("checkbox2")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#323232",
                    textAlign: "center",
                  }}
                >
                  Stromkosten sparen
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "320px",
                height: "55px",
                mt: "0.5rem",
                border: checked.checkbox3
                  ? "1px solid #01E994"
                  : "1px solid #D0D5DD",
                boxShadow: "none",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "1rem",
                }}
              >
                <Checkbox
                  checked={checked.checkbox3}
                  onChange={handleChange("checkbox3")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#323232",
                    textAlign: "center",
                  }}
                >
                  Wohnkomfort steigern
                </Typography>
              </Box>
            </Box>{" "}
            <Box
              sx={{
                width: "320px",
                height: "55px",
                mt: "0.5rem",
                border: checked.checkbox4
                  ? "1px solid #01E994"
                  : "1px solid #D0D5DD",
                boxShadow: "none",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "1rem",
                }}
              >
                <Checkbox
                  checked={checked.checkbox4}
                  onChange={handleChange("checkbox4")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#323232",
                    textAlign: "center",
                  }}
                >
                  Mehr Sicherheit
                </Typography>
              </Box>
            </Box>{" "}
            <Box
              sx={{
                width: "320px",
                height: "55px",
                mt: "0.5rem",
                border: checked.checkbox5
                  ? "1px solid #01E994"
                  : "1px solid #D0D5DD",
                boxShadow: "none",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "1rem",
                }}
              >
                <Checkbox
                  checked={checked.checkbox5}
                  onChange={handleChange("checkbox5")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#323232",
                    textAlign: "center",
                  }}
                >
                  Wertsteigerung der Immobilie
                </Typography>
              </Box>
            </Box>{" "}
            <Box
              sx={{
                width: "320px",
                height: "55px",
                mt: "0.5rem",
                border: checked.checkbox6
                  ? "1px solid #01E994"
                  : "1px solid #D0D5DD",
                boxShadow: "none",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "1rem",
                }}
              >
                <Checkbox
                  checked={checked.checkbox6}
                  onChange={handleChange("checkbox6")}
                  sx={{
                    "&.Mui-checked": {
                      color: "#01E994",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#323232",
                    textAlign: "center",
                  }}
                >
                  Barrierefreiheit im Alter
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mt: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EFEFEF",
              borderRadius: "30px",
              padding: "6px 24px 6px 24px",
              width: "197px",
              height: "32px",
              ml: "2.5rem",
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                color: "#7C7C7C",
                textAlign: "center",
              }}
            >
              Details zur Intention
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Intentions;
