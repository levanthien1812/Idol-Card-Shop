import React from "react";
import SignupForm from "./pages/SignUp/SignupForm";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/Login/LoginForm";
import About from "./pages/About/About";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Products from "./pages/Products/Products";
import AppRoot from "./components/AppRoot";
import DetailProduct from "./pages/Products/DetailProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppRoot />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'login',
          element: <LoginForm />,
        },
        {
          path: 'signup',
          element: <SignupForm />,
        },
        {
          path: 'forgotpassword',
          element: <ForgotPassword />,
        },
        {
          path: 'products',
          children: [
            {
              index: true,
              element: <Products />
            },
            {
              path: ':id',
              element: <DetailProduct/>
            }
          ]
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
