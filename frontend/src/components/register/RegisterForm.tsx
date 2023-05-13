import { useState } from "react";
import {
  Stack,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Typography,
  styled,
  Link,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import ActionButton from "../shared/ActionButton";
import { useRegisterForm } from "../../hooks/forms/useRegisterForm";
import { MAIN_ROUTES } from "../../routes/routes-config";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  const { register, onSubmit, errors } = useRegisterForm();

  return (
    <>
      <Box
        noValidate
        component="form"
        onSubmit={onSubmit}
        sx={{ width: "90%" }}
      >
        <StyledTypo>Sign Up</StyledTypo>
        <Stack spacing={4} marginTop={6}>
          <TextField
            {...register("username")}
            autoComplete="username"
            label="Username"
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            {...register("email")}
            autoComplete="Email"
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            {...register("password")}
            autoComplete="current-password"
            label="Password"
            error={!!errors.password}
            type={showPassword ? "text" : "password"}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            {...register("confirm_password")}
            autoComplete="confirm_password"
            label="Confirm Password"
            error={!!errors.confirm_password}
            type={showRepPassword ? "text" : "password"}
            helperText={errors.confirm_password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={() => setShowRepPassword(!showRepPassword)}
                  >
                    {showRepPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box alignSelf="center">
            <ActionButton actionText="Sign Up" variant="contained" />
          </Box>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Already have an account?</Typography>
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => navigate(MAIN_ROUTES.LOGIN)}
              color={"#d8c9bc"}
            >
              Log In!
            </Link>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

const StyledTypo = styled(Typography)({
  fontSize: "3rem",
  display: "flex",
  fontWeight: "600",
  justifyContent: "center",
});
