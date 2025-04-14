import { roboto } from "@/utils/fonts";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PageBreadCrumbs from "../CustomBreadCrumbs";
import { Add } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";

const DesignationsHeader = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: roboto.style,
              mb: 1,
              fontWeight: 550,
              color: COLORS.WHITE,
            }}
          >
            Designations
          </Typography>
          <PageBreadCrumbs
            data={[
              {
                label: "Employee Management",
              },
              {
                label: "Designations",
              },
            ]}
          />
        </Box>
        <Button
          startIcon={<Add />}
          sx={{
            fontSize: 15,
            fontFamily: roboto.style,
            color: COLORS.BLACK,
            backgroundColor: COLORS.PRIMARY,
          }}
        >
          Add Designation
        </Button>
      </Stack>
    </div>
  );
};

export default DesignationsHeader;
