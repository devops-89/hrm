import {
  Box,
  Collapse,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/logo/digixito.png";
import { SidebarData } from "@/assets/sidebar";
import { roboto } from "@/utils/fonts";
import { useRouter } from "next/router";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleNavigation = (val: any) => {
    if (val.isModuleIncluded) {
      setOpen(!open);
    } else {
      router.push(val.url);
    }
  };
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 240,
        height: "100vh",
        backgroundColor: "#0D0D0D",
        zIndex: 1000,
        boxShadow: "0px 0px 4px 4px #0000001a",
        "::-webkit-scrollbar": {
          width: 0,
        },
      }}
    >
      <Box sx={{ textAlign: "center", padding: 1, mt: 1 }}>
        <Image src={logo} alt="" width={100} />
      </Box>
      <Divider sx={{ borderWidth: 1.5,borderColor:COLORS.WHITE }} />
      <Box sx={{ pt: 2 }}>
        <List>
          {SidebarData.map((val, i) => (
            <>
              <ListItemButton
                onClick={() => handleNavigation(val)}
                key={i}
                sx={{
                  color:
                    router.pathname === val.url ? COLORS.BLACK : COLORS.WHITE,
                  backgroundColor:
                    router.pathname === val.url
                      ? COLORS.PRIMARY
                      : COLORS.TRANSPARENT,
                  ":hover": {
                    backgroundColor:
                      router.pathname === val.url
                        ? COLORS.PRIMARY
                        : COLORS.TRANSPARENT,
                  },
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <>
                    <ListItemAvatar sx={{ minWidth: 30 }}>
                      <val.icon sx={{ fontSize: 20 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize: 13,
                            fontFamily: roboto.style,
                          }}
                        >
                          {val.label}
                        </Typography>
                      }
                    />
                  </>
                  <Box>
                    {val.isModuleIncluded &&
                      (open ? (
                        <KeyboardArrowUp sx={{ fontSize: 20 }} />
                      ) : (
                        <KeyboardArrowDown sx={{ fontSize: 20 }} />
                      ))}
                  </Box>
                </Stack>
              </ListItemButton>
              {val.isModuleIncluded && (
                <Box>
                  <Collapse in={open}>
                    <List>
                      {val.modules.map((item, index) => (
                        <ListItemButton
                          sx={{
                            px: 5,
                            color:
                              router.pathname === item.url
                                ? COLORS.BLACK
                                : COLORS.WHITE,
                            backgroundColor:
                              router.pathname === item.url
                                ? COLORS.PRIMARY
                                : COLORS.TRANSPARENT,
                            ":hover": {
                              backgroundColor:
                                router.pathname === item.url
                                  ? COLORS.PRIMARY
                                  : COLORS.TRANSPARENT,
                            },
                          }}
                          key={index}
                          onClick={() => handleNavigation(item)}
                        >
                          {/* <ListItemAvatar>
                          <item.icon />
                        </ListItemAvatar> */}
                          <ListItemText
                            primary={
                              <Typography
                                sx={{ fontSize: 13, fontFamily: roboto.style }}
                              >
                                {item.label}
                              </Typography>
                            }
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              )}
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
