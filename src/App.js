import React from "react";
import SignupForm from "./pages/SignUp/SignupForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/Login/LoginForm";
import About from "./pages/About/About";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Products from "./pages/Products/Products";
import AppRoot from "./components/AppRoot";
import DetailProduct from "./pages/Products/DetailProduct";
import Order from "./pages/Order/Order";
import Receipt from "./pages/Receipt/Receipt";
import { Provider } from "react-redux";
import store from "./stores/store";
import { createTheme, ThemeProvider } from "@mui/material";
import OrderSuccess from "./pages/Order/OrderSuccess";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand, sans-serif",
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppRoot />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "login",
          element: <LoginForm />,
        },
        {
          path: "signup",
          element: <SignupForm />,
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "products",
          children: [
            {
              index: true,
              element: <Products />,
            },
            {
              path: ":id",
              children: [
                {
                  index: true,
                  element: <DetailProduct />,
                },
              ],
            },
          ],
        },
        {
          path: "orders",
          element: <Order />,
        },
        {
          path: "order-list/:id",
          element: <OrderSuccess />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
