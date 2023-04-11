import * as React from "react";

import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import DownArrow from "@/public/assets/svgs/navbar/down-arrow";
import ContactIcon from "@/public/assets/svgs/navbar/contact-icon";
import PhoneIcon from "@/public/assets/svgs/navbar/phone-icon";
import ChatIcon from "@/public/assets/svgs/navbar/chat-icon";
import CalendarIcon from "@/public/assets/svgs/navbar/calendar-icon";
import { contactInfoStyles } from "@/styles/navbar/navbar-styles";

const ContactInfoDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = contactInfoStyles();

  return (
    <Box>
      <Button
        className={classes.contactBtnContainer}
        startIcon={<ContactIcon />}
        endIcon={<DownArrow />}
        onClick={handleClick}
      >
        <Box className={classes.contactBtn}>
          <Typography className={classes.contactUs}>Contact Us</Typography>
          <Typography className={classes.number}>0800 9116 398</Typography>
        </Box>
      </Button>
      <Menu
        PaperProps={{
          style: {
            width: "288px",
            border: " 1px solid #EFEFEF",
            borderRadius: "5px",
            marginTop: "0.5rem",
            boxShadow: "none",
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Box className={classes.menuItemContainer}>
            <PhoneIcon />
            <Box>
              <Typography className={classes.menuItemHeading}>
                0123 456 789
              </Typography>
              <Typography className={classes.menuItemSubHeading}>
                Mo. - Fr. von 8:00 - 18:00 Uhr
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Box className={classes.menuItemContainer}>
            <ChatIcon />
            <Box>
              <Typography className={classes.menuItemHeading}>
                Digitaler Chat-Assistent
              </Typography>
              <Typography className={classes.menuItemSubHeading}>
                24/7 für Sie verfügbar
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Box className={classes.menuItemContainer}>
            <CalendarIcon />
            <Box>
              <Typography className={classes.menuItemHeading}>
                Expertenberatung
              </Typography>
              <Typography className={classes.menuItemSubHeading}>
                Persönliches Beratungsgespräch
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ContactInfoDropDown;
