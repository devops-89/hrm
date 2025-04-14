import loginBg from "@/backgroundImage/login_bg.jpg";
import { COLORS } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { loginTextField } from "@/utils/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { loginValidationSchema } from "@/utils/validationSchema";
import { useRouter } from "next/router";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      //   console.log(values);
      // try {
      //   await loginValidationSchema.validate(values, { abortEarly: false });
      //   router.push("/dashboard");
      // } catch (error) {
      //   if (error instanceof Error && "inner" in error) {
      //     (error as any).inner.forEach((e: any) => {
      //       if (e.path) {
      //         formik.setFieldError(e.path, e.message);
      //       }
      //     });
      //   }
      // }
      router.push("/dashboard");
    },
  });

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Grid container>
        <Grid size={8}>
          <Box
            sx={{
              backgroundImage: `url(${loginBg.src})`,
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Grid>
        <Grid size={4}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              height: "100vh",
            }}
          >
            <Container>
              <Typography
                sx={{ fontSize: 30, fontFamily: roboto.style, fontWeight: 550 }}
              >
                Log Into Your{" "}
              </Typography>
              <Typography
                sx={{ fontSize: 30, fontFamily: roboto.style, fontWeight: 550 }}
              >
                Account
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <Stack alignItems={"center"} mt={2} spacing={2}>
                  <TextField
                    sx={{ ...loginTextField }}
                    label="Email"
                    fullWidth
                    id="email"
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    value={formik.values.email}
                    name="email"
                    // onBlur={formik.handleBlur}
                  />
                  <TextField
                    sx={{ ...loginTextField }}
                    label="Password"
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handlePassword}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                    id="password"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <Button
                    sx={{
                      fontFamily: roboto.style,
                      fontSize: 16,
                      color: COLORS.BLACK,
                      border: "1px solid #000000",
                    }}
                    fullWidth
                    type="submit"
                    variant="outlined"
                   
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
