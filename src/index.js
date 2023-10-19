import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Import storage with all data
import { store } from "./redux/store";
//Import provider which allows react know about redux-toolkit
import { Provider } from "react-redux";

import App from "./App";
import NotFound from "./Components/NotFoundBlock";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
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
        element: <Home />,
        index: true,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
