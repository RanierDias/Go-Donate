import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext/UserContextInitial";

const ProtectRoute = () => {
  const { user } = useContext(UserContext);
  console.log(user)

  if (user == null) {
    return <Navigate to="/" />;
  }
  return user ? <Outlet /> : null;
};

export default ProtectRoute;
