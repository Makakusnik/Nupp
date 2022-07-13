import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/inter/500.css";
import "@fontsource/lato";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const Button = {
  variants: {
    CTA: {
      background:
        "linear-gradient(89.35deg, #4EAF77 -2.89%, #14BCB8 37.7%, #2FEC7E 73.29%, #14E2DE 117.01%)",
      transition: "background 0.2s ease-in-out",
      color: "white",
      backgroundSize: "320px 1px",
      fontWeight: "600",
      _hover: {
        backgroundPosition: "-160px",
      },
    },
  },
};

const theme = extendTheme({
  config: config,
  fonts: {
    heading: `'Lato', 'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button,
  },
});

export default theme;
