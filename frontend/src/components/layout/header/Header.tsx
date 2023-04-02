import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { AccountCircle } from "@mui/icons-material";

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
              <NavLink to="/">Data</NavLink>
            </li>
            <li>
              <NavLink to="/account">
                <AccountCircle fontSize="medium" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
