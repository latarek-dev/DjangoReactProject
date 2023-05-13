import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppHeader from "./app-header/AppHeader";
import { Box, Grid, styled } from "@mui/material";

export default function Layout() {
  return (
    <StyledGrid container sx={{ marginX: "auto" }}>
      <AppHeader />
      <Box component="main" sx={{ width: "100%" }}>
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
  width: "calc(100%) - 200px",
  boxSizing: "border-box",
  padding: "2rem 10rem",
  marginX: "auto 2rem",
  display: "flex",
  alignItems: "flex-start",
}));
