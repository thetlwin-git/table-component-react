import React from "react"
import { Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard/index";

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
    { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  ]
  
  export { authProtectedRoutes, publicRoutes }