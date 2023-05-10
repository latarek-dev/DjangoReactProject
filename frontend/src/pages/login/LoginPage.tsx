import { Box, Container } from "@mui/material";
import LoginForm from "../../components/login/LoginForm";

function LoginPage() {
  return (
    <Container maxWidth="sm" sx={{ padding: 0 }}>
      <Box
        marginTop={10}
        sx={{
          display: "flex",
          width: "100%",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <LoginForm />
      </Box>
    </Container>
  );
}

export default LoginPage;