import { Navigate, Outlet } from "react-router-dom";

import { isAuthenticatedSelector } from "~/user/store/selectors/auth";
import { useSelector } from "react-redux";

export default function PrivateAdminRoute() {
  const isAuth = useSelector(isAuthenticatedSelector);

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
