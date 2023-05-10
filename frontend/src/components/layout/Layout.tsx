import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppHeader from "./app-header/AppHeader";
import { Box, Grid } from "@mui/material";

export default function Layout() {
  return (
    <Grid
      container
      sx={{
        height: "100%",
        width: "100%",
        margin: "0 auto",
        display: "flex",
      }}
    >
      <AppHeader />
      <Box sx={{ width: "100%" }}>
        <ToastContainer />
        <Outlet />
      </Box>
    </Grid>
  );
}
