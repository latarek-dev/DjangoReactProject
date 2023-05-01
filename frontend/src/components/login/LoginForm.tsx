import { useState } from "react";
import { useLoginForm } from "../../hooks/forms/useLoginForm";
import {
  Link,
  Stack,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, errors } = useLoginForm();

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
            autoComplete="current-password"
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
          <Box alignSelf="center">
            <Button variant="contained">Login</Button>
          </Box>
          <Stack sx={{ my: 2 }}>
            <Link component="button" variant="subtitle1">
              <Typography></Typography>
            </Link>
            <Link component="button" variant="subtitle1">
              I don&apos;t remember my password
            </Link>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
