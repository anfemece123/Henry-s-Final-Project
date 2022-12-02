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
import Profile from "../../Admin/Views/Profile";
import Auth from "../../Admin/layouts/Auth";
import { Cart } from "../../User/Views/Cart/Cart";
import CheckoutForm from "../../Stripe/checkoutForm";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
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
  {
    path: "/cart",
    element: <Cart />,
  },

  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
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
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/pasarelaTest",
    element: <CheckoutForm />,
  },
  {
    path: "/Pruebas",
    element: <Dashboard />,
  },
]);

export default router;
