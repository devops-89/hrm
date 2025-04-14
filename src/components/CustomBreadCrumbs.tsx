import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { BREADCRUMBS_PROPS } from "@/utils/types";
import { NavigateNextOutlined } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const PageBreadCrumbs = ({ data }: BREADCRUMBS_PROPS) => {
  return (
    <div>
      <Breadcrumbs
        separator={<NavigateNextOutlined sx={{ color: COLORS.WHITE }} />}
      >
        {data.map((val, i) =>
          val.url ? (
            <Link href={val.url} key={i}>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: roboto.style,
                  color: COLORS.WHITE,
                }}
              >
                {val.label}
              </Typography>
            </Link>
          ) : (
            <Typography
              key={i}
              sx={{
                fontSize: 14,
                fontFamily: roboto.style,
                color: COLORS.WHITE,
              }}
            >
              {val.label}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </div>
  );
};

export default PageBreadCrumbs;
