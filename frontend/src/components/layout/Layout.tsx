import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { Box, Grid } from "@mui/material";
import { ToastContainer } from "react-toastify";

export default function Layout({ isProtected }: { isProtected?: boolean }) {
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
      <Header />
      <Box sx={{ width: "100%" }}>
        <ToastContainer />
        <Outlet />
      </Box>
    </Grid>
  );
}
