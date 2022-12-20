import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// External imports

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./Controllers/Routes/index";
import { store, persistor } from "./Redux/Store/index";
import { PersistGate } from "redux-persist/integration/react";

// Stripe

import stripePromise from "./Stripe/index";
import { Elements } from "@stripe/react-stripe-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </Elements>
    </Provider>
  </PersistGate>
);
