import { useRoutes } from "react-router-dom";

import { MAIN_ROUTES } from "./routes-config";
import Layout from "../components/layout/Layout";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/homepage/HomePage";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: MAIN_ROUTES.MAIN,
          element: <HomePage />,
        },
        {
          path: MAIN_ROUTES.LOGIN,
          element: <LoginPage />,
        },
      ],
    },
  ]);
}

export default Router;
