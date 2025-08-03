// components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("Token inside PrivateRoute:", token === null);
  return token !== null ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
