import { Box, Container } from "@mui/material";

function LoginPage() {
  return (
    <div>
      <Container maxWidth="sm" sx={{ padding: 0 }}>
        <Box
          marginTop={10}
          sx={{
            padding: {
              xs: "16px",
              md: 8,
            },
            border: "1px solid",
            borderRadius: "10px",
          }}
        >
          <LoginForm />
        </Box>
      </Container>
    </div>
  );
}

export default LoginPage;
