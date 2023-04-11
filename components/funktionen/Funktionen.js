import React, { useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import Image1 from "../../public/assets/pngs/Img2.png";
import Image from "next/image";
import GenericCheckbox from "./check-box";

import CircularProgressBarLeft from "./circular-progress-left";
import CircularProgressBarRight from "./circular-progress-right";
import A1 from "@/public/assets/svgs/accessories/A1";
import A2 from "@/public/assets/svgs/accessories/A2";
import A3 from "@/public/assets/svgs/accessories/A3";
import A4 from "@/public/assets/svgs/accessories/A4";
import A5 from "@/public/assets/svgs/accessories/A5";
import A6 from "@/public/assets/svgs/accessories/A6";
import A7 from "@/public/assets/svgs/accessories/A7";
import A8 from "@/public/assets/svgs/accessories/A8";
import A9 from "@/public/assets/svgs/accessories/A9";
import A10 from "@/public/assets/svgs/accessories/A10";
import A11 from "@/public/assets/svgs/accessories/A11";
import A12 from "@/public/assets/svgs/accessories/A12";
import A13 from "@/public/assets/svgs/accessories/A13";
import { funktionenStyles } from "@/styles/home-styles/funketionen/funketionen-styles";

const Funktionen = () => {
  const classes = funktionenStyles();
  const [checked, setChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
    checkbox11: false,
    checkbox12: false,
    checkbox13: false,
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
        <Grid item xs={10}>
          <Box className={classes.imgContainer}>
            <Box sx={{ position: "absolute", top: 10, left: 100 }}>
              <A1 />
            </Box>
            <Box sx={{ position: "absolute", top: 30, left: 270 }}>
              <A2 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 115, left: 80 }}>
              <A3 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 262, left: 10 }}>
              <A4 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 140, left: 155 }}>
              <A5 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 180, left: 250 }}>
              <A6 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 76, left: 330 }}>
              <A7 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 250, left: 330 }}>
              <A8 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 180, left: 400 }}>
              <A9 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 250, left: 460 }}>
              <A10 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 180, left: 520 }}>
              <A11 />
            </Box>{" "}
            <Box sx={{ position: "absolute", top: 180, left: 700 }}>
              <A12 />
            </Box>
            <Box sx={{ position: "absolute", top: 320, left: 100 }}>
              <A13 />
            </Box>
            <Image src={Image1} alt="Image" width={"965px"} height={"543px"} />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              ml: "2rem",
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "29rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "#323232",
                  }}
                >
                  Ihre Ausstattung im Vergleich
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#323232",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Mehr Info
                </Typography>
              </Box>
              <CircularProgressBarLeft />
            </Box>
            <Box>
              <Box
                sx={{
                  width: "20rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "#323232",
                  }}
                >
                  Ihre Ersparnis
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "#323232",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Mehr Info
                </Typography>
              </Box>
              <CircularProgressBarRight />
            </Box>
          </Box>
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
            Funktionen
          </Typography>

          <GenericCheckbox checked={checked} handleChange={handleChange} />

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
              Funktionen vergleichen
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Funktionen;
