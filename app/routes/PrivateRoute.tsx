import { Navigate, Outlet } from "react-router-dom";

// Функция для проверки авторизации (замените на вашу логику)
const useAuth = () => {
  const user = localStorage.getItem("user"); // Проверяем наличие пользователя
  // return user ? true : false;
  return true;
};

export default function PrivateRoute() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
}
