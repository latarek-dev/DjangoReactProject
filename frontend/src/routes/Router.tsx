import { useRoutes } from "react-router-dom";

import { MAIN_ROUTES } from "./routes-config";
import Layout from "../components/layout/Layout";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/homepage/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import NotesPage from "../pages/notespage/NotesPage";
import AccountPage from "../pages/account/AccountPage";

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
        {
          path: MAIN_ROUTES.SIGNUP,
          element: <RegisterPage />,
        },
        {
          path: MAIN_ROUTES.NOTES,
          element: <NotesPage />,
        },
        {
          path: MAIN_ROUTES.ACCOUNT,
          element: <AccountPage />,
        },
      ],
    },
  ]);
}

export default Router;
