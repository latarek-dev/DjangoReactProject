import { Box } from "@mui/material";
import { StyledBox } from "../login/LoginPage";
import RegisterForm from "../../components/register/RegisterForm";

export default function RegisterPage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <StyledBox>
        <RegisterForm />
      </StyledBox>
    </Box>
  );
}
