import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ redirectPath = "/login" }) {
  const { currentUser } = useSelector((state) => state.user);
  if (!currentUser) return <Navigate to={redirectPath} />;
  return currentUser.isAdmin ? <Outlet /> : <Navigate to={redirectPath} />;
}
