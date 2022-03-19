import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// NB: Chakra gives you access to `colorMode` and `theme` in `props`
export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("#F7F6EB", "#4A4F4E")(props),
        lineHeight: "base",
      },
    }),
  },
});
