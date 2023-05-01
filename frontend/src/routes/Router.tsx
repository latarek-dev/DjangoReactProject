import Layout from "../components/layout/Layout";
import HomePage from "../pages/home/HomePage";

import { useRoutes } from "react-router-dom";

import { PROJECT_ROUTES } from "./routes-config";
import SignUp from "../pages/account/SignUp";
import LoginPage from "../pages/login/LoginPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: PROJECT_ROUTES.MAIN,
          element: <HomePage />,
        },
        {
          path: PROJECT_ROUTES.SIGNUP,
          element: <SignUp />,
        },
        {
          path: PROJECT_ROUTES.LOGIN,
          element: <LoginPage />,
        },
      ],
    },
  ]);
}
