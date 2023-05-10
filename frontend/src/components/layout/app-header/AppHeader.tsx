import { Stack, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../shared/ActionButton";
import { MAIN_ROUTES } from "../../../routes/routes-config";

export default function AppHeader() {
  const navigate = useNavigate();

  return (
    <StyledStack>
      <Link to="/" style={{ textDecoration: "none" }}>
        <StyledLogo>DJANGOREACT</StyledLogo>
      </Link>
      <ActionButton
        actionText="Blog"
        onClickAction={() => navigate(MAIN_ROUTES.MAIN)}
      />
      <Stack direction={"row"} spacing={4}>
        <ActionButton
          actionText="Login"
          onClickAction={() => navigate(MAIN_ROUTES.LOGIN)}
        />
        <ActionButton
          actionText="Sign Up"
          onClickAction={() => navigate(MAIN_ROUTES.LOGIN)}
          variant="contained"
        />
      </Stack>
    </StyledStack>
  );
}

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: "1rem",
  backgroundColor: `${theme.palette.primary.dark}`,
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
}));

const StyledLogo = styled("h2")(({ theme }) => ({
  color: `${theme.palette.primary.light}`,
  textDecoration: "none",
}));
