import React from "react";

import { Box, Checkbox, Typography } from "@mui/material";

const GenericCheckbox = ({ checked, handleChange }) => {
  return (
    <Box sx={{ mt: "1rem" }}>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox1 ? "1px solid #01E994" : "1px solid #D0D5DD",
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                fontFamily: "Mulish",
              }}
            >
              Heizung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            inklusive
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox2 ? "1px solid #01E994" : "1px solid #D0D5DD",
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
            justifyContent: "space-between",
            width: "290px",
            fontFamily: "Mulish",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                fontFamily: "Mulish",
              }}
            >
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox3 ? "1px solid #01E994" : "1px solid #D0D5DD",
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                fontFamily: "Mulish",
              }}
            >
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox4 ? "1px solid #01E994" : "1px solid #D0D5DD",
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                fontFamily: "Mulish",
              }}
            >
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox5 ? "1px solid #01E994" : "1px solid #D0D5DD",
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                fontFamily: "Mulish",
              }}
            >
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox6 ? "1px solid #01E994" : "1px solid #D0D5DD",
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                fontFamily: "Mulish",
              }}
            >
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox7 ? "1px solid #01E994" : "1px solid #D0D5DD",
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={checked.checkbox7}
              onChange={handleChange("checkbox7")}
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
                fontFamily: "Mulish",
              }}
            >
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox8 ? "1px solid #01E994" : "1px solid #D0D5DD",
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={checked.checkbox8}
              onChange={handleChange("checkbox8")}
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
                fontFamily: "Mulish",
              }}
            >
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
              fontFamily: "Mulish",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox9 ? "1px solid #01E994" : "1px solid #D0D5DD",
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={checked.checkbox9}
              onChange={handleChange("checkbox9")}
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
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox10
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={checked.checkbox10}
              onChange={handleChange("checkbox10")}
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
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox11
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={checked.checkbox11}
              onChange={handleChange("checkbox11")}
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
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox12
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={checked.checkbox12}
              onChange={handleChange("checkbox12")}
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
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "320px",
          height: "55px",
          mt: "0.5rem",
          border: checked.checkbox13
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
            justifyContent: "space-between",
            width: "290px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={checked.checkbox13}
              onChange={handleChange("checkbox13")}
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
              Beschattung
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              color: "#323232",
              textAlign: "center",
            }}
          >
            + 1.232,00€
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GenericCheckbox;
