import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { Box } from "@mui/material";

export default function Layout({ isProtected }: { isProtected?: boolean }) {
  return (
    <Grid container sx={{ height: "100%", width: "100%", margin: "0 auto" }}>
      <Box>
        <Header />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Grid>
  );
}
