import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ redirect = "/login" }) => {
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />
};

export default ProtectedRoutes
