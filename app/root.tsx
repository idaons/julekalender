import { Outlet, Meta, Links, LiveReload, Scripts, ScrollRestoration } from "@remix-run/react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { GlobalStyles } from "./src/theme";
import styles from "~/src/global.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  themeColor: "#091B43",
  description: "Julekalender for stillesittende kontor-nisser",
  title: "Julekalder'n",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Root() {
  return (
    <html lang="no">
      <head>
        <Meta />
        <Links />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet" />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <div id="root">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}

export type ErrorBoundaryProps = {
  error: {
    message: String;
    stack: String;
  };
};
export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  return (
    <html>
      <head>
        <title>Oh no!</title>
      </head>
      <body>
        <p>A very very critical error has occured</p>
        <button>Ok, I guess?</button>
      </body>
    </html>
  );
}
