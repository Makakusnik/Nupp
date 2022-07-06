import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/lato";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config: config,
  fonts: {
    heading: `'Lato', 'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
