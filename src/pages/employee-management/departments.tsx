import DepartmentTable from "@/components/department/departmentTable/Index";
import Wrapper from "@/components/Wrapper";
import { Box } from "@mui/material";
import React from "react";

const Departments = () => {
  return (
    <div>
      <Wrapper>
        <Box sx={{ p: 3 }}>
          <DepartmentTable />
        </Box>
      </Wrapper>
    </div>
  );
};

export default Departments;
