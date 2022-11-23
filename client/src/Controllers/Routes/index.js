import { createBrowserRouter } from "react-router-dom";
import Home from "../../User/Views/Home";
import Landing from "../../User/Views/Landing";
import ErrorPage from "./errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);

export default router;
