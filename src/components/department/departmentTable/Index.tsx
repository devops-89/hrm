import React from "react";
import DepartmentHeader from "../Header";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { roboto } from "@/utils/fonts";
import { data } from "@/assets/data";
import { FilterList, Upload } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { loginTextField, loginWhiteTextField } from "@/utils/styles";
import DepartmentTableData from "./DepartmentTable";

const DepartmentTable = () => {
  return (
    <div>
      <DepartmentHeader />
      <Card
        sx={{
          mt: 2,
          boxShadow: "0px 0px 3px 3px #000000010",
          backgroundColor: COLORS.BLACK,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          sx={{ p: 2 }}
        >
          <Typography
            sx={{ fontSize: 20, fontFamily: roboto.style, fontWeight: 550,color:COLORS.WHITE }}
          >
            Department List
          </Typography>
          <Button
            endIcon={<FilterList />}
            sx={{
              border: `1px solid ${COLORS.WHITE}`,
              p: 1,
              width: 100,
              color: COLORS.WHITE,
            }}
          >
            Filter
          </Button>
        </Stack>
        <Divider sx={{ borderWidth: 1 }} />
        <Stack
          sx={{ p: 1, mt: 1 }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <TextField
            sx={{ ...loginWhiteTextField, width: "100%" }}
            label="Search"
            fullWidth
          />
        </Stack>
        <Box sx={{ mt: 1 }}>
          <DepartmentTableData />
        </Box>
      </Card>
    </div>
  );
};

export default DepartmentTable;
