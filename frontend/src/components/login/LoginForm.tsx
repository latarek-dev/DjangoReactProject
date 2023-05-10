import { useState } from "react";
import { useLoginForm } from "../../hooks/forms/useLoginForm";
import {
  Stack,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";

import { useLoginQuery } from "../../query-hooks/useLoginQuery";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, errors } = useLoginForm();

  const { mutate } = useLoginQuery();

  return (
    <>
      <Box
        noValidate
        component="form"
        onSubmit={handleSubmit((data) => mutate(data))}
      >
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
            <Button>Login</Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
