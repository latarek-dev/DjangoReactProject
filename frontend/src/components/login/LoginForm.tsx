import { useState } from "react";
import { useLoginForm } from "../../hooks/forms/useLoginForm";
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
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTES } from "../../routes/routes-config";

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, errors } = useLoginForm();

  const { mutate } = useLoginQuery();

  return (
    <>
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit((data) => mutate(data))}
        sx={{ width: "80%" }}
      >
        <StyledTypo>Login</StyledTypo>
        <Stack spacing={4} marginTop={6}>
          <TextField
            {...register("username")}
            autoComplete="username"
            label="Username"
            error={!!errors.username}
            helperText={errors.username?.message}
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
          <Box alignSelf="center">
            <ActionButton actionText="Login" variant="contained" />
          </Box>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Don&apos;t have an account?</Typography>
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => navigate(MAIN_ROUTES.SIGNUP)}
              color={"#d8c9bc"}
            >
              Sign Up!
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
