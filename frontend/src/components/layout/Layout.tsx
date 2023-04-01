import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function Layout() {
  return (
    <Grid container sx={{ height: "100%", margin: "0 auto" }}>
      <Grid item flexDirection="column" xs={10} sx={{ pl: 4, pr: 4 }}>
        <Grid>
          <Header />
        </Grid>
        <Grid paddingBottom={4}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
}
