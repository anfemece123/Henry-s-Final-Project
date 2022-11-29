import { createBrowserRouter } from "react-router-dom";
import Home from "../../User/Views/Home";
import Landing from "../../User/Views/Landing";
import ErrorPage from "./errorPage";
import { FormCreate } from "../../User/Views/FormCreate/FormCreate.jsx";
import Detail from "../../User/Views/Details";
import LogIn from "../../User/Views/logIn/LogIn";
import { ForrmRegister } from "../../User/Views/FormRegister/FormRegister";
import Dashboard from "../../Admin/Views/admin/Dashboard";
import Maps from "../../Admin/Views/admin/Maps.jsx";
import Settings from "../../Admin/Views/admin/Settings.jsx";
import Tables from "../../Admin/Views/admin/Tables";
import Admin from "../../Admin/layouts/Admin";
import Login from "../../Admin/Views/auth/Login";
import Register from "../../Admin/Views/auth/Register";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/formCreate",
    element: <FormCreate />,
  },
  {
    path: "/formRegister",
    element: <ForrmRegister />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },

  { path: "/auth/login", element: <Login /> },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "maps",
        element: <Maps />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      { path: "tables", element: <Tables /> },
    ],
  },
]);

export default router;
