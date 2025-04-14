import { data } from "@/assets/data";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import moment from "moment";
import React from "react";

const CardTable = () => {
  return (
    <div>
      <Card sx={{ p: 3, backgroundColor: COLORS.BLACK }}>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: roboto.style,
            fontWeight: 550,
            color: COLORS.WHITE,
          }}
        >
          Meeting Schedule
        </Typography>
        <Table sx={{ mt: 2 }}>
          <TableHead sx={{ backgroundColor: COLORS.TABLE_HEADER_COLOR }}>
            <TableRow>
              {data.meetingDataHeader.map((val, i) => (
                <TableCell key={i}>
                  <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                    {val.label}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.meetingTableData.map((val, i) => (
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontFamily: roboto.style,
                      color: COLORS.WHITE,
                    }}
                  >
                    {val.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontFamily: roboto.style,
                      color: COLORS.WHITE,
                    }}
                  >
                    {moment.unix(val.date).format("DD-MM-YYYY")}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontFamily: roboto.style,
                      color: COLORS.WHITE,
                    }}
                  >
                    {val.time}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default CardTable;
