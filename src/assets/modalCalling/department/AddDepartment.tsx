import { data } from "@/assets/data";
import { hideModal } from "@/redux/reducers/modal";
import { COLORS, USER_STATUS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { loginTextField, loginWhiteTextField } from "@/utils/styles";
import { addDepartmentValidation } from "@/utils/validationSchema";
import { Close } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";

const AddDepartment = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState<{ label: string } | null>(null);
  const formik = useFormik({
    initialValues: {
      department: "",
      status: "",
    },
    validationSchema: addDepartmentValidation,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const statusChangeHandler = (
    e: SyntheticEvent,
    newValue: { label: string } | null
  ) => {
    setStatus(newValue);
    if (newValue) {
      formik.setFieldValue("status", newValue?.label);
    }
  };

  //   console.log("fromfrofr",formik)
  const closeModal = () => {
    dispatch(hideModal());
  };
  return (
    <Box sx={{ width: 350 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontFamily: roboto.style,
            fontWeight: "semi-bold",
            color: COLORS.WHITE,
          }}
        >
          Add Department
        </Typography>
        <IconButton onClick={closeModal}>
          <Close sx={{ color: COLORS.WHITE }} />
        </IconButton>
      </Stack>
      <Divider sx={{ borderColor: COLORS.WHITE }} />
      <Box sx={{ mt: 2 }}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              sx={{ ...loginWhiteTextField }}
              label="Department Name"
              fullWidth
              id="department"
              onChange={formik.handleChange}
              error={
                formik.touched.department && Boolean(formik.errors.department)
              }
              helperText={formik.touched.department && formik.errors.department}
              onBlur={formik.handleBlur}
              name="department"
            />
            <Autocomplete
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=" Status"
                  sx={{
                    ...loginWhiteTextField,
                    "& .MuiSvgIcon-root": {
                      fill: COLORS.WHITE,
                    },
                  }}
                  id="status"
                  error={formik.touched.status && Boolean(formik.errors.status)}
                  helperText={formik.touched.status && formik.errors.status}
                />
              )}
              options={data.statusArray}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component={"li"} {...props}>
                  <Typography sx={{ fontSize: 14, fontFamily: roboto.style }}>
                    {option.label}
                  </Typography>
                </Box>
              )}
              onChange={statusChangeHandler}
            />
            <Button
              sx={{
                backgroundColor: COLORS.PRIMARY,
                fontSize: 15,
                fontFamily: roboto.style,
                color: COLORS.BLACK,
              }}
              type="submit"
            >
              Add Department
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default AddDepartment;
