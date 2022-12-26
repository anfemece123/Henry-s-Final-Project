import { createBrowserRouter } from "react-router-dom";
import Home from "../../User/Views/Home";
import Landing from "../../User/Views/Landing";
import ErrorPage from "./errorPage";
import { FormCreate } from "../../User/Views/FormCreate/FormCreate.jsx";
import Detail from "../../User/Views/Details";
import LogIn from "../../User/Views/logIn/LogIn";
import { ForrmRegister } from "../../User/Views/FormRegister/FormRegister";

// import Login from "../../Admin/Views/auth/Login";
// import Register from "../../Admin/Views/auth/Register";
// import Profile from "../../Admin/Views/Profile";
// import Auth from "../../Admin/layouts/Auth";
import { Cart } from "../../User/Views/Cart/Cart";
import CheckoutForm from "../../Stripe/checkoutForm";
import Welcome from "../../User/Views/Welcome";
import { FormEditProduct } from "../../Admin/Views/FormEditProduct/FormEditProduct";
import { FormEditUser } from "../../Admin/Views/FormEditUser/FormEditUser";
import PurchaseHistory from "../../User/Features/PurchaseHistory";
import RatingSystem from "../../User/Views/Rating/RatingSystem";
import AdminContainer from "../../Admin/Views/Container/AdminContainer";
import Profile from "../../User/Views/Profile";

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
    path: "/admin",
    element: <AdminContainer />,
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
