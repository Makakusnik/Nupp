import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato";

const theme = extendTheme({
  fonts: {
    heading: `'Lato', 'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
