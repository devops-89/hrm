import { COLORS } from "@/utils/enum";
import { Box } from "@mui/material";

const Wrapper = ({ children }: any) => {
  return (
    <Box
      sx={{
        marginLeft: "240px",
        marginTop: "60px",
        backgroundColor: COLORS.BODYCOLOR,
        minHeight: "100vh",
        color: COLORS.WHITE,
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
