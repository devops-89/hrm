import PageBreadCrumbs from "@/components/CustomBreadCrumbs";
import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { Add, Upload } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const EmployeeList = () => {
  return (
    <div>
      <Wrapper>
        <Box sx={{ p: 3 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                sx={{ fontSize: 20, fontFamily: roboto.style, fontWeight: 600 }}
              >
                Employee List
              </Typography>
              <PageBreadCrumbs
                data={[
                  {
                    label: "Employee Management",
                  },
                  {
                    label: "Employee List",
                  },
                ]}
              />
            </Box>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Button
                startIcon={<Upload />}
                sx={{
                  border: `1px solid ${COLORS.PRIMARY}`,
                  color: COLORS.WHITE,
                  width: 100,
                }}
              >
                Export
              </Button>
              <Button
                startIcon={<Add />}
                sx={{
                  border: `1px solid ${COLORS.PRIMARY}`,
                  color: COLORS.BLACK,
                  width: 150,
                  backgroundColor: COLORS.PRIMARY,

                }}
              >
                Add Employee
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Wrapper>
    </div>
  );
};

export default EmployeeList;
