import * as React from "react";
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Header from "./components/Header";
import {
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Container from "./components/Container";

export const router = createBrowserRouter([
  {
    path: "/",
      element: (<><Header /><Container/></>),
  },
  {
    path: "/SignIn",
    element: (<><Header /><SignIn/></>),
  },
  {
    path: "/SignUp",
    element: (<><Header /><SignUp/></>),
  },
]);