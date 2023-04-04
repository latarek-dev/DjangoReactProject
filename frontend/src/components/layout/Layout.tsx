import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "../shared/Sidebar";

export default function Layout() {
  return (
    <Grid container sx={{ height: "100%", width: "100%", margin: "0 auto" }}>
      <Grid item sx={{ width: "100%" }}>
        <Grid sx={{ width: "100%" }}>
          <Header />
          <Sidebar />
        </Grid>
        <Grid paddingBottom={4} sx={{ width: "100%" }}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
}
