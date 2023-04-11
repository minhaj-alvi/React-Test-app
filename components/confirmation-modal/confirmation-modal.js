import PropTypes from "prop-types";
import React from "react";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CrossIcon from "@/public/assets/svgs/modal/cross";
import CheckIcon from "@/public/assets/svgs/modal/check-icon";

const ConfirmationModal = ({ open, setOpen }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "542px",
        height: "531px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: 4,
      }}
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#323232",
          textAlign: "center",
        }}
      >
        Do you really want to leave?
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: "-2.5rem",
        }}
      >
        <IconButton onClick={() => setOpen(false)}>
          <CrossIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "1rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "18px",
            color: "#7C7C7C",
            width: "70%",
          }}
        >
          We have got a great offer for you, just leave your details and we will
          get back to you!
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "1rem",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          label="Name"
          sx={{
            width: "382px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "8px",
              },
            },
          }}
        />
        <TextField
          label="Last Name"
          sx={{
            width: "382px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "8px",
              },
            },
          }}
        />
        <TextField
          label="Email"
          sx={{
            width: "382px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "8px",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CheckIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Phone Number"
          sx={{
            width: "382px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "8px",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CheckIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{
            mt: "1rem",
            width: "142px",
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
          onClick={() => setOpen(false)}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

ConfirmationModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default ConfirmationModal;
