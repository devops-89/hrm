import * as Yup from "yup";
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

export const addDepartmentValidation = Yup.object().shape({
  department: Yup.string().required("Please Enter Department Name"),
  status: Yup.string().required("Please Select Status"),
});
