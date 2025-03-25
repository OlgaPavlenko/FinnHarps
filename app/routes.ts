import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Main/Main.tsx"),
  route("login", "routes/Login/Login.tsx"),
  route("registration", "routes/SignUp/SignUp.tsx"),
  route("about", "routes/About/About.tsx"),
  route("contact", "routes/Contact/Contact.tsx"),
  route("application", "routes/UserRouts/Application.tsx"),
] satisfies RouteConfig;
