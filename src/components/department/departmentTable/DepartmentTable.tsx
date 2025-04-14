import { data } from "@/assets/data";
import EditDepartment from "@/assets/modalCalling/department/EditDepartment";
import CustomChip from "@/components/CustomChip";
import { showModal } from "@/redux/reducers/modal";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { DEPARTMENT_TABLE_DATA } from "@/utils/types";
import { DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";

const DepartmentTableData = () => {
  const dispatch = useDispatch();

  const editDepartment = (values: DEPARTMENT_TABLE_DATA) => {
    dispatch(showModal(<EditDepartment values={values} />));
  };
  return (
    <Box sx={{ p: 1 }}>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: COLORS.TABLE_HEADER_COLOR }}>
            <TableRow>
              {data.departmentTableHeader.map((val, i) => (
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.departmentTableData.map((val, i) => (
              <TableRow>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontFamily: roboto.style,
                      color: COLORS.WHITE,
                    }}
                  >
                    {val.name}
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
                <TableCell>
                  <IconButton onClick={() => editDepartment(val)}>
                    <FaRegEdit color={COLORS.WHITE} fontSize={20} />
                  </IconButton>
                  <IconButton>
                    <DeleteOutline sx={{ color: COLORS.WHITE, fontSize: 20 }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DepartmentTableData;
