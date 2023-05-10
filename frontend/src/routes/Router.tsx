import { useRoutes } from "react-router-dom";

import { MAIN_ROUTES } from "./routes-config";
import Layout from "../components/layout/Layout";
import LoginPage from "../pages/login/LoginPage";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: MAIN_ROUTES.LOGIN,
          element: <LoginPage />,
        },
      ],
    },
  ]);
}

export default Router;
