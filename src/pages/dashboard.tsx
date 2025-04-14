import { data } from "@/assets/data";
import AbsentTable from "@/components/dashboard/AbsentTable";
import CardTable from "@/components/dashboard/CardTable";
import NumberCard from "@/components/dashboard/NumberCard";
import Wrapper from "@/components/Wrapper";
import { Box, Grid } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Wrapper>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {data.countCardProps.map((val, i) => (
              <Grid size={4} key={i}>
                <NumberCard
                  icon={val.icon}
                  count={val.count}
                  totalCount={val.totalCount}
                  heading={val.heading}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 3 }}>
            <CardTable />
          </Box>
          <Box sx={{ mt: 3 }}>
            <AbsentTable />
          </Box>
        </Box>
      </Wrapper>
    </div>
  );
};

export default Dashboard;
