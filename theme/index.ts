import { ComponentMultiStyleConfig, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/inter/500.css";
import "@fontsource/lato";
import { Checkbox } from "./Checkbox";
import { Select } from "./Select";
import { Button } from "./Button";
import { Input } from "./Input";

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
  components: {
    Button,
    Checkbox,
    Select,
    Input,
  },
});


export default theme;
