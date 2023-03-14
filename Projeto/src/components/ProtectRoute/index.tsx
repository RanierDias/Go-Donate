import { isAxiosError } from "axios";
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext/UserContextInitial";
import { api } from "../../services/api";

const ProtectRoute = () => {
  const token = localStorage.getItem('@TOKEN')

  if (!token) {
    return <Navigate to="/" />;
  }
  
  return <Outlet />
};

export default ProtectRoute;
