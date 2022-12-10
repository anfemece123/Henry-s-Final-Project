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
// import Login from "../../Admin/Views/auth/Login";
// import Register from "../../Admin/Views/auth/Register";
import Profile from "../../Admin/Views/Profile";
// import Auth from "../../Admin/layouts/Auth";
import { Cart } from "../../User/Views/Cart/Cart";
import CheckoutForm from "../../Stripe/checkoutForm";
import Welcome from "../../User/Views/Welcome";
import { FormEditProduct } from "../../Admin/Views/FormEditProduct/FormEditProduct";
import { FormEditUser } from "../../Admin/Views/FormEditUser/FormEditUser";
import PurchaseHistory from "../../User/Features/PurchaseHistory";
import ReviewSystem from "../../User/Views/Rating/ReviewSystem";
import RatingSystem from "../../User/Views/Rating/RatingSystem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
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

  // {
  //   path: "/auth",
  //   element: <Auth />,
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
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
    path: "/confirm/:confirmationCode",
    element: <Welcome />,
  },
  {
    path: "/pruebas",
    element: <Settings />,
  },
  {
    path: "/formEditProduct",
    element: <FormEditProduct />,
  },
  {
    path: "/formEditUser",
    element: <FormEditUser />,
  },
  {
    path: "/purchaseHistory/:id",
    element: <PurchaseHistory />,
  },
  {
    path: "/createReview/:id",
    element: <RatingSystem />,
  },
]);

export default router;
