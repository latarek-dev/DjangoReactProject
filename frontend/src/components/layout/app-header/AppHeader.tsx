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
      <Stack direction={"row"} spacing={4}>
        <ActionButton
          actionText="About Us"
          onClickAction={() => navigate(MAIN_ROUTES.LOGIN)}
        />
        <ActionButton
          actionText="Notes"
          onClickAction={() => navigate(MAIN_ROUTES.NOTES)}
        />
      </Stack>
    </StyledStack>
  );
}

const StyledStack = styled(Stack)({
  padding: "1rem",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
});

const StyledLogo = styled("h2")(({ theme }) => ({
  color: `${theme.palette.primary.light}`,
  textDecoration: "none",
}));
