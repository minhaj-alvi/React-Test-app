import React from "react";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import Svg1 from "@/public/assets/svgs/circular-bar/Svg1";
import Svg2 from "@/public/assets/svgs/circular-bar/svg2";
import Svg3 from "@/public/assets/svgs/circular-bar/svg3";
import Svg4 from "@/public/assets/svgs/circular-bar/svg4";

const CircularProgressBarLeft = () => {
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
                top: 20,
                left: 35,
                zIndex: 1,
              }}
            >
              <Svg1 />
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#323232",
                  textAlign: "center",
                }}
              >
                2/10
              </Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={20}
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
            Effizienz
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
                top: 20,
                left: 30,
                zIndex: 1,
              }}
            >
              <Svg2 />
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#323232",
                  textAlign: "center",
                }}
              >
                10/10
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
            Komfort
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
                top: 20,
                left: 30,
                zIndex: 1,
              }}
            >
              <Svg3 />
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#323232",
                  textAlign: "center",
                }}
              >
                5/10
              </Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={50}
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
            Sicherheit
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
                top: 20,
                left: 30,
                zIndex: 1,
              }}
            >
              <Svg4 />
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#323232",
                  textAlign: "center",
                }}
              >
                2/10
              </Typography>
            </Box>

            <CircularProgress
              variant="determinate"
              value={20}
              size={90}
              thickness={2}
              sx={{ color: "#01E994" }}
            />
          </Box>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            Sicherheit
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CircularProgressBarLeft;
