import { Avatar, Box, IconButton, Stack } from "@mui/material";
import React from "react";
import avatar from "@/avatar-12.webp";
import Image from "next/image";
const Header = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#0D0D0D",
        backdropFilter: "blur(5px)",
        top: 0,
        height: 65,
        boxShadow: "0px 0px 2px 2px #00000010",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1} sx={{ pr: 3 }}>
        <IconButton sx={{ width: 30, height: 30 }}>
          <Image
            src={avatar}
            alt=""
            width={30}
            height={30}
            style={{ borderRadius: "50%" }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;
