import { Navigate, Outlet } from "react-router-dom";
import {
  isAuthenticatedSelector,
  userRoleSelector,
} from "~/user/store/selectors/auth";

import { useSelector } from "react-redux";

export default function PrivateUserRoute() {
  const isAuth = useSelector(isAuthenticatedSelector);
  const role = useSelector(userRoleSelector);

  if (isAuth && role === "admin") {
    return <Outlet />;
  } else {
    <Navigate to="/login" replace />;
  }
}
