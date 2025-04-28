import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Main/Main.tsx"),
  route("login", "routes/Login/Login.tsx"),
  route("registration", "routes/SignUp/SignUp.tsx"),
  route("about", "routes/About/About.tsx"),
  route("contact", "routes/Contact/Contact.tsx"),

  // Приватный маршрут с использованием PrivateRoute
  route("user", "routes/PrivateUserRoute.tsx", [
    route("", "routes/UserRouts/Application.tsx"),
  ]),
  route("admin", "routes/PrivateAdminRoute.tsx", [
    route("", "routes/AdminRouts/AdminPage.tsx"),
    route("users", "routes/AdminRouts/Users/Users.tsx"),
  ]),
] satisfies RouteConfig;
