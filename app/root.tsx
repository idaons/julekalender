import { Outlet, Meta, Links, LiveReload, Scripts, ScrollRestoration } from "@remix-run/react";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import styles from "~/src/global.css";
import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { ServerStyleContext, ClientStyleContext } from "./context";
import { theme } from "~/theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  themeColor: "#091B43",
  description: "Julekalender for stillesittende kontor-nisser",
  title: "Julekalder'n",
});

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/logo192.png" },
    { rel: "manifest", href: "/manifest.json" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { href: "https://fonts.googleapis.com/css2?family=Baloo+Da+2&display=swap", rel: "stylesheet" },
    { href: "https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap", rel: "stylesheet" },
  ];
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(({ children }: DocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      (emotionCache.sheet as any)._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData?.reset();
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style key={key} data-emotion={`${key} ${ids.join(" ")}`} dangerouslySetInnerHTML={{ __html: css }} />
        ))}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});
export default function Root() {
  return (
    <Document>
      <ChakraProvider resetCSS={false} theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}

export type ErrorBoundaryProps = {
  error: {
    message: String;
    stack: String;
  };
};
export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  const [visError, setVisError] = React.useState(false);
  console.log(visError);
  return (
    <html>
      <head>
        <title>Oh no!</title>
      </head>
      <body>
        <p>A very very critical error has occured</p>
        <button onClick={() => setVisError(true)}>Ok, I guess?</button>
        <p>{error.message}</p>
        {visError && <p>{error.message}</p>}
      </body>
    </html>
  );
}
