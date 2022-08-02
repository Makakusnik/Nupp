import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import { NavigationBar } from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <NavigationBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
