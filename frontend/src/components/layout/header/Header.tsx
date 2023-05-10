import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { Stack } from "@mui/material";

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={["container", styles.container].join(" ")}>
        <div className={styles.logo}>
          <NavLink to="/">
            <h5>DJANGOREACT</h5>
          </NavLink>
        </div>
        <div className={styles.navigation}>
          <ul>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/maps">Maps</NavLink>
            </li>
          </ul>
        </div>
        <Stack direction="row" spacing={4} sx={{ pr: 2 }}>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </Stack>
      </div>
    </header>
  );
}
