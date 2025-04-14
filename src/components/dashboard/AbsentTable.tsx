import { data } from "@/assets/data";
import { ATTENDANCE_STATUS, COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import {
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const AbsentTable = () => {
  return (
    <div>
      <Card sx={{ p: 2, backgroundColor: COLORS.BLACK }}>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: roboto.style,
            fontWeight: 550,
            color: COLORS.WHITE,
          }}
        >
          Absent Today
        </Typography>
        <TableContainer sx={{ mt: 3 }}>
          <Table>
            <TableHead sx={{ backgroundColor: COLORS.TABLE_HEADER_COLOR }}>
              <TableRow>
                {data.absentTableHeader.map((val, i) => (
                  <TableCell key={i}>
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontFamily: roboto.style,
                        fontWeight: 550,
                      }}
                    >
                      {val.label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.absentTableData.map((val, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontFamily: roboto.style,
                        color: COLORS.WHITE,
                      }}
                    >
                      {val.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={
                        <Typography
                          sx={{ fontSize: 15, fontFamily: roboto.style }}
                        >
                          {val.status}
                        </Typography>
                      }
                      sx={{
                        color:
                          val.status === ATTENDANCE_STATUS.ABSENT
                            ? COLORS.RED
                            : COLORS.GREEN_COLOR,
                        backgroundColor:
                          val.status === ATTENDANCE_STATUS.ABSENT
                            ? COLORS.RED_OPACITY
                            : COLORS.GREEN_OPACITY,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default AbsentTable;
