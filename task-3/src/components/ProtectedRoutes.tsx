import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute() {
  const userInformation = localStorage.getItem("user");
  const isLoggedIn = userInformation ? JSON.parse(userInformation) : null;

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
