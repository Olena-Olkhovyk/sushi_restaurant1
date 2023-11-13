import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import Checkout from "./pages/Checkout";
import App from "./App";
import NotFound from "./Components/NotFoundBlock";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ItemDetail from "./pages/ItemDetail";
import WelcomePage from "./Components/WelcomePage/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        element: <WelcomePage />,
        index: true,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/sushi/:id",
        element: <ItemDetail />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
