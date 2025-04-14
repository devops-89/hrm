import DesignationsCardHeader from "@/components/designations/DesignationsCardHeader";
import DesignationsHeader from "@/components/designations/DesignationsHeader";
import DesignationTable from "@/components/designations/DesignationTable";
import Wrapper from "@/components/Wrapper";
import { COLORS } from "@/utils/enum";
import { Box, Card, Divider } from "@mui/material";
import React from "react";

const Designations = () => {
  return (
    <div>
      <Wrapper>
        <Box sx={{ p: 3 }}>
          <DesignationsHeader />
          <Card sx={{ mt: 2, backgroundColor: COLORS.BLACK }}>
            <DesignationsCardHeader />
            <Divider />
            <Box sx={{ mt: 2 }}>
              <DesignationTable />
            </Box>
          </Card>
        </Box>
      </Wrapper>
    </div>
  );
};

export default Designations;
