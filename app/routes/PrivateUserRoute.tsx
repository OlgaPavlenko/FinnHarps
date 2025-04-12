import { Navigate, Outlet } from "react-router-dom";

import { isAuthenticatedSelector } from "~/user/store/selectors/auth";
import { useSelector } from "react-redux";

export default function PrivateUserRoute() {
  const isAuth = useSelector(isAuthenticatedSelector);
  // const isAuth = true;

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
