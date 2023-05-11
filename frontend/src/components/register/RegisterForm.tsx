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

import { useLoginQuery } from "../../query-hooks/useLoginQuery";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ActionButton from "../shared/ActionButton";
import { useRegisterForm } from "../../hooks/forms/useRegisterForm";
import { MAIN_ROUTES } from "../../routes/routes-config";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  const { register, handleSubmit, errors } = useRegisterForm();

  const { mutate } = useLoginQuery();
  return (
    <>
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit((data) => mutate(data))}
        sx={{ width: "80%" }}
      >
        <StyledTypo>Sign Up</StyledTypo>
        <Stack spacing={4} marginTop={6}>
          <TextField
            {...register("name")}
            autoComplete="name"
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            {...register("login")}
            autoComplete="username"
            label="Username"
            error={!!errors.login}
            helperText={errors.login?.message}
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
            {...register("repeatPassword")}
            autoComplete="current-password"
            label="Password"
            error={!!errors.repeatPassword}
            type={showRepPassword ? "text" : "password"}
            helperText={errors.repeatPassword?.message}
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
              Login!
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
