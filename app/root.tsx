import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import React, { ReactNode } from "react";
import styles from "./src/global.css";
import errorstyles from "./src/error.css";

export const meta: MetaFunction = () => {
  return [
    {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      themeColor: "#091B43",
      description: "Julekalender for stillesittende kontor-nisser",
      title: "Julekalder'n",
    },
  ];
};
export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: errorstyles },
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
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

export default function Document(props: { children: ReactNode; title: string }) {
  return (
    <html lang="nb">
      <head>
        {props.title ? <title>{props.title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {props.children}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const [visError, setVisError] = React.useState(false);
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document title="Oh no!">
        <div className={"flex"}>
          <h1>
            {error.status}: {error.status === 404 ? "Jul not found 🎃" : error.statusText}
          </h1>
        </div>
      </Document>
    );
  } else if (error instanceof Error) {
    return (
      <Document title="Oh no!">
        <div className={"flex"}>
          <div className={"bomb"}>💣💥</div>
          <h1>A very very critical error has occured</h1>
          <button className={"confirm"} onClick={() => setVisError(true)}>
            Ok, I guess?
          </button>
          {visError && <p>{error.message}</p>}
        </div>
      </Document>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

/*
*   return (
    <Document title="Oh no!">
      <ChakraProvider theme={theme}>
        <Flex flexDirection={"column"} alignItems={"center"} marginTop="2rem">
          <Box fontSize="2rem">💣💥</Box>

          <Heading as="h1">A very very critical error has occured</Heading>

          <Button bg="lightgray" color="black" onClick={() => setVisError(true)} marginY="2rem">
            Ok, I guess?
          </Button>
          {visError && (
            <Box as="p" fontSize="1.5rem">
              {error.message}
            </Box>
          )}
        </Flex>
      </ChakraProvider>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title="Oh no!">
      <ChakraProvider theme={theme}>
        <Center h="10rem">
          <Heading as="h1">
            {caught.status}: {caught.status === 404 ? "Jul not found 🎃" : caught.statusText}{" "}
          </Heading>
        </Center>
      </ChakraProvider>
    </Document>
  );
*/
