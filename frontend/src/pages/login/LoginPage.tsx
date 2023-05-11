import { Box, styled } from "@mui/material";
import LoginForm from "../../components/login/LoginForm";

export default function LoginPage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <StyledBox>
        <LoginForm />
      </StyledBox>
    </Box>
  );
}

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "30%",
  backgroundColor: `#fff`,
  padding: "2rem 0",
  borderRadius: "10px",
});
