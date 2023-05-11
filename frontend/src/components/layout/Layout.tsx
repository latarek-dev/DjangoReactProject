import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppHeader from "./app-header/AppHeader";
import { Box, Grid, styled } from "@mui/material";

export default function Layout() {
  return (
    <StyledGrid container>
      <AppHeader />
      <Box sx={{ width: "100%" }}>
        <ToastContainer />
        <Outlet />
      </Box>
    </StyledGrid>
  );
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  height: "100%",
  minHeight: "100vh",
  width: "100%",
  boxSizing: "border-box",
  padding: "1rem 10rem",
  display: "flex",
  alignItems: "flex-start",
}));
