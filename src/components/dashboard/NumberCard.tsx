import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { NUMBERCARDPROS } from "@/utils/types";
import { ArrowUpward } from "@mui/icons-material";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";

const NumberCard = ({
  icon: Icon,
  heading,
  count,
  totalCount,
}: NUMBERCARDPROS) => {
  return (
    <div>
      <Card sx={{ p: 2, backgroundColor: COLORS.BLACK }}>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Avatar
            sx={{ backgroundColor: COLORS.BLUE_OPACITY, width: 50, height: 50 }}
          >
            <Icon sx={{ color: COLORS.ICON_COLOR, fontSize: 30 }} />
          </Avatar>
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: roboto.style,
                  letterSpacing: 1,
                  color: COLORS.TEXT_COLOR,
                }}
              >
                {heading}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: COLORS.GREEN_COLOR,
                }}
              >
                <ArrowUpward sx={{ fontSize: 15 }} /> {count}
              </Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: roboto.style,
                  color: COLORS.WHITE,
                }}
              >
                {totalCount}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </div>
  );
};

export default NumberCard;
