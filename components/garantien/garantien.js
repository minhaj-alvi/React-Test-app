/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Typography,
  styled,
  linearProgressClasses,
} from "@mui/material";

import Image3 from "../../public/assets/pngs/Img3.png";
import Image4 from "../../public/assets/pngs/Img4.png";
import Image5 from "../../public/assets/pngs/Img5.png";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lock from "@/public/assets/svgs/garantein/lock";
import Thumbsups from "@/public/assets/svgs/garantein/thumbs-up";
import Medal from "@/public/assets/svgs/garantein/medal";
import HelpIcon from "@/public/assets/svgs/navbar/help-icon";
// import PrevArrow from "@/public/assets/svgs/image-slider/prev-arrow";
// import NextArrow from "@/public/assets/svgs/image-slider/next-arrow";

const settings = {
  speed: 100,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  //   prevArrow: <PrevArrow />,
  //   nextArrow: <NextArrow />,
};
const images = [Image3, Image4, Image5];

const Garantein = () => {
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#EFEFEF",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#01E994",
    },
  }));
  return (
    <>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 2, sm: 8, md: 16, xl: 16 }}
        sx={{ mt: "7rem", mb: "7rem" }}
      >
        <Grid item xs={10}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <Image src={image} />
              </div>
            ))}
          </Slider>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box
              sx={{
                width: "400px",
                height: "90px",
                backgroundColor: "#F8F8F8",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "10px",
                    color: "#323232",
                  }}
                >
                  Ihre Ausstattung im Vergleich
                </Typography>
                <HelpIcon />
              </Box>

              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "1rem",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      color: "#323232",
                    }}
                  >
                    Effizienz
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                  >
                    <BorderLinearProgress
                      sx={{
                        height: "0.5rem",
                        borderRadius: 2,
                        backgroundColor: "#EFEFEF",
                        color: "#01E994",
                        width: "44px",
                      }}
                      variant="determinate"
                      value={20}
                      size={90}
                      thickness={2}
                    />

                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#323232",
                      }}
                    >
                      2/10
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "1rem",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      color: "#323232",
                    }}
                  >
                    Sicherheit
                  </Typography>

                  <Box
                    sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                  >
                    <BorderLinearProgress
                      sx={{
                        height: "0.5rem",
                        borderRadius: 2,
                        backgroundColor: "#EFEFEF",
                        color: "#01E994",
                        width: "44px",
                      }}
                      variant="determinate"
                      value={50}
                      size={90}
                      thickness={2}
                    />

                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#323232",
                      }}
                    >
                      5/10
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "1rem",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      color: "#323232",
                    }}
                  >
                    Komfort
                  </Typography>

                  <Box
                    sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                  >
                    <BorderLinearProgress
                      sx={{
                        height: "0.5rem",
                        borderRadius: 2,
                        backgroundColor: "#EFEFEF",
                        color: "#01E994",
                        width: "44px",
                      }}
                      variant="determinate"
                      value={100}
                      size={90}
                      thickness={2}
                    />

                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#323232",
                      }}
                    >
                      10/10
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "1rem",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      color: "#323232",
                    }}
                  >
                    Wertsteigerung
                  </Typography>

                  <Box
                    sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                  >
                    <BorderLinearProgress
                      sx={{
                        height: "0.5rem",
                        borderRadius: 2,
                        backgroundColor: "#EFEFEF",
                        color: "#01E994",
                        width: "44px",
                      }}
                      variant="determinate"
                      value={20}
                      size={90}
                      thickness={2}
                    />

                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#323232",
                      }}
                    >
                      2/10
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "400px",
                height: "90px",
                backgroundColor: "#F8F8F8",
                padding: "1rem",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "10px",
                    color: "#323232",
                  }}
                >
                  Ihre Ersparnis
                </Typography>
                <HelpIcon />
              </Box>

              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "1rem",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      color: "#323232",
                    }}
                  >
                    Heizkosten
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                  >
                    <BorderLinearProgress
                      sx={{
                        height: "0.5rem",
                        borderRadius: 2,
                        backgroundColor: "#EFEFEF",
                        color: "#01E994",
                        width: "44px",
                      }}
                      variant="determinate"
                      value={20}
                      size={90}
                      thickness={2}
                    />

                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#323232",
                      }}
                    >
                      2/10
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "1rem",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      color: "#323232",
                    }}
                  >
                    CO 2 Emmisionen
                  </Typography>

                  <Box
                    sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                  >
                    <BorderLinearProgress
                      sx={{
                        height: "0.5rem",
                        borderRadius: 2,
                        backgroundColor: "#EFEFEF",
                        color: "#01E994",
                        width: "44px",
                      }}
                      variant="determinate"
                      value={50}
                      size={90}
                      thickness={2}
                    />

                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#323232",
                      }}
                    >
                      5/10
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "1rem",
                    width: "50%",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      color: "#323232",
                    }}
                  >
                    Stromverbrauch
                  </Typography>

                  <Box
                    sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                  >
                    <BorderLinearProgress
                      sx={{
                        height: "0.5rem",
                        borderRadius: 2,
                        backgroundColor: "#EFEFEF",
                        color: "#01E994",
                        width: "44px",
                      }}
                      variant="determinate"
                      value={100}
                      size={90}
                      thickness={2}
                    />

                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#323232",
                      }}
                    >
                      10/10
                    </Typography>
                  </Box>
                </Box>
              </Box>
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
            Garantein
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", mt: "1rem" }}>
            <Lock />
            <Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#323232",
                }}
              >
                Festpreisgarantie
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#7C7C7C",
                }}
              >
                Sie kennen alle Kosten von Anfang an. Keine versteckten Kosten.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem", mt: "1rem" }}>
            <Thumbsups />
            <Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#323232",
                }}
              >
                Best-Leistungsgarantie
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#7C7C7C",
                }}
              >
                Kostenfreie Stornierung, wenn Sie am Markt bessere Leistung
                finden.
              </Typography>
            </Box>
          </Box>{" "}
          <Box sx={{ display: "flex", gap: "1rem", mt: "1rem" }}>
            <Medal />
            <Box>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#323232",
                }}
              >
                30 Tage “Geld zurück”
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#7C7C7C",
                }}
              >
                Sind Sie nicht zufrieden, erhalten Sie bedingungslos Ihr Geld
                zurück.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EFEFEF",
              borderRadius: "30px",
              padding: "6px 24px 6px 24px",
              width: "197px",
              height: "32px",
              ml: "3rem",
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
              Details zu Garantien
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: "1rem",
              width: "320px",
              height: "55px",
              backgroundColor: "#01E994",
              textTransform: "none",
              borderRadius: "35px",
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "18px",
              "&:hover": {
                backgroundColor: "#01E994",
              },
            }}
          >
            Add to Cart
          </Button>
          <Button
            variant="contained"
            sx={{
              mt: "1rem",
              width: "320px",
              height: "55px",
              backgroundColor: "white",
              textTransform: "none",
              borderRadius: "35px",
              color: "#323232",
              fontWeight: "700",
              fontSize: "18px",
              border: "1px solid #122C44",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Save Configuration
          </Button>
          <Typography
            sx={{
              mt: "1rem",
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textDecoration: "underline",
              textAlign: "center",
            }}
          >
            Need Help? Contact Us
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Garantein;
