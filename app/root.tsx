import { Outlet, Meta } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  themeColor: "#091B43",
  description: "Julekalender for stillesittende kontor-nisser",
  title: "Julekalder'n",
});

export default function Root() {
  return (
    <html lang="no">
      <head>
        <Meta />
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
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
      </head>
      <body>{/* add the UI you want your users to see */}</body>
    </html>
  );
}
