import { data } from "@/assets/data";
import { DesignationData } from "@/assets/designations";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { loginTextField, loginWhiteTextField } from "@/utils/styles";
import {
  Autocomplete,
  Box,
  Card,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const DesignationsCardHeader = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ p: 2 }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontFamily: roboto.style,
            color: COLORS.WHITE,
          }}
        >
          Designations List
        </Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Autocomplete
            renderInput={(params) => (
              <TextField
                sx={{
                  ...loginWhiteTextField,
                  "& .MuiSvgIcon-root": {
                    fill: COLORS.WHITE,
                  },
                }}
                label="Department"
                {...params}
              />
            )}
            options={DesignationData}
            getOptionLabel={(option) => option.designation}
            renderOption={(props, option) => (
              <Box component={"li"} {...props}>
                <Typography sx={{ fontSize: 14, fontFamily: roboto.style }}>
                  {option.designation}
                </Typography>
              </Box>
            )}
            sx={{ width: 250 }}
          />
          <Autocomplete
            renderInput={(params) => (
              <TextField
                sx={{
                  ...loginWhiteTextField,
                  "& .MuiSvgIcon-root": {
                    fill: COLORS.WHITE,
                  },
                }}
                label="Status"
                {...params}
              />
            )}
            options={data.statusArray}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component={"li"} {...props}>
                <Typography sx={{ fontSize: 14, fontFamily: roboto.style }}>
                  {option.label}
                </Typography>
              </Box>
            )}
            sx={{ width: 150 }}
          />
        </Stack>
      </Stack>
    </div>
  );
};

export default DesignationsCardHeader;
