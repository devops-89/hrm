import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PageBreadCrumbs from "../CustomBreadCrumbs";
import { roboto } from "@/utils/fonts";
import { Add } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { useDispatch } from "react-redux";
import AddDepartment from "@/assets/modalCalling/department/AddDepartment";
import { showModal } from "@/redux/reducers/modal";

const DepartmentHeader = () => {
  const dispatch = useDispatch();

  const addDepartment = () => {
    dispatch(showModal(<AddDepartment />));
  };
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
              fontSize: 25,
              fontFamily: roboto.style,
              fontWeight: 550,
              mb: 1,
              color: COLORS.WHITE,
            }}
          >
            Departments
          </Typography>
          <PageBreadCrumbs
            data={[
              {
                label: "Employee Management",
              },
              {
                label: "Department",
              },
            ]}
          />
        </Box>
        <Button
          startIcon={<Add />}
          sx={{
            color: COLORS.BLACK,
            backgroundColor: COLORS.PRIMARY,
            p: 1,
            fontSize: 14,
            fontFamily: roboto.style,
          }}
          onClick={addDepartment}
        >
          Add Department
        </Button>
      </Stack>
    </div>
  );
};

export default DepartmentHeader;
