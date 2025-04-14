import { DesignationData, DesignationTableHeader } from "@/assets/designations";
import { COLORS } from "@/utils/enum";
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
import CustomChip from "../CustomChip";

const DesignationTable = () => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: COLORS.TABLE_HEADER_COLOR }}>
            <TableRow>
              {DesignationTableHeader.map((val, i) => (
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
            {DesignationData.map((val, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontFamily: roboto.style,
                      color: COLORS.WHITE,
                    }}
                  >
                    {val.designation}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontFamily: roboto.style,
                      color: COLORS.WHITE,
                    }}
                  >
                    {val.departmentName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontFamily: roboto.style,
                      color: COLORS.WHITE,
                    }}
                  >
                    {val.employees}
                  </Typography>
                </TableCell>
                <TableCell>
                  <CustomChip label={val.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DesignationTable;
