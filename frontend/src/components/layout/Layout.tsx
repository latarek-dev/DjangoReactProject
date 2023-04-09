import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function Layout() {
  return (
    <Grid container sx={{ height: "100%", width: "100%", margin: "0 auto" }}>
      <Grid item sx={{ width: "100%" }}>
        <Grid sx={{ width: "100%" }}>
          <Header />
        </Grid>
        <Grid paddingBottom={4} sx={{ width: "100%" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
}
