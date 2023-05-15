import { Stack, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ActionButton from "../../shared/ActionButton";
import { MAIN_ROUTES } from "../../../routes/routes-config";
import { useAuthContext } from "../../../context/AuthContext";

export default function AppHeader() {
  const navigate = useNavigate();

  const { user, logout } = useAuthContext();

  return (
    <StyledStack>
      <Link to="/" style={{ textDecoration: "none" }}>
        <StyledLogo>DJANGOREACT</StyledLogo>
      </Link>
      <Stack direction={"row"} spacing={4}>
        {user && (
          <>
            <ActionButton
              actionText="Account"
              onClickAction={() => navigate(MAIN_ROUTES.ACCOUNT)}
            />
            <ActionButton
              actionText="Notes"
              onClickAction={() => navigate(MAIN_ROUTES.NOTES)}
            />
            <ActionButton actionText="Log out" onClickAction={logout} />
          </>
        )}
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
