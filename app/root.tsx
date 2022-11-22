import { Box, Button, Center, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from "@remix-run/react";
import React, { useContext, useEffect } from "react";
import styles from "~/src/global.css";
import { theme } from "~/theme";
import { ClientStyleContext, ServerStyleContext } from "./context";

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
  title?: string;
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
    <html lang="no">
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
  return (
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
}
