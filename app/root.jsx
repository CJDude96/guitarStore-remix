import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

export function meta() {
  return [{ title: "GuitarStore - Remix" }];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <h1 className="error">
          {error.status} {error.statusText}
        </h1>
        <Link className="error-enlace" to="/">Volver a inicio</Link>
      </Document>
    );
  } else if(error instanceof Error){
    return (
      <Document>
        <p className="error">{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
        <Link className="error-enlace" to="/">Volver a inicio</Link>
      </Document>
    );
  } else {
    return <Document>Unknown Error</Document>;
  }
}
