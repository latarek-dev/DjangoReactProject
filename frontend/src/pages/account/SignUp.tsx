import { Box, Container } from "@mui/material";
import SignUpForm from "../../components/account/SignUpForm";

function LoginPage() {
  return (
    <div>
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
          <SignUpForm />
        </Box>
      </Container>
    </div>
  );
}

export default LoginPage;
