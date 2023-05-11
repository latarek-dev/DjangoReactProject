import { Box, Stack, Typography, styled } from "@mui/material";
import ActionButton from "../../components/shared/ActionButton";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTES } from "../../routes/routes-config";
import HeroSVG from "../../@assets/blob.svg";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <StyledHero>Django React Web App</StyledHero>
          <StyledTypo>Practical use of python course</StyledTypo>
          <Stack direction={"row"} spacing={4}>
            <ActionButton
              actionText="Login"
              onClickAction={() => navigate(MAIN_ROUTES.LOGIN)}
              variant="contained"
            />
            <ActionButton
              actionText="Sign Up"
              onClickAction={() => navigate(MAIN_ROUTES.LOGIN)}
              variant="outlined"
            />
          </Stack>
        </Box>
        <img src={HeroSVG} height={"700px"} />
      </Stack>
    </Box>
  );
}

const StyledHero = styled("h1")(({ theme }) => ({
  color: `${theme.palette.primary.light}`,
  textDecoration: "none",
  fontSize: "4rem",
  padding: "0",
  margin: "1rem 0",
  fontFamily: "Sans-serif",
}));

const StyledTypo = styled(Typography)({
  fontSize: "2rem",
  margin: "2rem 0",
});
