import { COLORS, USER_STATUS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { CHIP_COMPONENT } from "@/utils/types";
import { Chip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const CustomChip = ({ label }: CHIP_COMPONENT) => {
  const [bgColor, setBgColor] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (label === USER_STATUS.ACTIVE) {
      setBgColor(COLORS.GREEN_OPACITY);
      setColor(COLORS.GREEN_COLOR);
    }
    if (label === USER_STATUS.INACTIVE) {
      setBgColor(COLORS.RED_OPACITY);
      setColor(COLORS.RED);
    }
  }, [label]);
  return (
    <div>
      <Chip
        label={
          <Typography sx={{ fontSize: 14, fontFamily: roboto.style }}>
            {label}
          </Typography>
        }
        sx={{ color: color, backgroundColor: bgColor }}
      />
    </div>
  );
};

export default CustomChip;
