import "./app.css";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store";
import styles from "./Root.module.scss";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body suppressHydrationWarning>
          <div className={styles.wrap}>
            <div className={styles.main}>{children}</div>
            <ScrollRestoration />
            <Scripts />
          </div>
        </body>
      </html>
    </Provider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: { error: any }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className={styles.errorContainer}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className={styles.errorStack}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
