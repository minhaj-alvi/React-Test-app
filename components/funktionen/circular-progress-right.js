import React from "react";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import Svg5 from "@/public/assets/svgs/circular-bar/svg5";
import Svg6 from "@/public/assets/svgs/circular-bar/svg6";
import Svg7 from "@/public/assets/svgs/circular-bar/svg7";

const CircularProgressBarRight = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Box>
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #EFEFEF",
              borderRadius: "50%",
              mt: "1rem",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 15,
                left: 26,
                zIndex: 1,
              }}
            >
              <Svg5 />
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#323232",
                  textAlign: "center",
                }}
              >
                -35%
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "10px",
                  color: "#AFAFAF",
                  textAlign: "center",
                }}
              >
                bis zu
              </Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={100}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>{" "}
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            Heizkosten
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #EFEFEF",
              borderRadius: "50%",
              mt: "1rem",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 15,
                left: 25,
                zIndex: 1,
              }}
            >
              <Svg6 />
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#323232",
                  textAlign: "center",
                }}
              >
                -50%
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "10px",
                  color: "#AFAFAF",
                  textAlign: "center",
                }}
              >
                bis zu
              </Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={100}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>{" "}
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            Stromkosten
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #EFEFEF",
              borderRadius: "50%",
              mt: "1rem",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 15,
                left: 30,
                zIndex: 1,
              }}
            >
              <Svg7 />
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#323232",
                  textAlign: "center",
                }}
              >
                -40%
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "10px",
                  color: "#AFAFAF",
                  textAlign: "center",
                }}
              >
                bis zu
              </Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={100}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>{" "}
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            CO Emmisionen
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CircularProgressBarRight;
