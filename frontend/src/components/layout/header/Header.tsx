import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

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
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
