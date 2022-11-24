import { createBrowserRouter } from "react-router-dom";
import Home from "../../User/Views/Home";
import Landing from "../../User/Views/Landing";
import ErrorPage from "./errorPage";
import { FormCreate } from "../../User/Views/FormCreate/FormCreate.jsx";
import Detail from "../../User/Views/Details";

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
    path: "/detail/:id",
    element: <Detail />,
  },
]);

export default router;
