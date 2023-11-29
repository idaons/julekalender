import type { StyleFunctionProps } from "@chakra-ui/react";
import { defineStyle, extendTheme, theme as defaultTheme } from "@chakra-ui/react";

const HeadingStyle = defineStyle({
  variants: {
    jul: {
      fontFamily: "'Lobster Two', cursive",
    },
  },
  baseStyle: {},
});

export const theme = extendTheme({
  ...defaultTheme,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: "white",
        backgroundColor: "#424324",
      },
    }),
  },
  components: {
    Heading: HeadingStyle,
  },
});
