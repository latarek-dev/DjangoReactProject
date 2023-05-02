import { useState } from "react";
import {
  Stack,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSignUpForm } from "../../hooks/forms/useSignUpForm";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  const { register, handleSubmit, errors } = useSignUpForm();

  return (
    <>
      <Box noValidate component="form">
        <Stack spacing={4} marginTop={6}>
          <TextField
            {...register("login")}
            autoComplete="username"
            label="Username"
            error={!!errors.login}
          />
          <TextField
            {...register("password")}
            autoComplete="password"
            label="Password"
            error={!!errors.password}
            type={showPassword ? "text" : "password"}
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
            autoComplete="repeatPassword"
            label="Repeat Password"
            error={!!errors.repeatPassword}
            type={showRepPassword ? "text" : "password"}
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
            <Button variant="contained">Sign Up</Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
