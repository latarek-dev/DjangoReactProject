import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

export default function Header() {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <Link to="/">
            <h5>DJANGOREACT</h5>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/maps">Maps</Link>
            </li>
          </ul>
        </div>
        <Stack direction="row" spacing={4} sx={{ pr: 2 }}>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </Stack>
      </div>
    </Stack>
  );
}
