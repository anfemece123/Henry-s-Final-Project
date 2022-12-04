import { createBrowserRouter } from "react-router-dom";
import Home from "../../User/Views/Home";
import Landing from "../../User/Views/Landing";
import ErrorPage from "./errorPage";
import { FormCreate } from "../../User/Views/FormCreate/FormCreate.jsx";
import Detail from "../../User/Views/Details";
import LogIn from "../../User/Views/logIn/LogIn";
import { ForrmRegister } from "../../User/Views/FormRegister/FormRegister";
import { Cart } from "../../User/Views/Cart/Cart";
import CheckoutForm from "../../Stripe/checkoutForm";
import Welcome from "../../User/Views/Welcome";

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

  {
    path: "/pasarelaTest",
    element: <CheckoutForm />,
  },

  {
    path: "/confirm/:confirmationCode",
    element: <Welcome />,
  },
]);

export default router;
