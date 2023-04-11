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

const ContactInfoDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        sx={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "16px",
          color: "#323232",
          "&:hover": {
            backgroundColor: "white",
            color: "#323232",
          },
          gap: "1rem",
        }}
        startIcon={<ContactIcon />}
        endIcon={<DownArrow />}
        onClick={handleClick}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              color: "#323232",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#475467",
            }}
          >
            0800 9116 398
          </Typography>
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
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <PhoneIcon />
            <Box>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#323232",
                }}
              >
                0123 456 789
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#7C7C7C",
                }}
              >
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
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <ChatIcon />
            <Box>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#323232",
                }}
              >
                Digitaler Chat-Assistent
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#7C7C7C",
                }}
              >
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
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <CalendarIcon />
            <Box>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#323232",
                }}
              >
                Expertenberatung
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#7C7C7C",
                }}
              >
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
