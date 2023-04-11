import React, { useState } from "react";

import { Box, MenuItem, Select, Typography } from "@mui/material";

import { InstallationsortArray } from "@/utils/constants/constants";

const SelectInstallationSort = () => {
  const [value, setValue] = useState("Haus");
  return (
    <>
      <Box sx={{ mt: "1rem" }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "16px",
            color: "#323232",
          }}
        >
          Installationsort
        </Typography>
        <Select
          sx={{
            width: "320px",
            mt: "0.5rem",
            border: "1px solid #D0D5DD",
            boxShadow: "none",
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "30px",
                border: "1px solid #D0D5DD",
              },
            },
          }}
          renderValue={
            value !== ""
              ? () => (
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#323232",
                      ml: "0.5rem",
                    }}
                  >
                    {value}
                  </Typography>
                )
              : () => null
          }
          onChange={(event) => setValue(event.target.value)}
          displayEmpty
        >
          {InstallationsortArray.map((data, index) => (
            <MenuItem key={index} value={data?.options}>
              {data?.options}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
};

export default SelectInstallationSort;
