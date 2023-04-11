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
import ConfirmationModalStyles from "@/styles/confirmation-modal/confirmation-modal-styles";

const ConfirmationModal = ({ open, setOpen }) => {
  const classes = ConfirmationModalStyles();
  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.text1}>
        Do you really want to leave?
      </Typography>
      <Box className={classes.crossIcon}>
        <IconButton onClick={() => setOpen(false)}>
          <CrossIcon />
        </IconButton>
      </Box>
      <Box className={classes.subContainer}>
        <Typography className={classes.text2}>
          We have got a great offer for you, just leave your details and we will
          get back to you!
        </Typography>
      </Box>

      <Box className={classes.textFieldContainer}>
        <TextField className={classes.textField} label="Name" />
        <TextField className={classes.textField} label="Last Name" />
        <TextField
          className={classes.textField}
          label="Email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CheckIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.textField}
          label="Phone Number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CheckIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          className={classes.submitBtn}
          variant="contained"
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
